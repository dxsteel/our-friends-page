import PropTypes from 'prop-types';
import styles from './TitleFriends.module.css'

export const TitleFriends = ({ text }) => {
  return <h1 className={styles.title}>{text}</h1>;
};

TitleFriends.propTypes = {
  text: PropTypes.string.isRequired,
}

export default TitleFriends;