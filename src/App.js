import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <ContentContainer />
      </div>
    );
  }
}

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <img src="./icon.png" className="nav-img" />
      </div>
    )
  }
}

class ContentContainer extends React.Component {
  render() {
    return (
      <div className="content-container">
        <div class="column">
          <ContentBox title="Welcome, Sydney 👋" height="6%"/>
          <ContentBox title="Chapter Attendance ❤️" content="Attendance" height="52%"/>
          <ContentBox title="Brother Spotlight 🤠" content="Spotlight" height="34.2%"/>
        </div>
        <div class="column">
          <ContentBox title="Coming Up ⚡️" content="Upcoming" height="44.7%"/>
          <ContentBox title="News Panel 📰" content="News" height="50%"/>
        </div>
        <div class="column">
          <ContentBox title="Upcoming Events 📣" content="Event" height="67.7%"/>
          <ContentBox title="Drop us a Line 🤖" content="Slack" height="27%"/>
        </div>
      </div>
    )
  }
}

class ContentBox extends React.Component {
  constructor(props) {
    super(props);
  }

  renderContent() {
    if (this.props.content == "Attendance") {
      return <Attendance/>;
    } else if (this.props.content == "Spotlight") {
      return <Spotlight/>;
    } else if (this.props.content == "Upcoming" || this.props.content == "News") {
      return <NewsList />;
    } else if (this.props.content == "Event") {
      return <Events />;
    } else if (this.props.content == "Slack") {
      return <Slack />;
    }
  }

  render() {
    return (
      <div className="content-box" style={{"height": this.props.height}}>
        <h3 className="box-title">{this.props.title}</h3>
        <div className="box-content">
          {this.renderContent()}
        </div>
      </div>
    )
  }
}

class Attendance extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img src="attendance.png" className="attendance-graph" />
        <p>We've seen you at 2 out of 5 chapters this semester.</p>
      </div>
    );
  }
}

class Spotlight extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img className="spotlight-img" src="akash.png" />
        <p>Meet Akash Raju ('20): CEO of Glimpse and Founding Class of DMK</p>
      </div>
    );
  }
}

class NewsList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItems() {
    var items = [];
    for (var i = 0; i < 10; i++) {
      items.push(<NewsItem />);
    }
    return items;
  }

  render() {
    return (
      <div>
        {this.renderItems()}
      </div>
    );
  }
}

class Events extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItems() {
    var items = [];
    for (var i = 0; i < 10; i++) {
      items.push(<EventItem />);
    }
    return items;
  }

  render() {
    return (
      <div>
        {this.renderItems()}
      </div>
    );
  }
}

class NewsItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>John Gedmark (Purdue Aero ‘04) is visiting in chapter 11/04. Read about him here.</p>
        <hr width="70%"/>
      </div>
    );
  }
}

class Slack extends React.Component {
  render() {
    return (
      <div>
        <textarea className="slack-input" placeholder="I'm hungry..."></textarea>
        <button>send</button>
      </div>
    )
  }
}

class EventItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="event-item">
        <div className="date-container">
          <p className="month">feb</p>
          <p className="day">1</p>
        </div>
        <h5 className="event-name">Dinner With E-board at Panera</h5>
        <p className="event-time">6:00 PM</p>
      </div>
    )
  }
}

export default App;
