(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){"use strict";n.r(e);for(var o=n(0),a=n.n(o),r=n(3),c=n.n(r),s=n(1),l=n(4),u=n(5),i=n(7),d=n(6),g=n(8),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],f=new Array(10),b=0;b<f.length;b+=1)f[b]=b;var h=function(t){function e(){var t,n;Object(l.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(i.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).state={isStarted:!1,goods:[].concat(p),selectGoods:[].concat(p),selectedValue:0,newOptionsArr:[].concat(f)},n.viewList=function(){n.setState({isStarted:!0})},n.reverseGoods=function(){n.setState(function(t){return{goods:Object(s.a)(t.goods).reverse()}})},n.sort=function(){n.setState(function(t){return{goods:Object(s.a)(t.goods).sort()}})},n.reset=function(){n.setState({goods:[].concat(p),selectedValue:1})},n.sortLength=function(){n.setState(function(t){return{goods:Object(s.a)(t.goods).sort(function(t,e){return t.length-e.length})}})},n.optionValue=function(t){n.setState({selectedValue:t.target.value}),n.setState(function(t){return{goods:Object(s.a)(t.selectGoods).filter(function(e){return e.length-1>=t.selectedValue})}})},n}return Object(g.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this,e=this.state,n=e.goods,o=e.selectedValue,r=e.isStarted,c=e.newOptionsArr;return a.a.createElement("section",{className:"goods"},r?a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"List of goods"),a.a.createElement("button",{type:"button",onClick:this.reverseGoods},"Reverse"),a.a.createElement("button",{type:"button",onClick:this.sort},"Sort alphabetically"),a.a.createElement("button",{type:"button",onClick:this.reset},"Reset"),a.a.createElement("button",{type:"button",onClick:this.sortLength},"Sort by length"),a.a.createElement("select",{value:o,onChange:function(e){return t.optionValue(e)}},c.map(function(t,e){return a.a.createElement("option",{value:e,key:t},t+1)})),a.a.createElement("ul",null,n.map(function(t){return a.a.createElement("li",{key:t},t)}))):a.a.createElement("button",{type:"button",onClick:this.viewList},"Start"))}}]),e}(a.a.Component);c.a.render(a.a.createElement(h,null),document.getElementById("root"))},9:function(t,e,n){t.exports=n(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.597192be.chunk.js.map