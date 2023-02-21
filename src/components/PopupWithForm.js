function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name}`}>
      <div className="popup__container">
        <button
          className="popup__close-button"
          type="button"
          aria-label="Закрыть попап"
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form
          method="get"
          name={props.nameOfForm}
          className="form"
          noValidate
          id={props.idOfForm}
        >
          {props.children}
          <button className="form__save-button" type="submit">
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
