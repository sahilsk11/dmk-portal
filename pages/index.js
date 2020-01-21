import Cookies from 'js-cookie';

class Index extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <ContentContainer />
        <style jsx global>
          {`
            body {
              margin: 0px;
              background-color: #F7F7FB;
              font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;

              -webkit-font-smoothing: antialiased;
            }

            .bg-color {
              background-color: #F7F7FB;
            }

            .nav-container {
              width: 100%;
              background-color: #AB1B23;
              height: 58px;
            }

            .nav-img {
              width: 50px;
              margin-left: 20px;
              margin-top: 6px;
            }

            .content-container {
              width: 100%;
              margin: 0px auto;
              display: flex;
              justify-content: space-between;
              height: 700px;
              max-width: 1200px;
              margin-bottom: 50px;
            }

            .column {
              width: 100%;
            }

            .content-box {
              background-color: white;
              width: 90%;
              box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
              display: block;
              margin: 0px auto;
              margin-top: 20px;
              overflow: scroll;
            }

            .box-title {
              text-align: center;
              padding-top: 10px;
              margin: 0px;
              font-weight: 400;
              font-size: 20px;
            }

            .box-content {
              padding-top: 10px;
              width: 95%;
              display: block;
              margin: 0px auto;
              position: relative;
            }

            p {
              text-align: center;
              color: grey;
              font-weight: 300;
              margin-top: 3px;
              margin-bottom: 3px;
            }

            .attendance-graph {
              padding-top: 0px;
              margin: 0px auto;
              display: block;
              width: 40%;
              max-width: 200px;
              margin-bottom: 10px;
            }

            .spotlight-img:hover {
              box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.2), -10px 6px 20px 0 rgba(0, 0, 0, 0.19);
              cursor: pointer;
            }

            .spotlight-img {
              width: 43%;
              margin: 0px auto;
              display: block;
              margin-bottom: 25px;
              margin-top: 20px;
              border-radius: 50%;
              transition-duration: 0.2s;
              min-width: 120px;
            }

            .brother-description {
              transition-duration: 0.2s;
            }

            .brother-description:hover {
              cursor: pointer;
              color: rgb(50, 50, 50);
            }

            .events-container {
              margin-top: 40px;
            }

            .event-wrapper {
              min-height: 70px;
              position: relative;
            }

            .event-item {
              margin-top: 0px;
              display: flex;
              justify-content: flex-start;
              transition-duration: 0.2s;
              cursor: pointer;
              border-radius: 10px;
              position: relative;
              top: 50%;
              transform: translateY(-50%);
              padding: 10px;
              width: calc(100% - 20px);
            }

            .event-item:hover {
              background-color: rgb(235, 235, 235);
            }

            .news-item-container {
              display: flex;
              justify-content: flex-start;
              transition-duration: 0.2s;
              padding-top: 7px;
              padding-bottom: 7px;
              padding-right: 2px;
              border-radius: 10px;
              cursor: pointer;
              min-height: 50px;
            }

            .news-item-container:hover {
              background-color: rgb(235, 235, 235);
            }

            .item-img-wrapper {
              width: 30%;
              position: relative;
            }

            .item-img {
              position: relative;
              width: 80%;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
            }

            .item-text-wrapper {
              width: 70%;
              position: relative;
            }

            .item-content {
              position: relative;
              top: 50%;
              transform: translateY(-70%);
            }

            .hr {
              border: 0.6px solid rgb(215, 215, 215);
              margin: 3px auto;
            }

            .modal {
              /* Hidden by default */
              position: fixed;
              /* Stay in place */
              z-index: 1;
              /* Sit on top */
              padding-top: 100px;
              /* Location of the box */
              left: 0;
              top: 0;
              width: 100%;
              /* Full width */
              height: 100%;
              /* Full height */
              overflow: auto;
              /* Enable scroll if needed */
              background-color: rgb(0, 0, 0);
              /* Fallback color */
              background-color: rgba(0, 0, 0, 0.4);
              /* Black w/ opacity */
            }

            /* Modal Content */

            .modal-content {
              background-color: #fefefe;
              margin: auto;
              border: 1px solid white;
              width: 80%;
              max-width: 500px;
              position: relative;
              padding-bottom: 40px;
              padding-top: 3%;
            }

            .modal-img {
              width: 40%;
              display: block;
              margin: 0px auto;
              min-width: 150px;
              max-width: 80%;
            }

            .modal-text-wrapper {
              width: 77%;
              padding-left: 10%;
              padding-right: 10%;
              margin: 0px auto;
              display: block;
            }

            .modal-title {
              text-align: center;
            }

            .modal-text {
              text-align: left;
            }

            /* The Close Button */

            .close {
              color: #aaaaaa;
              float: right;
              font-size: 35px;
              font-weight: bold;
              position: absolute;
              right: 10px;
              top: 0px;
            }

            .close:hover, .close:focus {
              color: #000;
              text-decoration: none;
              cursor: pointer;
            }

            .modal-btn {
              text-align: center;
              display: block;
              margin: 0px auto;
              margin-top: 30px;
              height: 30px;
              font-size: 16px;
            }

            .date-container {
              width: 50px;
              height: 50px;
              background-color: #AB1B23;
              border-radius: 10px;
            }

            .event-name {
              margin-top: 5px;
              margin-left: 10px;
              font-weight: 300;
              margin-bottom: 0px;
            }

            .event-time {
              text-align: left;
              margin-left: 10px;
            }

            .month {
              margin-top: 3px;
              margin-bottom: 0px;
              color: white;
              font-size: 12px;
            }

            .day {
              color: white;
              margin-top: 0px;
              font-size: 25px;
            }

            .input-wrapper {
              width: 90%;
              display: block;
              margin: 0px auto;
              position: relative;
            }

            .slack-input {
              background-color: rgb(242, 242, 242);
              resize: none;
              font-size: 17px;
              width: 92%;
              height: 70px;
              border: none;
              border-radius: 4px;
              margin-bottom: 30px;
              padding: 10px;
            }

            button {
              font-size: 17px;
              border: none;
              background-color: rgb(191, 49, 56);
              color: white;
              width: 80px;
              height: 25px;
              cursor: pointer;
              outline: none;
              border-radius: 4px;
            }

            .slack-send {
              position: absolute;
              bottom: 0;
              right: 3px;
            }

            button:hover {
              background-color: #AB1B23;
            }

            .check-in-btn {
              display: block;
              margin: 0px auto;
              margin-top: 40px;
              height: 40px;
              width: 140px;
            }

            @media only screen and (max-width: 790px) {
              .content-container {
                display: block;
                max-width: 500px;
                height: auto;
              }
              .content-box {
                max-height: 400px;
              }
              .slack-input {
                margin-bottom: 50px;
              }
              .slack-send {
                bottom: 20px;
                right: 10px;
              }
            }
            
          `}
        </style>
      </div>
    );
  }
}

