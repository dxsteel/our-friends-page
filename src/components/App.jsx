import TitleFriends from "./TitleFriends";
import EventBoardFriends from "./EventBoardFriends";

import data from '../our-friends-page.json';

export const App = () => {
  return (
    <div>
      <TitleFriends text="Our friend" />
      <EventBoardFriends events={data}/>
    </div>
  );
};
