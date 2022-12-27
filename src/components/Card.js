function Card(props) {
    // console.log(props.card._id);
    return (
        <li className="cards__item">
            <img className="cards__image" src={props.card.link} />
            <button
                aria-label="кнопка удалить карточку места"
                type="button"
                className="cards__trash-button-icon button-opacity"
            ></button>
            <div className="cards__description">
                <h2 className="cards__title">{props.card.name}</h2>
                <div className="cards__like-section">
                    <button
                        aria-label="кнопка нравится"
                        type="button"
                        className="cards__like-button-icon"
                    ></button>
                    <p className="cards__like-counter">{props.card.likes.length}</p>
                </div>
            </div>
        </li>
    );
}

export default Card;