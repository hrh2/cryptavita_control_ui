import PropTypes from 'prop-types'; // Import PropTypes

export default function RoundImage({ image, size }) {
  return (
      <div className={`${size} md:block lg:block hidden`} style={{ backgroundImage: `url(${image})` }}>
      </div>
  );
}

// Add property validation
RoundImage.propTypes = {
  image: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
