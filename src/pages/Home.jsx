

import Card from '../components/Cards'
import Tabs from '../components/Tabs'

import Button from '../components/Button'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import Input from '../components/Input'
import { useState } from 'react'

function Home() {
  const queryClient = useQueryClient();
  const [form, setForm] = useState({
    'name': '',
    'price': '',
    'des': ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }))
  }



  async function getProducts({ queryKey }) {
    const [, limit] = queryKey;

    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}`
    );

    if (!res.ok) {
      throw new Error("An error occurred while retrieving data.");
    }

    const data = await res.json();

    return data.products;
  }

  async function addProducts(newProduct) {
    const res = await fetch('https://dummyjson.com/products/add', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify(newProduct)
    })

    if (!res.ok) {
      throw new Error("Error")
    }

    return res.json()
  }

  const addProduct = useMutation({
    mutationFn: addProducts,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['products', 100]
      })
    }
  })

  const handleSub = (e) => {
    e.defaultValue();
    addProduct.mutate({ ...form, 'price': Number(form.price) })
  }

  const {
    data: products,
    isPending,
    isError,
    error
  } = useQuery({
    queryKey: ['products', 100],
    queryFn: getProducts
  });

  if (isPending) {
    return (
        
      <div className="flex min-h-75 flex-col items-center justify-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-accent"></div>

        <p className="text-gray-600">
          Data fetching is underway...
        </p>
      </div>
    );
  }
  if (isError) { return <p>{error.message}</p> }

  return (
    <>
      <section className='px-4 py-2'>
        <Tabs defaultValue='profile'>
          <div className='flex gap-3 items-center justify-center'>
            <Tabs.Trigger value='profile'><p>Profile</p></Tabs.Trigger>
            <Tabs.Trigger value='add'><p>Add Products</p></Tabs.Trigger>
            <Tabs.Trigger value='products'><p>Products</p></Tabs.Trigger>
          </div>
          <Tabs.Content value='profile'>
            <h1>profile</h1>
          </Tabs.Content>
          <Tabs.Content value="add">
            <form onSubmit={() => { handleSub }}>
              <Input
                label="Product name"
                value={form.name}
                name='name'
                onChange={() => { handleChange }}
                placeholder="product name"
                type="text"
                required
              />
              <Input />
              <Input
                label="Product Price"
                value={form.price}
                name='price'
                onChange={() => { handleChange }}
                placeholder="product price"
                type="number"
                required
              />
              <Input />
              <Input
                label="Product des"
                value={form.des}
                name='des'
                onChange={() => { handleChange }}
                placeholder="product des"
                type="text"
                required
              />
              <Input />
              <Button type="submit">
                Add product
              </Button>
            </form>
          </Tabs.Content>
          <Tabs.Content value='products'>
            <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-around bg-blue-50 p-4 rounded-2xl'>
              {products.map((product) => (
                <Card key={product.id}>
                  <Card.Image src={product.images[0]}></Card.Image>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Description>{product.description}</Card.Description>
                  <Card.Footer>
                    <Button variant='primary' size='medium'>
                      Buy
                    </Button>
                    <Button variant='success' size='medium'>
                      Details
                    </Button>
                  </Card.Footer>
                </Card>
              ))}
            </section>
          </Tabs.Content>
        </Tabs>
      </section>






    </>
  )
}

export default Home
