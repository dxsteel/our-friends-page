import PropTypes from 'prop-types';
import styles from './EventFriends.module.css';


export const EventFriends = ({logo, name, time, adress, email, phone }) => {
  return (
    <div className={styles.event}>
      <h3 className={styles.title}>{name}</h3>
      <div className={styles.contentPosition}>
      <div className={styles.logoPosition} ><img src={logo} alt="" className={styles.logo} /></div>
        <ul className={styles.info}>
          <li>Time:</li>
          <li>{time}</li>
          <li className={styles.item}>Adress:</li>
          <li>{adress}</li>
          <li className={styles.item}>Email:</li>
         <li><a className={styles.infoLink} href="mailto:">{email}</a></li>
          <li className={styles.item}>Phone:</li>
          <li><a className={styles.infoLink} href="tel:">{phone}</a></li>
        </ul>
        </div>
    </div>
  )
}

EventFriends.propTypes = {
  logo:PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};


export default EventFriends;