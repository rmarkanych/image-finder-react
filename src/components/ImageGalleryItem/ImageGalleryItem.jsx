import PropTypes from 'prop-types';
const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  toggleModal,
  tags,
}) => {
  return (
    <li className="galleryItem">
      <img
        className="imageGalleryItemIMG"
        src={webformatURL}
        alt={tags}
        onClick={() => {
          toggleModal(largeImageURL, tags);
        }}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  toggleModal: PropTypes.func,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
};
export default ImageGalleryItem;
