import { useEffect, useState } from "react";
import { api } from "../utils/api";
import { CurrentUserContext } from "./CurrentUserContext";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then((userData) => {
        // console.log(userData);
        setCurrentUser(userData);
      })
      .catch((error) => console.log(`Ошибка при загрузке информации о пользователе: ${error}`));
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
  }

  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(item => item._id === currentUser._id);
    // console.log(isLiked);
    // console.log(card);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        // console.log(newCard);
        setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
      });
  }

  function handleCardDelete(card) {
    console.log(card._id);
    api.deleteCard(card._id)
      .then(() => {
        console.log('inside deleteCard handle');
        setCards((cards) => cards.filter((c) => c._id !== card._id));
      })
  }

  function handleUpdateUser({ name, about }) {
    api.setUserInfo({ name, about })
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((error) => console.log(`Ошибка при обновлении профиля: ${error}`));
  }

  function handleUpdateAvatar({ avatar, inputRef }) {
    api.setUserAvatar(avatar)
      .then((userData) => {
        setCurrentUser(userData);
        inputRef.current.form.reset();
        closeAllPopups();
      })
      .catch((error) => console.log(`Ошибка при обновлении аватара: ${error}`));


  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          cards={cards}
          setCards={setCards}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        {/* <PopupWithForm
          title="Редактировать профиль"
          name="edit"
          btnText="Сохранить"
          // flsClass="popup__set"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
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
          />
          <span className="popup__input-error occupation-input-error"></span>
        </PopupWithForm> */}

        <PopupWithForm
          title="Новое место"
          name="add"
          btnText="Создать"
          // flsClass="popup__set"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            name="place-input"
            id="placeInput"
            placeholder="Наименование места"
            className="popup__input popup__input_type_place"
            required
            minLength="2"
            maxLength="30"
          />
          <span className="popup__input-error place-input-error"></span>
          <input
            type="url"
            name="link-input"
            id="linkInput"
            placeholder="Введите ссылку"
            className="popup__input popup__input_type_link"
            required
          />
          <span className="popup__input-error link-input-error"></span>
        </PopupWithForm>



        {/* <PopupWithForm
          title="Обновить аватар"
          name="avatar"
          btnText="Сохранить"
          // flsClass="popup__set"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="url"
            name="link-input"
            id="linkInputAvatar"
            placeholder="Введите ссылку"
            className="popup__input popup__input_type_link"
            required
          />
          <span className="popup__input-error link-input-error"></span>
        </PopupWithForm> */}

        <PopupWithForm>
          title="Вы уверены?"
          name="confirm"
          btnText="Да"
          extraClass="popup__set_type_confirm"
        </PopupWithForm>

        <ImagePopup
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
