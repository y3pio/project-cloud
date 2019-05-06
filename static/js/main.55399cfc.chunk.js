(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(3),s=a.n(r),o=(a(15),a(4)),u=a(5),c=a(7),l=a(6),d=a(8),m=a(1),h=(a(17),function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).toggleButton=function(e){switch(e){case"security":a.setState({security:!a.state.security});break;case"quality":a.setState({quality:!a.state.quality});break;case"backup":a.setState({backup:!a.state.backup})}},a.handleInputChange=function(e,t){switch(t){case"requestName":a.setState({requestName:e.target.value});break;case"postTarget":a.setState({postTarget:e.target.value})}},a.handleSliderChange=function(e){a.setState({duration:e.target.value})},a.postData=function(){var e=a.state,t=e.requestName,n=e.quality,i=e.security,r=e.endTime,s=e.backup;fetch(a.state.postTarget,{method:"POST",mode:"no-cors",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({requestName:t,quality:n,security:i,backup:s,endTime:r.unix()})})};var n=m();return a.state={intervalId:void 0,requestName:void 0,duration:5,config:0,endTime:n,quality:!1,security:!1,backup:!1,postTarget:"http://localhost:3000/dc1"},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setInterval(function(){var t=m().add(e.state.duration,"s");e.setState({endTime:t})},500);this.setState({intervalID:t})}},{key:"componentWillUnmount",value:function(){this.state.intervalID&&clearInterval(this.state.intervalID)}},{key:"render",value:function(){var e=this,t=this.state,a=t.requestName,n=t.quality,r=t.security,s=t.backup,o=t.postTarget,u=a&&(n||r);return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Resource Request Dashboard"),i.a.createElement("div",{id:"form"},i.a.createElement("div",{id:"request-name"},i.a.createElement("div",null,"Request Name"),i.a.createElement("input",{placeholder:" Enter your request name here...",onChange:function(t){return e.handleInputChange(t,"requestName")}})),i.a.createElement("div",{id:"time-slider"},"Duration (seconds):",i.a.createElement("div",{id:"duration-label"},i.a.createElement("div",null,parseFloat(Math.round(100*this.state.duration)/100).toFixed(2)),i.a.createElement("div",null,"Resource reserved until: "+this.state.endTime.format("MMMM Do YYYY, h:mm:ss a"))),i.a.createElement("input",{id:"slider",type:"range",min:"5",max:"60",value:this.state.duration,onChange:this.handleSliderChange,step:".5"})),i.a.createElement("div",{id:"spec-selection"},i.a.createElement("button",{id:"btn-quality",className:n?"selected":"",onClick:function(){return e.toggleButton("quality")}},"Quality ",n?"\u2713":""),i.a.createElement("button",{id:"btn-security",className:r?"selected":"",onClick:function(){return e.toggleButton("security")}},"Security ",r?"\u2713":""),i.a.createElement("button",{id:"btn-backup",className:s?"selected":"",onClick:function(){return e.toggleButton("backup")}},"Backup ",s?"\u2713":"")),i.a.createElement("div",{id:"submit-button"},i.a.createElement("button",{className:u?"btn-enabled":"btn-disabled",disabled:!u,onClick:this.postData},u?"Submit Request":"Please fill in all the required fields...")),i.a.createElement("div",{id:"post-target"},i.a.createElement("input",{value:o,placeholder:"Target destination here... (i.e https://localhost:3000/dc1)",onChange:function(t){return e.handleInputChange(t,"postTarget")}}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.55399cfc.chunk.js.map