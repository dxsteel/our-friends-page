import EventFriends from 'components/EventFriends';
import PropTypes from 'prop-types';
import styles from './EventBoardFriends.module.css'

export const EventBoardFriends = ({ events }) => {
  return (
    <div className={styles.eventBoard}>
      {events.map(({ name, time, adress, email, phone }) => (
        <EventFriends key={name}
          name={name}
          time={time}
          adress={adress}
          email={email}
          phone={phone}
        />
      ))}
    </div>
  );
};

EventBoardFriends.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
          time: PropTypes.string.isRequired,
          adress: PropTypes.string.isRequired,
          email: PropTypes.string.isRequired,
          phone: PropTypes.string.isRequired,
    })
  ),
}

export default EventBoardFriends;