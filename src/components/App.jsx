import TitleFriends from './TitleFriends';
import EventBoardFriends from './EventBoardFriends';

// import data from '../our-friends-page.json';
import { Component } from 'react';

export default class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch('http://localhost:3001/api/friends/')
      .then(res => res.json())
      // .then(console.log)

      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <TitleFriends text="Our friend" />
        <EventBoardFriends events={data} />
      </div>
    );
  }
}
