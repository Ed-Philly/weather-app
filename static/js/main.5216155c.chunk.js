(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],[,,,,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(3),c=t(0),r=t.n(c);t(16);a.default=function(){var e=Object(c.useState)(0),a=Object(n.a)(e,2),t=a[0],o=a[1],l=Object(c.useState)(90),i=Object(n.a)(l,2),s=i[0],m=i[1],p=Object(c.useState)(0),u=Object(n.a)(p,2),d=u[0],g=u[1];Object(c.useEffect)((function(){setInterval((function(){var e=new Date,a=(e.getHours()+11)%12+1,t=6*e.getMinutes(),n=6*e.getSeconds();o(30*a),m(t),g(n)}),1e3)}),[d]);var b={transform:"rotate(".concat(t,"deg)")},f={transform:"rotate(".concat(s,"deg)")},E={transform:"rotate(".concat(d,"deg)")};return r.a.createElement("div",{className:"clock"},r.a.createElement("div",{className:"wrap"},r.a.createElement("span",{className:"hour",style:b}),r.a.createElement("span",{className:"minute",style:f}),r.a.createElement("span",{className:"second",style:E}),r.a.createElement("span",{className:"dot"})))}},,,,,,function(e,a,t){},,,function(e,a,t){e.exports=t(68)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){var n={"./clock":10,"./clock.css":16,"./clock.jsx":10,"./italy-bg-1.jpeg":39,"./italy-bg-2.jpeg":40,"./italy-bg-3.jpeg":41,"./italy-bg-5.jpeg":42,"./london-bg-1.jpeg":43,"./london-bg-2.jpeg":44,"./london-bg-3.jpeg":45,"./london-bg-4.jpeg":46,"./london-bg-5.jpeg":47,"./london-bg-6.jpeg":48,"./london-bg-7.jpeg":49,"./london-bg-8.jpeg":50,"./london-bg-9.jpeg":51,"./paris-bg-1.jpeg":52,"./paris-bg-2.jpeg":53,"./paris-bg-3.jpeg":54,"./paris-bg-4.jpeg":55,"./paris-bg-5.jpeg":56,"./paris-bg-6.jpeg":57,"./paris-bg-7.jpeg":58,"./rome-bg-1.jpeg":59,"./rome-bg-2.jpeg":60,"./rome-bg-3.jpeg":61,"./rome-bg-4.jpeg":62,"./rome-bg-5.jpeg":63,"./rome-bg-7.jpeg":64};function c(e){var a=r(e);return t(a)}function r(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=r,e.exports=c,c.id=38},function(e,a,t){e.exports=t.p+"static/media/italy-bg-1.d263b0e0.jpeg"},function(e,a,t){e.exports=t.p+"static/media/italy-bg-2.6ccd3147.jpeg"},function(e,a,t){e.exports=t.p+"static/media/italy-bg-3.535f3b03.jpeg"},function(e,a,t){e.exports=t.p+"static/media/italy-bg-5.beb210aa.jpeg"},function(e,a,t){e.exports=t.p+"static/media/london-bg-1.14d86749.jpeg"},function(e,a,t){e.exports=t.p+"static/media/london-bg-2.02b47bcc.jpeg"},function(e,a,t){e.exports=t.p+"static/media/london-bg-3.db0f8c08.jpeg"},function(e,a,t){e.exports=t.p+"static/media/london-bg-4.48457042.jpeg"},function(e,a,t){e.exports=t.p+"static/media/london-bg-5.453dbe2a.jpeg"},function(e,a,t){e.exports=t.p+"static/media/london-bg-6.18dfe309.jpeg"},function(e,a,t){e.exports=t.p+"static/media/london-bg-7.79efb373.jpeg"},function(e,a,t){e.exports=t.p+"static/media/london-bg-8.a73e76ea.jpeg"},function(e,a,t){e.exports=t.p+"static/media/london-bg-9.4eb79e09.jpeg"},function(e,a,t){e.exports=t.p+"static/media/paris-bg-1.e3c9cb3b.jpeg"},function(e,a,t){e.exports=t.p+"static/media/paris-bg-2.4d651617.jpeg"},function(e,a,t){e.exports=t.p+"static/media/paris-bg-3.a8d0137c.jpeg"},function(e,a,t){e.exports=t.p+"static/media/paris-bg-4.6f3b01bc.jpeg"},function(e,a,t){e.exports=t.p+"static/media/paris-bg-5.984d52a9.jpeg"},function(e,a,t){e.exports=t.p+"static/media/paris-bg-6.fb8b95b4.jpeg"},function(e,a,t){e.exports=t.p+"static/media/paris-bg-7.80a65e06.jpeg"},function(e,a,t){e.exports=t.p+"static/media/rome-bg-1.7da9133f.jpeg"},function(e,a,t){e.exports=t.p+"static/media/rome-bg-2.672d20a5.jpeg"},function(e,a,t){e.exports=t.p+"static/media/rome-bg-3.719b596a.jpeg"},function(e,a,t){e.exports=t.p+"static/media/rome-bg-4.cee77e30.jpeg"},function(e,a,t){e.exports=t.p+"static/media/rome-bg-5.61129a4d.jpeg"},function(e,a,t){e.exports=t.p+"static/media/rome-bg-7.d949853e.jpeg"},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(17),o=t.n(r),l=(t(24),t(8)),i=t(1),s=(t(25),t(3)),m=(t(26),t(27),function(){return c.a.createElement("div",{className:"header-container"},c.a.createElement("div",{className:"logo-title"},c.a.createElement("h1",null,c.a.createElement(l.b,{to:"/"},"Weather app"))),c.a.createElement("div",{className:"head-link"},c.a.createElement("div",null,c.a.createElement(l.b,{to:"/resource"},"Resources")),c.a.createElement("div",null,c.a.createElement(l.b,{to:"/about"},"About"))))}),p=(t(33),function(e){return c.a.createElement("div",{className:"search-box"},c.a.createElement("input",{type:"text",className:"search-bar",placeholder:"search...",onChange:e.onChange,value:e.searchString,onKeyPress:e.onEnter}))}),u=(t(34),function(e){var a=e.weather,t=e.date;return c.a.createElement("div",{className:"tempcard-container"},c.a.createElement("div",{className:"location-box"},c.a.createElement("div",{className:"location"},a.name,",",a.sys.country),c.a.createElement("div",{className:"date"},t)),c.a.createElement("div",{className:"weather-box"},c.a.createElement("div",{className:"weather"},a.weather[0].description),c.a.createElement("div",{className:"temp"},Math.round(a.main.temp),c.a.createElement("span",{className:"celsius"},"\u2103 | \u2109"),c.a.createElement("i",{className:"wi wi-owm-".concat(a.weather[0].id),style:{color:"#8860d0",fontSize:"68px",fontWeight:"900",marginLeft:"10px"}}))))}),d=(t(35),function(){return c.a.createElement("div",{className:"footer-container"},c.a.createElement("div",{className:"footer-resource"},c.a.createElement("a",{href:"https://openweathermap.org"},"OpenWeather Api"),c.a.createElement("a",{href:"https://unsplash.com"},"Unsplash"),c.a.createElement("a",{href:"https://erikflowers.github.io/weather-icons/"},"Weather Icons"),c.a.createElement("a",{href:"#",className:"fa fa-linkedin"}),c.a.createElement("span",null,"Eddy edok React weather app")))}),g=(t(36),function(e){var a=e.weather,t=a.main,n=a.wind;return c.a.createElement("div",{className:"tempcard-two-container"},c.a.createElement("div",{className:"label-container"},c.a.createElement("span",{className:"label"},"humidity :"),c.a.createElement("span",null,"".concat(t.humidity,"%"))),c.a.createElement("div",{className:"label-container"},c.a.createElement("span",{className:"label"}," max temp:"),c.a.createElement("span",null,"".concat(t.temp_max))),c.a.createElement("div",{className:"label-container"},c.a.createElement("span",{className:"label"}," min temp:"),c.a.createElement("span",null,"".concat(t.temp_min))),c.a.createElement("div",{className:"label-container"},c.a.createElement("span",{className:"label"}," wind:"),c.a.createElement("span",null,"".concat(n.speed,"mph"))),c.a.createElement("div",{className:"btn-wrapper"},c.a.createElement("button",null,"temperature"),c.a.createElement("button",null,"humidity"),c.a.createElement("button",null,"wind")))}),b=(t(37),t(10)),f=function(e){var a=e.weather.name.toLowerCase(),r=Object(n.useState)(1),o=Object(s.a)(r,2),l=o[0],i=o[1],m="bg-".concat(l,".jpeg"),p=Object(n.useState)(m),u=Object(s.a)(p,2),d=u[0],g=u[1];return Object(n.useEffect)((function(){l>=5&&i(1),g("bg-".concat(l,".jpeg"))}),[l]),c.a.createElement("div",{className:"citycard-container"},-1!==["london","rome","paris","italy"].indexOf(a)?c.a.createElement("img",{className:"fade",src:t(38)("./".concat(a,"-").concat(d)),alt:"city",onLoad:function(){setTimeout((function(){i(l+1)}),3e3)}}):"",c.a.createElement("div",{className:"clock-container"},c.a.createElement(b.default,null)))},E=function(e){var a=j[e.getDay()],t=e.getDate(),n=h[e.getMonth()],c=e.getFullYear();return"".concat(a," ").concat(t," ").concat(n," ").concat(c)},h=["January","February","March","April","May","June","July","August","September","October","November","December"],j=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],v=(t(65),function(e){var a=e.api,t=e.query,r=Object(n.useState)(""),o=Object(s.a)(r,2),l=o[0],i=o[1];return Object(n.useEffect)((function(){fetch("".concat(a.base,"forecast?q=").concat(t,"&units=metric&appid=").concat(a.key)).then((function(e){return e.json()})).then((function(e){return i(e)}))}),[]),c.a.createElement("div",{className:"week-card-container"},l?l.list.map((function(e,a){return c.a.createElement("div",{className:"week-card",key:a},c.a.createElement("div",{className:"date"},function(e){var a=e.split(" "),t=a[0],n=new Date(t),c=j[n.getDay()];return"".concat(c," @ ").concat(a[1])}(e.dt_txt)),c.a.createElement("div",{className:"description"},e.weather[0].description),c.a.createElement("div",{className:"temp"},"Temp : ",c.a.createElement("span",{className:"look-temp"},e.main.temp)),c.a.createElement("div",{className:"temp"},"Max_temp : ",e.main.temp_max),c.a.createElement("div",{className:"temp"},"Min_temp : ",e.main.temp_min),c.a.createElement("div",{className:"temp"},"Feels like : ",e.main.feels_like),c.a.createElement("div",{className:"temp"},"Humidity : ",e.main.humidity))})):c.a.createElement("div",null,"Loading .... Loading ...."))}),y={key:"f392c3531aaf60a86d993059404b7fae",base:"https://api.openweathermap.org/data/2.5/"};var w=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(""),l=Object(s.a)(o,2),i=l[0],m=l[1],b=Object(n.useState)(""),h=Object(s.a)(b,2),j=h[0],w=h[1];return c.a.createElement("div",{className:"app"},c.a.createElement("main",null,c.a.createElement(p,{onChange:function(e){return r(e.target.value)},searchString:t,onEnter:function(e){"Enter"===e.key&&fetch("".concat(y.base,"weather?q=").concat(t,"&units=metric&appid=").concat(y.key)).then((function(e){return e.json()})).then((function(e){e.main?(m(e),r(""),w(""),console.log(e)):(console.log("error",e),m(""),r(""),"404"===e.cod?w(e.message):w("plase enter location e.g london or town e.g barking"))}))}}),j?c.a.createElement("div",{className:"error-message"},j):"","undefined"!=typeof i.main?c.a.createElement("div",{className:"dashboard-top-level-container"},c.a.createElement(u,{weather:i,date:E(new Date)}),c.a.createElement(f,{weather:i}),c.a.createElement(g,{weather:i})):"",c.a.createElement("div",{className:"dashboard-bottom-level-container"},i.name?c.a.createElement(v,{api:y,query:t}):"")),c.a.createElement(d,null))},N=(t(66),function(){return c.a.createElement("div",{className:"about-container"},c.a.createElement("h3",null,"A React weather app"),c.a.createElement("p",null,"I am aspiring to be a software engineer "),c.a.createElement("p",null,"This app is a sample react app using react hooks and weather API's and other useful links to help develop a cool UI feel"),c.a.createElement("h3",null,"App use case"),c.a.createElement("p",null,"user can search for current weather "),c.a.createElement("p",null,"user can see landmarks of selected city , note currently London,Paris,Rome"),c.a.createElement("p",null,"displays forcast for 7days at 3hr interval"),c.a.createElement("p",null,"have a clock to display current time , note only browser specific i.e if you in london it will only show you the current time in london"))}),x=(t(67),function(){return c.a.createElement("div",{className:"resource-container"},c.a.createElement("ul",null,c.a.createElement("li",null,"weather app"),c.a.createElement("li",null,"weather icon"),c.a.createElement("li",null,"font awesome"),c.a.createElement("li",null,"w3c")))}),k=function(){return c.a.createElement(l.a,null,c.a.createElement(m,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:w}),c.a.createElement(i.a,{path:"/resource",component:x}),c.a.createElement(i.a,{exact:!0,path:"/about",component:N})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.5216155c.chunk.js.map