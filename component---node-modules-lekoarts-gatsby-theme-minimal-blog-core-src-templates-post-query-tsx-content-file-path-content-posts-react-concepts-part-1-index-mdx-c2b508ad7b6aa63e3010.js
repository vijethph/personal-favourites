"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[512],{1173:function(e,t,n){n.d(t,{p:function(){return m},A:function(){return h}});var a=n(6540),o=n(557),l=n(6835),s=n(3328),r=n(7715),c=n(7169);var i=e=>{let{post:t}=e;return null};const u=["16px","8px","4px"].map((e=>`rgba(0, 0, 0, 0.1) 0px ${e} ${e} 0px`));var d=e=>{let{data:{post:t},children:n}=e;return(0,o.Y)(s.A,null,(0,o.Y)(l.DZ,{as:"h1",variant:"styles.h1"},t.title),(0,o.Y)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,o.Y)("time",null,t.date),t.tags&&(0,o.Y)(a.Fragment,null," — ",(0,o.Y)(r.A,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,o.Y)("span",null,t.timeToRead," min read")),(0,o.Y)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:u.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,o.Y)(i,{post:t}))};const m=e=>{var t,n,a;let{data:{post:l}}=e;return(0,o.Y)(c.A,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function h(e){let{...t}=e;return a.createElement(d,t)}},7715:function(e,t,n){var a=n(557),o=n(6540),l=n(4794),s=n(3601),r=n(2174);t.A=e=>{let{tags:t}=e;const{tagsPath:n,basePath:c}=(0,s.A)();return(0,a.Y)(o.Fragment,null,t.map(((e,t)=>(0,a.Y)(o.Fragment,{key:e.slug},!!t&&", ",(0,a.Y)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,r.A)(`/${c}/${n}/${e.slug}`)},e.name)))))}},9378:function(e,t,n){n.r(t),n.d(t,{Head:function(){return r.p},default:function(){return c}});var a=n(6540),o=n(8453);function l(e){const t=Object.assign({h3:"h3",p:"p",strong:"strong",code:"code",ol:"ol",li:"li",blockquote:"blockquote",pre:"pre",br:"br",ul:"ul",span:"span",h2:"h2",a:"a"},(0,o.RP)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h3,null,"React.js Basics"),"\n",a.createElement(t.p,null,"React.js is a Javascript library for building user interfaces using components. Components are used for rendering and updating user interfaces. They are regular Javascript functions which return renderable results (typically JSX). ReactDOM is the interface to the web, as it brings real HTML elements to the screen, and therefore responsible for working with DOM. React manages components, props (data passed from components), context (component-wide data), states (internal data of components) and informs ReactDOM about the updates in them. React uses virtual DOM, which determines how the component tree currently looks like, and what it should look like in the end. ReactDOM receives the differences (i.e., required changes) and then manipulates the real DOM. For every state change, the entire component (and its children) in which the state is changed, gets re-executed/re-evaluated. But re-evaluating the components ",a.createElement(t.strong,null,"is not equal to")," re-rendering the DOM. DOM only updates the changes in the component, keeping the rest of things intact."),"\n",a.createElement(t.p,null,"React makes sure that the default value passed to useState is considered only once: during initialization of the associated component. During first run, useState creates a new state variable which is handed off to React, and therefore managed by React. React memorizes the default value for that state variable, and the component in which it is declared; and uses this variable for subsequent re-evaluations of the component."),"\n",a.createElement(t.p,null,"Calling the setXYZ function for the state variable xyz does not immediately change the value for that variable; it schedules a state update by passing the new value. These scheduled state changes are usually processed very fast; but its upto React to take up / postpone these. But the order of scheduled state changes for any particular state variable remains intact. As multiple state updates can be scheduled at the same time, it is recommended to use function form (example: ",a.createElement(t.code,null,"setSomeVar( (prevVar) => { return prevVar-1; }"),") for setting state variables."),"\n",a.createElement(t.p,null,"If there are multiple setState function calls declared one after another, instead of component getting re-evaluated twice, React will batch those state updates together, as long as it is in a one long synchronous process without any callbacks/promises in between the statements."),"\n",a.createElement(t.h3,null,"JSX Limitations"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,'Cannot have adjacent root level JSX elements, only one element is allowed. We cannot return more than one "root" JSX element, and its also not possible to store more than one "root" JSX element in a variable. ',a.createElement(t.strong,null,"Solution:")," always wrap adjacent elements with a ",a.createElement(t.code,null,"div"),". It doesn't have to be a ",a.createElement(t.code,null,"div"),", any element can do the trick.","\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,'Another approach is to return a native JS array, which has JSX elements as array items. But warning: each child in array should have unique "key" prop.'),"\n"),"\n"),"\n",a.createElement(t.li,null,"The ",a.createElement(t.code,null,"div")," approach leads to ",a.createElement(t.code,null,"div soup"),", where we have too many nested React Components, and all those need ",a.createElement(t.code,null,"div"),"s.","\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"In bigger apps, we can easily end up with tons of unnecessary ",a.createElement(t.code,null,"div"),"s (or other elements) which add no semantic meaning or structure to the page, but are only there because of JSX requirement. A solution would be to create a ",a.createElement(t.code,null,"Wrapper")," component, which just returns ",a.createElement(t.code,null,"props.children"),", so any number of adjacent JSX elements can be enclosed."),"\n"),"\n"),"\n"),"\n",a.createElement(t.h3,null,"Fragments"),"\n",a.createElement(t.p,null,"React comes with a built-in wrapper component called Fragment, which can be accessed using ",a.createElement(t.code,null,"<React.Fragment>"),", ",a.createElement(t.code,null,"<Fragment>")," or use this method:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"return ( // this depends on project setup / build workflow for support\n    <>\n        <h2>Hi there!</h2>\n        <p>Hello everyone</p>\n    </>\n );\n")),"\n",a.createElement(t.p,null,"Fragment is an empty wrapper component. It doesn't render any real HTML element to the DOM. But it fulfills JSX requirements."),"\n",a.createElement(t.h3,null,"React Portals"),"\n",a.createElement(t.p,null,"Semantically and from a \"clean HTML structure\" perspective, having nested modals (and sidebars, drawers, other dialogs) isn't ideal. It is an overlay to the entire page, which is rendered separately. It is similar to styling a div like a button and adding an event listener to it: it'll work, but it is not a good practice.",a.createElement(t.br),"\n","React portals can help render code written for overlay elements in a different section of resultant page, without making changes to existing JSX code structure. Portals need 2 things:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"A place where the Component needs to be shifted to"),"\n",a.createElement(t.li,null,"Let Component know that there is a portal to that place",a.createElement(t.br),"\n","To implement it, go to HTML file and add divs (with ids) along with ",a.createElement(t.code,null,'<div id="root">')," as adjacent elements. Then call ",a.createElement(t.code,null,"ReactDOM.createPortal()")," method. It takes 2 things:"),"\n",a.createElement(t.li,null,"React node to be rendered (as JSX), and"),"\n",a.createElement(t.li,null,"A pointer to the container in real DOM where this React node will be rendered (mentioned using ",a.createElement(t.code,null,"document.getElementById()"),")"),"\n"),"\n",a.createElement(t.h3,null,"References (refs)"),"\n",a.createElement(t.p,null,"Refs allow us to get access to other DOM elements and work with them. With refs we can setup a connection between a HTML element which is being rendered in the end, and other JS code. To use it, call ",a.createElement(t.code,null,"useRef()")," inside functional component body. It takes a default value which can be initialized (or left empty), and returns a value which allows to work with it later."),"\n",a.createElement(t.p,null,"To connect a ref to a HTML element, use the ",a.createElement(t.code,null,"ref")," prop (built-in). Ex: ",a.createElement(t.code,null,"<p ref={someRef} >Hello</p>"),". For the first time React renders JSX code, it'll assign native DOM element (rendered for this HTML element) to declared ref variable."),"\n",a.createElement(t.p,null,"The ref variable is an object, which always has a ",a.createElement(t.code,null,"current")," prop, which holds the actual value that ref is connected with (real DOM node). This should not be used for manipulation (as React should handle it), but can be used for reading input. Components which use refs can be called as Uncontrolled Components, as they just fetch value using default HTML behaviour. Components which use state can be called as Controlled Components."),"\n",a.createElement(t.h3,null,"React Memo and useCallback()"),"\n",a.createElement(t.p,null,"React.memo is a higher order component. If our component renders the same result given the same props, we can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result. This is only for functional components (not class-based). This checks for the props a component gets; it checks the new value for props and compares it with previous values, re-evaluating only based on changes."),"\n",a.createElement(t.p,null,"React.memo only checks for prop changes. If our function component wrapped in React.memo has a useState, useReducer or useContext Hook in its implementation, it will still re-render when state or context change. By default it will only shallowly compare complex objects in the props object. If we want control over the comparison, we can also provide a custom comparison function as the second argument. React.memo works only for props which are of primitive types like String, Boolean etc., but not arrays and objects."),"\n",a.createElement(t.p,null,"However, this optimization comes at a cost. React needs to store both old and new prop values in memory and compare them, while simultaneously handling rendering updates of components. It is like trading performance cost of re-evaluating component to performance cost of comparing props, so it depends on number of props, child components and complexity."),"\n",a.createElement(t.p,null,'useMemo is a React hook which allows us to memoize/store any kind of data. First argument requires a function which should return what we want to store, and second argument is an array of dependencies which should get updated if they are used in function. Pass a "create" function and an array of dependencies. useMemo will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render. If no array is provided, a new value will be computed on every render.'),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"useCallback()")," returns a memoized callback. Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate). useCallback also needs a second argument: an array of dependencies, similar to useEffect"),"\n",a.createElement(t.p,null,"Functions are closures in JavaScript, i.e., when the functions are defined, all the variables being used in the function are locked (even the variables defined outside, but used inside the function). Hence, to allow modification of function object definition (as per use cases), the second argument to useCallback is required."),"\n",a.createElement(t.h3,null,"Class Components"),"\n",a.createElement(t.p,null,"Classes are a default JavaScript feature, not a React feature. Class components should have a function named ",a.createElement(t.code,null,"render()")," which defines the to-be-rendered output. ",a.createElement(t.code,null,"render()")," method does not receive props; class needs to inherit Component class for that. With the exception of Error Boundaries, there is no reason to use class components, as functional components are much preferred. Class-based components cannot use React Hooks, but they can work together with functional components."),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"constructor()")," is used to initialize state, which is always an object in class components. setState() is used to change state, which takes an object (new state), but it doesn't override the old state. React merges the new state with the old state behind the scenes. It can also take a function with old state as parameter, and return new state as an object. We can use specific methods to class components to run at different points in their life cycle. Some of them are:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.code,null,"componentDidMount()")," - called when the component was just mounted (evaluated & rendered to the DOM). Equivalent to useEffect with no dependencies"),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"componentDidUpdate()")," - called when the component was updated (state changed). Equivalent to useEffect with some dependencies"),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"componentDidUnmount()")," - called right before the component is unmounted (removed from the DOM). Equivalent to useEffect cleanup function",a.createElement(t.br),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 58.75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAACLElEQVR42m1Sy27bMBDMP8ROLPFNiqRJSrbiuAl66v/feq+AfkLRe+npkkGCFu1hsdQuOTujnbuHg8B7DEzDuiNiWmBsxMgNuHRgwsJOrX6CMqHX3uvOZ4TjfGuZ7v+8+xOwP/QFaX7qmasJgoLRY0ffeV5haGADE73nMAW6X9ZbOC5Ut2+A+0dOwTDKABmvKM9feh6lh9Kus+PCEFiEJBAfMrTxHywJ/NYGdMAmy0yJGqYDCE/s0ieIaYX0K52vcPnazyo8gbszdHyGsAlCdjBI7W8UNJQA29T5dKGpBaOgKZao2xnMFCh/wlReMM2vHURRcLe8hTkSoPsXsDHUtACi21kKabrMlhlXHdwRaCBQV14hdIDRtksX6j+AuweGFvf7AUzRBv0FMhCT6QnM0RLSC9z8GXK6YDBnDHalO1dimP8vuTHTJrYibZMkk9R2uQXTCS4kskuLgrKccMwFU4zQzn9s+y/Admj+slPGYZQYmexyW27hLUOJDOdicDk5nIpGDiPJFngcNb1R5D99ax6mc2PoKhmzKhMr56KmaajZs3p0Q12LqZfF13NxtURZoxurt63Pq1ai7h5Evd+Ndbdnv+73rNnvx12jnMqZPJYwcGKUJ5QzuT+TBKUhjCTLSFpKQF4zfCFrOUa/hxRQ3yVSuOSbTYFsp5qx+TYyvbV8YHKjxhaWtDnKB6a2g6S+lZvLcQtzq8dt0HSXy40ANz/HLS7pm8vh+yDV19+lfUt/poz1lwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="React Lifecycle Methods"\n        title="React Lifecycle Methods for Class Components"\n        src="/ruminations/static/5325ba7474f49954d2f97cb3ee9bd598/7d769/reactlifecyclemethods.png"\n        srcset="/ruminations/static/5325ba7474f49954d2f97cb3ee9bd598/5243c/reactlifecyclemethods.png 240w,\n/ruminations/static/5325ba7474f49954d2f97cb3ee9bd598/ab158/reactlifecyclemethods.png 480w,\n/ruminations/static/5325ba7474f49954d2f97cb3ee9bd598/7d769/reactlifecyclemethods.png 960w,\n/ruminations/static/5325ba7474f49954d2f97cb3ee9bd598/87339/reactlifecyclemethods.png 1440w,\n/ruminations/static/5325ba7474f49954d2f97cb3ee9bd598/c8c30/reactlifecyclemethods.png 1501w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),"\n"),"\n",a.createElement(t.p,null,"There are 2 ways to use context variables within class components: using ",a.createElement(t.code,null,"<Context.Consumer />")," , or by using a static property. With useContext, we can listen to multiple contexts in the same functional component by calling useContext multiple times and pointing at different contexts. This is not possible in class-based components, where only one context can be connected to one class component."),"\n",a.createElement(t.p,null,"Error boundaries can be used to transport errors from one component to another and display them. Error boundaries are regular class-based components, with one difference: they implement ",a.createElement(t.code,null,"componentDidCatch()")," method. There is no such equivalent for functional components. Note that error boundaries only catch errors in the components below them in the tree. An error boundary can’t catch an error within itself. If an error boundary fails trying to render the error message, the error will propagate to the closest error boundary above it."),"\n",a.createElement(t.h3,null,"Custom Hooks"),"\n",a.createElement(t.p,null,'A custom Hook is a JavaScript function whose name starts with "use" and that may call other Hooks. Custom hooks outsource ',a.createElement(t.strong,null,"stateful")," logic into ",a.createElement(t.strong,null,"re-usable functions"),". Unlike regular functions, custom hooks can use other React hooks and React state managed with useState/useReducer. With custom hooks, we can outsource logic which is used in different components into a custom hook which can be called from these components. Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time we use a custom Hook, all state and effects inside of it are fully isolated."),"\n",a.createElement(t.p,null,"When the custom hook gets called in a component which registers a state or an effect (i.e., if the custom hook uses state/effect), then this state/effect will be tied to the component where the custom hook is used. Custom hooks can accept parameters and return objects."),"\n",a.createElement(t.h2,null,"Credits and Attributions"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://reactjs.org"},"Official React Documentation")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.udemy.com/course/react-the-complete-guide-incl-redux"},"React - The Complete Guide")," by Maximilian Schwarzmüller"),"\n"))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,o.RP)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)},r=n(1173);function c(e){return a.createElement(r.A,e,a.createElement(s,e))}r.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-react-concepts-part-1-index-mdx-c2b508ad7b6aa63e3010.js.map