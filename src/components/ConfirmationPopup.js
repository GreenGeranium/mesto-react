import api from "../utils/api";
import PopupWithForm from "./PopupWithForm";
import React from "react";

function ConfirmationPopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
    api
      .handleDeleteCard(props.deletingCard._id)
      .then((data) => {
        props.renderCards();
        props.onClose();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <PopupWithForm
      title={" Вы уверены?"}
      buttonText={"Да"}
      name={"confirmation"}
      nameOfForm={"popup_confirmation"}
      idOfForm={"popup_confirmation"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    ></PopupWithForm>
  );
}

export default ConfirmationPopup;
