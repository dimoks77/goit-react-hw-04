import css from './ImageCard.module.css';

export const ImageCard = ({ photo, openModal }) => {
  const handleImageClick = () => {
    openModal(photo);
  };

  return (
    <li className={css.photo}>
      <img src={photo.urls.small} className={css.img} alt={photo.alt_description} onClick={handleImageClick} />
    </li>
  );
};

export default ImageCard;
