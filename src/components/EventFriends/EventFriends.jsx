import PropTypes from 'prop-types';
import styles from './EventFriends.module.css';
import ModalTimeFriends from 'components/ModalTimeFriends';
import { useState } from 'react';

export const EventFriends = ({
  logo,
  name,
  time,
  workspace,
  adress,
  email,
  phone,
}) => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={styles.event}>
      <h3 className={styles.title}>{name}</h3>
      <div className={styles.contentPosition}>
        <div className={styles.logoPosition}>
          <img src={logo} alt="" className={styles.logo} />
        </div>
        <ul className={styles.info}>
          <li>Time:</li>
          <li>
            <button
              className={styles.button}
              onClick={() => setModalActive(true)}
              type="button"
            >
              {workspace}
            </button>
          </li>
          <li className={styles.item}>Adress:</li>
          <li>{adress}</li>
          <li className={styles.item}>Email:</li>
          <li>
            <a className={styles.infoLink} href="mailto:">
              {email}
            </a>
          </li>
          <li className={styles.item}>Phone:</li>
          <li>
            <a className={styles.infoLink} href="tel:">
              {phone}
            </a>
          </li>
        </ul>
      </div>
      <ModalTimeFriends active={modalActive} setActive={setModalActive}>
        <ul className='modal__text'>
          <li className='text__position'>MN:
          <span className='workspace__position' >{workspace}</span>
          </li>
          <li className='text__position'>TU:
          <span className='workspace__position' >{workspace}</span>
          </li>
          <li className='text__position'>WE:
          <span className='workspace__position' >{workspace}</span>
          </li>
          <li className='text__position'>TH:
          <span className='workspace__position' >{workspace}</span>
          </li>
          <li className='text__position'>FR:
          <span className='workspace__position' >{workspace}</span>
          </li>
          <li className='text__position'>SA:
          <span className='workspace__position' >{workspace}</span>
          </li>
          <li className='text__position'>SU:
          <span className='workspace__position' >{workspace}</span>
          </li>
          
        </ul>
      </ModalTimeFriends>
    </div>
  );
};

EventFriends.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  workspace: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default EventFriends;
