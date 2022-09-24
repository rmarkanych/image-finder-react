import PropTypes from 'prop-types';
const Button = ({ btnTitle, changePage }) => {
  return (
    <>
      <button className="loadBtn" onClick={changePage}>
        {btnTitle}
      </button>
    </>
  );
};
Button.propTypes = {
  btnTitle: PropTypes.string,
  changePage: PropTypes.func,
};
export default Button;
