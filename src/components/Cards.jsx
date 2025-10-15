export default function Cards({title, image, price}){
    return(
        <div className="bg-blue-400">
            <h1>{title}</h1>
            <img src={image} alt="imagem de alguma coisa" />
            <p>{price}</p>
        </div>
    )
}