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
    const url = this.state.baseURL + "/brother_data?api_key=" + this.state.apiKey;
    fetch(url).then(res => res.json())
      .then((data) => {
        console.log(data.records);
        this.setState({ brotherData: data.records[0].fields, brotherName: data.records[0].fields["first_name"] });
      });
  }

  getSpotlightData() {
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
    const url = this.state.baseURL + "/upcoming?api_key=" + this.state.apiKey + "&sort%5B0%5D%5Bfield%5D=date_added&sort%5B0%5D%5Bdirection%5D=desc";
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
    const url = this.state.baseURL + "/news?api_key=" + this.state.apiKey + "&sort%5B0%5D%5Bfield%5D=date_added&sort%5B0%5D%5Bdirection%5D=desc";
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
          <ContentBox title={"Welcome, " + this.state.brotherName + " 👋"} height="7%" />
          <ContentBox title="Chapter Attendance 🙌" height="45%">
            <Attendance data={this.state.brotherData} />
          </ContentBox>
          <ContentBox title="Brother Spotlight 🤠" height="40%">
            <Spotlight data={this.state.spotlightData} />
          </ContentBox>
        </div>
        <div className="column">
          <ContentBox title="Coming Up ⚡️" height="44.7%">
            <NewsList data={this.state.upcomingData} />
          </ContentBox>
          <ContentBox title="News Panel 📰" height="50%">
            <NewsList data={this.state.newsData} />
          </ContentBox>
        </div>
        <div className="column">
          <ContentBox title="Upcoming Events 📣" height="67.7%">
            <EventsList data={this.state.eventsData} />
          </ContentBox>
          <ContentBox title="Drop us a Line 🤖" height="27%">
            <Slack />
          </ContentBox>
        </div>
      </div>
    )
  }
}

class ContentBox extends React.Component {
  render() {
    return (
      <div className="content-box" style={{ "height": this.props.height }}>
        <h3 className="box-title">{this.props.title}</h3>
        <div className="box-content">
          {this.props.children}
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
    return null;
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
  renderItems() {
    var items = [];
    for (var i = 0; i < this.props.data.length; i++) {
      items.push(<NewsItem data={this.props.data[i]} img={this.props.data[i].img[0].url} />);
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
    this.state = { displayModal: false };
  }

  toggleModal = () => {
    this.setState({ displayModal: !this.state.displayModal });
  }

  handleClick() {
    if (this.props.data.link != "#") {
      window.open(this.props.data.link, "_blank")
    } else {
      this.toggleModal();
      console.log(this.state.displayModal);
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
              <p className="item-content">{this.props.data.headline}</p>
            </div>
          </div>
          <Modal display={this.state.displayModal} closeModal={this.toggleModal}>
            <img src={this.props.img} className="modal-img" />
            <div className="modal-text-wrapper">
              <h2 className="modal-title">{this.props.data.headline}</h2>
              <p className="modal-text">{this.props.data.description}</p>
            </div>
            <button className="modal-btn" onClick={this.toggleModal}>close</button>
          </Modal>
          <hr className="hr" width="70%" />
        </div>
      );
    } else {
      return (
        <div>
          <p>{this.props.data.content}</p>
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

class Modal extends React.Component {
  render() {
    if (this.props.display) {
      return (
        <div id={this.props.id} className="modal">
          <div className="modal-content">
            <span className="close" onClick={this.props.closeModal}>&times;</span>
            {this.props.children}
          </div>
        </div>
      )
    } else {
      console.log("not");
      return null;
    }
  }
}

class EventsList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItems() {
    var items = [];
    const data = this.props.data;
    for (var i = 0; i < data.length; i++) {
      items.push(<EventItem data={data[i]} />);
    }
    return items;
  }

  render() {
    return (
      <div className="events-container">
        {this.renderItems()}
      </div>
    );
  }
}

class EventItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayModal: false };
  }

  toggleModal = () => {
    this.setState({ displayModal: !this.state.displayModal });
  }

  render() {
    return (
      <div>
        <div className="event-wrapper">
          <div className="event-item" onClick={() => this.toggleModal()}>
            <div className="date-container">
              <p className="month">{this.props.data.month}</p>
              <p className="day">{this.props.data.day}</p>
            </div>
            <div>
              <h5 className="event-name">{this.props.data.name}</h5>
              <p className="event-time">{this.props.data.time}</p>
            </div>
          </div>
        </div>
        <Modal display={this.state.displayModal} closeModal={this.toggleModal}>
          
          <div className="modal-text-wrapper">
            <h2 className="modal-title">{this.props.data.name}</h2>
            <p className="modal-text">{this.props.data.description}</p>
          </div>
          <button className="modal-btn" onClick={this.toggleModal}>close</button>
        </Modal>
      </div>
    )
  }
}

class Slack extends React.Component {
  render() {
    return (
      <div className="input-wrapper">
        <textarea className="slack-input" placeholder="I'm hungry..."></textarea>
        <button className="slack-send">send</button>
      </div>
    )
  }
}

export default App;
