import css from "./ImageGallery.module.css";

export const ImageGallery = ({ photos }) => {
    return (
      <div className={css.gallery}>
        <ul className={css.list}>
          {photos.map((photo) => (
            <li key={photo.id}>
              <img src={photo.urls.regular} alt={photo.alt_description} />
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default ImageGallery;
