import PopupWithForm from "./PopupWithForm";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditAvatarPopup(props) {
  const inputRef = React.useRef("");

  const [link, setLink] = React.useState("");

  function handleInput() {
    setLink(inputRef.current.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar(link);
  }

  return (
    <PopupWithForm
      title={"Обновить аватар"}
      name={"avatar"}
      nameOfForm={"avatar-change"}
      idOfForm={"popup_avatar"}
      buttonText={"Сохранить"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="form__field">
        <input
          type="url"
          value={link}
          className="form__input form__input_type_avatar"
          name="avatar-link"
          placeholder="Ссылка"
          required
          id="avatar-input"
          ref={inputRef}
          onChange={handleInput}
        />
        <span className="avatar-input-error form__input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
