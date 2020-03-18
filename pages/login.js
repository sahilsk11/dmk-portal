import Head from 'next/head'
import Fingerprint2 from 'fingerprintjs2';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayState: "default", loading: false, inputValue: "", newUser: false, username: "", firstName: "", fingerprint: "", token: "" }

    this.handleChange = this.handleChange.bind(this);
    this.skipEmail = this.skipEmail.bind(this);
    this.confirmedEmail = this.confirmedEmail.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.checkUsername = this.checkUsername.bind(this);
    this.setFirstName = this.setFirstName.bind(this);
    this.setLastName = this.setLastName.bind(this);
    this.setState = this.setState.bind(this);
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  skipEmail() {
    console.log("HI")
    this.setState({ displayState: "authenticate" })
  }

  validateInput(inputValue) {
    if (inputValue == "") {
      alert("Please type in your username!")
      return;
    } else if (inputValue.length > 10) {
      alert("That's a little too long!")
      return;
    }
  }

  checkUsername(event) {
    event.preventDefault();
    let username = this.state.inputValue.toLowerCase();
    if (username.indexOf("@") >= 0) {
      username = username.substring(0, username.indexOf("@"));
    }
    this.setState({ username, loading: true })

    const host = process.env.NODE_ENV == "production" ? "https://server.dmkalpha.org" : "localhost:8080";
    const url = "http://" + host + "/checkUser?username=" + username + "&fingerprint=" + this.state.fingerprint;
    fetch(url, {
      method: 'POST'
    }).then(response => response.json())
      .then(data => {
        this.setState({
          displayState: data.state,
          cellID: data.cellID,
          loading: false,
          inputValue: "",
          newUser: data.state === "newUser",
          firstName: data.firstName,
          token: data.state == "authenticated" ? data.token : ""
        });
        
      }).catch((error) => {
        this.setState({ displayState: "error" });
      });
  }

  setFirstName(event) {
    event.preventDefault();
    this.setState({ firstName: this.state.inputValue, inputValue: "", displayState: "setLastName" });
  }

  setLastName(event) {
    event.preventDefault();
    this.setState({ lastName: this.state.inputValue, inputValue: "", displayState: "returningUser" });
  }

  confirmedEmail() {
    const username = this.state.username;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    this.setState({ loading: true })

    const host = process.env.NODE_ENV == "production" ? "https://server.dmkalpha.org" : "localhost:8080";
    const url = "http://" + host + "/sendEmail?username=" + username + "&firstName=" + firstName + "&lastName=" + lastName + "&newUser=" + this.state.newUser + "&cellID=" + this.state.cellID;
    fetch(url).then(response => response.json())
      .then(data => {
        if (data.success) {
          this.setState({
            displayState: "authenticate",
            inputValue: "",
            loading: false,
          });
        }
      }).catch((error) => {
        this.setState({ displayState: "error" });
      });
  }

  authenticate(event) {
    event.preventDefault();
    const token = this.state.inputValue;


    const host = process.env.NODE_ENV == "production" ? "https://server.dmkalpha.org" : "localhost:8080";
    const url = "http://" + host + "/authenticate?username=" + this.state.username + "&token=" + token + "&fingerprint=" + this.state.fingerprint + "&cellID=" + this.state.cellID;
    fetch(url, {
      method: "POST"
    }).then(response => response.json())
      .then(data => {
        if (data.authenticated) {
          document.cookie = "token=" + data.token + "; path=/";
          window.location = "/";
        } else {
          this.setState({ displayState: "invalidPassword" })
        }
      })
  }

  renderBasedOnState() {
    if (this.state.displayState == "default") {
      return <InputContentBox title="Hey There 👋" subtitle=" Welcome to the DMK Portal! Let's start with your Purdue username." onFormSubmit={this.checkUsername} onChange={this.handleChange} inputValue={this.state.inputValue} placeholder="Purdue username" loading={this.state.loading} />;
    } else if (this.state.displayState == "newUser") {
      return <InputContentBox title="You look new! 👀" subtitle="What's your first name?" onFormSubmit={this.setFirstName} onChange={this.handleChange} inputValue={this.state.inputValue} placeholder="What do you go by?" loading={this.state.loading} />;
    } else if (this.state.displayState == "setLastName") {
      return <InputContentBox title="...and last name 🎉" subtitle="No middle name please." onFormSubmit={this.setLastName} onChange={this.handleChange} inputValue={this.state.inputValue} placeholder="Who are your people?" loading={this.state.loading} />;
    } else if (this.state.displayState == "returningUser") {
      return <DialogueBox title={"Welcome, " + this.state.firstName + " 🐶"} username={this.state.username} onSubmit={this.confirmedEmail} skipEmail={this.skipEmail} displaySkip={!this.state.newUser} />
    } else if (this.state.displayState == "authenticate") {
      return <InputContentBox title="Identify Yourself 🔐" subtitle="You should have received your code via email." onFormSubmit={this.authenticate} onChange={this.handleChange} inputValue={this.state.inputValue} placeholder="Top secret" loading={this.state.loading} />;
    } else if (this.state.displayState == "invalidPassword") {
      return <InputContentBox title="Not quite 😕" subtitle="That code is incorrect. Did you get caps right?" onFormSubmit={this.authenticate} onChange={this.handleChange} inputValue={this.state.inputValue} placeholder="Top secret" loading={this.state.loading} />;
    } else if (this.state.displayState == "authenticated") {
      document.cookie = "token=" + this.state.token + "; path=/";
      window.location = "/";
    } else {
      return <ErrorBox />;
    }
  }

  componentDidMount() {
    console.log(process.env.NODE_ENV);
    setTimeout(() => {
      new Fingerprint2.get((components) => {
        var values = components.map(function (component) {
          return component.value
        })
        var murmur = Fingerprint2.x64hash128(values.join(''), 31)
        console.log(murmur)
        this.setState({ fingerprint: murmur });
      })
    }, 800)
  }

  render() {
    return (
      <div>
        <Head>
          <title>DMK Portal - Login</title>
          <link href="/images/icon.png" rel="icon" />
        </Head>
        <NavBar />
        {this.renderBasedOnState()}
        <style jsx global>
          {`
            body {
              margin: 0px;
              background-color: #F7F7FB;
              font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;

              -webkit-font-smoothing: antialiased;
            }
            
          `}
        </style>
      </div >
    );
  }
}

