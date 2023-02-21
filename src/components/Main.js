function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container" onClick={props.onEditAvatar}>
          <img
            src="src/components/App#"
            alt="Аватарка Жак-Ив Кусто"
            className="profile__avatar"
          />
        </div>
        <div className="profile__description">
          <h1 className="profile__name"></h1>
          <button
            className="profile__edit-button"
            type="button"
            aria-label="Редактировать профиль"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__subline"></p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить фотографию"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements" aria-label="Фотокарточки городов">
        <ul className="elements__list"></ul>
      </section>
    </main>
  );
}

export default Main;
