import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export const ImageGallery = ({ photos }) => {
    return (
      <div className={css.gallery}>
        <ul className={css.list}>
          {photos.map((photo) => (
            <ImageCard key={photo.id} photo={photo} />
          ))}
        </ul>
      </div>
    );
  };

export default ImageGallery;
