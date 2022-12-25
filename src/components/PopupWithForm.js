function PopupWithForm(props) {
    return (
        <div
            className={`popup popup_type_${props.name} ${props.isOpen && "popup_enabled"
                }`}
        >
            <div className="popup__container">
                <button
                    onClick={props.closeAllPopups}
                    aria-label="кнопка закрыть"
                    type="button"
                    className="popup__close-button button-opacity"
                ></button>
                <h2 className="popup__title">{props.title}</h2>
                <form name={props.name} className="popup__form" noValidate onClick={props.closeAllPopups}>
                    <fieldset className={props.flsClass}>
                        {props.children}
                        <button
                            //onClick={props.closeAllPopups}
                            type="submit"
                            className="popup__submit-button"
                        >
                            {props.btnText}
                        </button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;
