import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export const ImageGallery = ({ photos, openModal }) => {
  return (
    <div className={css.gallery}>
      <ul className={css.list}>
        {photos.map((photo) => (
          <ImageCard key={photo.id} photo={photo} openModal={openModal} />
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;