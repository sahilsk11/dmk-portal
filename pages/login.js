class Index extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <LoginBox />
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

class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false }
  }
  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }
  render() {
    const contentBoxStyle = {
      backgroundColor: "white",
      width: "500px",
      boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      display: "block",
      margin: "0px auto",
      marginTop: "20px",
      overflow: "scroll",
      height: "450px"
    };
    const boxTitleStyle = {
      textAlign: "center",
      paddingTop: "30px",
      margin: "0px",
      fontWeight: "400",
      fontSize: "35px"
    };
    const innerContentStyle = {
      paddingTop: "10px",
      width: "95%",
      display: "block",
      margin: "0px auto",
      position: "relative"
    }
    const subtitle = {
      textAlign: "center",
      fontWeight: "300",
      marginTop: "10px"
    }
    const inputStyle = {
      border: "1px solid black",
      padding: "6px",
      borderRadius: "4px",
      fontSize: "17px",
      display: "block",
      margin: "20px auto",
      textAlign: "center",
      width: "160px"
    }
    const formContainer = {
      display: "block",
      margin: "0px auto",
      width: "100%",
      marginBottom: "20px",
      marginTop: "30px"
    }
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
      buttonStyle.backgroundColor = "#AB1B23";
    }
    return (
      <div style={contentBoxStyle}>
        <h3 style={boxTitleStyle}>Hey There 👋</h3>
        <h3 style={subtitle}>Welcome to the new DMK Portal!</h3>
        <div style={innerContentStyle}>
          <form>
            <div style={formContainer}>
              <input style={inputStyle} placeHolder="First Name" />
              <input style={inputStyle} placeHolder="Last Name" />
              <input style={inputStyle} placeHolder="Purdue Username" />
            </div>
            <button onMouseLeave={() => this.toggleHover()} onMouseEnter={() => this.toggleHover()} style={buttonStyle}>→</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Index;
