import TitleFriends from './TitleFriends';
import EventBoardFriends from './EventBoardFriends';



import data from '../our-friends-page.json';




export default function OurFriendsPage() {
  return (
    <div>
      <TitleFriends text="Our friend" />
      <EventBoardFriends events={data} />
    </div>
  );
}
