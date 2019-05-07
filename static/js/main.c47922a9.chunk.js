(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(3),o=a.n(r),u=(a(15),a(4)),s=a(5),c=a(7),l=a(6),d=a(8),m=a(1),p=(a(17),function(e){function t(e){var a;Object(u.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).toggleButton=function(e){switch(e){case"security":a.setState({security:!a.state.security});break;case"quality":a.setState({quality:!a.state.quality});break;case"backup":a.setState({backup:!a.state.backup})}},a.handleInputChange=function(e,t){switch(t){case"requestName":a.setState({requestName:e.target.value});break;case"postTarget":a.setState({postTarget:e.target.value})}},a.handleSliderChange=function(e){a.setState({duration:e.target.value})},a.postData=function(){var e=a.state,t=e.requestName,n=e.quality,i=e.security,r=e.endTime,o=e.backup,u=e.duration;fetch("".concat(a.state.postTarget,"/request"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({requestName:t,quality:n,security:i,backup:o,duration:u,endTime:r.unix()})}).then(function(e){return e.json()}).then(function(e){console.log("Request Response:",e),setTimeout(function(){a.setState({allocationState:e.allocation,requestJobID:e.id})},600)}),a.setState({allocationState:"requesting"})},a.resetData=function(){var e=m();a.setState({intervalId:void 0,requestName:void 0,duration:5,endTime:e,quality:!1,security:!1,backup:!1,requestJobID:-1,allocationState:"draft"})},a.renderFormContent=function(){var e=a.state,t=e.quality,n=e.security,r=e.backup,o=e.allocationState,u=e.requestJobID;return a.isAllocatedOrQueued(u,o)?null:i.a.createElement("div",null,i.a.createElement("div",{id:"request-name"},i.a.createElement("div",null,"Request Name"),i.a.createElement("input",{id:"request-name-input",placeholder:" Enter your request name here...",onChange:function(e){return a.handleInputChange(e,"requestName")}})),i.a.createElement("div",{id:"time-slider"},"Duration (seconds):",i.a.createElement("div",{id:"duration-label"},i.a.createElement("div",null,parseFloat(Math.round(100*a.state.duration)/100).toFixed(2)),i.a.createElement("div",null,"Resource reserved until: "+a.state.endTime.format("MMMM Do YYYY, h:mm:ss a"))),i.a.createElement("input",{id:"slider",type:"range",min:"5",max:"60",value:a.state.duration,onChange:a.handleSliderChange,step:".5"})),i.a.createElement("div",{id:"spec-selection"},i.a.createElement("button",{id:"btn-quality",className:t?"selected":"",onClick:function(){return a.toggleButton("quality")}},"Quality ",t?"\u2713":""),i.a.createElement("button",{id:"btn-security",className:n?"selected":"",onClick:function(){return a.toggleButton("security")}},"Security ",n?"\u2713":""),i.a.createElement("button",{id:"btn-backup",className:r?"selected":"",onClick:function(){return a.toggleButton("backup")}},"Backup ",r?"\u2713":"")))},a.renderButtons=function(){var e=a.state,t=e.requestName,n=e.quality,r=e.security,o=e.allocationState,u=e.requestJobID,s=t&&(n||r);return a.isAllocatedOrQueued(u,o)?i.a.createElement("div",{id:"submit-button"},i.a.createElement("button",{id:"redirect-button",className:"queued"===o?"btn-cancel":"",onClick:function(){return a.redirectOrCancel(u,o)}},"queued"===o?"Job id:".concat(u," queued. Click to Cancel Request"):"Resource allocated on: "+o),"queued"===o?null:i.a.createElement("button",{id:"reset-button",onClick:a.resetData},"Request New Resources")):i.a.createElement("div",{id:"submit-button"},i.a.createElement("button",{className:s&&"requesting"!==o?"btn-enabled":"btn-disabled",disabled:!s||"requesting"===o,onClick:a.postData},s&&"requesting"===!o?"Submit Request":"requesting"===o?"Requesting...":"Please fill in all the required fields..."))},a.isAllocatedOrQueued=function(e,t){return("west1"===t||"west2"===t||"north1"===t||"north2"===t||"east1"===t||"east2"===t||"queued"===t)&&e>0},a.redirectOrCancel=function(e,t){"queued"===t?(a.killRequest(e),a.resetData()):window.open("http://www.google.com")},a.killRequest=function(e){fetch("".concat(a.state.postTarget,"/kill"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:e})})};var n=m();return a.state={intervalId:void 0,requestName:void 0,duration:5,endTime:n,quality:!1,security:!1,backup:!1,postTarget:"http://pcvm2-15.lan.sdn.uky.edu:3000",requestJobID:-1,allocationState:"draft"},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setInterval(function(){var t=m().add(e.state.duration,"s");e.setState({endTime:t})},500);this.setState({intervalID:t})}},{key:"componentWillUnmount",value:function(){this.state.intervalID&&clearInterval(this.state.intervalID)}},{key:"render",value:function(){var e=this,t=this.state.postTarget;return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Resource Request Dashboard"),i.a.createElement("div",{id:"form"},this.renderFormContent(),this.renderButtons(),i.a.createElement("div",{id:"post-target"},i.a.createElement("input",{value:t,placeholder:"Target destination here... (i.e https://localhost:3000/dc1)",onChange:function(t){return e.handleInputChange(t,"postTarget")}}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.c47922a9.chunk.js.map