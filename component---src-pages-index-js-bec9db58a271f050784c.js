(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{128:function(M,e,j){"use strict";j.r(e);var N=j(0),g=j.n(N),t=j(135),u=j(130),i=j(156),n=j.n(i),D=u.a.div.withConfig({displayName:"Container",componentId:"l8hgb1-0"})(["display:flex;flex-direction:column;width:100%;height:100vh;background:url(",") no-repeat;background-size:cover;justify-content:center;align-items:center;"],n.a),a=u.a.div.withConfig({displayName:"Wrap",componentId:"sc-1sskv6m-0"})(["width:1100px;"]),I=u.a.div.withConfig({displayName:"Title",componentId:"lmi4my-0"})(["width:600px;line-height:50px;font-size:40px;text-transform:uppercase;color:#FFFFFF;mix-blend-mode:normal;margin-bottom:30px;"]),z=u.a.div.withConfig({displayName:"Text",componentId:"sc-1x3q4cz-0"})(["width:600px;line-height:30px;font-size:20px;color:#CCCCCC;mix-blend-mode:normal;margin-bottom:20%;"]),y=function(){return g.a.createElement(D,null,g.a.createElement(a,null,g.a.createElement(I,null,"Great solutions for better data-driven world"),g.a.createElement(z,null,"We design rich data tools and applications that help our customers to leverage data getting powerful insights and make better decisions.")))};e.default=function(){return g.a.createElement(t.a,null,g.a.createElement(y,null))}},131:function(M,e,j){"use strict";j.r(e),j.d(e,"graphql",function(){return r}),j.d(e,"StaticQueryContext",function(){return z}),j.d(e,"StaticQuery",function(){return y});var N=j(0),g=j.n(N),t=j(4),u=j.n(t),i=j(129),n=j.n(i);j.d(e,"Link",function(){return n.a}),j.d(e,"withPrefix",function(){return i.withPrefix}),j.d(e,"navigate",function(){return i.navigate}),j.d(e,"push",function(){return i.push}),j.d(e,"replace",function(){return i.replace}),j.d(e,"navigateTo",function(){return i.navigateTo});var D=j(132),a=j.n(D);j.d(e,"PageRenderer",function(){return a.a});var I=j(29);j.d(e,"parsePath",function(){return I.a});var z=g.a.createContext({}),y=function(M){return g.a.createElement(z.Consumer,null,function(e){return M.data||e[M.query]&&e[M.query].data?(M.render||M.children)(M.data?M.data.data:e[M.query].data):g.a.createElement("div",null,"Loading (StaticQuery)")})};function r(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}y.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},132:function(M,e,j){var N;M.exports=(N=j(133))&&N.default||N},133:function(M,e,j){"use strict";j.r(e);j(30);var N=j(0),g=j.n(N),t=j(4),u=j.n(t),i=j(46),n=j(2),D=function(M){var e=M.location,j=n.default.getResourcesForPathnameSync(e.pathname);return g.a.createElement(i.a,Object.assign({location:e,pageResources:j},j.json))};D.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},e.default=D},134:function(M,e){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyIiBoZWlnaHQ9IjIzIiB2aWV3Qm94PSIwIDAgMTAyIDIzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTEuODggMS42QzExLjg4IDEuMjcgMTEuNjQgMC45OTk5OTkgMTEuMTkgMC45OTk5OTlIMTAuMDVDOS42IDAuOTk5OTk5IDkuMzYgMS4yNyA5LjM2IDEuNlYxNi44MUM5LjM2IDE4LjQ2IDguMDcgMTkuOTMgNiAxOS45M0MzLjg0IDE5LjkzIDIuNTggMTguNDYgMi41OCAxNi43OFYxLjZDMi41OCAxLjI3IDIuMzQgMC45OTk5OTkgMS44OSAwLjk5OTk5OUgwLjc1QzAuMyAwLjk5OTk5OSAwLjA2MDAwMDIgMS4yNyAwLjA2MDAwMDIgMS42VjE2Ljc1QzAuMDYwMDAwMiAxOC4yOCAwLjYgMTkuNiAxLjY4IDIwLjY4QzIuNzkgMjEuNzYgNC4yMyAyMi4zIDYgMjIuM0M3Ljc3IDIyLjMgOS4xOCAyMS43NiAxMC4yNiAyMC42OEMxMS4zNCAxOS42IDExLjg4IDE4LjMxIDExLjg4IDE2Ljc4VjEuNlpNMjYuMzI4MyAxMy45M0MyOC4wMzgzIDEzLjE4IDI5LjA1ODMgMTEuNTkgMjkuMDU4MyA5LjY3VjUuNjhDMjkuMDU4MyA0LjM5IDI4LjU3ODMgMy4yOCAyNy42NDgzIDIuMzhDMjYuNzE4MyAxLjQ1IDI1LjYwODMgMC45OTk5OTkgMjQuMjU4MyAwLjk5OTk5OUgxOS4yMTgzQzE4Ljc2ODMgMC45OTk5OTkgMTguNTI4MyAxLjI3IDE4LjUyODMgMS42VjIxLjRDMTguNTI4MyAyMS43MyAxOC43NjgzIDIyIDE5LjIxODMgMjJIMjAuMzU4M0MyMC44MDgzIDIyIDIxLjA0ODMgMjEuNzMgMjEuMDQ4MyAyMS40VjE0LjM1SDIzLjgzODNMMjYuNzc4MyAyMS40M0MyNi45MjgzIDIxLjgyIDI3LjE5ODMgMjIgMjcuNTg4MyAyMkgyOS4wNTgzQzI5LjM4ODMgMjIgMjkuNTY4MyAyMS44OCAyOS41NjgzIDIxLjY0QzI5LjU2ODMgMjEuNTggMjkuNTM4MyAyMS40NiAyOS40NDgzIDIxLjI1TDI2LjMyODMgMTMuOTNaTTI2LjUwODMgOS43NkMyNi41MDgzIDEwLjk5IDI1LjQ1ODMgMTIuMDEgMjQuMTY4MyAxMi4wMUgyMS4wNDgzVjMuMzdIMjQuMTY4M0MyNS40NTgzIDMuMzcgMjYuNTA4MyA0LjQyIDI2LjUwODMgNS42NVY5Ljc2Wk00Mi4zMzY2IDMuMzdDNDMuNjg2NiAzLjM3IDQ0Ljc5NjYgNC40MiA0NC43OTY2IDUuNzFWNy40NUM0NC43OTY2IDguNzcgNDMuNjg2NiA5LjgyIDQyLjMzNjYgOS44MkgzOS4zMDY2VjMuMzdINDIuMzM2NlpNNDIuMTg2NiAxMi4xQzQzLjA1NjYgMTIuMSA0My43NDY2IDEyLjQgNDQuMTk2NiAxM0M0NC42NzY2IDEzLjYgNDQuOTE2NiAxNC4yIDQ0LjkxNjYgMTQuOFYxNi45NkM0NC45MTY2IDE4LjQgNDMuNzQ2NiAxOS42MyA0Mi4xODY2IDE5LjYzSDM5LjMwNjZWMTIuMUg0Mi4xODY2Wk0zNy40NzY2IDAuOTk5OTk5QzM3LjAyNjYgMC45OTk5OTkgMzYuNzg2NiAxLjI3IDM2Ljc4NjYgMS42VjIxLjRDMzYuNzg2NiAyMS43MyAzNy4wMjY2IDIyIDM3LjQ3NjYgMjJINDIuMTg2NkM0My41OTY2IDIyIDQ0LjgyNjYgMjEuNTIgNDUuODc2NiAyMC41NkM0Ni45MjY2IDE5LjYgNDcuNDM2NiAxOC40IDQ3LjQzNjYgMTYuOTZWMTQuOEM0Ny40MzY2IDEzLjI0IDQ2LjgwNjYgMTEuOTUgNDUuNTE2NiAxMC45QzQ2LjY1NjYgOS44NSA0Ny4yMjY2IDguNjggNDcuMjI2NiA3LjMzVjUuNjhDNDcuMjI2NiA0LjM5IDQ2Ljc0NjYgMy4yOCA0NS44MTY2IDIuMzhDNDQuODg2NiAxLjQ1IDQzLjY4NjYgMC45OTk5OTkgNDIuMjc2NiAwLjk5OTk5OUgzNy40NzY2Wk02NS4xNTQ4IDIyQzY1LjQ4NDggMjIgNjUuNzU0OCAyMS43NiA2NS43NTQ4IDIxLjMxVjIwLjMyQzY1Ljc1NDggMTkuODcgNjUuNDg0OCAxOS42MyA2NS4xNTQ4IDE5LjYzSDYxLjIyNDhWMy4zN0g2NS4xNTQ4QzY1LjQ4NDggMy4zNyA2NS43NTQ4IDMuMTMgNjUuNzU0OCAyLjY4VjEuNjlDNjUuNzU0OCAxLjI0IDY1LjQ4NDggMC45OTk5OTkgNjUuMTU0OCAwLjk5OTk5OUg1NC43NzQ4QzU0LjQ0NDggMC45OTk5OTkgNTQuMTc0OCAxLjI0IDU0LjE3NDggMS42OVYyLjY4QzU0LjE3NDggMy4xMyA1NC40NDQ4IDMuMzcgNTQuNzc0OCAzLjM3SDU4LjcwNDhWMTkuNjNINTQuNzc0OEM1NC40NDQ4IDE5LjYzIDU0LjE3NDggMTkuODcgNTQuMTc0OCAyMC4zMlYyMS4zMUM1NC4xNzQ4IDIxLjc2IDU0LjQ0NDggMjIgNTQuNzc0OCAyMkg2NS4xNTQ4Wk04My45ODMxIDE2Ljc4QzgzLjk4MzEgMTYuNDUgODMuNzQzMSAxNi4xOCA4My4yOTMxIDE2LjE4SDgyLjE1MzFDODEuNzAzMSAxNi4xOCA4MS40NjMxIDE2LjQ1IDgxLjQ2MzEgMTYuNzhDODEuNDYzMSAxOC41NSA4MC4wMjMxIDE5LjkzIDc4LjI1MzEgMTkuOTNDNzYuNDIzMSAxOS45MyA3NS4wMTMxIDE4LjU1IDc1LjAxMzEgMTYuNzhWNi4xOUM3NS4wMTMxIDQuNDIgNzYuNDIzMSAzLjA3IDc4LjI1MzEgMy4wN0M3OS4wOTMxIDMuMDcgNzkuODEzMSAzLjM0IDgwLjQxMzEgMy45MUM4MS4wMTMxIDQuNDggODEuMzQzMSA1LjA1IDgxLjQwMzEgNS42NUM4MS40MzMxIDYuMDQgODEuNjczMSA2LjI1IDgyLjA5MzEgNi4yNUg4My4yMzMxQzgzLjY4MzEgNi4yNSA4My45MjMxIDUuOTggODMuOTIzMSA1LjY1QzgzLjkyMzEgNC41NCA4My40MTMxIDMuNDMgODIuMzYzMSAyLjM1QzgxLjMxMzEgMS4yNCA3OS45NjMxIDAuNjk5OTk5IDc4LjI1MzEgMC42OTk5OTlDNzYuNjAzMSAwLjY5OTk5OSA3NS4yMjMxIDEuMjQgNzQuMTEzMSAyLjMyQzczLjAwMzEgMy4zNyA3Mi40NjMxIDQuNjkgNzIuNDYzMSA2LjIyVjE2Ljc1QzcyLjQ2MzEgMTguMjggNzMuMDAzMSAxOS42IDc0LjExMzEgMjAuNjhDNzUuMjIzMSAyMS43NiA3Ni42MDMxIDIyLjMgNzguMjUzMSAyMi4zQzc5Ljg3MzEgMjIuMyA4MS4yMjMxIDIxLjc2IDgyLjMzMzEgMjAuNzFDODMuNDQzMSAxOS42MyA4My45ODMxIDE4LjMxIDgzLjk4MzEgMTYuNzhaTTkyLjc5MTQgMTIuOTdMOTUuNjQxNCAzLjM3SDk2LjIxMTRMOTkuMDkxNCAxMi45N0g5Mi43OTE0Wk05OC4yNTE0IDEuNkM5OC4xMzE0IDEuMjEgOTcuODkxNCAwLjk5OTk5OSA5Ny41MzE0IDAuOTk5OTk5SDk0LjMyMTRDOTMuOTYxNCAwLjk5OTk5OSA5My43MjE0IDEuMjEgOTMuNjAxNCAxLjZMOTAuMzMxNCAxMi40M0M5MC4yMTE0IDEyLjgyIDkwLjE1MTQgMTMuMTggOTAuMTUxNCAxMy41NFYyMS40QzkwLjE1MTQgMjEuNzMgOTAuMzkxNCAyMiA5MC44NDE0IDIySDkxLjk4MTRDOTIuNDMxNCAyMiA5Mi42NzE0IDIxLjczIDkyLjY3MTQgMjEuNFYxNS4zMUg5OS4xODE0VjIxLjRDOTkuMTgxNCAyMS43MyA5OS40MjE0IDIyIDk5Ljg3MTQgMjJIMTAxLjAxMUMxMDEuNDYxIDIyIDEwMS43MDEgMjEuNzMgMTAxLjcwMSAyMS40VjEzLjU0QzEwMS43MDEgMTMuMTggMTAxLjY0MSAxMi44MiAxMDEuNTIxIDEyLjQ2TDk4LjI1MTQgMS42WiIgZmlsbD0iI0NDQ0NDQyIvPgo8L3N2Zz4K"},135:function(M,e,j){"use strict";var N=j(0),g=j.n(N),t=j(4),u=j.n(t),i=j(136),n=(j(137),j(131)),D=j(130),a=D.a.div.withConfig({displayName:"Container",componentId:"p9pg8l-0"})(["display:flex;position:fixed;top:0;left:0;width:100%;height:80px;padding:0 30px;justify-content:space-between;box-sizing:border-box;align-items:center;"]),I=D.a.div.withConfig({displayName:"Navigation__Container",componentId:"sc-15ggpvq-0"})(["margin-left:auto;"]),z=Object(D.a)(n.Link).withConfig({displayName:"NavigationLink",componentId:"sc-15bkgit-0"})(["line-height:normal;font-size:20px;text-transform:uppercase;padding:0 25px;text-decoration:none;color:#CCCCCC;transition:opacity 0.3s;&:hover{opacity:0.5;}"]),y=j(134),r=j.n(y),c=function(){return g.a.createElement(a,null,g.a.createElement(n.Link,{to:"/"},g.a.createElement("img",{src:r.a,alt:"Urbica"})),g.a.createElement(I,null,g.a.createElement(z,{to:"/blog"},"blog"),g.a.createElement(z,{to:"/projects"},"projects")))},o=D.a.div.withConfig({displayName:"Container",componentId:"myo0r5-0"})(["width:100%;min-height:100vh;"]),L=function(M){var e=M.title,j=M.children;return g.a.createElement(o,null,g.a.createElement(i.Helmet,null,g.a.createElement("title",null,e)),g.a.createElement(c,null),j)};L.propTypes={title:u.a.string,children:u.a.node.isRequired},L.defaultProps={title:"Urbica"};e.a=L},156:function(M,e,j){M.exports=j.p+"static/map-787a2cd3a0160c2e465ab71fe7d2f8ae.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-bec9db58a271f050784c.js.map