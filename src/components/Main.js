function Main() {
    return (
        <main>
            <section className="profile">
                <div className="profile__data">
                    <div className="profile__avatar-wrapper">
                        <img
                            className="profile__avatar"
                            src="<%=require('./images/Avatar.png')%>"
                            alt=""
                        />
                        <button
                            aria-label=""
                            type="button"
                            className="profile__avatar-button"
                        ></button>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__title">Жак-Ив Кусто</h1>
                        <button
                            aria-label="кнопка редактировать профиль"
                            type="button"
                            className="profile__edit-button button-opacity"
                        ></button>
                        <p className="profile__subtitle">Исследователь</p>
                    </div>
                </div>
                <button
                    aria-label="кнопка добавить карточку места"
                    type="button"
                    className="profile__add-button button-opacity"
                ></button>
            </section>

            <section className="cards">
                <ul className="cards__items"></ul>
            </section>
        </main>
    );
}
export default Main;