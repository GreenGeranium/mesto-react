import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="page">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      <div className="popup popup_edit">
        <div className="popup__container">
          <button
            className="popup__close-button"
            type="button"
            aria-label="Закрыть попап"
          ></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form
            method="get"
            name="profile-edit"
            className="form"
            noValidate
            id="profile-edit"
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
            <button className="form__save-button" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_add">
        <div className="popup__container">
          <button
            className="popup__close-button"
            type="button"
            aria-label="Закрыть попап"
          ></button>
          <h2 className="popup__title">Новое место</h2>
          <form
            method="get"
            name="card-add"
            className="form"
            noValidate
            id="profile-add"
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
            <button className="form__save-button" type="submit">
              Создать
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_avatar">
        <div className="popup__container">
          <button
            className="popup__close-button"
            type="button"
            aria-label="Закрыть попап"
          ></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form
            method="get"
            name="avatar-change"
            className="form"
            noValidate
            id="popup_avatar"
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
            <button className="form__save-button" type="submit">
              Создать
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_image">
        <div className="popup__container popup__container_type_image">
          <button
            className="popup__close-button"
            type="button"
            aria-label="Закрыть попап"
          ></button>
          <figure className="popup__figure">
            <img src="src/components/App#" className="popup__image" />
            <figcaption className="popup__subline"></figcaption>
          </figure>
        </div>
      </div>
      <div className="popup popup_confirmation">
        <div className="popup__container popup__container_place_confirmation">
          <button
            className="popup__close-button"
            type="button"
            aria-label="Закрыть попап"
          ></button>
          <h2 className="popup__title popup__title_place_confirmation">
            Вы уверены?
          </h2>
          <form
            method="get"
            name="popup_confirmation"
            className="form"
            noValidate
            id="popup_confirmation"
          >
            <button
              className="form__save-button form__save-button_place_confirmation"
              type="submit"
            >
              Да
            </button>
          </form>
        </div>
      </div>
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
