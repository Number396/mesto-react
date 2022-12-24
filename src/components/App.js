//import logo from '../logo.svg';
//import './App.css';
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <body className="body">
      <div className="page">
        <Header />
        <Main />
        <Footer />

        {/* <!-- ------------------------------------------------------------------------ --> */}
        <div className="popup popup_edit-profile">
          <div className="popup__container">
            <button
              aria-label="кнопка закрыть окно редактирования профиля"
              type="button"
              className="popup__close-button button-opacity"
            ></button>
            <h2 className="popup__title">Редактировать профиль</h2>
            <form name="edit-form" className="popup__form" novalidate>
              <fieldset className="popup__set">
                <input
                  type="text"
                  name="name-input"
                  id="name"
                  placeholder="Имя"
                  className="popup__input popup__input_type_name"
                  required
                  minlength="2"
                  maxlength="40"
                />
                <span className="popup__input-error name-input-error"></span>
                <input
                  type="text"
                  name="occupation-input"
                  id="about"
                  placeholder="Профессия"
                  className="popup__input popup__input_type_occupation"
                  required
                  minlength="2"
                  maxlength="200"
                />
                <span className="popup__input-error occupation-input-error"></span>
                <button type="submit" className="popup__submit-button">
                  Сохранить
                </button>
              </fieldset>
            </form>
          </div>
        </div>
        {/* <!-- ---------------------------------------------------------------------------- --> */}
        <div className="popup popup_add-place">
          <div className="popup__container">
            <button
              aria-label="кнопка закрыть окно добавления карточки"
              type="button"
              className="popup__close-button button-opacity"
            ></button>
            <h2 className="popup__title">Новое место</h2>
            <form name="add-form" className="popup__form" novalidate>
              <fieldset className="popup__set">
                <input
                  type="text"
                  name="place-input"
                  id="placeInput"
                  placeholder="Наименование места"
                  className="popup__input popup__input_type_place"
                  required
                  minlength="2"
                  maxlength="30"
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
                <button type="submit" className="popup__submit-button">
                  Создать
                </button>
              </fieldset>
            </form>
          </div>
        </div>

        {/* <!-- ------------------------------------------------------------------------- --> */}
        <div className="popup popup_update-avatar">
          <div className="popup__container">
            <button
              aria-label="кнопка закрыть окно обновления аватара"
              type="button"
              className="popup__close-button button-opacity"
            ></button>
            <h2 className="popup__title">Обновить аватар</h2>
            <form name="updateAvatar-form" className="popup__form" novalidate>
              <fieldset className="popup__set">
                <input
                  type="url"
                  name="link-input"
                  id="linkInputAvatar"
                  placeholder="Введите ссылку"
                  className="popup__input popup__input_type_link"
                  required
                />
                <span className="popup__input-error link-input-error"></span>
                <button type="submit" className="popup__submit-button">
                  Сохранить
                </button>
              </fieldset>
            </form>
          </div>
        </div>

        {/* <!-- ------------------------------------------------------------------------- --> */}
        <div className="popup popup_confirm-close">
          <div className="popup__container">
            <button
              aria-label="кнопка закрыть окно подтверждения удаления"
              type="button"
              className="popup__close-button button-opacity"
            ></button>
            <h2 className="popup__title">Вы уверены?</h2>
            <form name="confirm-form" className="popup__form" novalidate>
              <fieldset className="popup__set popup__set_type_confirm">
                <button type="submit" className="popup__submit-button">Да</button>
              </fieldset>
            </form>
          </div>
        </div>
        {/* <!-- ------------------------------------------------------------------------- --> */}
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
      </div>
    </body>
  );
}

export default App;
