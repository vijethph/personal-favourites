(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[223],{6835:function(e,t,n){"use strict";n.d(t,{DZ:function(){return v},EY:function(){return y},N_:function(){return x},az:function(){return f},mc:function(){return E},so:function(){return m}});var r=n(85),o=n(7437),a=n(6540),i=n(8053);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var g=["__themeKey","__css","variant","css","sx","as"],d=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","m","mt","mr","mb","ml","mx","my","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","p","pt","pr","pb","pl","px","py","color","backgroundColor","bg","opacity"],p=function(e){return d.includes(e)},f=(0,a.forwardRef)((function(e,t){var n=(0,r.u)(),a=e,s=a.__themeKey,p=void 0===s?"variants":s,f=a.__css,m=a.variant,b=a.css,h=a.sx,x=a.as,y=void 0===x?"div":x,v=c(a,g),k=(0,i.AH)(f)(n),w=(0,i.Jt)(n,p+"."+m)||(0,i.Jt)(n,m),E=w&&(0,i.AH)(w)(n),A=(0,i.AH)(h)(n),Y=(0,i.AH)(function(e){for(var t,n={},r=u(d);!(t=r()).done;){var o=t.value;n[o]=e[o]}return n}(v))(n),S=[{boxSizing:"border-box",margin:0,minWidth:0},k,E,A,Y,b];return d.forEach((function(e){delete v[e]})),(0,o.Y)(y,l({ref:t,css:S},v))})),m=a.forwardRef((function(e,t){return a.createElement(f,l({ref:t},e,{sx:l({display:"flex"},e.sx)}))})),b=function(e){return function(t){var n={};for(var r in t)e(r||"")&&(n[r]=t[r]);return n}},h=/^m[trblxy]?$/;b((function(e){return h.test(e)})),b((function(e){return!h.test(e)}));var x=a.forwardRef((function(e,t){return a.createElement(f,l({ref:t,as:"a",variant:"styles.a"},e,{__themeKey:"links"}))})),y=a.forwardRef((function(e,t){return a.createElement(f,l({as:"span",ref:t,variant:"default"},e,{__themeKey:"text"}))})),v=a.forwardRef((function(e,t){return a.createElement(f,l({ref:t,as:"h2",variant:"heading"},e,{__themeKey:"text",__css:{fontFamily:"heading",fontWeight:"heading",lineHeight:"heading"}}))})),k=["size"],w=a.forwardRef((function(e,t){var n=e.size,r=void 0===n?24:n,o=l({xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"currentcolor"},c(e,k));return a.createElement(f,l({ref:t,as:"svg"},o))}));w.displayName="SVG";b(p),b((function(e){return!p(e)}));var E=a.forwardRef((function(e,t){return a.createElement(f,l({ref:t,variant:"container"},e,{__themeKey:"layout",__css:{width:"100%",maxWidth:"container",mx:"auto"}}))}))},3328:function(e,t,n){"use strict";n.d(t,{A:function(){return O}});var r=n(7437),o=n(557),a=n(8053),i=n(6835),l=n(8453),c=n(6540),s=n(2635),u=n(7141),g=n(7450);var d=e=>{const{clipboard:t}=window.navigator;if(!t||"function"!=typeof t.writeText){const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly","true"),t.setAttribute("contenteditable","true"),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select();const n=document.createRange(),r=window.getSelection();return null==r||r.removeAllRanges(),null==r||r.addRange(n),t.setSelectionRange(0,t.value.length),document.execCommand("copy"),document.body.removeChild(t),Promise.resolve(!0)}return t.writeText(e)},p=n(2809);var f=e=>{let{content:t,duration:n=5e3,fileName:r="",trim:a=!1}=e;const{0:i,1:l}=(0,c.useState)(!1),s=i?(r?`${r} `:"")+"copied to clipboard":(r?`${r}: `:"")+"copy code to clipboard";return(0,o.Y)("button",{type:"button",name:s,disabled:i,className:"code-copy-button",sx:{variant:"copyButton"},onClick:async()=>{await d(a?t.trim():t),l(!0),await(e=>new Promise((t=>{setTimeout(t,e)})))(n),l(!1)}},i?"Copied":"Copy",(0,o.Y)("span",{sx:p.Q,"aria-roledescription":"status"},s))},m=n(3601),b=n(4773);var h=e=>{let{codeString:t,withLineNumbers:n=!1,title:r="",className:o,highlight:a=""}=e;const{showLineNumbers:i,showCopyButton:l}=(0,m.A)(),[d]=(0,u.G6)(),p="dark"===d,h=(0,s.Z0)(o),x=(0,s.V8)(a),y=n||i;return c.createElement(g.f4,{code:t,language:h,theme:p?b.a5:b._k},(e=>{let{className:n,tokens:o,getLineProps:a,getTokenProps:i}=e;return c.createElement(c.Fragment,null,c.createElement("div",{className:"gatsby-highlight","data-language":h},r&&c.createElement("div",{className:"code-title"},c.createElement("div",null,r)),c.createElement("pre",{className:n,"data-linenumber":y},l&&c.createElement(f,{content:t,fileName:r}),c.createElement("code",{className:`code-content language-${h}`},o.map(((e,t)=>{const n=a({line:e,key:t});return x(t)&&(n.className=`${n.className} highlight-line`,n.style={...n.style,backgroundColor:"var(--theme-ui-colors-highlightLineBg)"}),c.createElement("div",n,y&&c.createElement("span",{className:"line-number-style"},t+1),e.map(((e,t)=>c.createElement("span",i({token:e,key:t})))))}))))))}))},x=n(6988);var y={Text:e=>c.createElement(i.EY,e),Title:e=>c.createElement(x.A,e),pre:e=>{const t=(0,s.N1)(e);return t?c.createElement(h,t):c.createElement("pre",e)}};const v={position:"relative",width:"24px",height:"24px",borderRadius:"50%",transition:"all 0.45s ease","&:before":{content:'""',position:"absolute",right:"-9px",top:"-9px",height:"24px",width:"24px",transition:"transform 0.45s ease",borderRadius:"50%"},"&:after":{content:'""',width:"8px",height:"8px",borderRadius:"50%",margin:"-4px 0 0 -4px",position:"absolute",top:"50%",left:"50%",transition:"all 0.35s ease",boxShadow:e=>`0 -23px 0 ${(0,a.Jt)(e,"colors.toggleIcon")}, 0 23px 0 ${(0,a.Jt)(e,"colors.toggleIcon")}, 23px 0 0 ${(0,a.Jt)(e,"colors.toggleIcon")}, -23px 0 0 ${(0,a.Jt)(e,"colors.toggleIcon")}, 15px 15px 0 ${(0,a.Jt)(e,"colors.toggleIcon")}, -15px 15px 0 ${(0,a.Jt)(e,"colors.toggleIcon")}, 15px -15px 0 ${(0,a.Jt)(e,"colors.toggleIcon")}, -15px -15px 0 ${(0,a.Jt)(e,"colors.toggleIcon")}`}},k={opacity:.65,position:"relative",borderRadius:"4px",width:"40px",height:"25px",display:"flex",alignItems:"center",justifyContent:"center",transition:"opacity 0.3s ease",border:"none",outline:"none",background:"none",cursor:"pointer",padding:0,appearance:"none","&:hover, &:focus":{opacity:1}},w=()=>(0,o.Y)("button",{type:"button",sx:k,"aria-label":"Color mode toggle"},(0,o.Y)("div",{sx:{...v,transform:"scale(0.55)","&:before":{...v["&:before"],opacity:0},"&:after":{...v["&:after"],transform:"scale(0)"}}})),E=e=>{let{children:t,fallback:n}=e;const[r,a]=c.useState(!1);return c.useEffect((()=>{a(!0)}),[]),r?(0,o.Y)(c.Fragment,null,t):n?(0,o.Y)(c.Fragment,null,n):null};var A=()=>{const[e,t]=(0,u.G6)(),n="dark"===e;return(0,o.Y)(E,{fallback:(0,o.Y)(w,null)},(0,o.Y)("button",{onClick:()=>{const e=n?"light":"dark";t(e),document.documentElement.classList.value=`theme-ui-${e}`},type:"button","aria-label":n?"Activate Light Mode":"Activate Dark Mode",title:n?"Activate Light Mode":"Activate Dark Mode",sx:k},(0,o.Y)("div",{sx:{...v,border:e=>n?`4px solid ${(0,a.Jt)(e,"colors.toggleIcon")}`:"none",backgroundColor:n?"toggleIcon":"transparent",transform:n?"scale(0.55)":"scale(1)",overflow:n?"visible":"hidden",boxShadow:e=>n?"none":`inset 8px -8px 0px 0px ${(0,a.Jt)(e,"colors.toggleIcon")}`,"&:before":{...v["&:before"],border:e=>n?`2px solid ${(0,a.Jt)(e,"colors.toggleIcon")}`:"none",transform:n?"translate(14px, -14px)":"translate(0, 0)",opacity:n?0:1},"&:after":{...v["&:after"],transform:n?"scale(1)":"scale(0)"}}})))},Y=n(4794),S=n(2174);var j=e=>{let{nav:t}=e;const{basePath:n}=(0,m.A)();return(0,o.Y)(c.Fragment,null,t&&t.length>0&&(0,o.Y)("nav",{sx:{"a:not(:last-of-type)":{mr:3},fontSize:[1,"18px"],".active":{color:"heading"}}},t.map((e=>(0,o.Y)(Y.Link,{activeClassName:"active",key:e.slug,sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,S.A)(`/${n}/${e.slug}`)},e.title)))))},C=n(7533);var z=()=>{const{siteTitle:e}=(0,C.A)(),{basePath:t}=(0,m.A)();return(0,o.Y)(Y.Link,{to:(0,S.A)(`/${t}`),"aria-label":`${e} - Back to home`,sx:{color:"heading",textDecoration:"none"}},(0,o.Y)("div",{sx:{my:0,fontWeight:"semibold",fontSize:[3,4]}},e))};var N=()=>{const{externalLinks:e}=(0,m.A)();return(0,o.Y)(c.Fragment,null,e&&e.length>0&&(0,o.Y)("div",{sx:{"a:not(:first-of-type)":{ml:3},fontSize:[1,"18px"]}},e.map((e=>(0,o.Y)(i.N_,{key:e.url,href:e.url},e.name)))))};var I=()=>{const{navigation:e}=(0,m.A)();return(0,o.Y)("header",{sx:{mb:[5,6]}},(0,o.Y)(i.so,{sx:{alignItems:"center",justifyContent:"space-between"}},(0,o.Y)(z,null),(0,o.Y)(A,null)),(0,o.Y)("div",{sx:{boxSizing:"border-box",display:"flex",variant:"dividers.bottom",alignItems:"center",justifyContent:"space-between",mt:3,color:"secondary",a:{color:"secondary",":hover":{color:"heading"}},flexFlow:"wrap"}},(0,o.Y)(j,{nav:e}),(0,o.Y)(N,null)))};var _=()=>{const{siteTitle:e}=(0,C.A)();return(0,o.Y)("footer",{sx:{boxSizing:"border-box",display:"flex",justifyContent:"space-between",mt:[6],color:"secondary",a:{variant:"links.secondary"},flexDirection:["column","column","row"],variant:"dividers.top"}},(0,o.Y)("div",null,"© ",(new Date).getFullYear()," by ",e,". All rights reserved."),(0,o.Y)("div",null,(0,o.Y)(i.N_,{"aria-label":"Link to the theme's GitHub repository",href:"https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-minimal-blog"},"Theme")," ","by"," ",(0,o.Y)(i.N_,{"aria-label":"Link to the theme author's website",href:"https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Theme"},"LekoArts")))};var $={".prism-code":{fontSize:[1,1,2],webkitOverflowScrolling:"touch",backgroundColor:"transparent",minWidth:"100%",mb:0,mt:0,overflow:"auto",'&[data-linenumber="false"]':{".token-line":{pl:3}}},".gatsby-highlight[data-language='none'], .gatsby-highlight[data-language='']":{".code-content":{pt:"1rem"}},".code-content":{padding:"2rem 1rem 1rem 1rem",color:"plain-color",backgroundColor:"plain-backgroundColor"},".token":{display:"inline-block"},"p > code, li > code":{bg:"muted",color:"heading",px:2,py:1,borderRadius:"4px",fontSize:"0.95em"},".gatsby-highlight":{fontSize:[1,1,2],position:"relative",webkitOverflowScrolling:"touch",borderRadius:"4px",overflow:"hidden",mx:[0,0,0,-3],".token-line":{mx:-3,minWidth:"100%"},"pre code":{float:"left",minWidth:"100%"},'pre[class*="language-"]:before':{bg:"white",borderRadius:"0 0 4px 4px",color:"black",fontSize:"12px",letterSpacing:"0.035rem",padding:"0.1rem 0.5rem",position:"absolute",left:"1rem",textAlign:"right",textTransform:"uppercase",fontFamily:"body",fontWeight:600},'pre[class~="language-golang"]:before, pre[class~="language-go"]:before':{content:'"go"',background:"#79d4fd",color:"black"},'pre[class~="language-javascript"]:before, pre[class~="language-js"]:before':{content:'"js"',background:"#f7df1e",color:"black"},'pre[class~="language-jsx"]:before':{content:'"jsx"',background:"#61dafb",color:"black"},'pre[class~="language-ts"]:before':{content:'"ts"',background:"#61dafb",color:"black"},'pre[class~="language-tsx"]:before':{content:'"tsx"',background:"#61dafb",color:"black"},'pre[class~="language-html"]:before':{content:'"html"',background:"#005a9c",color:"white"},'pre[class~="language-xml"]:before':{content:'"xml"',background:"#005a9c",color:"white"},'pre[class~="language-svg"]:before':{content:'"svg"',background:"#005a9c",color:"white"},'pre[class~="language-graphql"]:before':{content:'"GraphQL"',background:"#E10098"},'pre[class~="language-css"]:before':{content:'"css"',background:"#ff9800",color:"black"},'pre[class~="language-mdx"]:before':{content:'"mdx"',background:"#f9ac00",color:"black"},'pre[class~="language-php"]:before':{content:'"php"',background:"#777bb3",color:"black"},'pre[class~="language-py"]:before, pre[class~="language-python"]:before':{content:'"py"',background:"#306998",color:"white"},'pre[class~="language-text"]:before':{content:'"text"'},"pre[class~='language-shell']:before":{content:"'shell'"},"pre[class~='language-sh']:before":{content:"'sh'"},"pre[class~='language-bash']:before":{content:"'bash'"},"pre[class~='language-yaml']:before":{content:"'yaml'",background:"#ffa8df"},"pre[class~='language-yml']:before":{content:"'yml'",background:"#ffa8df"},"pre[class~='language-markdown']:before":{content:"'md'"},"pre[class~='language-json']:before, pre[class~='language-json5']:before":{content:"'json'",background:"linen"},"pre[class~='language-diff']:before":{content:"'diff'",background:"#e6ffed"}},'.gatsby-highlight > code[class*="language-"], .gatsby-highlight > pre[class=*="language-"]':{wordSpacing:"normal",wordBreak:"normal",overflowWrap:"normal",lineHeight:1.5,tabSize:4,hyphens:"none"},".gatsby-highlight pre::-webkit-scrollbar":{width:2,height:2},".gatsby-highlight pre::-webkit-scrollbar-thumb":{backgroundColor:"primary"},".gatsby-highlight pre::-webkit-scrollbar-track":{background:"muted"},".line-number-style":{display:"inline-block",width:"3em",userSelect:"none",opacity:.3,textAlign:"center",position:"relative"},".code-title":{backgroundColor:"muted",color:"text",fontSize:1,px:3,py:2,fontFamily:"body"},".token-line":{pr:3},".highlight-line":{borderLeft:"4px solid rgb(2, 155, 206)",".line-number-style":{width:"calc(3em - 4px)",opacity:.5,left:"-2px"}},".footnotes":{borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:"divide",pt:2,mt:5,overflow:"auto",".sr-only":p.Q}};const L={border:0,clip:"react(0 0 0 0)",height:"1px",width:"1px",margin:"-1px",padding:0,overflow:"hidden",position:"absolute","&:focus":{padding:3,position:"fixed",top:"15px",left:"15px",backgroundColor:"heading",color:"background",zIndex:1,width:"auto",height:"auto",clip:"auto",textDecoration:"none"}};var R=e=>{let{children:t,...n}=e;return(0,o.Y)("a",Object.assign({},n,{sx:L,href:"#skip-nav","data-skip-link":"true"}),t)};var O=e=>{let{children:t,className:n=""}=e;return(0,o.Y)(l.xA,{components:y},(0,o.Y)(r.mL,{styles:e=>({"*":{boxSizing:"inherit"},"[hidden]":{display:"none"},"::selection":{backgroundColor:(0,a.Jt)(e,"colors.text"),color:(0,a.Jt)(e,"colors.background")}})}),(0,o.Y)(R,null,"Skip to content"),(0,o.Y)(i.mc,null,(0,o.Y)(I,null),(0,o.Y)(i.az,{id:"skip-nav",as:"main",variant:"layout.main",sx:{...$},className:n},t),(0,o.Y)(_,null)))}},7169:function(e,t,n){"use strict";var r=n(6540),o=n(4794),a=n(7533);t.A=e=>{let{title:t="",description:n="",pathname:i="",image:l="",children:c=null,canonicalUrl:s=""}=e;const u=(0,a.A)(),{siteTitle:g,siteTitleAlt:d,siteUrl:p,siteDescription:f,siteImage:m,author:b,siteLanguage:h}=u,x={title:t?`${t} | ${g}`:d,description:n||f,url:`${p}${i||""}`,image:`${p}${l||m}`};return r.createElement(r.Fragment,null,r.createElement("html",{lang:h}),r.createElement("title",null,x.title),r.createElement("meta",{name:"description",content:x.description}),r.createElement("meta",{name:"image",content:x.image}),r.createElement("meta",{property:"og:title",content:x.title}),r.createElement("meta",{property:"og:url",content:x.url}),r.createElement("meta",{property:"og:description",content:x.description}),r.createElement("meta",{property:"og:image",content:x.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:x.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:x.title}),r.createElement("meta",{name:"twitter:url",content:x.url}),r.createElement("meta",{name:"twitter:description",content:x.description}),r.createElement("meta",{name:"twitter:image",content:x.image}),r.createElement("meta",{name:"twitter:image:alt",content:x.description}),r.createElement("meta",{name:"twitter:creator",content:b}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,o.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,o.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,o.withPrefix)("/apple-touch-icon.png")}),s?r.createElement("link",{rel:"canonical",href:s}):null,c)}},6988:function(e,t,n){"use strict";var r=n(557),o=n(6835);t.A=e=>{let{text:t,children:n,as:a="h2",className:i=""}=e;return(0,r.Y)("div",{sx:{justifyContent:"space-between",alignItems:"center",borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:"divide",pb:3,mb:4,flexFlow:"wrap",boxSizing:"border-box",display:"flex"}},(0,r.Y)(o.az,{as:a,sx:{fontWeight:"medium",fontSize:[3,4],fontFamily:"heading",lineHeight:"heading",color:"heading"},className:i},t),n?(0,r.Y)("div",{sx:{color:"secondary",a:{variant:"links.secondary"}}},n):null)}},3601:function(e,t,n){"use strict";var r=n(4794);t.A=()=>(0,r.useStaticQuery)("3090400250").minimalBlogConfig},7533:function(e,t,n){"use strict";var r=n(4794);t.A=()=>(0,r.useStaticQuery)("2421966660").site.siteMetadata},2809:function(e,t,n){"use strict";n.d(t,{Q:function(){return r}});const r={border:0,clip:"rect(0, 0, 0, 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"}},2174:function(e,t){"use strict";t.A=function(e){return e.replace(/\/\/+/g,"/")}},5019:function(e,t,n){var r=1/0,o="[object Symbol]",a=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,l="\\ud800-\\udfff",c="\\u2700-\\u27bf",s="a-z\\xdf-\\xf6\\xf8-\\xff",u="A-Z\\xc0-\\xd6\\xd8-\\xde",g="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",d="['’]",p="["+g+"]",f="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",m="\\d+",b="["+c+"]",h="["+s+"]",x="[^"+l+g+m+c+s+u+"]",y="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",k="["+u+"]",w="(?:"+h+"|"+x+")",E="(?:"+k+"|"+x+")",A="(?:['’](?:d|ll|m|re|s|t|ve))?",Y="(?:['’](?:D|LL|M|RE|S|T|VE))?",S="(?:"+f+"|\\ud83c[\\udffb-\\udfff])"+"?",j="[\\ufe0e\\ufe0f]?",C=j+S+("(?:\\u200d(?:"+["[^"+l+"]",y,v].join("|")+")"+j+S+")*"),z="(?:"+[b,y,v].join("|")+")"+C,N=RegExp(d,"g"),I=RegExp(f,"g"),_=RegExp([k+"?"+h+"+"+A+"(?="+[p,k,"$"].join("|")+")",E+"+"+Y+"(?="+[p,k+w,"$"].join("|")+")",k+"?"+w+"+"+A,k+"+"+Y,m,z].join("|"),"g"),$=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,L="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,R="object"==typeof self&&self&&self.Object===Object&&self,O=L||R||Function("return this")();var T,F=(T={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==T?void 0:T[e]});var J=Object.prototype.toString,W=O.Symbol,U=W?W.prototype:void 0,B=U?U.toString:void 0;function D(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&J.call(e)==o}(e))return B?B.call(e):"";var t=e+"";return"0"==t&&1/e==-r?"-0":t}function Z(e){return null==e?"":D(e)}var H,P=(H=function(e,t,n){return e+(n?"-":"")+t.toLowerCase()},function(e){return function(e,t,n,r){var o=-1,a=e?e.length:0;for(r&&a&&(n=e[++o]);++o<a;)n=t(n,e[o],o,e);return n}(function(e,t,n){return e=Z(e),void 0===(t=n?void 0:t)?function(e){return $.test(e)}(e)?function(e){return e.match(_)||[]}(e):function(e){return e.match(a)||[]}(e):e.match(t)||[]}(function(e){return(e=Z(e))&&e.replace(i,F).replace(I,"")}(e).replace(N,"")),H,"")});e.exports=P},557:function(e,t,n){"use strict";n.d(t,{Y:function(){return r}});var r=n(3101).Y},2635:function(e,t,n){"use strict";n.d(t,{N1:function(){return a},V8:function(){return i},Z0:function(){return o},kW:function(){return r}});var r=n(5019),o=(e="")=>e.split("language-").pop(),a=e=>{if(e?.children?.props){let{children:t,className:n="",...r}=e.children.props,o=n.match(/language-([\0-\uFFFF]*)/);return{codeString:t.trim(),className:n,language:null!==o?o[1]:"",...r}}},i=e=>{if(!e)return()=>!1;let t=e.split(",").map((e=>e.split("-").map((e=>parseInt(e,10)))));return e=>{let n=e+1;return t.some((([e,t])=>t?n>=e&&n<=t:n===e))}}}}]);
//# sourceMappingURL=commons-1ad48f9b1a71a895ef49.js.map