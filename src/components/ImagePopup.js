function ImagePopup() {
    return (
        <div className="popup popup_show-image">
            <figure className="popup__picture">
                <img className="popup__image" src="#" alt="" />
                <button
                    aria-label="кнопка закрыть фотографию места"
                    type="button"
                    className="popup__close-button button-opacity"
                ></button>
                <figcaption className="popup__caption">тест</figcaption>
            </figure>
        </div>
    );
}

export default ImagePopup;