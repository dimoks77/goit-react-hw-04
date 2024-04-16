import css from './ImageCard.module.css';

export const ImageCard = ({ photo, openModal }) => {
  const handleImageClick = () => {
    openModal(photo);
  };

  return (
    <li key={photo.id} className={css.photo} onClick={handleImageClick}>
      <img src={photo.urls.small} className={css.img} />
    </li>
  );
};

export default ImageCard;
