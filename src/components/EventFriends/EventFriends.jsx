import PropTypes from 'prop-types';
import styles from './EventFriends.module.css';


export const EventFriends = ({image, name, time, adress, email, phone }) => {
  return (
    <div className={styles.event}>
      <h3 className={styles.title}>{name}</h3>
      <div className={styles.logoPosition}><img src={image} alt="" className={styles.logo} />
        <ul className={styles.info}>
          <li>Time:</li>
          {time}
          <li>Adress:</li>
          {adress}
          <li>Email:</li>
          {email}
          <li>Phone:</li>
           {phone}
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