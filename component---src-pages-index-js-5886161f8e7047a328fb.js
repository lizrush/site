(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{158:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=(n(41),n(95)),s=n.n(i),A=n(186),o=n.n(A);function c(e){var t=e.color,n=e.children,a=s()(e,["color","children"]);return r.a.createElement("a",Object.assign({className:o.a[t],rel:"noopener noreferrer",target:"_blank"},a),n)}var l=n(167),u=n(187),p=n(160),d=n(171),f=n.n(d);function m(){return r.a.createElement(p.b,{query:"2270834752",render:function(e){return r.a.createElement(f.a,{fluid:e.headshot.childImageSharp.fluid})},data:u})}var h=n(162),E=n(165),g=n(188),y=n.n(g),b=n(172),v=n.n(b),w=(n(189),n(191));function B(){return r.a.createElement(p.b,{query:"2348930644",render:function(e){return r.a.createElement(f.a,{fixed:e.sparklesEmoji.childImageSharp.fixed})},data:w})}function j(e){var t=e.children,n=Object(a.useState)(!1),i=n[0],s=n[1],A=Object(a.useState)(0),o=A[0],c=A[1],l=Object(a.useState)(0),u=l[0],p=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:i?v.a.toggleOn:v.a.toggleOff,onClick:function(e){c(e.pageX),p(e.pageY),s(!i)}},r.a.createElement(B,null)),i&&t(o,u))}n(192),n(199);var x=n(178),Q=n.n(x),k=n(8),C=n.n(k),N=(n(200),5e3),O=30,Y=-1,S=function(e){function t(t){var n;return(n=e.call(this,t)||this).reset(),n}C()(t,e);var n=t.prototype;return n.shouldComponentUpdate=function(e){return this.props.step!==e.step},n.componentDidUpdate=function(){this.isOff?this.reset():(this.adjustPosition(),this.maybeDispose())},n.render=function(){return this.isOff?null:this.props.step>150?this.star:this.tinyStar},n.reset=function(){var e;this.color=((e=[])[0]=255,e[1]=Math.floor(256*Math.random()),e[2]=Math.floor(Math.random()*(256-e[1]/2)),e.sort(function(){return.5-Math.random()}),"rgb("+e.join(",")+")"),this.left=this.props.x,this.top=this.props.y+1},n.adjustPosition=function(){this.top+=this.topAdjustment,this.left+=this.leftAdjustment},n.maybeDispose=function(){this.isOutOfBounds&&this.props.dispose()},Q()(t,[{key:"star",get:function(){return r.a.createElement("div",{className:v.a.star,style:{clip:this.props.step>225?"rect(0, 5px, 5px, 0)":"rect(1px, 4px, 4px, 1px)",left:this.left+"px",top:this.top+"px"}},r.a.createElement("div",{className:v.a.horizontalStarLine,style:this.backgroundColor}),r.a.createElement("div",{className:v.a.verticalStarLine,style:this.backgroundColor}))}},{key:"tinyStar",get:function(){var e=this.props.step<=75?"1px":"2px";return r.a.createElement("div",{className:v.a.tinyStar,style:Object.assign({},this.backgroundColor,{height:e,left:this.left+"px",top:this.top+"px",width:e})})}},{key:"isOutOfBounds",get:function(){return this.top>window.innerHeight||this.left>window.innerWidth||this.top<0||this.left<0}},{key:"topAdjustment",get:function(){return 1+3*Math.random()}},{key:"leftAdjustment",get:function(){return(this.props.n%10-2)/5+Math.sin((Math.random()/2+this.props.step)/8)*((this.props.step+3*Math.random())/(300+3*Math.random()))}},{key:"isOff",get:function(){return this.props.step<=Y||this.isOutOfBounds}},{key:"backgroundColor",get:function(){return{backgroundColor:this.color}}}]),t}(r.a.Component);var D=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).steps=new Int16Array(N).fill(Y),t.progress=0,t.animate=function(e){e-t.progress>O&&(t.progress=e,t.step(),t.forceUpdate()),t.id=requestAnimationFrame(t.animate)},t}C()(t,e);var n=t.prototype;return n.shouldComponentUpdate=function(e){return this.props.x===e.x&&this.props.y===e.y||this.enableOneStar(),!1},n.componentDidMount=function(){this.id=requestAnimationFrame(this.animate)},n.componentWillUnmount=function(){cancelAnimationFrame(this.id)},n.render=function(){return r.a.createElement("div",{className:v.a.animator},this.stars)},n.step=function(){for(var e=0;e<this.steps.length;e++)this.steps[e]>Y&&this.steps[e]--},n.enableOneStar=function(){var e=this.steps.indexOf(Y);e>=0&&(this.steps[e]=300)},Q()(t,[{key:"stars",get:function(){for(var e=this,t=[],n=function(n){if(e.steps[n]<=Y)return"continue";t.push(r.a.createElement(S,{key:n,step:e.steps[n],dispose:function(){e.steps[n]=Y},n:n,x:e.props.x,y:e.props.y}))},a=0;a<this.steps.length;a++)n(a);return t}}]),t}(r.a.Component);function M(){var e=Object(a.useState)(0),t=e[0],n=e[1];return Object(a.useEffect)(function(){var e;return e=requestAnimationFrame(function t(){n(Math.random()*window.innerWidth),e=requestAnimationFrame(t)}),function(){return cancelAnimationFrame(e)}},[]),r.a.createElement(D,{x:t,y:0})}function I(e){var t=Object(a.useState)(e.x),n=t[0],i=t[1],s=Object(a.useState)(e.y),A=s[0],o=s[1];return Object(a.useEffect)(function(){function e(e){i(e.x+window.pageXOffset),o(e.y+window.pageYOffset)}return document.addEventListener("mousemove",e),function(){return document.removeEventListener("mousemove",e)}},[]),r.a.createElement(D,{x:n,y:A})}function R(){return r.a.createElement("div",{"aria-hidden":!0,className:v.a.sparkles},r.a.createElement(y.a,{query:"(pointer: fine)"},r.a.createElement(j,null,function(e,t){return r.a.createElement(I,{x:e,y:t})})),r.a.createElement(y.a,{query:"(pointer: coarse), (pointer: none)"},r.a.createElement(M,null)))}var P=n(202),z=n.n(P);function F(){return r.a.createElement(h.a,null,r.a.createElement(E.a,{title:"Home",keywords:["lizmrush","liz rush"]}),r.a.createElement("div",{className:z.a.gridContainer},r.a.createElement(R,null),r.a.createElement("div",{className:z.a.imageCropper},r.a.createElement(m,null)),r.a.createElement("div",{className:z.a.content},r.a.createElement("h1",null,"Hi, I'm Liz Rush."),r.a.createElement("p",null,"I live in Seattle and I'm currently working as the"," ",r.a.createElement(c,{color:"pink",href:"https://www.seattleagainstslavery.org"},"Anti-Trafficking Technology Director at Seattle Against Slavery"),"."),r.a.createElement("p",null,"Previously, I ran a"," ",r.a.createElement(c,{color:"yellow",href:"https://archaicfuture.com"},"web consulting agency called Archaic Future"),". I've also worked as an iOS developer and full-stack web developer at various startups."),r.a.createElement("p",null,"I serve on the"," ",r.a.createElement(c,{color:"pink",href:"http://www.adadevelopersacademy.org/"},"Ada Developers Academy")," ","Board of Advisors."),r.a.createElement("p",null,"You can contact me at"," ",r.a.createElement(c,{color:"yellow",href:"mailto:liz@lizmrush.com"},"liz@lizmrush.com"),"."),r.a.createElement(l.a,{color:"pink",to:"/blog"},"blog posts ⟶"))))}n.d(t,"default",function(){return F})},160:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),i=n(5),s=n.n(i),A=n(40),o=n.n(A);n.d(t,"a",function(){return o.a});n(161);var c=r.a.createContext({});function l(e){var t=e.staticQueryData,n=e.data,a=e.query,i=e.render,s=n?n.data:t[a]&&t[a].data;return r.a.createElement(r.a.Fragment,null,s&&i(s),!s&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,n=e.query,a=e.render,i=e.children;return r.a.createElement(c.Consumer,null,function(e){return r.a.createElement(l,{data:t,query:n,render:a||i,staticQueryData:e})})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},161:function(e,t,n){var a;e.exports=(a=n(164))&&a.default||a},162:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(163),r=n(160),i=n(5),s=n.n(i),A=n(0),o=n.n(A);n(168),n(169);function c(e){var t=e.children;return o.a.createElement(r.b,{query:"2994927498",render:function(){return o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"2.45rem 1.5rem"}},t)},data:a})}c.propTypes={children:s.a.node.isRequired}},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Liz Rush"}}}}},164:function(e,t,n){"use strict";n.r(t);n(41);var a=n(0),r=n.n(a),i=n(5),s=n.n(i),A=n(64),o=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(A.a,Object.assign({location:t,pageResources:n},n.json)):null};o.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=o},165:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(166),r=n(0),i=n.n(r),s=n(5),A=n.n(s),o=n(170),c=n.n(o),l=n(160);function u(e){var t=e.description,n=e.lang,r=e.meta,s=e.keywords,A=e.title;return i.a.createElement(l.b,{query:p,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:n},title:A,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:A},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:A},{name:"twitter:description",content:a}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:a})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:A.a.string,lang:A.a.string,meta:A.a.array,keywords:A.a.arrayOf(A.a.string),title:A.a.string.isRequired};var p="1025518380"},166:function(e){e.exports={data:{site:{siteMetadata:{title:"Liz Rush",description:"this is Liz Rush's personal website",author:"@lizmrush"}}}}},167:function(e,t,n){"use strict";n.d(t,"a",function(){return l});n(41);var a=n(95),r=n.n(a),i=n(0),s=n.n(i),A=n(160),o=n(173),c=n.n(o);function l(e){var t=e.color,n=e.children,a=r()(e,["color","children"]);return s.a.createElement(A.a,Object.assign({className:c.a[t]},a),n)}},187:function(e){e.exports={data:{headshot:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/2gAMAwEAAhADEAAAAe1juzF9NEhCZbSK/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIAEQMQEyEi/9oACAEBAAEFAiaVXdckyDwVYm7g71xIJ//EABURAQEAAAAAAAAAAAAAAAAAABEg/9oACAEDAQE/ASP/xAAVEQEBAAAAAAAAAAAAAAAAAAARIP/aAAgBAgEBPwFj/8QAHhAAAQQBBQAAAAAAAAAAAAAAAQACEBIDITFBUaH/2gAIAQEABj8Ctym2yBwd5BTD1rAMbL//xAAbEAEAAwADAQAAAAAAAAAAAAABABEhEDFxYf/aAAgBAQABPyEsJjGA2H0Hbhmj2V4q1oAWTJu0lUNQwHr7P//aAAwDAQACAAMAAAAQazA+/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQAQETH/2gAIAQMBAT8QAm0cmT//xAAYEQEAAwEAAAAAAAAAAAAAAAABABARMf/aAAgBAgEBPxBQ5T2az//EAB0QAQEAAgIDAQAAAAAAAAAAAAERACExQVFhccH/2gAIAQEAAT8Q3YCU1z+Y4NtAKGpOtJlykVqAFeDxiZkI8xnPzLApjjiFZ7LgB6fMNY7tVq8r2+8//9k=",aspectRatio:1,src:"/static/dc7e429c445f02ed69750114668ebf15/d278e/avi.jpg",srcSet:"/static/dc7e429c445f02ed69750114668ebf15/a911e/avi.jpg 50w,\n/static/dc7e429c445f02ed69750114668ebf15/954df/avi.jpg 100w,\n/static/dc7e429c445f02ed69750114668ebf15/d278e/avi.jpg 200w",sizes:"(max-width: 200px) 100vw, 200px"}}}}}},191:function(e){e.exports={data:{sparklesEmoji:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEQElEQVQ4y41UC0xTZxQ+FwroImVOMp6FjVK6thToHLSlhaK0yqvtUBEsImxA2BwRAw7FbCEoiaCQLZBGh84h7qHiDCJsPJeYCQOFoIsTNsZjagBHhCGClsHOev9Lhw+27CS333fP+c93z/+f8xekUinQ9u2eTWAxHDq9xBHND2eRi8zP+wyv9Id/tdSIAAajA1mH0jaspPlC3R5wd3d7Qpht/l3H8PNBBFVh65YXvFKsZbBU59x7PD6YJDVkUiKRi1koG/rK3iTx7hKtY3tRDI/EW9OA++orz4uhMRBwooSief/Z7QGjdYadTEX7ic/VIxQmPtMy8fJI8Z0K7Q4Sb0+muK4vLl/h4NktNjTe78p8b/ZqZAvNJ1szbPalvE7iczVRVjQOfxoeMlmt/4gI3k6g/PnOkJiY+GyJAElvBNoPVa5/Z/6W9iGOqfBBS3hdS36c2BylENNhoVVDBMe/VhlmWqKbmB1spkSejv80js1mM3qdH4sh/S1nOoG6d9Gj2NQmGa8/rKRbSJ0plVAnczcA9iaw6LVTV+I+NP2YMmim1oidYExyg4YcPpxIFMCuCAHwZKrFIq/6kAp6SznB41V8I/PVxVinB4WLLzM3tn2Fd1KxseSQJ7PGYI39YsBbqqUdt32phksZHkyX93p7DhRLttN81LiR1X0hgbKsu1cbF78wlDCNE9H46NrW82degzVPntzhdDXs353KvIR7OxFMDubbVSQrXVNiQ+0vF8b4DpTFxE5e0Jf/2bNlEEd1iHdDcGFYtkCwS/bw8UX/tolyccnPeWv11ZlB5hniUyAWm8/eefEzLAbkQi9rWGnPOhgvYTcX+vnebdQVmAbfnsLfdWjql83jbQVOd6ztH6j02d20j+tbaeA5Jis5duDgBeDn5weWM0JMArxsIPyHrEC36izNCsuWOstk4abhzbM4qsTJRp/vXQDYy86gnZ0tPGgsBDxH3zgHwE9CSIMG8oWx1wskzK3AXFsa/2hXnMMRBXYXOGiI/6bY5mY+j6pPE0BuFBfASfTMSF5b4hNfcMt+O8GLYARftiZz2CD74FGHdK5mE5AuXy9woQ7u5INGsgZ4PB6TKBAIYLY1DzAHQB0tW1GbE+N1v05/YL5P89fcDfXAyOfa1EsF8URgtFZpmPlO/quZkopr33UCx9WrmD5YTCgUwjcHIgFPBYNaI2Tl60PsO4xS1ePBbWPTP8U112eLhMezNzqQu1ytUk7WBNUwVRdRHOdV8L9trEZa9MspSRSTrCDz2GOM5A0fDctkfEdAwLEHDofzdKJcLoeqXeZ/HCwGb19PmD6tJ03pOxYR01MW7kvzriI18dXlKFY37w0lPhzJAh8Pp+crsbKyImNDURR4uTvC1Mlk4q/IUL50ZEfwCzQvSQ0jPn+J0EquCLCx5Hp7c/97mzqdjul2U95S50fKCdrytj49EVi1rMbfOJmnOVRaW/QAAAAASUVORK5CYII=",width:80,height:80,src:"/static/4f9383f4c607fa8ca1b28b56bca881f6/8b091/sparkles.png",srcSet:"/static/4f9383f4c607fa8ca1b28b56bca881f6/8b091/sparkles.png 1x,\n/static/4f9383f4c607fa8ca1b28b56bca881f6/1e576/sparkles.png 1.5x"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-5886161f8e7047a328fb.js.map