import React from 'react';
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
  getData() {
    const data = {
      brotherName: "Sydney",
      attendance: {
        percentage: "40",
        attendedChapters: "2",
        totalChapters: "5"
      },
      spotlight: {
        content: "Akash Raju ('20): CEO of Glimpse and Founding Class of DMK",
        img: "./akash.png"
      },
      upcoming: [
        {
          "content": "John Gedmark (Purdue Aero ‘04) is visiting in chapter 11/04. Read about him here.",
          "img": "https://dl.airtable.com/.attachmentThumbnails/a8dd5154410a3f5ac76c7d132c34bc24/9a1c89c4"
        },
        {
          "content": "Lila Abrahim (Purdue CompE '90) is visiting for a talk in Arms Atrium. She is an investor and advocate for women in STEM.",
          "img": "https://startuppurdue.com/images/people/Lila%20Ibrahim.png"
        },
        {
          "content": "It's Atharva Dixit's birthday today!",
          "img": "https://dl.airtable.com/.attachmentThumbnails/4483254a3ba272130653d96a6c59d0dc/4744988b"
        }
      ],
      news: [
        {
          "content": "Mimir (founded by DMK Alumn Prahasith Veluvolu), has been acquired by Hacker Rank",
          "img": "https://www.mimirhq.com/hubfs/Fall%202018%20Website/mimir-classroom-logotype-color-no-padding.svg"
        },
        {
          "content": "Lila Abrahim (Purdue CompE '90) is visiting for a talk in Arms Atrium. She is an investor and advocate for women in STEM.",
          "img": "https://startuppurdue.com/images/people/Lila%20Ibrahim.png"
        },
        {
          "content": "It's Atharva Dixit's birthday today!",
          "img": "https://dl.airtable.com/.attachmentThumbnails/4483254a3ba272130653d96a6c59d0dc/4744988b"
        }
      ],
      events: [
          {
            "name": "Dinner with E-board at Panera",
            "location": "Panera Bread",
            "time": "6:00 PM",
            "month": "jan",
            "day": "13"
          },
          {
            "name": "Back to School Olympics",
            "location": "TBD",
            "time": "9:00 PM",
            "month": "jan",
            "day": "28"
          },
          {
            "name": "Volunteering at Animal Shelter",
            "location": "Robert's Animal Shelter",
            "time": "3:00 PM",
            "month": "feb",
            "day": "9"
          }
        ]
      }
      return data
    }
  render() {
    const data = this.getData();
    return (
      <div className="content-container">
        <div class="column">
          <ContentBox title={"Welcome, " + data.brotherName + " 👋"} height="6%" />
          <ContentBox title="Chapter Attendance ❤️" data={data.attendance} content="Attendance" height="45%" />
          <ContentBox title="Brother Spotlight 🤠" data={data.spotlight} content="Spotlight" height="41.2%" />
        </div>
        <div class="column">
          <ContentBox title="Coming Up ⚡️" data={data.upcoming} content="Upcoming" height="44.7%" />
          <ContentBox title="News Panel 📰" data={data.news} content="News" height="50%" />
        </div>
        <div class="column">
          <ContentBox title="Upcoming Events 📣" data={data.events} content="Event" height="67.7%" />
          <ContentBox title="Drop us a Line 🤖" content="Slack" height="27%" />
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
      return <Attendance data={this.props.data}/>;
    } else if (this.props.content == "Spotlight") {
      return <Spotlight data={this.props.data}/>;
    } else if (this.props.content == "Upcoming" || this.props.content == "News") {
      return <NewsList data={this.props.data}/>;
    } else if (this.props.content == "Event") {
      return <Events data={this.props.data}/>;
    } else if (this.props.content == "Slack") {
      return <Slack data={this.props.data}/>;
    }
  }

  render() {
    return (
      <div className="content-box" style={{ "height": this.props.height }}>
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
        <p className="brother-description">Meet Akash Raju ('20): CEO of Glimpse and Founding Class of DMK</p>
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
    const data = this.props.data;
    for (var i = 0; i < data.length; i++) {
      items.push(<NewsItem content={data[i].content} img={data[i].img} />);
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
    const data = this.props.data;
    for (var i = 0; i < data.length; i++) {
      items.push(<EventItem name={data[i].name} time={data[i].time} month={data[i].month} day={data[i].day} />);
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

class EventItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="event-item">
        <div className="date-container">
          <p className="month">{this.props.month}</p>
          <p className="day">{this.props.day}</p>
        </div>
        <div>
          <h5 className="event-name">{this.props.name}</h5>
          <p className="event-time">{this.props.time}</p>
        </div>
      </div>
    )
  }
}

class NewsItem extends React.Component {
  constructor(props) {
    super(props);
  }

  renderImage() {
    console.log(this.props.img);
    if (this.props.img != undefined && this.props.img != "") {
      return (
        <div>
          <div className="news-item-container">
            <div className="item-img-wrapper">
              <img className="item-img" src={this.props.img} />
            </div>
            <div className="item-text-wrapper">
              <p>{this.props.content}</p>
            </div>
          </div>
          <hr className="hr" width="70%" />
        </div>
      );
    } else {
      return (
        <div>
          <p>{this.props.content}</p>
          <hr className="hr" width="70%" />
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderImage()}
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

export default App;
