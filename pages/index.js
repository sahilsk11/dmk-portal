import Cookies from 'js-cookie';
import Head from 'next/head'
import { Doughnut } from 'react-chartjs-2';

class Index extends React.Component {
  render() {
    const style = {
      position: "relative",
      minHeight: "100vh",
    }
    return (
      <div style={style}>
        <Head>
          <title>DMK Portal</title>
          <link href="/images/icon.png" rel="icon" />
        </Head>
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

            *{
              margin: 0;
              padding: 0;
            }
            .rate {
              float: middle;
              height: 46px;
              padding: 0 10px;
            }
            .rate:not(:checked) > input {
            position:absolute;
          top:-9999px;
      }
.rate:not(:checked) > label {
            float:right;
          width:1em;
          overflow:hidden;
          white-space:nowrap;
          cursor:pointer;
          font-size:30px;
          color:#ccc;
      }
.rate:not(:checked) > label:before {
            content: '★ ';
      }
.rate > input:checked ~ label {
            color: #ffc700;
      }
      .rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
            color: #deb217;
      }
      .rate > input:checked + label:hover,
      .rate > input:checked + label:hover ~ label,
      .rate > input:checked ~ label:hover,
      .rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
            color: #c59b08;
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
    Cookies.remove("token");
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
    this.state = { eventsData: [], newsData: [], upcomingData: [], spotlightData: {}, brotherData: {}, loadedPage: false }
  }

  componentDidMount() {
    if (Cookies.get("token") == undefined) {
      window.location = "/login"
    } else {
      this.setState({ token: Cookies.get("token") });
    }
    this.fetchPageData();
  }

  fetchPageData() {
    const url = "http://localhost:8080/pageData?token=" + Cookies.get("token");
    fetch(url).then(res => res.json())
      .then((data) => {
        this.setState({
          spotlightData: data.body.brotherSpotlight,
          upcomingData: data.body.upcomingData,
          newsData: data.body.newsData,
          eventsData: data.body.eventsData,
          brotherData: data.body.brotherData,
          loadedPage: true
        })
      });
  }

