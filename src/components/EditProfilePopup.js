import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const currentUser = useContext(CurrentUserContext);
    // console.log(name);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateUser({
            name,
            about: description,
        });
    }

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    return (
        <PopupWithForm
            title="Редактировать профиль"
            name="edit"
            btnText="Сохранить"
            // flsClass="popup__set"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                name="name-input"
                id="name"
                placeholder="Имя"
                className="popup__input popup__input_type_name"
                required
                minLength="2"
                maxLength="40"
                onChange={handleNameChange}
                value={name}
            />
            <span className="popup__input-error name-input-error"></span>
            <input
                type="text"
                name="occupation-input"
                id="about"
                placeholder="Профессия"
                className="popup__input popup__input_type_occupation"
                required
                minLength="2"
                maxLength="200"
                onChange={handleDescriptionChange}
                value={description}
            />
            <span className="popup__input-error occupation-input-error"></span>
        </PopupWithForm>

    );

}

export default EditProfilePopup;