class NavBar extends React.Component {
  logout() {
    Cookies.remove("user");
    window.location = "/login"
  }
  render() {
    const styles = {
      logoutStyle: {
        position: "absolute",
        right: "20px",
        width: "25px",
        top: "15px",
        cursor: "pointer"
      }
    }
    return (
      <div className="nav-container">
        <img src="/images/icon.png" className="nav-img" />
        <img src="/images/logout.png" style={styles.logoutStyle} onClick={() => { this.logout() }} />
      </div>
    )
  }
}

class ContentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiKey: "keyjYTQNlzdmReX94", baseURL: "https://api.airtable.com/v0/appwaUv9OXdJ4UNpy", eventsData: [], newsData: [], upcomingData: [], spotlightData: {}, brotherData: {}, brotherName: "" }
  }

  componentDidMount() {
    console.log("hi")
    if (Cookies.get("token") == undefined) {
      window.location = "/login"
    }
    this.fetchPageData();
    this.getEventData();
    this.getNewsData();
    this.getUpcomingData();
    this.getSpotlightData();
    this.getBrotherData();

  }

  fetchPageData() {
    const url = "http://localhost:8080/pageData";
    fetch(url, {
      method: 'POST'
    })
  }

  getBrotherData() {
    const url = this.state.baseURL + "/brother_data?api_key=" + this.state.apiKey;
    fetch(url).then(res => res.json())
      .then((data) => {
        var i = 0;
        var found = false;
        while (i < data.records.length && !found) {
          if (Cookies.get("token") == data.records[i].fields.username) {
            this.setState({ brotherData: data.records[i].fields, brotherName: data.records[i].fields["first_name"] });
            found = true;
          }
          i++;
        }
        if (!found) {
          alert("Hm, we couldn't find you in our system. Please log in again");
          Cookies.remove("user");
          window.location = "/login";
        }
        console.log(this.state.brotherData)
      });
  }

  getSpotlightData() {
    const url = this.state.baseURL + "/spotlight?api_key=" + this.state.apiKey;
    fetch(url).then(res => res.json())
      .then((data) => {
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
            <Attendance data={this.state.brotherData} apiKey={this.state.apiKey} />
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
  checkIn() {
    console.log("clicked");
    const url = "https://api.airtable.com/v0/appwaUv9OXdJ4UNpy/attendance?api_key=" + this.props.apiKey;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "records": [
          {
            "fields": {
              "Name": "Sydney8",
              "check-in-time": "2020-01-11T01:31:00.000Z"
            }
          }
        ]
      })
    }).then(res => res.json())
      .then((data) => {
        console.log(data.records);
      });
  }
  render() {
    return (
      <div>
        <img src="/images/attendance.png" className="attendance-graph" />
        <p>We've seen you at {this.props.data.attendance} out of 5 chapters this semester.</p>
        <button onClick={() => this.checkIn()} className="check-in-btn">check in now</button>

      </div>
    );
  }
}

class Spotlight extends React.Component {
  renderWhenReady() {
    if (this.props.data.img != undefined) {
      return (
        <div>
          <img className="spotlight-img" src={this.props.data.img[0].url} />
          <p className="brother-description">{this.props.data.content}</p>
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
      items.push(<NewsItem key={i} data={this.props.data[i]} img={this.props.data[i].img[0].url} />);
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
      items.push(<EventItem key={i} data={data[i]} />);
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
        <button className="slack-send" onClick={() => alert("This doesn't do anything yet :(")}>send</button>
      </div>
    )
  }
}

export default Index;
