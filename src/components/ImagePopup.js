function ImagePopup(props) {

    return (
        <div
            className={`popup popup_show-image ${props.card && props.isOpenI && "popup_enabled"
                }`}
        >
            <figure className="popup__picture">
                <img
                    className="popup__image"
                    src={props.card && props.card.link}
                    alt=""
                />
                <button
                    onClick={props.onClose}
                    aria-label="кнопка закрыть фотографию места"
                    type="button"
                    className="popup__close-button button-opacity"
                ></button>
                <figcaption className="popup__caption">
                    {props.card && props.card.name}
                </figcaption>
            </figure>
        </div>
    );
}

export default ImagePopup;
