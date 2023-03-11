import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const userData = React.useContext(CurrentUserContext);

  //проверка проставлен ли лайк
  const isLiked = props.card.likes.some(
    (cardLiker) => cardLiker._id === userData._id
  );
  const cardLikeButtonClassName = `card__button ${
    isLiked && "card__button_active"
  }`;

  //проверка собственник ли карточки
  const isOwner = props.card._id === userData._id;

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="card">
      <img
        className="card__image"
        src={props.card.link}
        onClick={handleClick}
      />
      {isOwner && <div className="card__trash"></div>}
      <div className="card__description">
        <h2 className="card__name">{props.card.name}</h2>
        <div className="card__likes">
          <button
            className={cardLikeButtonClassName}
            type="button"
            aria-label="Лайк"
          ></button>
          <p className="card__likes-quantity">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
