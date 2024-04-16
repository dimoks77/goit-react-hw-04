import css from './ImageCard.module.css';

export const ImageCard = ({ photo }) => {
    return (
      <li key={photo.id} className={css.photo}>
        <a href={photo.urls.full} className={css.link}>
          <img src={photo.urls.small} className={css.img} alt={photo.description} />
        </a>
      </li>
    );
  };
 

  export default ImageCard;