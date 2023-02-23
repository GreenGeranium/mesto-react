function Card(props) {
  return (
    <article className="card">
      <img className="card__image" src={props.card.link} />
      <div className="card__trash"></div>
      <div className="card__description">
        <h2 className="card__name">{props.card.name}</h2>
        <div className="card__likes">
          <button
            className="card__button"
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
