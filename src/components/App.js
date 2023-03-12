import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import EditProfilePopup from "./EditProfilePopup.js";
import React, { useState, useEffect } from "react";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  //установление закрытых изначально папапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  //выбранная карточка
  const [selectedCard, setSelectedCard] = useState({});
  //массив карточек с сервера
  const [cards, setCards] = useState([]);
  //действующий пользователь
  const [currentUser, setCurrentUser] = useState({});

  //получение действующего профиля
  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //удаление карточки
  function handleCardDelete(card) {
    api
      .handleDeleteCard(card._id)
      .then((data) => {
        setCards((cards) =>
          cards.filter((c) => {
            return c._id !== card._id;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //обработчик лайка карточки
  function handleCardLike(card) {
    const isLiked = card.likes.some(
      (cardLiker) => cardLiker._id === currentUser._id
    );

    api
      .handleCardLike(card._id, isLiked)
      .then((data) => {
        setCards((cards) =>
          cards.map((c) => {
            return c._id === card._id ? data : c;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //рендер всех карточек
  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //отправка на сервер новых данных пользователя из формы
  function handleUpdateUser(data) {
    api
      .changeUserInfo(data.name, data.about)
      .then((newData) => {
        setCurrentUser(newData);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //обработчик клика по карточке
  function handleCardClick(data) {
    setSelectedCard(data);
    setIsImagePopupOpen(true);
  }

  //открытие попапа с изменением аватарки
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  //открытие попапа с изменением профиля
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  //открытие попапа с добавлением места
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  //закрытие всех попапов
  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsImagePopupOpen(false);

    //сброс выбранной карточки
    setSelectedCard({});
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header></Header>
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        ></Main>
        <Footer></Footer>
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        ></EditProfilePopup>
        <PopupWithForm
          title={"Новое место"}
          name={"add"}
          nameOfForm={"card-add"}
          idOfForm={"profile-add"}
          buttonText={"Сохранить"}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="form__field">
            <input
              type="text"
              value=""
              className="form__input form__input_type_place"
              name="card-name"
              placeholder="Название"
              required
              minLength="2"
              maxLength="30"
              id="place-input"
              readOnly
            />
            <span className="place-input-error form__input-error"></span>
          </label>
          <label className="form__field">
            <input
              type="url"
              value=""
              className="form__input form__input_type_link"
              name="card-link"
              placeholder="Ссылка на картинку"
              required
              id="link-input"
              readOnly
            />
            <span className="link-input-error form__input-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          title={"Обновить аватар"}
          name={"avatar"}
          nameOfForm={"avatar-change"}
          idOfForm={"popup_avatar"}
          buttonText={"Сохранить"}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <label className="form__field">
            <input
              type="url"
              value=""
              className="form__input form__input_type_avatar"
              name="avatar-link"
              placeholder="Ссылка"
              required
              id="avatar-input"
              readOnly
            />
            <span className="avatar-input-error form__input-error"></span>
          </label>
        </PopupWithForm>
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          isOpen={isImagePopupOpen}
        ></ImagePopup>
        <PopupWithForm
          title={" Вы уверены?"}
          buttonText={"Да"}
          name={"confirmation"}
          nameOfForm={"popup_confirmation"}
          idOfForm={"popup_confirmation"}
        ></PopupWithForm>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
