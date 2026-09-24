
import './App.css'
import Card from './components/Cards'
import Tabs from './components/Tabs'
import Imgs from './assets/react.svg'
import Button from './components/Button'
import NavBar from './components/NavBar'
import { useQuery } from '@tanstack/react-query'



function App() {


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
      <NavBar img={Imgs}>
        <Button size='small' variant='danger'>Contact</Button>
        <Button size='small' variant='success'>Pricing</Button>
      </NavBar>
      <section className='px-4 py-2'>
        <Tabs defaultValue='profile'>
          <div className='flex gap-3 items-center justify-center'>
            <Tabs.Trigger value='profile'><p>Profile</p></Tabs.Trigger>
            <Tabs.Trigger value='settings'><p>Settings</p></Tabs.Trigger>
            <Tabs.Trigger value='products'><p>Products</p></Tabs.Trigger>
          </div>
          <Tabs.Content value='profile'>
            <h1>profile</h1>
          </Tabs.Content>
          <Tabs.Content value='settings'>
            <h1>Settings</h1>
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

export default App
