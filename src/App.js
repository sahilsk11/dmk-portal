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
  constructor(props) {
    super(props);
    this.state = { apiKey: "", baseURL: "https://api.airtable.com/v0/appwaUv9OXdJ4UNpy", eventsData: [], newsData: [], upcomingData: [], spotlightData: {}, brotherData: {}, brotherName: "" }
  }

  componentDidMount() {
    this.getEventData();
    this.getNewsData();
    this.getUpcomingData();
    this.getSpotlightData();
    this.getBrotherData();
  }

  getBrotherData() {
    //random variables at the end are used to sort events
    const url = this.state.baseURL + "/brother_data?api_key=" + this.state.apiKey;
    fetch(url).then(res => res.json())
      .then((data) => {
        console.log(data.records);
        this.setState({ brotherData: data.records[0].fields, brotherName: data.records[0].fields["first_name"] });
      });
  }

  getSpotlightData() {
    //random variables at the end are used to sort events
    const url = this.state.baseURL + "/spotlight?api_key=" + this.state.apiKey;
    fetch(url).then(res => res.json())
      .then((data) => {
        console.log(data.records);
        this.setState({ spotlightData: data.records[0].fields });
      });
  }

  getUpcomingData() {
    let upcomingData = [];
    //random variables at the end are used to sort events
    const url = this.state.baseURL + "/upcoming?api_key=" + this.state.apiKey;
    fetch(url).then(res => res.json())
      .then((data) => {
        for (var i = 0; i < data.records.length; i++) {
          upcomingData.push(data.records[i].fields);
        }
        this.setState({ upcomingData: upcomingData });
      });
  }

  getNewsData() {
    let newsData = [];
    //random variables at the end are used to sort events
    const url = this.state.baseURL + "/news?api_key=" + this.state.apiKey + "&sort%5B0%5D%5Bfield%5D=date_added";
    fetch(url).then(res => res.json())
      .then((data) => {
        for (var i = 0; i < data.records.length; i++) {
          newsData.push(data.records[i].fields);
        }
        this.setState({ newsData: newsData });
      });
  }

  getEventData() {
    let eventsData = [];
    //random variables at the end are used to sort events
    const url = this.state.baseURL + "/events?api_key=" + this.state.apiKey + "&sort%5B0%5D%5Bfield%5D=date";
    fetch(url).then(res => res.json())
      .then((data) => {
        for (var i = 0; i < data.records.length; i++) {
          eventsData.push(data.records[i].fields);
        }
        this.setState({ eventsData: eventsData });
      });
  }

  getEventData() {
    let eventsData = [];
    //random variables at the end are used to sort events
    const url = this.state.baseURL + "/events?api_key=" + this.state.apiKey + "&sort%5B0%5D%5Bfield%5D=date";
    fetch(url).then(res => res.json())
      .then((data) => {
        for (var i = 0; i < data.records.length; i++) {
          eventsData.push(data.records[i].fields);
        }
        this.setState({ eventsData: eventsData });
      });
  }

  render() {
    return (
      <div className="content-container">
        <div className="column">
          <ContentBox title={"Welcome, " + this.state.brotherName + " 👋"} height="6%" />
          <ContentBox title="Chapter Attendance ❤️" data={this.state.brotherData} content="Attendance" height="45%" />
          <ContentBox title="Brother Spotlight 🤠" data={this.state.spotlightData} content="Spotlight" height="41.2%" />
        </div>
        <div className="column">
          <ContentBox title="Coming Up ⚡️" data={this.state.upcomingData} content="Upcoming" height="44.7%" />
          <ContentBox title="News Panel 📰" data={this.state.newsData} content="News" height="50%" />
        </div>
        <div className="column">
          <ContentBox title="Upcoming Events 📣" data={this.state.eventsData} content="Event" height="67.7%" />
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
      return <Attendance data={this.props.data} />;
    } else if (this.props.content == "Spotlight") {
      return <Spotlight data={this.props.data} />;
    } else if (this.props.content == "Upcoming" || this.props.content == "News") {
      return <NewsList data={this.props.data} />;
    } else if (this.props.content == "Event") {
      return <Events data={this.props.data} />;
    } else if (this.props.content == "Slack") {
      return <Slack data={this.props.data} />;
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
        <p>We've seen you at {this.props.data.attendance} out of 5 chapters this semester.</p>
      </div>
    );
  }
}

class Spotlight extends React.Component {
  constructor(props) {
    super(props);
  }

  renderWhenReady() {
    if (this.props.data.img != undefined) {
      return (
        <div>
          <img className="spotlight-img" src={this.props.data.img[0].url} />
          <p className="brother-description">Meet Akash Raju ('20): CEO of Glimpse and Founding Class of DMK</p>
        </div>
      )
    }
    return (
      <div></div>
    )
  }
  render() {
    return (
      <div>
        {this.renderWhenReady()}
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
      items.push(<NewsItem content={data[i].headline} img={data[i].img[0].url} link={data[i].link} />);
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

  handleClick() {
    if (this.props.link != "#") {
      window.open(this.props.link, "_blank")
    }
  }

  renderImage() {
    if (this.props.img != undefined && this.props.img != "") {
      return (
        <div>
          <div className="news-item-container" onClick={() => this.handleClick()}>
            <div className="item-img-wrapper">
              <img className="item-img" src={this.props.img} />
            </div>
            <div className="item-text-wrapper">
              <p className="item-content">{this.props.content}</p>
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
      <div className="input-wrapper">
        <textarea className="slack-input" placeholder="I'm hungry..."></textarea>
        <button>send</button>
      </div>
    )
  }
}

export default App;