  render() {
    if (!this.state.loadedPage) {
      const loadingStyle = {
        display: "block",
        margin: "0px auto",
        marginTop: "20%",
        transform: "translateY(-50%)",
        width: "30px"
      }
      return (
        <img src="/images/loading.gif" style={loadingStyle} />
      )
    }
    return (
      <div className="content-container">
        <div className="column">
          <ContentBox title={"Welcome, " + this.state.brotherData.firstName + " 👋"} height="7%" />
          <ContentBox title="Chapter Attendance 🙌" height="45%">
            <Attendance data={this.state.brotherData} checkInActive={true} />
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
    this.state = { displayModal: false }
  }
  toggleModal = () => {
    this.setState({ displayModal: !this.state.displayModal });
  }
  renderButton() {
    const descriptionStyle = {
      marginTop: "30px",
      marginBottom: "30px"
    }
    const buttonStyle = {
      display: "block",
      margin: "0px auto",
      marginTop: "30px",
      height: "30px",
      width: "100px",
      fontSize: "18px"
    }
    if (this.props.checkInActive) {
      return (
        <div>
          <button onClick={() => this.toggleModal()} style={buttonStyle}>check in</button>
          <Modal display={this.state.displayModal} closeModal={this.toggleModal}>
            <CheckInForm />
          </Modal>
        </div>
      );
    } else {
      return (
        <p style={descriptionStyle}>We've seen you at {this.props.data.attendance} out of 5 chapters this semester.</p>
      );
    }
  }
  render() {
    return (
      <div>
        <Graph attended={this.props.data.attendance} totalChapters="5" />
        {this.renderButton()}
      </div>
    );
  }
}

class CheckInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayState: "default", codeValue: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:8080/checkIn?token=" + Cookies.get("token") + "&code=" + this.state.codeValue;
    fetch(url).then(res => res.json())
      .then((data) => {
        this.setState({
          displayState: data.validCode ? "rateChapter" : "invalid"
        })
      });
  }
  handleChange(event) {
    this.setState({ codeValue: event.target.value });
  }
  renderState() {
    const styles = {
      modalSubtitle: {
        textAlign: "center"
      },
      inputStyle: {
        border: "1px solid grey",
        padding: "6px",
        borderRadius: "4px",
        fontSize: "14px",
        display: "block",
        margin: "20px auto",
        textAlign: "center",
        width: this.props.width
      },
      submitButtonStyle: {
        fontSize: "20px",
        border: "none",
        backgroundColor: "rgb(191, 49, 56)",
        color: "white",
        width: "70px",
        height: "30px",
        cursor: "pointer",
        outline: "none",
        borderRadius: "4px",
        display: "block",
        margin: "0px auto",
        marginTop: "30px"
      },
      textInput: {
        backgroundColor: "rgb(242, 242, 242)",
        resize: "none",
        fontSize: "17px",
        width: "92%",
        height: "70px",
        border: "none",
        borderRadius: "4px",
        marginBottom: "0px",
        marginTop: "40px",
        padding: "10px"
      }
    }
    if (this.state.displayState == "default") {
      return (
        <div>
          <h2 style={{ marginTop: "0px" }} className="modal-title">Check In</h2>
          <p style={styles.modalSubtitle} className="modal-text">Please enter the code provided in chapter.</p>
          <form onSubmit={this.handleSubmit}>
            <input style={styles.inputStyle} onChange={this.handleChange} value={this.state.codeValue} onChange={this.handleChange} placeholder="" />
            <button style={styles.submitButtonStyle}>→</button>
          </form>
        </div>
      );
    } else if (this.state.displayState == "invalid") {
      return (
        <div>
          <h2 style={{ marginTop: "0px" }} className="modal-title">Not quite 😕</h2>
          <p style={styles.modalSubtitle} className="modal-text">Did you spell it right?</p>
          <form onSubmit={this.handleSubmit}>
            <input style={styles.inputStyle} onChange={this.handleChange} value={this.state.codeValue} onChange={this.handleChange} placeholder="" />
            <button style={styles.submitButtonStyle}>→</button>
          </form>
        </div>
      );
    } else if (this.state.displayState == "rateChapter") {
      return (
        <div>
          <h2 style={{ marginTop: "0px" }} className="modal-title">Thanks for coming today ✨</h2>
          <p style={styles.modalSubtitle} className="modal-text">How would you rate chapter today?</p>
          <form onSubmit={this.handleSubmit}>
            <RatingSystem />
            <textarea style={styles.textInput} placeholder="I loved the..."></textarea>
            <button style={styles.submitButtonStyle}>→</button>
          </form>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="modal-text-wrapper">
        {this.renderState()}
      </div>
    )
  }
}

class RatingSystem extends React.Component {
  render() {
    return (
      <div class="rate">
        <input type="radio" id="star5" name="rate" value="5" />
        <label for="star5" title="text">5 stars</label>
        <input type="radio" id="star4" name="rate" value="4" />
        <label for="star4" title="text">4 stars</label>
        <input type="radio" id="star3" name="rate" value="3" />
        <label for="star3" title="text">3 stars</label>
        <input type="radio" id="star2" name="rate" value="2" />
        <label for="star2" title="text">2 stars</label>
        <input type="radio" id="star1" name="rate" value="1" />
        <label for="star1" title="text">1 star</label>
      </div>
    );
  }
}

class Graph extends React.Component {
  splitColors() {
    return [parseInt(this.props.attended), parseInt(this.props.totalChapters) - parseInt(this.props.attended)];
  }
  render() {
    const data = {
      labels: [
        'Attended',
        'Missed'
      ],
      datasets: [{
        data: this.splitColors(),
        backgroundColor: [
          '#AF1E2B',
          '#d6d6d6',
        ],
        hoverBackgroundColor: [
          '#990A1B',
          '#b5b5b5',
        ]
      }]
    };
    const options = {
      legend: {
        display: false
      },
      cutoutPercentage: 50
    }
    const graphContainerStyle = {

    }
    return (
      <div>
        <Doughnut data={data} options={options} />
      </div>
    )
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
