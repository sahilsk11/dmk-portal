(this["webpackJsonpdmk-portal"]=this["webpackJsonpdmk-portal"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(7),i=a.n(r),c=(a(13),a(1)),l=a(2),o=a(4),h=a(3),m=a(5),d=(a(14),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(p,null),s.a.createElement(u,null))}}]),t}(s.a.Component)),p=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"nav-container"},s.a.createElement("img",{src:"./icon.png",className:"nav-img"}))}}]),t}(s.a.Component),u=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={apiKey:"keyjYTQNlzdmReX94",baseURL:"https://api.airtable.com/v0/appwaUv9OXdJ4UNpy",eventsData:[],newsData:[],upcomingData:[],spotlightData:{},brotherData:{},brotherName:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getEventData(),this.getNewsData(),this.getUpcomingData(),this.getSpotlightData(),this.getBrotherData()}},{key:"getBrotherData",value:function(){var e=this,t=this.state.baseURL+"/brother_data?api_key="+this.state.apiKey;fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({brotherData:t.records[0].fields,brotherName:t.records[0].fields.first_name})}))}},{key:"getSpotlightData",value:function(){var e=this,t=this.state.baseURL+"/spotlight?api_key="+this.state.apiKey;fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({spotlightData:t.records[0].fields})}))}},{key:"getUpcomingData",value:function(){var e=this,t=[],a=this.state.baseURL+"/upcoming?api_key="+this.state.apiKey+"&sort%5B0%5D%5Bfield%5D=date_added&sort%5B0%5D%5Bdirection%5D=desc";fetch(a).then((function(e){return e.json()})).then((function(a){for(var n=0;n<a.records.length;n++)t.push(a.records[n].fields);e.setState({upcomingData:t})}))}},{key:"getNewsData",value:function(){var e=this,t=[],a=this.state.baseURL+"/news?api_key="+this.state.apiKey+"&sort%5B0%5D%5Bfield%5D=date_added&sort%5B0%5D%5Bdirection%5D=desc";fetch(a).then((function(e){return e.json()})).then((function(a){for(var n=0;n<a.records.length;n++)t.push(a.records[n].fields);e.setState({newsData:t})}))}},{key:"getEventData",value:function(){var e=this,t=[],a=this.state.baseURL+"/events?api_key="+this.state.apiKey+"&sort%5B0%5D%5Bfield%5D=date";fetch(a).then((function(e){return e.json()})).then((function(a){for(var n=0;n<a.records.length;n++)t.push(a.records[n].fields);e.setState({eventsData:t})}))}},{key:"getEventData",value:function(){var e=this,t=[],a=this.state.baseURL+"/events?api_key="+this.state.apiKey+"&sort%5B0%5D%5Bfield%5D=date";fetch(a).then((function(e){return e.json()})).then((function(a){for(var n=0;n<a.records.length;n++)t.push(a.records[n].fields);e.setState({eventsData:t})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"content-container"},s.a.createElement("div",{className:"column"},s.a.createElement(f,{title:"Welcome \ud83d\udc4b",height:"7%"}),s.a.createElement(f,{title:"Chapter Attendance \ud83d\ude4c",height:"45%"},s.a.createElement(v,{data:this.state.brotherData,apiKey:this.state.apiKey})),s.a.createElement(f,{title:"Brother Spotlight \ud83e\udd20",height:"40%"},s.a.createElement(g,{data:this.state.spotlightData}))),s.a.createElement("div",{className:"column"},s.a.createElement(f,{title:"Coming Up \u26a1\ufe0f",height:"44.7%"},s.a.createElement(b,{data:this.state.upcomingData})),s.a.createElement(f,{title:"News Panel \ud83d\udcf0",height:"50%"},s.a.createElement(b,{data:this.state.newsData}))),s.a.createElement("div",{className:"column"},s.a.createElement(f,{title:"Upcoming Events \ud83d\udce3",height:"67.7%"},s.a.createElement(j,{data:this.state.eventsData})),s.a.createElement(f,{title:"Drop us a Line \ud83e\udd16",height:"27%"},s.a.createElement(k,null))))}}]),t}(s.a.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"content-box",style:{height:this.props.height}},s.a.createElement("h3",{className:"box-title"},this.props.title),s.a.createElement("div",{className:"box-content"},this.props.children))}}]),t}(s.a.Component),v=function(e){function t(e){return Object(c.a)(this,t),Object(o.a)(this,Object(h.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"checkIn",value:function(){console.log("clicked");var e="https://api.airtable.com/v0/appwaUv9OXdJ4UNpy/attendance?api_key="+this.props.apiKey;fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:[{fields:{Name:"Sydney8","check-in-time":"2020-01-11T01:31:00.000Z"}}]})}).then((function(e){return e.json()})).then((function(e){console.log(e.records)}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("img",{src:"attendance.png",className:"attendance-graph"}),s.a.createElement("p",null,"We've seen you at ",this.props.data.attendance," out of 5 chapters this semester."),s.a.createElement("button",{onClick:function(){return e.checkIn()},className:"check-in-btn"},"check in now"))}}]),t}(s.a.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderWhenReady",value:function(){return void 0!=this.props.data.img?s.a.createElement("div",null,s.a.createElement("img",{className:"spotlight-img",src:this.props.data.img[0].url}),s.a.createElement("p",{className:"brother-description"},this.props.data.content)):null}},{key:"render",value:function(){return s.a.createElement("div",null,this.renderWhenReady())}}]),t}(s.a.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderItems",value:function(){for(var e=[],t=0;t<this.props.data.length;t++)e.push(s.a.createElement(y,{key:t,data:this.props.data[t],img:this.props.data[t].img[0].url}));return e}},{key:"render",value:function(){return s.a.createElement("div",null,this.renderItems())}}]),t}(s.a.Component),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).toggleModal=function(){a.setState({displayModal:!a.state.displayModal})},a.state={displayModal:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(){"#"!=this.props.data.link?window.open(this.props.data.link,"_blank"):(this.toggleModal(),console.log(this.state.displayModal))}},{key:"renderImage",value:function(){var e=this;return void 0!=this.props.img&&""!=this.props.img?s.a.createElement("div",null,s.a.createElement("div",{className:"news-item-container",onClick:function(){return e.handleClick()}},s.a.createElement("div",{className:"item-img-wrapper"},s.a.createElement("img",{className:"item-img",src:this.props.img})),s.a.createElement("div",{className:"item-text-wrapper"},s.a.createElement("p",{className:"item-content"},this.props.data.headline))),s.a.createElement(E,{display:this.state.displayModal,closeModal:this.toggleModal},s.a.createElement("img",{src:this.props.img,className:"modal-img"}),s.a.createElement("div",{className:"modal-text-wrapper"},s.a.createElement("h2",{className:"modal-title"},this.props.data.headline),s.a.createElement("p",{className:"modal-text"},this.props.data.description)),s.a.createElement("button",{className:"modal-btn",onClick:this.toggleModal},"close")),s.a.createElement("hr",{className:"hr",width:"70%"})):s.a.createElement("div",null,s.a.createElement("p",null,this.props.data.content),s.a.createElement("hr",{className:"hr",width:"70%"}))}},{key:"render",value:function(){return s.a.createElement("div",null,this.renderImage())}}]),t}(s.a.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.display?s.a.createElement("div",{id:this.props.id,className:"modal"},s.a.createElement("div",{className:"modal-content"},s.a.createElement("span",{className:"close",onClick:this.props.closeModal},"\xd7"),this.props.children)):null}}]),t}(s.a.Component),j=function(e){function t(e){return Object(c.a)(this,t),Object(o.a)(this,Object(h.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderItems",value:function(){for(var e=[],t=this.props.data,a=0;a<t.length;a++)e.push(s.a.createElement(O,{key:a,data:t[a]}));return e}},{key:"render",value:function(){return s.a.createElement("div",{className:"events-container"},this.renderItems())}}]),t}(s.a.Component),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).toggleModal=function(){a.setState({displayModal:!a.state.displayModal})},a.state={displayModal:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"event-wrapper"},s.a.createElement("div",{className:"event-item",onClick:function(){return e.toggleModal()}},s.a.createElement("div",{className:"date-container"},s.a.createElement("p",{className:"month"},this.props.data.month),s.a.createElement("p",{className:"day"},this.props.data.day)),s.a.createElement("div",null,s.a.createElement("h5",{className:"event-name"},this.props.data.name),s.a.createElement("p",{className:"event-time"},this.props.data.time)))),s.a.createElement(E,{display:this.state.displayModal,closeModal:this.toggleModal},s.a.createElement("div",{className:"modal-text-wrapper"},s.a.createElement("h2",{className:"modal-title"},this.props.data.name),s.a.createElement("p",{className:"modal-text"},this.props.data.description)),s.a.createElement("button",{className:"modal-btn",onClick:this.toggleModal},"close")))}}]),t}(s.a.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"input-wrapper"},s.a.createElement("textarea",{className:"slack-input",placeholder:"I'm hungry..."}),s.a.createElement("button",{className:"slack-send",onClick:function(){return alert("This doesn't do anything yet :(")}},"send"))}}]),t}(s.a.Component),N=d;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.176ab59b.chunk.js.map