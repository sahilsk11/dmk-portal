class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstName: "S", lastName: "a", username: "h", displayState: "form", password: "" }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateToken = this.validateToken.bind(this);
  }

  handleChange(event) {
    const inputName = event.target.name;
    this.setState({ [inputName]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.validateFields()) {
      const url = "http://localhost:8080";
      fetch(url + "/add?first=" + this.state.firstName + "&last=" + this.state.lastName + "&username=" + this.state.username, {
        method: "POST",
        body: JSON.stringify(this.state)
      }).then(response => response.json())
        .then(data => {
          if (data["sent"]) {
            this.setState({ displayState: "loading" })
          } else {
            this.setState({ displayState: "error" })
          }
        }).catch((error) => {
          this.setState({ displayState: "error" })
        });
    } else {
      this.setState({ displayState: "invalid" })
    }
    console.log(this.state)
  }

  validateToken() {
    const url = "http://localhost:8080";
    fetch(url + "/authenticate?username=" + this.state.username + "&token=" + this.state.password, {
      method: "POST"
    }).then(response => response.json())
      .then(data => {
        if (data["authenticated"]) {
          document.cookie = "user=" + this.state.username + "; path=/";
          document.cookie = "name=" + this.state.firstName + "; path=/";
          window.location = "/";
        } else {
          this.setState({ displayState: "error" })
        }
      })
  }

  validateFields() {
    return (this.state.firstName !== "" && this.state.lastName !== "" && this.state.username !== "");
  }

  displayBox() {
    if (this.state.displayState === "form") {
      return (
        <ContentBox title={"Hey There 👋"} subtitle={"Welcome to the new DMK Portal!"}>
          <FormBox firstName={this.state.firstName} lastName={this.state.lastName} username={this.state.username} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </ContentBox>
      );
    } else if (this.state.displayState === "loading") {
      return (
        <ContentBox title={"Check your email 📫"} subtitle={"Check your Purdue email for authentication. If you didn't get anything, refresh and retype your username."}>
          <Input placeholder="top secret..." />
          <Button onClick={this.validateToken} />
        </ContentBox>
      );
    } else if (this.state.displayState === "invalid") {
      return (
        <ContentBox title={"Uh Oh 😕"} subtitle={"Looks like you are missing some fields. Try again."}>
          <FormBox firstName={this.state.firstName} lastName={this.state.lastName} username={this.state.username} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </ContentBox>
      )
    } else {
      return (
        <ContentBox title={"Well, that's embarrassing 🙈"} subtitle={"There's an error on our end. Try again later!"}>
        </ContentBox>
      )
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.displayBox()}
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
      </div>
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
        height: "450px",
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

class FormBox extends React.Component {
  render() {
    let styles = {
      formContainer: {
        display: "block",
        margin: "0px auto",
        width: "100%",
        marginBottom: "20px",
        marginTop: "30px"
      }
    };
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div style={styles.formContainer}>
          <Input name="firstName" value={this.props.firstName} onChange={this.props.handleChange} placeholder="First Name" />
          <Input name="lastName" value={this.props.lastName} onChange={this.props.handleChange} placeholder="Last Name" />
          <Input name="username" value={this.props.username} onChange={this.props.handleChange} placeholder="Purdue Username" />
        </div>
        <Button />
      </form>
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
    return (
      <input name={this.props.name} style={inputStyle} value={this.props.firstName} onChange={this.props.onChange} placeholder={this.props.placeholder} />
    )
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
    if (this.state.hover) {
      buttonStyle.backgroundColor = "#AB1B23"
    }
    return (
      <button onMouseLeave={() => this.toggleHover()} onMouseEnter={() => this.toggleHover()} style={buttonStyle} onClick={this.props.onClick}>→</button>
    )
  }
}

export default Index;
