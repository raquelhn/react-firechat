(this["webpackJsonpreact-firechat"]=this["webpackJsonpreact-firechat"]||[]).push([[0],{108:function(e,t,n){},110:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(37),i=n.n(r),s=(n(108),n(41)),o=n.n(s),u=n(80),l=n(53),d=(n(110),n(34)),j=(n(122),n(112),n(123)),h=n(7),p=function(e){var t=e.onClick,n=void 0===t?null:t,c=e.children,a=void 0===c?null:c;return Object(h.jsx)(j.a,{basic:!0,color:"black",onClick:n,children:a})},b=n(81),f=n(140),O=n(141),v=n(93),x=n(143),g=function(e){var t=e.createdAt,n=void 0===t?null:t,c=e.text,a=void 0===c?"":c,r=e.displayName,i=void 0===r?"":r,s=e.photoURL,o=void 0===s?"":s;return Object(h.jsx)(O.a,{divided:!0,relaxed:!0,children:Object(h.jsxs)(O.a.Item,{children:[o?Object(h.jsx)(v.a,{avatar:!0,src:o,alt:"Avatar",width:45,height:45}):null,Object(h.jsxs)(O.a.Content,{children:[Object(h.jsx)(O.a.Header,{as:"a",children:i?Object(h.jsx)("p",{children:i}):null}),Object(h.jsx)(O.a.Description,{as:"a",children:(null===n||void 0===n?void 0:n.seconds)?Object(h.jsx)("span",{children:Object(f.a)(new Date(1e3*n.seconds),new Date)}):null}),Object(h.jsx)(x.a,{as:"h3",dividing:!0,children:Object(h.jsx)("p",{children:a})})]})]})})},m=n(138),y=n(139),S=function(e){var t=e.user,n=void 0===t?null:t,a=e.db,r=void 0===a?null:a,i=Object(c.useState)([]),s=Object(l.a)(i,2),o=s[0],u=s[1],p=Object(c.useState)(""),f=Object(l.a)(p,2),v=f[0],x=f[1],S=n.uid,k=n.displayName,w=n.photoURL;Object(c.useEffect)((function(){if(r)return r.collection("messages").orderBy("createdAt").limit(100).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(b.a)(Object(b.a)({},e.data()),{},{id:e.id})}));u(t)}))}),[r]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O.a,{divided:!0,relaxed:!0,children:Object(h.jsx)(m.a,{textAlign:"left",children:o.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(g,Object(b.a)({},e))},e.id)}))})}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r&&r.collection("messages").add({text:v,createdAt:d.a.firestore.FieldValue.serverTimestamp(),uid:S,displayName:k,photoURL:w})},children:[Object(h.jsx)(y.a,{type:"text",value:v,onChange:function(e){x(e.target.value)},placeholder:"Type your message here..."}),Object(h.jsx)(j.a,{positive:!0,type:"submit",disabled:!v,children:"Send"})]})]})};d.a.initializeApp({apiKey:"AIzaSyClQX2fsf-pFSig2cYBdY4ZIcDp71zGYfo",authDomain:"react-firechat-5ae04.firebaseapp.com",projectId:"react-firechat-5ae04",storageBucket:"react-firechat-5ae04.appspot.com",messagingSenderId:"237931249547",appId:"1:237931249547:web:56cf555f4d6f9127d9398e"});var k=d.a.auth(),w=d.a.firestore();var A=function(){var e=Object(c.useState)((function(){return k.currentUser})),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!0),i=Object(l.a)(r,2),s=i[0],j=i[1];if(Object(c.useEffect)((function(){return k.onAuthStateChanged((function(e){a(e||null),s&&j(!1)}))}),[]),s)return"loading...";var b=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new d.a.auth.GoogleAuthProvider,k.useDeviceLanguage(),e.prev=2,e.next=5,k.signInWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.signInAnonymously();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.auth().signOut();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"wrapper",children:Object(h.jsx)(m.a,{children:n?Object(h.jsxs)(m.a,{textAlign:"center",children:[Object(h.jsx)(p,{onClick:O,children:"Sign Out "}),Object(h.jsx)(S,{user:n,db:w})]}):Object(h.jsxs)(m.a,{textAlign:"center",children:[Object(h.jsx)(p,{onClick:b,children:"Sign in with Google"}),Object(h.jsx)(p,{onClick:f,children:"Sign in anonymous"})]})})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,144)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};n(120);i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(A,{})}),document.getElementById("root")),C()}},[[121,1,2]]]);
//# sourceMappingURL=main.0faae23b.chunk.js.map