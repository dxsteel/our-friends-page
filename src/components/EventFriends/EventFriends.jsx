import PropTypes from 'prop-types';
import styles from './EventFriends.module.css';


export const EventFriends = ({image, name, time, adress, email, phone }) => {
  return (
    <div className={styles.event}>
      <h3 className={styles.title}>{name}</h3>
      <div className={styles.contentPosition}>
      <div><img src={image} alt="" className={styles.logo} /></div>
        <ul className={styles.info}>
          <li>Time:</li>
          <span>{time}</span>
          <li>Adress:</li>
          <span>{adress}</span>
          <li>Email:</li>
          <a href="mailto:">{email}</a>
          <li>Phone:</li>
          <a href="tel:">{phone}</a>
        </ul>
        </div>
    </div>
  )
}

EventFriends.propTypes = {
  image:PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};


export default EventFriends;