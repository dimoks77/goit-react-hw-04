import { useState, useEffect } from 'react';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { SearchBox } from './SearchBar/SearchBar';
import ImageModal from './ImageModal/ImageModal';
import { Toaster } from 'react-hot-toast';
import { fetchData } from './API';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';

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
    const fetchDataAndHandleLoading = async () => {
      if (query === '') {
        return;
      }

      setLoading(true); 
      try {
        await fetchData(query, page, setPhotos, setLoading, setError);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); 
      }
    };

    fetchDataAndHandleLoading();
  }, [query, page]);

  return (
    <>
      <SearchBox onSearch={searchPhotos} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {photos.length > 0 && <ImageGallery photos={photos} openModal={openModal} />}
      {photos.length > 0 && <LoadMoreBtn loadMore={loadMore} />}
      <ImageModal isOpen={modalIsOpen} onRequestClose={closeModal} selectedPhoto={selectedPhoto} />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default App;