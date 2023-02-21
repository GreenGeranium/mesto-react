function ImagePopup() {
  return (
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
  );
}

export default ImagePopup;
