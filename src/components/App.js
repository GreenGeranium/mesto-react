import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import { useState } from "react";

function App() {
  let [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  let [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  let [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  return (
    <div className="page">
      <Header></Header>
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      ></Main>
      <Footer></Footer>
      <PopupWithForm
        title={"Редактировать профиль"}
        name={"edit"}
        nameOfForm={"profile-edit"}
        idOfForm={"profile-edit"}
        buttonText={"Сохранить"}
        isOpen={isEditProfilePopupOpen}
      >
        <label className="form__field">
          <input
            type="text"
            value=""
            className="form__input form__input_type_name"
            name="profile-name"
            placeholder="Имя"
            required
            minLength="2"
            maxLength="40"
            id="name-input"
          />
          <span className="name-input-error form__input-error"></span>
        </label>
        <label className="form__field">
          <input
            type="text"
            value=""
            className="form__input form__input_type_profession"
            name="profile-profession"
            placeholder="Описание"
            required
            minLength="2"
            maxLength="200"
            id="profession-input"
          />
          <span className="profession-input-error form__input-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        title={"Новое место"}
        name={"add"}
        nameOfForm={"card-add"}
        idOfForm={"profile-add"}
        buttonText={"Сохранить"}
        isOpen={isAddPlacePopupOpen}
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
          />
          <span className="avatar-input-error form__input-error"></span>
        </label>
      </PopupWithForm>
      <ImagePopup></ImagePopup>
      <PopupWithForm
        title={" Вы уверены?"}
        buttonText={"Да"}
        name={"confirmation"}
        nameOfForm={"popup_confirmation"}
        idOfForm={"popup_confirmation"}
      ></PopupWithForm>
      <template id="card-template">
        <li className="elements__item">
          <article className="card">
            <img className="card__image" />
            <div className="card__trash"></div>
            <div className="card__description">
              <h2 className="card__name"></h2>
              <div className="card__likes">
                <button
                  className="card__button"
                  type="button"
                  aria-label="Лайк"
                ></button>
                <p className="card__likes-quantity"></p>
              </div>
            </div>
          </article>
        </li>
      </template>
    </div>
  );
}

export default App;
