(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{O2ls:function(t,e,a){"use strict";a.r(e);var n=a("0iUn"),i=a("sLSF"),s=a("MI3g"),o=a("a7VT"),r=a("AT/M"),l=a("Tit0"),u=a("MX0m"),h=a.n(u),p=a("q1tI"),c=a.n(p),d=a("8Kt/"),m=a.n(d),b=c.a.createElement,g=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(s.a)(this,Object(o.a)(e).call(this,t))).state={displayState:"default",loading:!1,inputValue:"",newUser:!1,username:"",firstName:""},a.handleChange=a.handleChange.bind(Object(r.a)(a)),a.skipEmail=a.skipEmail.bind(Object(r.a)(a)),a.confirmedEmail=a.confirmedEmail.bind(Object(r.a)(a)),a.authenticate=a.authenticate.bind(Object(r.a)(a)),a.checkUsername=a.checkUsername.bind(Object(r.a)(a)),a.setFirstName=a.setFirstName.bind(Object(r.a)(a)),a.setLastName=a.setLastName.bind(Object(r.a)(a)),a}return Object(l.a)(e,t),Object(i.a)(e,[{key:"handleChange",value:function(t){this.setState({inputValue:t.target.value})}},{key:"skipEmail",value:function(){console.log("HI"),this.setState({displayState:"authenticate"})}},{key:"validateInput",value:function(t){""!=t?t.length>10&&alert("That's a little too long!"):alert("Please type in your username!")}},{key:"checkUsername",value:function(t){var e=this;t.preventDefault();var a=this.state.inputValue;this.setState({username:a,loading:!0}),fetch("http://localhost:8080/checkUser?username="+a,{method:"POST"}).then((function(t){return t.json()})).then((function(t){e.setState({displayState:t.state,cellID:t.cellID,loading:!1,inputValue:"",newUser:"newUser"===t.state,firstName:t.firstName})})).catch((function(t){e.setState({displayState:"error"})}))}},{key:"setFirstName",value:function(t){t.preventDefault(),this.setState({firstName:this.state.inputValue,inputValue:"",displayState:"setLastName"})}},{key:"setLastName",value:function(t){t.preventDefault(),this.setState({lastName:this.state.inputValue,inputValue:"",displayState:"returningUser"})}},{key:"confirmedEmail",value:function(){var t=this,e=this.state.username,a=this.state.firstName,n=this.state.lastName;this.setState({loading:!0});var i="http://localhost:8080/sendEmail?username="+e+"&firstName="+a+"&lastName="+n+"&newUser="+this.state.newUser+"&cellID="+this.state.cellID;fetch(i).then((function(t){return t.json()})).then((function(e){e.success&&t.setState({displayState:"authenticate",inputValue:"",loading:!1})})).catch((function(e){t.setState({displayState:"error"})}))}},{key:"authenticate",value:function(t){var e=this;t.preventDefault();var a=this.state.inputValue,n="http://localhost:8080/authenticate?username="+this.state.username+"&token="+a;fetch(n,{method:"POST"}).then((function(t){return t.json()})).then((function(t){t.authenticated?(document.cookie="token="+t.token+"; path=/",window.location="/"):e.setState({displayState:"invalidPassword"})}))}},{key:"renderBasedOnState",value:function(){return"default"==this.state.displayState?b(y,{title:"Hey There \ud83d\udc4b",subtitle:" Welcome to the DMK Portal! Let's start with your Purdue username.",onFormSubmit:this.checkUsername,onChange:this.handleChange,inputValue:this.state.inputValue,placeholder:"Purdue username",loading:this.state.loading}):"newUser"==this.state.displayState?b(y,{title:"You look new! \ud83d\udc40",subtitle:"What's your first name?",onFormSubmit:this.setFirstName,onChange:this.handleChange,inputValue:this.state.inputValue,placeholder:"What do you go by?",loading:this.state.loading}):"setLastName"==this.state.displayState?b(y,{title:"...and last name \ud83c\udf89",subtitle:"No middle name please.",onFormSubmit:this.setLastName,onChange:this.handleChange,inputValue:this.state.inputValue,placeholder:"Who are your people?",loading:this.state.loading}):"returningUser"==this.state.displayState?b(S,{title:"Welcome, "+this.state.firstName+" \ud83d\udc36",username:this.state.username,onSubmit:this.confirmedEmail,skipEmail:this.skipEmail,displaySkip:!this.state.newUser}):"authenticate"==this.state.displayState?b(y,{title:"Identify Yourself \ud83d\udd10",subtitle:"You should have received your code via email.",onFormSubmit:this.authenticate,onChange:this.handleChange,inputValue:this.state.inputValue,placeholder:"Top secret",loading:this.state.loading}):"invalidPassword"==this.state.displayState?b(y,{title:"Not quite \ud83d\ude15",subtitle:"That code is incorrect. Did you get caps right?",onFormSubmit:this.authenticate,onChange:this.handleChange,inputValue:this.state.inputValue,placeholder:"Top secret",loading:this.state.loading}):b(v,null)}},{key:"render",value:function(){return b("div",{className:"jsx-1555840043"},b(m.a,null,b("title",{className:"jsx-1555840043"},"DMK Portal - Login"),b("link",{href:"/images/icon.png",rel:"icon",className:"jsx-1555840043"})),b(f,null),this.renderBasedOnState(),b(h.a,{id:"1555840043"},["body{margin:0px;background-color:#F7F7FB;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;}"]))}}]),e}(c.a.Component),f=function(t){function e(){return Object(n.a)(this,e),Object(s.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return b("div",{style:{width:"100%",backgroundColor:"#AB1B23",height:"58px"}},b("img",{src:"/images/icon.png",style:{width:"50px",marginLeft:"20px",marginTop:"6px"}}))}}]),e}(c.a.Component),y=function(t){function e(){return Object(n.a)(this,e),Object(s.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return b(k,{title:this.props.title,subtitle:this.props.subtitle},b("form",{onSubmit:this.props.onFormSubmit},b(x,{onChange:this.props.onChange,value:this.props.inputValue,placeholder:this.props.placeholder}),b(O,{loading:this.props.loading,buttonText:"\u2192"})))}}]),e}(c.a.Component),v=function(t){function e(){return Object(n.a)(this,e),Object(s.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return b(k,{title:"Well, that's embarrassing \ud83d\ude48",subtitle:"There's an error on our end. Try again later!"})}}]),e}(c.a.Component),S=function(t){function e(){return Object(n.a)(this,e),Object(s.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(i.a)(e,[{key:"renderSkip",value:function(){if(this.props.displaySkip)return b("a",{style:{textAlign:"center",fontSize:"12px",display:"block",paddingBottom:"10px"},href:"#",onClick:this.props.skipEmail},"I know my code")}},{key:"render",value:function(){return b(k,{title:this.props.title,subtitle:"We're sending your code to "+this.props.username+"@purdue.edu."},b(O,{buttonText:"Email me the code",fontSize:"15",width:"180",onClick:this.props.onSubmit}),b("div",{style:{marginTop:"40px"}},this.renderSkip(),b("a",{style:{textAlign:"center",fontSize:"12px",display:"block",paddingBottom:"10px"},href:"#",onClick:function(){return location.reload()}},"Oops - wrong email!")))}}]),e}(c.a.Component),k=function(t){function e(){return Object(n.a)(this,e),Object(s.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t={contentBoxStyle:{backgroundColor:"white",width:"500px",boxShadow:"0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",display:"block",margin:"0px auto",marginTop:"20px",overflow:"scroll",height:"350px",maxWidth:"95%"},boxTitleStyle:{textAlign:"center",paddingTop:"30px",margin:"0px",fontWeight:"400",fontSize:"35px"},innerContentStyle:{paddingTop:"10px",width:"95%",display:"block",margin:"0px auto",position:"relative"},subtitle:{textAlign:"center",fontWeight:"300",marginTop:"10px",paddingLeft:"20px",paddingRight:"20px"}};return b("div",{style:t.contentBoxStyle},b("h3",{style:t.boxTitleStyle},this.props.title),b("h3",{style:t.subtitle},this.props.subtitle),b("div",{style:t.innerContentStyle},this.props.children))}}]),e}(c.a.Component),x=function(t){function e(){return Object(n.a)(this,e),Object(s.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t={border:"1px solid black",padding:"6px",borderRadius:"4px",fontSize:"17px",display:"block",margin:"20px auto",textAlign:"center",width:this.props.width};return!0!==this.props.hide?b("input",{name:this.props.name,style:t,value:this.props.value,onChange:this.props.onChange,placeholder:this.props.placeholder}):null}}]),e}(c.a.Component),O=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(s.a)(this,Object(o.a)(e).call(this,t))).state={hover:!1},a}return Object(l.a)(e,t),Object(i.a)(e,[{key:"toggleHover",value:function(){this.setState({hover:!this.state.hover})}},{key:"render",value:function(){var t=this,e={fontSize:void 0==this.props.fontSize?"30px":this.props.fontSize+"px",border:"none",backgroundColor:"rgb(191, 49, 56)",color:"white",width:void 0==this.props.width?"100px":this.props.width+"px",height:"40px",cursor:"pointer",outline:"none",borderRadius:"4px",display:"block",margin:"0px auto",marginTop:"30px"};return this.state.hover&&(e.backgroundColor="#AB1B23"),!0===this.props.hide?null:this.props.loading?b("img",{src:"/images/loading-white.gif",style:{width:"30px",display:"block",margin:"0px auto"}}):b("div",null,b("button",{onMouseLeave:function(){return t.toggleHover()},onMouseEnter:function(){return t.toggleHover()},style:e,onClick:this.props.onClick},this.props.buttonText))}}]),e}(c.a.Component);e.default=g},u6Hu:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return a("O2ls")}])}},[["u6Hu",0,2,1,12]]]);