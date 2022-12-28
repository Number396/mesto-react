function ImagePopup(props) {
    //if (props.card) {
    console.log(props.card);
    console.log(props.isOpenI);
    console.log(props.onClose);

    /* <div className={`popup popup_show-image ${props.card && props.isOpen ? "popup_enabled" : ""}`}></div> */
    // {props.card && props.card.isOpenI && props.card.link}
    // {props.card ? props.card.name : ""}
    return (
        <div className={`popup popup_show-image ${props.card && props.isOpenI && "popup_enabled"}`}>
            <figure className="popup__picture">
                <img className="popup__image" src={props.card && props.card.link} alt="" />
                <button
                    onClick={props.onClose}
                    aria-label="кнопка закрыть фотографию места"
                    type="button"
                    className="popup__close-button button-opacity"
                ></button>
                <figcaption className="popup__caption">{props.card && props.card.name}</figcaption>
            </figure>
        </div>
    );
    //}
}

export default ImagePopup;