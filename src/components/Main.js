import { useEffect, useState } from "react";
import api from "../utils/api.js";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  let [cards, setCards] = useState([]);

  //рендер всех карточек
  useEffect(() => {
    api.getInitialCards().then((data) => {
      setCards(data);
    });
  }, [cards]);

  //установление данных профиля с сервера
  useEffect(() => {
    api.getUserInfo().then((data) => {
      setUserName(data.name);
      setUserAvatar(data.avatar);
      setUserDescription(data.about);
    });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container" onClick={props.onEditAvatar}>
          <img
            src={userAvatar}
            alt="Аватарка Жак-Ив Кусто"
            className="profile__avatar"
          />
        </div>
        <div className="profile__description">
          <h1 className="profile__name">{userName}</h1>
          <button
            className="profile__edit-button"
            type="button"
            aria-label="Редактировать профиль"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__subline">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить фотографию"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements" aria-label="Фотокарточки городов">
        <ul className="elements__list">
          {cards.map((card, i) => {
            return (
              <li className="elements__item" key={i}>
                <article className="card">
                  <img className="card__image" src={card.link} />
                  <div className="card__trash"></div>
                  <div className="card__description">
                    <h2 className="card__name">{card.name}</h2>
                    <div className="card__likes">
                      <button
                        className="card__button"
                        type="button"
                        aria-label="Лайк"
                      ></button>
                      <p className="card__likes-quantity">
                        {card.likes.length}
                      </p>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
