import "./Card.css"
const Card = () => {

    const cardData = [
        {
            title: "Card  1",
            textCard: "Este é meu primeiro Card",
            link: "#"  
        },
        {
            title: "Card  2",
            textCard: "Este é meu segundo Card",
            link: "#"  
        },
        {
            title: "Card  3",
            textCard: "Este é meu terceiro Card",
            link: "#"  
        },
    ];

    console.log(cardData);
    return(
        
        <div className="card-container">

        {cardData.map((card,index) => {
            return(

                <div className="card" key={index}>
                    <h2>{card.title}</h2>
                    <p>{card.textCard}</p>
                    <a href={card.link}>Saiba mais</a>
                </div>
            )
        })}

        </div>
    )
}
export default Card;
