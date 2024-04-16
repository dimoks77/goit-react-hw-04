import { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { SearchBox } from './SearchBar/SearchBar';
import ImageModal from './ImageModal/ImageModal'; // Импортируем компонент ImageModal

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const searchPhotos = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setLoading(false);
    setError('');
    setPhotos([]);
  };

  const loadMore = () => {
    setPage(page + 1);
    setTimeout(() => {
      const scrollDistance = window.innerHeight;
      window.scrollBy({
        top: scrollDistance,
        behavior: "smooth"
      });
    }, 500);
  };

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetchData() {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.unsplash.com/search/photos/`, {
          params: {
            client_id: '4Ha1lW10vYE2G9EauE11B4hkWzNMh1SuojsbWDZ2Kl8',
            query: query,
            per_page: 12,
            page: page,
            orientation: 'landscape',
          },
        });
        setPhotos((prevPhotos) => [...prevPhotos, ...response.data.results]);
        
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  return (
    <>
      <SearchBox onSearch={searchPhotos} />
      {loading && <Loader />}
      {error && <Loader error={error.message} />}
      {photos.length > 0 && <ImageGallery photos={photos} openModal={openModal} />}
      {photos.length > 0 && <LoadMoreBtn loadMore={loadMore} />}
      <ImageModal isOpen={modalIsOpen} onRequestClose={closeModal} selectedPhoto={selectedPhoto} />
    </>
  );
};

export default App;
