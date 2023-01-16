import React, { useEffect, useState } from "react";
import { api } from "../utils/api.js";
import Card from "./Card.js";
import { CurrentUserContext } from "./CurrentUserContext.js";

function Main(props) {
    // const [userName, setUserName] = useState();
    // const [userDescription, setUserDescription] = useState();
    // const [userAvatar, setUserAvatar] = useState();
    // const [cards, setCards] = useState([]);
    const currentUser = React.useContext(CurrentUserContext);
    // console.log(props.cards);

    // console.log(currentUser.name);

    useEffect(() => {
        api.getCards()
            .then((initialCards) => {
                props.setCards(initialCards);
                // console.log(initialCards[1]._id);
            })
            .catch((error) => console.log(`Ошибка при загрузке страницы: ${error}`));
    }, []);

    // useEffect(() => {
    //     Promise.all([api.getUserInfo(), api.getCards()])
    //         .then(([userData, initialCards]) => {
    //             setUserName(userData.name);
    //             setUserDescription(userData.about);
    //             setUserAvatar(userData.avatar);
    //             setCards(initialCards);
    //             // console.log(initialCards[1]._id);
    //         })
    //         .catch((error) => console.log(`Ошибка при загрузке страницы: ${error}`));
    // }, []);

    return (
        <main>
            <section className="profile">
                <div className="profile__data">
                    <div className="profile__avatar-wrapper">
                        <img className="profile__avatar" src={currentUser.avatar} alt="" />
                        <button
                            onClick={props.onEditAvatar}
                            aria-label=""
                            type="button"
                            className="profile__avatar-button"
                        ></button>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__title">{currentUser.name}</h1>
                        <button
                            onClick={props.onEditProfile}
                            aria-label="кнопка редактировать профиль"
                            type="button"
                            className="profile__edit-button button-opacity"
                        ></button>
                        <p className="profile__subtitle">{currentUser.about}</p>
                    </div>
                </div>
                <button
                    onClick={props.onAddPlace}
                    aria-label="кнопка добавить карточку места"
                    type="button"
                    className="profile__add-button button-opacity"
                ></button>
            </section>

            <section className="cards">
                <ul className="cards__items">
                    {props.cards.map((cardItem) => (
                        <Card
                            card={cardItem}
                            key={cardItem._id}
                            onCardClick={props.onCardClick}
                            onCardLike={props.onCardLike}
                            onCardDelete={props.onCardDelete}

                        />
                    ))}
                </ul>
            </section>
        </main>
    );
}
export default Main;