class NavBar extends React.Component {
  render() {
    const navContainerStyle = {
      width: "100%",
      backgroundColor: "#AB1B23",
      height: "58px"
    }
    const navImgStyle = {
      width: "50px",
      marginLeft: "20px",
      marginTop: "6px"
    }
    return (
      <div style={navContainerStyle}>
        <img src="/images/icon.png" style={navImgStyle} />
      </div>
    )
  }
}

class InputContentBox extends React.Component {
  render() {
    return (
      <ContentBox title={this.props.title} subtitle={this.props.subtitle}>
        <form onSubmit={this.props.onFormSubmit}>
          <Input onChange={this.props.onChange} value={this.props.inputValue} placeholder={this.props.placeholder} />
          <Button loading={this.props.loading} buttonText="→" />
        </form>
      </ContentBox>
    );
  }
}

class ErrorBox extends React.Component {
  render() {
    return (
      <ContentBox title="Well, that's embarrassing 🙈" subtitle="There's an error on our end. Try again later!" />
    );
  }
}

class DialogueBox extends React.Component {
  renderSkip() {
    const anchorStyle = {
      textAlign: 'center',
      fontSize: "12px",
      display: "block",
      paddingBottom: "10px"
    }
    if (this.props.displaySkip) {
      return <a style={anchorStyle} href="#" onClick={this.props.skipEmail}>I know my code</a>;
    }
  }

  render() {
    const anchorStyle = {
      textAlign: 'center',
      fontSize: "12px",
      display: "block",
      paddingBottom: "10px"
    }

    return (
      <ContentBox title={this.props.title} subtitle={"We're sending your code to " + this.props.username + "@purdue.edu."}>
        <Button buttonText="Email me the code" fontSize="15" width="180" onClick={this.props.onSubmit} />
        <div style={{ marginTop: "40px" }}>
          {this.renderSkip()}
          <a style={anchorStyle} href="#" onClick={() => location.reload()}>Oops - wrong email!</a>
        </div>

      </ContentBox>
    );
  }
}

class ContentBox extends React.Component {
  render() {
    let styles = {
      contentBoxStyle: {
        backgroundColor: "white",
        width: "500px",
        boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        display: "block",
        margin: "0px auto",
        marginTop: "20px",
        overflow: "scroll",
        height: "350px",
        maxWidth: "95%"
      },
      boxTitleStyle: {
        textAlign: "center",
        paddingTop: "30px",
        margin: "0px",
        fontWeight: "400",
        fontSize: "35px"
      },
      innerContentStyle: {
        paddingTop: "10px",
        width: "95%",
        display: "block",
        margin: "0px auto",
        position: "relative"
      },
      subtitle: {
        textAlign: "center",
        fontWeight: "300",
        marginTop: "10px",
        paddingLeft: "20px",
        paddingRight: "20px"
      }
    }

    return (
      <div style={styles.contentBoxStyle}>
        <h3 style={styles.boxTitleStyle}>{this.props.title}</h3>
        <h3 style={styles.subtitle}>{this.props.subtitle}</h3>
        <div style={styles.innerContentStyle}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

class Input extends React.Component {
  render() {
    const inputStyle = {
      border: "1px solid black",
      padding: "6px",
      borderRadius: "4px",
      fontSize: "17px",
      display: "block",
      margin: "20px auto",
      textAlign: "center",
      width: this.props.width
    }
    if (this.props.hide !== true) {
      return (
        <input name={this.props.name} style={inputStyle} value={this.props.value} onChange={this.props.onChange} placeholder={this.props.placeholder} />
      )
    } return null;
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false }
  }
  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }
  render() {
    let buttonStyle = {
      fontSize: this.props.fontSize == undefined ? "30px" : this.props.fontSize + "px",
      border: "none",
      backgroundColor: "rgb(191, 49, 56)",
      color: "white",
      width: this.props.width == undefined ? "100px" : this.props.width + "px",
      height: "40px",
      cursor: "pointer",
      outline: "none",
      borderRadius: "4px",
      display: "block",
      margin: "0px auto",
      marginTop: "30px"
    }
    const loadingSyle = {
      width: "30px",
      display: "block",
      margin: "0px auto"
    }
    if (this.state.hover) {
      buttonStyle.backgroundColor = "#AB1B23"
    }
    if (this.props.hide === true) {
      return null;
    }
    if (this.props.loading) {
      return (
        <img src="/images/loading-white.gif" style={loadingSyle} />
      )
    } else {
      return (
        <div>
          <button onMouseLeave={() => this.toggleHover()} onMouseEnter={() => this.toggleHover()} style={buttonStyle} onClick={this.props.onClick}>{this.props.buttonText}</button>
        </div>
      )
    }
  }
}

export default Index;
