import PropTypes from 'prop-types';
import styles from './EventFriends.module.css'

export const EventFriends = ({ name, time, adress, email, phone }) => {
  return (
    <div className={styles.event}>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.info}>
        <span className={styles.icon}>Time:</span>
        {time}
      </p>
       <p className={styles.info}>
        <span className={styles.icon}>Adress:</span>
        {adress}
      </p>
       <p className={styles.info}>
        <span className={styles.icon}>Email:</span>
        {email}
      </p>
       <p className={styles.info}>
        <span className={styles.icon}>Phone:</span>
        {phone}
      </p>
    </div>
  )
}

EventFriends.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};


export default EventFriends;