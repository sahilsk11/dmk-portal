class Index extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { firstName: "", lastName: "", username: "", displayState: "entry", password: "", loading: false, newUser: false }
    this.state = { displayState: "username", loading: false, inputValue: "", newUser: false, username: "" }

    this.handleChange = this.handleChange.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.checkUsername = this.checkUsername.bind(this);
    this.setFirstName = this.setFirstName.bind(this);
    this.setLastName = this.setLastName.bind(this);
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  checkUsername(event) {
    event.preventDefault();
    this.setState({ loading: true })
    const username = this.state.inputValue;
    const url = "http://localhost:8080/check_user?username=" + username;
    fetch(url, {
      method: 'POST'
    }).then(response => response.json())
      .then(data => {
        this.setState({ 
          displayState: data.state === "new_user" ? "emailVerification" : data.state,
          cellID: data.cellID,
          newUser: data.state === "new_user",
          username,
          loading: false,
          inputValue: ""
        });
      }).catch((error) => {
        this.setState({ displayState: "error" });
      });;
  }

  authenticate(event) {
    event.preventDefault();
    const token = this.state.inputValue;
    const url = "http://localhost:8080/authenticate?username=" + this.state.username + "&token=" + token;
    fetch(url, {
      method: "POST"
    }).then(response => response.json())
      .then(data => {
        if (data.authenticated) {
          if (this.state.newUser) {
            this.setState({ displayState: "newUserFirstName", inputValue: "" });
          } else {
            document.cookie = "token=" + data.token + "; path=/";
            window.location = "/";
          }
        } else {
          this.setState({ displayState: "invalid_password" })
        }
      })
  }

  setFirstName(event) {
    event.preventDefault();
    this.setState({ firstName: this.state.inputValue, inputValue: "", displayState: "newUserLastName" });
  }

  setLastName(event) {
    event.preventDefault();
    const lastName = this.state.inputValue;
    const url = "http://localhost:8080/add_name?cellID=" + this.state.cellID + "&firstName=" + this.state.firstName + "&lastName=" + lastName;
    fetch(url);
    document.cookie = "token=" + this.state.username + "; path=/";
    window.location = "/";
  }

  render() {
    const pageStates = {
      username: {
        title: "Hey There 👋",
        subtitle: "Welcome to the DMK Portal! Let's start with your Purdue username.",
        onFormSubmit: this.checkUsername,
        inputPlaceholder: "Purdue Username"
      },
      emailVerification: {
        title: "Check your email 📫",
        subtitle: "Check your Purdue email for authentication (or continue if password saved).",
        onFormSubmit: this.authenticate,
        inputPlaceholder: "top secret..."
      },
      newUserFirstName: {
        title: "You look new! 👀",
        subtitle: "What's your first name?",
        onFormSubmit: this.setFirstName,
        inputPlaceholder: "What do you go by?"
      },
      newUserLastName: {
        title: "...and last name 🎉",
        subtitle: "No middle name please.",
        onFormSubmit: this.setLastName,
        inputPlaceholder: "Who are your people?"
      },
      error: {
        title: "Well, that's embarrassing 🙈",
        subtitle: "There's an error on our end. Try again later!",
        onFormSubmit: this.authenticate,
        inputPlaceholder: "top secret...",
        hideForm: true
      }
    }
    const stateElements = pageStates[this.state.displayState];
    return (
      <div>
        <NavBar />
        {/*this.displayBox()*/}
        <ContentBox title={stateElements.title} subtitle={stateElements.subtitle}>
          <form onSubmit={stateElements.onFormSubmit}>
            <Input onChange={this.handleChange} value={this.state.inputValue} placeholder={stateElements.inputPlaceholder} hide={stateElements.hideForm} />
            <Button loading={this.state.loading} hide={stateElements.hideForm} />
          </form>
        </ContentBox>
        {/*Global CSS goes in here*/}
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
      fontSize: "30px",
      border: "none",
      backgroundColor: "rgb(191, 49, 56)",
      color: "white",
      width: "100px",
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
        <img src="/images/loading.gif" style={loadingSyle} />
      )
    } else {
      return (
        <div>
          <button onMouseLeave={() => this.toggleHover()} onMouseEnter={() => this.toggleHover()} style={buttonStyle} onClick={this.props.onClick}>→</button>
        </div>
      )
    }
  }
}

export default Index;
