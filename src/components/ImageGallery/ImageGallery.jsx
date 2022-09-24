import ImageGalleryItem from '../../components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
const ImageGallery = ({ imageArray, toggleModal }) => {
  return (
    <ul className="gallery">
      {imageArray.map(({ id, tags, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            className="galleryItem"
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            toggleModal={toggleModal}
          ></ImageGalleryItem>
        );
      })}
    </ul>
  );
};
ImageGallery.propTypes = {
  imageArray: PropTypes.array,
  toggleModal: PropTypes.func,
};
export default ImageGallery;
