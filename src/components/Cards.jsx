
export default function Card({ children }) {
    return (
        <div className="w-full flex flex-col gap-3 items-center px-3 py-5 bg-white shadow-md hover:shadow-lg border rounded-md border-muted">
            {children}
        </div>
    )
}

function CardImage({ src }) {
    return (
        <img className="w-30 rounded-md mb-2" src={src} />
    )
}

function CardTitle({ children }) {
    return (
        <h2 className="font-bold text-center text-primary text-lg">{children}</h2>
    )
}

function CardDes({ children }) {
    return (
        <p className="font-normal text-center text-[#222] text-base">{children}</p>
    )
}

function CardAct({ children }) {
    return <div className='flex gap-2'>{children}</div>;
}


Card.Image = CardImage;
Card.Title = CardTitle;
Card.Description = CardDes;
Card.Footer = CardAct;