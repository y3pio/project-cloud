(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(3),s=a.n(r),l=(a(15),a(4)),o=a(5),u=a(7),c=a(6),d=a(8),m=a(1),h=(a(17),function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).toggleQuality=function(){a.setState({quality:!a.state.quality})},a.toggleSecurity=function(){a.setState({security:!a.state.security})},a.handleRequestNameChange=function(e){a.setState({requestName:e.target.value})},a.handleSliderChange=function(e){var t=m().add(e.target.value,"s");a.setState({duration:e.target.value,endTime:t})},a.postData=function(){var e=a.state,t=e.requestName,n=e.quality,i=e.security,r=e.endTime;fetch(a.state.postTarget,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({requestName:t,quality:n,security:i,endTime:r.unix()})})};var n=m();return a.state={requestName:void 0,duration:5,config:0,endTime:n,quality:!1,security:!1,postTarget:"http://localhost:3000/dc1"},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.requestName,a=e.quality,n=e.security,r=e.postTarget,s=t&&(a||n);return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Resource Request Dashboard"),i.a.createElement("div",{id:"form"},i.a.createElement("div",{id:"request-name"},"Request Name: ",i.a.createElement("input",{placeholder:" Enter your request name here...",onChange:this.handleRequestNameChange})),i.a.createElement("div",{id:"time-slider"},"Duration (seconds):",i.a.createElement("div",{id:"duration-label"},i.a.createElement("div",null,parseFloat(Math.round(100*this.state.duration)/100).toFixed(2)),i.a.createElement("div",null,"Resource reserved until: "+this.state.endTime.format("MMMM Do YYYY, h:mm:ss a"))),i.a.createElement("input",{id:"slider",type:"range",min:"5",max:"60",value:this.state.duration,onChange:this.handleSliderChange,step:".5"})),i.a.createElement("div",{id:"spec-selection"},i.a.createElement("button",{id:"btn-quality",className:a?"selected":"",onClick:this.toggleQuality},"Quality ",a?"\u2713":""),i.a.createElement("button",{id:"btn-security",className:n?"selected":"",onClick:this.toggleSecurity},"Security ",n?"\u2713":"")),i.a.createElement("div",{id:"submit-button"},i.a.createElement("button",{className:s?"btn-enabled":"btn-disabled",disabled:!s,onClick:this.postData},s?"Submit Request":"Please fill in all the required fields...")),i.a.createElement("div",{id:"post-target"},i.a.createElement("input",{value:r,placeholder:"Target destination here... (i.e https://localhost:3000/dc1)",onChange:this.handleRequestNameChange}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.37891138.chunk.js.map