(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{129:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),o=i(142),r=i(130),c=r.b.div.withConfig({displayName:"Container",componentId:"sc-1x520qe-0"})(["display:flex;flex-direction:column;width:100%;padding-top:80px;box-sizing:border-box;align-items:center;@media (max-width:850px){padding-top:200px;}"]),l=i(4),s=i.n(l),d=i(135),p=r.b.div.withConfig({displayName:"Content",componentId:"sc-1wnteqb-0"})(["display:flex;position:relative;justify-content:space-between;flex-wrap:wrap;padding-bottom:60px;"]),u=i(132),g=r.b.a.withConfig({displayName:"Container",componentId:"sc-3t7sc0-0"})(['display:block;position:relative;width:calc(33% - 15px);height:auto;margin-bottom:30px;cursor:pointer;overflow:hidden;text-decoration:none;&::before{content:"";display:block;padding-top:100%;transition:background-color 0.3s;background-color:rgba(12,16,25,1);background-image:url(',");background-position:center;background-repeat:no-repeat;background-blend-mode:luminosity;background-size:cover;cursor:pointer;}> div:first-child{> div{transition:transform 0.5s;}}&:hover{:before{background-color:rgba(255,255,255,0);}> div:first-child{> div{transform:rotate(-90deg) translateY(10px);}}}@media (max-width:1100px){width:calc(50% - 15px);}@media (max-width:850px){width:100%;:before{background-blend-mode:normal;}}"],function(e){return e.img}),m=r.b.div.withConfig({displayName:"Title__Container",componentId:"sc-7sokue-0"})(["display:flex;position:relative;font-size:30px;line-height:37px;text-transform:uppercase;padding-top:25px;align-items:center;color:#cccccc;cursor:pointer;"]),M=r.b.div.withConfig({displayName:"Text",componentId:"bityaw-0"})(["font-size:30px;line-height:37px;color:#aaaaaa;"]),f=i(147),b=i.n(f),h=r.b.div.withConfig({displayName:"Arrow__Container",componentId:"sc-14ovgqt-0"})(["display:block;height:25px;width:25px;margin:0 10px 3px;background:url(",") no-repeat center;background-size:contain;transform:rotate(-90deg);"],b.a),x=function(e){var t=e.title,i=e.description,n=e.img,o=e.url;return a.a.createElement(g,{href:o,img:Object(u.withPrefix)(n),target:"_blank"},a.a.createElement(m,null,t,a.a.createElement(h,null)),a.a.createElement(M,null,i))};x.propTypes={title:s.a.string.isRequired,description:s.a.string.isRequired,img:s.a.string.isRequired,url:s.a.string.isRequired};var y=x,w=i(141),j=i(148),I=function(e){var t=e.title,i=e.content,n=e.disableBorder,o=e.footer;return a.a.createElement(w.a,{style:{paddingTop:30},disableBorder:n},a.a.createElement(d.a,null,t),a.a.createElement(p,null,i.map(function(e){return a.a.createElement(y,{key:e.title,title:e.title,description:e.description,img:e.img,url:e.url})})),o&&a.a.createElement(j.a,null))};I.propTypes={title:s.a.string.isRequired,content:s.a.arrayOf(s.a.object).isRequired,disableBorder:s.a.bool,footer:s.a.bool},I.defaultProps={disableBorder:!1,footer:!1};var C=I,z=[{title:"Map of GULAG History",description:"Сhronology of the Soviet labour camps system",url:"https://v3.urbica.co/gulag",img:"/images/projects/gulag.jpg"},{title:"AReal",description:"St Petersburg in augmented reality",url:"https://areal.urbica.co/",img:"/images/projects/arial.jpeg"},{title:"Agglomerations.org",description:"How major cities are organised",url:"https://v3.urbica.co/agglomerations",img:"/images/projects/agglom.jpg"},{title:"MAPS.ME",description:"Redesigning a world map for 100M users",url:"https://v3.urbica.co/maps_me",img:"/images/projects/mapsme.jpg"},{title:"Magistral",description:"Planning surface transit network with data",url:"https://v3.urbica.co/magistral",img:"/images/projects/magistral.jpg"},{title:"Velobike",description:"A dispatching system for Moscow bikesharing",url:"https://v3.urbica.co/velobike",img:"/images/projects/velobike.jpg"},{title:"Walkstreets",description:"Мost comfortable walking routes",url:"https://v3.urbica.co/walkstreets",img:"/images/projects/ws.jpg"}],v=[{title:"galton",description:"Lightweight Node.js isochrone map server",url:"https://github.com/urbica/galton",img:"/images/technologies/galton.jpg"},{title:"martin",description:"PostGIS vector tiles server",url:"https://martin.urbica.co/",img:"/images/technologies/martin.jpg"},{title:"REACT-MAP-GL",description:"React Component for Mapbox GL JS",url:"https://github.com/urbica/react-map-gl",img:"/images/technologies/react.jpg"}],D=function(){return a.a.createElement(c,null,a.a.createElement(C,{title:"Selected projects",content:z,disableBorder:!0}),a.a.createElement(C,{title:"Our technologies",content:v,footer:!0}))};t.default=function(){return a.a.createElement(o.a,null,a.a.createElement(D,null))}},132:function(e,t,i){"use strict";i.r(t),i.d(t,"graphql",function(){return m}),i.d(t,"StaticQueryContext",function(){return u}),i.d(t,"StaticQuery",function(){return g});var n=i(0),a=i.n(n),o=i(4),r=i.n(o),c=i(131),l=i.n(c);i.d(t,"Link",function(){return l.a}),i.d(t,"withPrefix",function(){return c.withPrefix}),i.d(t,"navigate",function(){return c.navigate}),i.d(t,"push",function(){return c.push}),i.d(t,"replace",function(){return c.replace}),i.d(t,"navigateTo",function(){return c.navigateTo});var s=i(134),d=i.n(s);i.d(t,"PageRenderer",function(){return d.a});var p=i(29);i.d(t,"parsePath",function(){return p.a});var u=a.a.createContext({}),g=function(e){return a.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},134:function(e,t,i){var n;e.exports=(n=i(137))&&n.default||n},135:function(e,t,i){"use strict";var n=i(130);t.a=n.b.div.withConfig({displayName:"Title",componentId:"sc-1e5zev3-0"})(["line-height:40px;font-size:30px;text-transform:uppercase;color:#cccccc;mix-blend-mode:normal;margin-bottom:30px;"])},136:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjYyNDkgMS4zMjIzM0MxOS42MjQ5IDAuNzcwMDQ2IDE5LjE3NzIgMC4zMjIzMyAxOC42MjQ5IDAuMzIyMzNMOS42MjQ5MyAwLjMyMjMzMUM5LjA3MjY1IDAuMzIyMzMgOC42MjQ5MyAwLjc3MDA0NiA4LjYyNDkzIDEuMzIyMzNDOC42MjQ5MyAxLjg3NDYyIDkuMDcyNjUgMi4zMjIzMyA5LjYyNDkzIDIuMzIyMzNMMTcuNjI0OSAyLjMyMjMzTDE3LjYyNDkgMTAuMzIyM0MxNy42MjQ5IDEwLjg3NDYgMTguMDcyNyAxMS4zMjIzIDE4LjYyNDkgMTEuMzIyM0MxOS4xNzcyIDExLjMyMjMgMTkuNjI0OSAxMC44NzQ2IDE5LjYyNDkgMTAuMzIyM0wxOS42MjQ5IDEuMzIyMzNaTTEuNjU0MzcgMTkuNzA3MUwxOS4zMzIgMi4wMjk0NEwxNy45MTc4IDAuNjE1MjI0TDAuMjQwMTU5IDE4LjI5MjlMMS42NTQzNyAxOS43MDcxWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="},137:function(e,t,i){"use strict";i.r(t);i(30);var n=i(0),a=i.n(n),o=i(4),r=i.n(o),c=i(47),l=i(2),s=function(e){var t=e.location,i=l.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(c.a,Object.assign({location:t,pageResources:i},i.json))};s.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=s},138:function(e,t,i){e.exports=i.p+"static/DecimaMonoPro-bbe1a4a1023d74856aded9845c89fb60.otf"},139:function(e,t,i){e.exports=i.p+"static/DecimaMonoPro-6b05bbe173f4739f765923e07aa028c7.woff"},140:function(e,t,i){e.exports=i.p+"static/DecimaMonoPro-3d9b2d874d6aec77dd8e19b2a9d71a78.woff2"},141:function(e,t,i){"use strict";var n=i(130).b.div.withConfig({displayName:"Wrap",componentId:"sc-1sskv6m-0"})(["display:flex;flex-direction:column;position:relative;justify-content:space-between;width:calc(100vw - 60px);min-height:",";border-top:"," solid #CCCCCC;box-sizing:border-box;padding:50px 0;@media (max-width:850px){min-height:",";}"],function(e){return e.disableMinHeight?"inherit":"calc(100vh - 80px)"},function(e){return e.disableBorder?"0":"1px"},function(e){return e.disableMinHeight?"inherit":"calc(100vh - 170px)"});t.a=n},142:function(e,t,i){"use strict";var n=i(0),a=i.n(n),o=i(4),r=i.n(o),c=i(143),l=(i(144),i(130)),s=l.b.div.withConfig({displayName:"Container",componentId:"p9pg8l-0"})(["position:fixed;top:0;left:0;width:100%;padding:0 30px;box-sizing:border-box;align-items:center;background:rgb(23,31,42);z-index:1;div{display:flex;}"]),d=l.b.div.withConfig({displayName:"Navigation__Container",componentId:"sc-15ggpvq-0"})(["margin-left:auto;@media (max-width:850px){width:100%;border-top:1px solid #CCCCCC;margin-left:0;}"]),p=i(132),u=Object(l.b)(p.Link).withConfig({displayName:"NavigationLink",componentId:"sc-15bkgit-0"})(["font-size:30px;line-height:71px;padding-top:5px;text-transform:uppercase;margin-left:25px;text-decoration:none;border-bottom:3px solid transparent;color:rgba(204,204,204,1);transition:color 0.3s;@media (min-width:850px){&:hover{color:rgba(204,204,204,0.5);}}@media (max-width:850px){margin-left:0;margin-right:25px;}"]),g=l.b.div.withConfig({displayName:"HeaderWrap__Wrap",componentId:"sc-1rf5zdy-0"})(["display:flex;justify-content:space-between;align-items:center;width:100%;height:80px;border-bottom:1px solid #CCCCCC;@media (max-width:850px){flex-direction:column;align-items:flex-start;margin-top:20px;height:auto;}"]),m=Object(l.b)(p.Link).withConfig({displayName:"Container",componentId:"cec8d-0"})(["padding-top:20px;padding-bottom:30px;transition:opacity 0.3s;font-size:30px;line-height:33px;text-transform:uppercase;text-decoration:none;color:#E4E4E4;@media (min-width:850px){padding-top:0;padding-bottom:0;&:hover{opacity:0.5;}}"]),M=function(){return a.a.createElement(m,{to:"/"},"Urbica")},f=function(){return a.a.createElement(s,null,a.a.createElement(g,null,a.a.createElement(M,null),a.a.createElement(d,null,a.a.createElement(u,{to:"/projects",activeStyle:{borderBottom:"3px solid #ccc"}},"projects"),a.a.createElement(u,{to:"/contacts",activeStyle:{borderBottom:"3px solid #ccc"}},"contacts"))))},b=l.b.div.withConfig({displayName:"Container",componentId:"myo0r5-0"})(["width:100%;min-height:100vh;background:#171F2A;"]),h=i(145),x=i.n(h),y=i(138),w=i.n(y),j=i(139),I=i.n(j),C=i(140),z=i.n(C);function v(){var e=x()(["\n  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono');\n\n  @font-face {\n    font-family: 'DecimaMonoPro';\n    font-display: auto;\n    font-style: normal;\n    font-weight: normal;\n    src: url(",") format('opentype'),\n    url(",") format('woff'),\n    url(",") format('woff2');\n  }\n\n  html {\n    font-family: 'DecimaMonoPro', monospace;\n    background: rgb(23,31,42);\n    font-size: 30px;\n  }\n"]);return v=function(){return e},e}var D=Object(l.a)(v(),w.a,I.a,z.a),N=function(e){var t=e.title,i=e.children;return a.a.createElement(b,null,a.a.createElement(D,null),a.a.createElement(c.Helmet,null,a.a.createElement("title",null,t)),a.a.createElement(f,null),i)};N.propTypes={title:r.a.string,children:r.a.node.isRequired},N.defaultProps={title:"Urbica"};t.a=N},147:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCAxNiAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMjkyODkgMzAuNzA3MUM3LjY4MzQyIDMxLjA5NzYgOC4zMTY1OCAzMS4wOTc2IDguNzA3MTEgMzAuNzA3MUwxNS4wNzExIDI0LjM0MzFDMTUuNDYxNiAyMy45NTI2IDE1LjQ2MTYgMjMuMzE5NSAxNS4wNzExIDIyLjkyODlDMTQuNjgwNSAyMi41Mzg0IDE0LjA0NzQgMjIuNTM4NCAxMy42NTY5IDIyLjkyODlMOCAyOC41ODU4TDIuMzQzMTQgMjIuOTI4OUMxLjk1MjYyIDIyLjUzODQgMS4zMTk0NiAyMi41Mzg0IDAuOTI4OTMxIDIyLjkyODlDMC41Mzg0MDcgMjMuMzE5NSAwLjUzODQwNyAyMy45NTI2IDAuOTI4OTMxIDI0LjM0MzFMNy4yOTI4OSAzMC43MDcxWk03IC00LjM3MTE0ZS0wOEw3IDMwTDkgMzBMOSA0LjM3MTE0ZS0wOEw3IC00LjM3MTE0ZS0wOFoiIGZpbGw9IiNDQ0NDQ0MiLz4KPC9zdmc+Cg=="},148:function(e,t,i){"use strict";var n=i(0),a=i.n(n),o=i(130),r=o.b.div.withConfig({displayName:"Container",componentId:"dkcqum-0"})(["display:flex;flex-direction:column;width:100%;height:180px;border:1px solid #CCCCCC;justify-content:center;align-items:center;text-decoration:none;color:#CCCCCC;"]),c=i(135),l=i(132),s=i(136),d=i.n(s),p=Object(o.b)(l.Link).withConfig({displayName:"LinkWithArrow",componentId:"wf0akh-0"})(["position:relative;font-family:'IBM Plex Mono',monospace;font-style:normal;font-weight:normal;font-size:30px;text-decoration-line:underline;color:#CCCCCC;transition:opacity 0.3s;&:after{position:absolute;content:'';right:-35px;top:10px;width:20px;height:25px;background:url(",") no-repeat;background-size:contain;}&:hover{opacity:0.5;}"],d.a);t.a=function(){return a.a.createElement(r,null,a.a.createElement(c.a,null,"Let’s get in touch"),a.a.createElement(p,{to:"/contacts"},"Work with us"))}}}]);
//# sourceMappingURL=component---src-pages-projects-js-8a70a990e19263bf9851.js.map