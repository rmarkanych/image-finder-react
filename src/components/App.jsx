import React from 'react';
import fetchPictures from '../services/pixabay-API';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';

class App extends React.Component {
  state = {
    isLoading: false,
    query: '',
    page: 1,
    images: [],
    isModalOpen: false,
    modalImg: null,
    tags: '',
  };
  changeQuery = value => {
    this.setState({ query: value, page: 1 });
  };
  async componentDidUpdate(prevProps, prevState) {
    if (
      (prevState.query !== this.state.query ||
        prevState.page !== this.state.page) &&
      this.state.query.trim() !== ''
    ) {
      this.setState({ isLoading: true });
      const newArr = await fetchPictures(
        this.state.query,
        this.state.page
      ).catch(err => console.log(err));

      if (this.state.page !== 1) {
        this.setState(prevState => ({
          images: [...prevState.images, ...newArr],
          isLoading: false,
        }));
      } else {
        this.setState({ images: [...newArr], isLoading: false });
      }
    }
  }
  toggleModal = (modalImg, tags) => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
      modalImg,
      tags,
    }));
  };
  changePage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  render() {
    return (
      <div>
        <Searchbar changeQuery={this.changeQuery} />
        {this.state.isLoading && <Loader />}
        <ImageGallery
          imageArray={this.state.images}
          toggleModal={this.toggleModal}
        />
        {this.state.images.length > 2 && (
          <Button btnTitle="Load more" changePage={this.changePage} />
        )}
        {this.state.isModalOpen && (
          <Modal
            toggleModal={this.toggleModal}
            imgUrl={this.state.modalImg}
            imgTag={this.state.tags}
          />
        )}
      </div>
    );
  }
}
export default App;
