import EventFriends from 'components/EventFriends';
import PropTypes from 'prop-types';
import { EventBoard } from './EvenBoardFriends.styled';

export const EventBoardFriends = ({ events }) => {
  return (
    <EventBoard>
      {events.map(({ logo, name, time, adress, email, phone }) => (
        <EventFriends key={name}
          logo={logo}
          name={name}
          time={time}
          adress={adress}
          email={email}
          phone={phone}
        />
      ))}
    </EventBoard>
  );
};

EventBoardFriends.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      logo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
          time: PropTypes.string.isRequired,
          adress: PropTypes.string.isRequired,
          email: PropTypes.string.isRequired,
          phone: PropTypes.string.isRequired,
    })
  ),
}

export default EventBoardFriends;