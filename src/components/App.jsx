import { useEffect, useState } from 'react';
import fetchPictures from '../services/pixabay-API';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [tags, setTags] = useState('');
  const [modalImg, setModalImg] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const changeQuery = value => {
    setQuery(value);
    setPage(1);
  };

  useEffect(() => {
    if (query === '') return;
    setIsLoading(true);
    const fn = async (page, query) => {
      try {
        const newArr = await fetchPictures(query, page);
        if (page === 1) {
          setImages(newArr);
        } else {
          setImages(s => [...s, ...newArr]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fn(page, query);
  }, [query, page]);

  const toggleModal = (modalImg, tags) => {
    setIsModalOpen(!isModalOpen);
    setModalImg(modalImg);
    setTags(tags);
  };

  const changePage = () => setPage(s => s + 1);

  return (
    <div>
      <Searchbar changeQuery={changeQuery} />
      {isLoading && <Loader />}
      <ImageGallery imageArray={images} toggleModal={toggleModal} />
      {images.length > 2 && (
        <Button btnTitle="Load more" changePage={changePage} />
      )}
      {isModalOpen && (
        <Modal toggleModal={toggleModal} imgUrl={modalImg} imgTag={tags} />
      )}
    </div>
  );
};

export default App;
