(this["webpackJsonpportfolio-react-bootstrap"]=this["webpackJsonpportfolio-react-bootstrap"]||[]).push([[0],{258:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a.n(c),s=a(77),o=a.n(s),n=a(2),r=a.p+"static/media/poland.d71b6d2e.webp",l=a.p+"static/media/united-kingdom.861e8875.webp",d=a(271),m=a(9),b=a(8),j=a(51),u=a(26),p={en:{translation:{emailError:m.contact.writeMe.emailError,emailIncorrect:m.contact.writeMe.emailIncorrect,nameError:m.contact.writeMe.nameError,messageError:m.contact.writeMe.messageError}},pl:{translation:{emailError:b.contact.writeMe.emailError,emailIncorrect:b.contact.writeMe.emailIncorrect,nameError:b.contact.writeMe.nameError,messageError:b.contact.writeMe.messageError}}};j.a.use(u.e).init({resources:p,lng:"pl",keySeparator:!1,interpolation:{escapeValue:!1}});j.a;var h=a(1),g=Object(c.createContext)(),x=function(e){var t=e.children,a=Object(c.useState)(b),i=Object(n.a)(a,2),s=i[0],o=i[1],r=Object(d.a)().i18n;return Object(h.jsx)(g.Provider,{value:[s,function(){s===b&&(o(m),r.changeLanguage("en"))},function(){s===m&&(o(b),r.changeLanguage("pl"))}],children:t})};var w=function(){var e=Object(c.useContext)(g),t=Object(n.a)(e,3),a=t[0],i=t[1],s=t[2],o=Object(c.useState)(!1),d=Object(n.a)(o,2),j=d[0],u=d[1];return Object(h.jsx)("nav",{className:"navbar navbar-expand-sm sticky-sm-top fixed-top navbar-light bg-primary shadow-sm",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("button",{className:" navbar-toggler my-3 ms-4",type:"button",onClick:function(){u(!j)},children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"".concat(j?"show":""," collapse navbar-collapse"),children:Object(h.jsxs)("ul",{className:"navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{href:"#about",className:"nav-link",children:a.navigation.about})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{href:"#technologies",className:"nav-link",children:a.navigation.technologies})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{href:"#projects",className:"nav-link",children:a.navigation.projects})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{href:"#contact",className:"nav-link",children:a.navigation.contact})})]})}),Object(h.jsxs)("div",{className:"pt-3 pt-lg-1 position-absolute top-0 end-0",children:[Object(h.jsx)("img",{src:r,className:"mx-3 rounded-circle cursor-pointer w-25 ".concat(a===b?"border":"opacity-75"),onClick:function(){return s()},alt:"polish flag"}),Object(h.jsx)("img",{src:l,className:"mx-3 rounded-circle cursor-pointer w-25 ".concat(a===m?"border":"opacity-75"),onClick:function(){return i()},alt:"british flag"})]})]})})},O=function(){var e=Object(c.useState)({x:0,y:0}),t=Object(n.a)(e,2),a=t[0],i=t[1];return Object(c.useEffect)((function(){var e=function(e){return i({x:e.clientX,y:e.clientY})};return window.addEventListener("mousemove",e),function(){window.removeEventListener("mousemove",e)}}),[]),a},f="undefined"!==typeof window,y=function(){return f?window.pageYOffset:void 0},v=function(){var e=Object(c.useState)(y()),t=Object(n.a)(e,2),a=t[0],i=t[1];return Object(c.useEffect)((function(){if(!f)return!1;var e=function(){i(y())};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),a};var k=function(){return Object(h.jsx)("a",{href:"#about",className:"link-dark",children:Object(h.jsx)("span",{children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",fill:"currentColor",className:"arrow bi bi-arrow-down-circle-fill","data-mdb-animation-start":"onLoad slide-out-right",viewBox:"0 0 16 16",children:Object(h.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"})})})})},N=a.p+"static/media/fox.3888b39d.webp";var z=function(){var e=Object(c.useContext)(g),t=Object(n.a)(e,1)[0],a=v(),i=O(),s=Object(c.useState)(),o=Object(n.a)(s,2),r=o[0],l=o[1],d=Object(c.useState)(),m=Object(n.a)(d,2),b=m[0],j=m[1],u=Object(c.useState)(!1),p=Object(n.a)(u,2),x=p[0],w=p[1],f=x?{left:"".concat(r,"%"),top:"".concat(b,"%"),transform:"translate(".concat(r,"%, ").concat(b,"%)")}:{left:"".concat(31,"%"),top:"".concat(22,"%"),transform:"translate(".concat(31,"%, ",22,"%)")};return Object(c.useLayoutEffect)((function(){r>0&&w(!0),l(60*i.x/window.innerWidth),j(40*i.y/window.innerHeight+a/18)})),Object(h.jsxs)("div",{className:"fox-container container d-flex align-items-center flex-column justify-content-center min-vh-100 pb-4",children:[Object(h.jsxs)("div",{className:"fox container-fluid",children:[Object(h.jsx)("img",{className:"img-fluid",src:N,alt:t.fox.alt}),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"eyes position-relative",children:[Object(h.jsxs)("div",{className:"eye position-relative d-inline-block overflow-hidden rounded-circle",children:[Object(h.jsx)("div",{className:"eyelid position-absolute bg-eyelid"}),Object(h.jsx)("div",{className:"ball position-absolute bg-secondary rounded-circle",style:f})]}),Object(h.jsxs)("div",{className:"eye position-relative d-inline-block overflow-hidden rounded-circle",children:[Object(h.jsx)("div",{className:"eyelid position-absolute bg-eyelid"}),Object(h.jsx)("div",{className:"ball position-absolute bg-secondary rounded-circle",style:f})]})]})})]}),Object(h.jsx)("h1",{className:"masthead-heading",children:t.fox.header}),Object(h.jsx)("h2",{className:"masthead-subheading",children:t.fox.subheader}),Object(h.jsx)(k,{})]})};var S=function(){return Object(h.jsxs)("header",{className:"bg-primary text-secondary text-center svg-border-rounded vh-100",children:[Object(h.jsx)(w,{}),Object(h.jsx)(z,{})]})},C=a.p+"static/media/about.6a2b6f35.webp";var I=function(){var e=Object(c.useContext)(g),t=Object(n.a)(e,1)[0],a=v();return Object(h.jsx)("section",{id:"about",className:"py-4 text-center bg-light",children:Object(h.jsxs)("div",{className:"container px-4 text-secondary",children:[Object(h.jsx)("h3",{className:"mb-4",children:t.about.title}),Object(h.jsxs)("div",{className:"row gx-0 mb-4 mb-lg-5 align-items-center",children:[Object(h.jsx)("div",{className:"col-xl-8 col-lg-7",children:Object(h.jsx)("img",{className:"img-fluid mb-3 mb-lg-0 w-75 ".concat(a>199?"swinging":""),src:C,alt:"Me in the Alps"})}),Object(h.jsx)("div",{className:"col-xl-4 col-lg-5",children:Object(h.jsx)("p",{children:t.about.description})})]})]})})},M=a(34),E=a.n(M),T=a(82),R=a.n(T),L=a(259),F=a(260),P=a(261),J=a(262),q=a(263),B=a(264),D=a(265),A=a(266),W=a(267),Y=a(268),G=a(269),H=a(88),V=[{technology:"HTML5",image:L.a,color:"text-html"},{technology:"CSS3",image:F.a,color:"text-css"},{technology:"JavaScript",image:P.a,color:"text-js"},{technology:"Sass",image:J.a,color:"text-sass"},{technology:"Bootstrap",image:q.a,color:"text-bs"},{technology:"React",image:B.a,color:"text-react"},{technology:"Redux",image:D.a,color:"text-redux"},{technology:"React Router",image:A.a,color:"text-reset"},{technology:"Styled Components",image:W.a,color:"text-sc"},{technology:"RWD",image:H.a,color:"text-reset"},{technology:"GIT",image:Y.a,color:"text-git"},{technology:"Github",image:G.a,color:"text-github"}].map((function(e){return Object(h.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-6 mb-5 w-sm-50",children:Object(h.jsx)("div",{className:"card bg-light border-0 h-100",children:Object(h.jsxs)("div",{className:"card-body p-4 p-lg-5 pt-0 pt-lg-0",children:[Object(h.jsx)("div",{className:"feature bg-primary bg-gradient text-white rounded-3 mb-4",children:Object(h.jsx)("i",{className:"bi bi-bootstrap"})}),Object(h.jsx)("h4",{className:"h4",children:e.technology}),Object(h.jsx)(R.a,{animateIn:"flipInY",animateOnce:!0,children:Object(h.jsx)(e.image,{className:e.color})})]})})},E()())}));var Q=function(){var e=Object(c.useContext)(g),t=Object(n.a)(e,1)[0];return Object(h.jsx)("section",{id:"technologies",className:"py-4 bg-secondary text-center",children:Object(h.jsxs)("div",{className:"container px-4",children:[Object(h.jsx)("h3",{className:"text-primary mb-4",children:t.technologies.title}),Object(h.jsx)("div",{className:"row gx-lg-5 justify-content-center",children:V})]})})},Z=a.p+"static/media/saper.4ce7c5bc.webp",_=a.p+"static/media/quiz.24c23d2c.webp",U=a.p+"static/media/top5.c7428263.webp",K=a.p+"static/media/wtyker.bc7dcf85.webp",X=a.p+"static/media/portfolio.8e2207ac.webp";var $=function(){var e=Object(c.useContext)(g),t=Object(n.a)(e,1)[0],a=[{title:t.projects.saper.title,image:Z,description:t.projects.saper.description,stack:t.projects.saper.stack,live:"https://manulisek.github.io/saper-javascript/",github:"https://github.com/ManuLisek/saper-javascript"},{title:t.projects.quiz.title,image:_,description:t.projects.quiz.description,stack:t.projects.quiz.stack,live:"https://manulisek.github.io/quiz-react/",github:"https://github.com/ManuLisek/quiz-react"},{title:t.projects.top5.title,image:U,description:t.projects.top5.description,stack:t.projects.top5.stack,live:"https://manulisek.github.io/top-5-leagues-react/",github:"https://github.com/ManuLisek/top-5-leagues-react"},{title:t.projects.wtyker.title,image:K,description:t.projects.wtyker.description,stack:t.projects.wtyker.stack,live:"https://manulisek.github.io/wtyker-react-redux/",github:"https://github.com/ManuLisek/wtyker-react-redux"},{title:t.projects.portfolio.title,image:X,description:t.projects.portfolio.description,stack:t.projects.portfolio.stack,github:"https://github.com/ManuLisek/portfolio-react-bootstrap"}].map((function(e,a){return Object(h.jsx)("div",{className:"container px-4 text-secondary",children:Object(h.jsxs)("div",{className:"row gx-0 mb-4 mb-lg-5 align-items-center",children:[Object(h.jsxs)("figure",{className:"figure col-lg-6 hover-img bg-black overflow-hidden position-relative rounded-3 ".concat(a%2!==0?"order-lg-2":""),children:[Object(h.jsx)("img",{className:"img-fluid",src:e.image,alt:"project ".concat(t.projects.portfolio.title)}),Object(h.jsxs)("figcaption",{className:"d-flex  justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0",children:[e.title===t.projects.portfolio.title?"":Object(h.jsx)("a",{href:e.live,target:"blank",children:Object(h.jsx)("button",{type:"button",className:"btn btn-primary px-3 px-sm-5 m-2",children:t.projects.buttonLive})}),Object(h.jsx)("a",{href:e.github,target:"blank",children:Object(h.jsx)("button",{type:"button",className:"btn btn-primary px-3 px-sm-5 m-2",children:t.projects.buttonGithub})})]})]}),Object(h.jsx)("div",{className:"col-lg-6",children:Object(h.jsxs)("div",{className:"project-text w-100 mt-2 mb-4 px-sm-4 text-center text-lg-left",children:[Object(h.jsx)("h4",{className:"text-light",children:e.title}),Object(h.jsx)("p",{className:"pt-3 text-light",children:e.description}),Object(h.jsx)("p",{className:"pt-3 pb-4 text-light",children:e.stack}),Object(h.jsx)("hr",{className:"d-none d-lg-block mb-0 me-0"})]})})]})},E()())}));return Object(h.jsx)("section",{id:"projects",className:"py-4 bg-secondary text-center",children:Object(h.jsxs)("div",{className:"container px-4 text-secondary",children:[Object(h.jsx)("h3",{className:"text-primary mb-4",children:t.projects.title}),a]})})},ee=a(96),te=a(95),ae=a(27),ce=a(270),ie=a(19),se=a.n(ie),oe=function(e,t,a){var i=Object(d.a)().i18n;Object(c.useEffect)((function(){return i.on("languageChanged",(function(){Object.keys(e).forEach((function(e){Object.keys(t).includes(e)&&a(e)}))})),function(){i.off("languageChanged",(function(){}))}}),[e])};function ne(e){var t=e.errors,a=e.touched,c=e.setFieldTouched,i=e.children;return oe(t,a,c),Object(h.jsx)(h.Fragment,{children:i})}ne.propTypes={touched:se.a.object,errors:se.a.object,setFieldTouched:se.a.func,children:se.a.object};var re=ne;var le=function(){var e=Object(d.a)().t,t=Object(c.useContext)(g),a=Object(n.a)(t,1)[0],i=Object(c.useState)(!1),s=Object(n.a)(i,2),o=s[0],r=s[1],l=Object(c.useState)(!1),m=Object(n.a)(l,2),b=m[0],j=m[1],u=ae.a().shape({email:ae.b().email("emailIncorrect").required("emailError"),name:ae.b().required("nameError"),message:ae.b().required("messageError")});return Object(h.jsx)("section",{id:"contact",className:"bg-dark ",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"wrapper",children:Object(h.jsxs)("div",{className:"row no-gutters",children:[Object(h.jsx)("div",{className:"col-md-6 d-flex align-items-stretch",children:Object(h.jsx)("div",{className:"contact-wrap w-100 p-md-5 p-4 py-5",children:Object(h.jsx)(te.a,{initialValues:{email:"",name:"",message:""},validationSchema:u,onSubmit:function(e,t){var a=t.setSubmitting,c=t.resetForm,i=setTimeout((function(){a(!1),clearTimeout(i)}),1500);!function(e,t){r(!0),ee.a.send("service_jzma6o4","template_t70kuwt",e,"user_Ye5hZOPBDx3UqyTeAcEsp").then((function(){j(!1),t()}),(function(){j(!0)}))}(e,c)},children:function(t){var c=t.values,i=t.errors,s=t.touched,n=t.handleChange,r=t.handleBlur,l=t.handleSubmit,d=t.isSubmitting,m=t.setFieldTouched;return Object(h.jsx)(re,{errors:i,touched:s,setFieldTouched:m,children:Object(h.jsxs)("form",{method:"POST",id:"contactForm",name:"contactForm",className:"contactForm",noValidate:"novalidate",onSubmit:l,children:[Object(h.jsx)("h3",{className:"mb-4",children:a.contact.writeMe.title}),o?d?Object(h.jsx)("div",{className:"mb-4",children:a.contact.writeMe.subtitleSending}):b?Object(h.jsx)("div",{className:"mb-4 text-danger",children:a.contact.writeMe.subtitleError}):Object(h.jsx)("div",{className:"mb-4",children:a.contact.writeMe.subtitleSuccess}):Object(h.jsx)("div",{className:"mb-4",children:a.contact.writeMe.subtitle}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-12 mb-1",children:Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("input",{type:"email",autoComplete:"new-password",className:"form-control border-2 ".concat(s.email?i.email?"border-danger":"border-success":""),name:"email",id:"email",placeholder:a.contact.writeMe.emailInput,onChange:n,onBlur:r,value:c.email}),Object(h.jsx)("p",{className:"text-danger",children:i.email&&s.email&&e(i.email)})]})}),Object(h.jsx)("div",{className:"col-md-12 mb-1",children:Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("input",{type:"text",autoComplete:"new-password",className:"form-control border-2 ".concat(s.name?i.name?"border-danger":"border-success":""),name:"name",id:"name",placeholder:a.contact.writeMe.nameInput,onChange:n,onBlur:r,value:c.name}),Object(h.jsx)("p",{className:"text-danger",children:i.name&&s.name&&e(i.name)})]})}),Object(h.jsx)("div",{className:"col-md-12 mb-1",children:Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("textarea",{name:"message",className:"form-control border-2 ".concat(s.message?i.message?"border-danger":"border-success":""),id:"message",cols:"30",rows:"6",placeholder:a.contact.writeMe.messageInput,onChange:n,onBlur:r,value:c.message}),Object(h.jsx)("p",{className:"text-danger",children:i.message&&s.message&&e(i.message)})]})}),Object(h.jsx)("div",{className:"col-md-12",children:Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",disabled:d,children:a.contact.writeMe.buttonMessage}),Object(h.jsx)("div",{className:"submitting"})]})})]})]})})}})})}),Object(h.jsx)("div",{className:"col-md-6 d-flex align-items-stretch ",children:Object(h.jsxs)("div",{className:"info-wrap w-100 p-md-5 p-4 py-5 img",children:[Object(h.jsx)("h3",{className:"mb-4",children:a.contact.contactInformations.title}),Object(h.jsx)("p",{className:"mb-4",children:a.contact.contactInformations.subtitle}),Object(h.jsxs)("div",{className:"w-50",children:[Object(h.jsx)("div",{className:"w-25 w-xs-50 mb-5",children:Object(h.jsx)("a",{href:"https://github.com/ManuLisek",target:"blank",children:Object(h.jsx)(G.a,{color:"text-primary"})})}),Object(h.jsx)("div",{className:"w-25 w-xs-50 mb-5",children:Object(h.jsx)("a",{href:"https://www.linkedin.com/in/mlisowiec/",target:"blank",children:Object(h.jsx)(ce.a,{color:"text-primary"})})})]})]})})]})})})})};var de=function(e){var t=e.bg,a=e.fill;return Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"d-block ".concat(t),viewBox:"0 0 1440 94",children:Object(h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1442 63.8127L1393.93 69.2331C1345.87 74.4071 1249.73 85.2479 1153.6 90.4219C1057.47 95.8423 961.333 95.8423 865.2 85.2479C769.067 74.4071 672.933 53.2183 576.8 53.2183C480.667 53.2183 384.533 74.4071 288.4 79.8275C192.267 85.2479 96.1333 74.4071 48.0667 69.2331L0 63.8127V-2.80142e-06H48.0667C96.1333 -2.80142e-06 192.267 -2.80142e-06 288.4 -2.80142e-06C384.533 -2.80142e-06 480.667 -2.80142e-06 576.8 -2.80142e-06C672.933 -2.80142e-06 769.067 -2.80142e-06 865.2 -2.80142e-06C961.333 -2.80142e-06 1057.47 -2.80142e-06 1153.6 -2.80142e-06C1249.73 -2.80142e-06 1345.87 -2.80142e-06 1393.93 -2.80142e-06H1442V63.8127Z",fill:a})})},me=a.p+"static/media/shape.80db0b34.webp";var be=function(){return Object(h.jsx)("img",{className:"shape position-fixed top-0 min-vw-100 opacity-25",src:me,alt:"shape"})},je=a(94),ue=a.n(je);var pe=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"bg-primary vh-100 d-flex justify-content-center",children:Object(h.jsx)(ue.a,{type:"bubble-top",bgColor:"#32485c"})}),Object(h.jsx)(be,{})]})};a(76);var he=function(){var e=Object(c.useState)(!0),t=Object(n.a)(e,2),a=t[0],i=t[1];return Object(c.useEffect)((function(){setTimeout((function(){i(!1)}),2e3)}),[]),a?Object(h.jsx)(pe,{}):Object(h.jsxs)(x,{children:[Object(h.jsx)(S,{}),Object(h.jsxs)("main",{children:[Object(h.jsx)(de,{bg:"bg-light",fill:"#ba8f59"}),Object(h.jsx)(I,{}),Object(h.jsx)(de,{bg:"bg-secondary",fill:"#d7c3a3"}),Object(h.jsx)(Q,{}),Object(h.jsx)($,{}),Object(h.jsx)(de,{bg:"bg-dark",fill:"#473520"}),Object(h.jsx)(le,{})]}),Object(h.jsx)(be,{})]})};o.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(he,{})}),document.getElementById("root"))},76:function(e,t,a){},8:function(e){e.exports=JSON.parse('{"navigation":{"about":"O mnie","technologies":"Technologie","projects":"Projekty","contact":"Kontakt"},"fox":{"header":"Micha\u0142 Lisowiec","subheader":"Junior Front-end Developer","alt":"Lis"},"about":{"title":"O mnie","description":"Cze\u015b\u0107, jestem Micha\u0142 i mieszkam w Bydgoszczy. Programowaniem zainteresowa\u0142em si\u0119 w 2019 roku i rozwijam t\u0119 pasj\u0119 do dzisiaj. Po\u015bwi\u0119cam na nauk\u0119 ka\u017cd\u0105 woln\u0105 chwil\u0119, a poniewa\u017c sprawia mi to przyjemno\u015b\u0107, to chcia\u0142bym \u017ceby sta\u0142o si\u0119 to r\xf3wnie\u017c moj\u0105 prac\u0105. Zdecydowa\u0142em si\u0119 na nauk\u0119 Front-endu, poniewa\u017c zwracam du\u017c\u0105 uwag\u0119 na wygl\u0105d stron internetowych i lubi\u0119 widzie\u0107 efekty swoich dzia\u0142a\u0144. Do tworzenia projekt\xf3w najcz\u0119\u015bciej u\u017cywam React, ale za ka\u017cdym razem staram si\u0119 wykorzysta\u0107 co\u015b nowego, \u017ceby jak najwi\u0119cej si\u0119 nauczy\u0107. Chcia\u0142bym podj\u0105\u0107 prac\u0119 jako Junior Front-end Developer.","alt":"Ja w alpach"},"technologies":{"title":"Technologie z kt\xf3rych korzystam"},"projects":{"title":"Moje projekty","buttonGithub":"Github","buttonLive":"Strona","saper":{"title":"Saper","description":"Moja wersja popularnej gry z pocz\u0105tku lat 80, kt\xf3r\u0105 zna chyba ka\u017cdy. Do wyboru s\u0105 2 poziomy trudno\u015bci, kt\xf3re r\xf3\u017cni\u0105 si\u0119 wielko\u015bci\u0105 planszy i ilo\u015bci\u0105 bomb. Dodatkowym czynnikiem jest up\u0142ywaj\u0105cy czas.","stack":"HTML, SCSS, JavaScript"},"quiz":{"title":"Quiz","description":"Szybka zabawa na temat znajomo\u015bci historii. Ten quiz polega na tym, by odgadn\u0105\u0107 wszystkich polskich prezydent\xf3w. Jedyn\u0105 podpowiedz\u0105 s\u0105 lata w kt\xf3rych dany prezydent urz\u0119dowa\u0142. Jest to pierwszy projekt napisany prze ze mnie w React.","stack":"React, SCSS"},"top5":{"title":"Top 5 leagues","description":"Jako \u017ce lubi\u0119 sport, w moim portfolio nie mog\u0142o zabrakn\u0105\u0107 pi\u0142karskiej aplikacji. Na tej stronie znajdziesz aktualne tabele ligowe, najlepszych strzelc\xf3w oraz skr\xf3ty ostatnich mecz\xf3w z 5 najlepszych lig europejskich. Dane pobra\u0142em z 2 r\xf3\u017cnych API.","stack":"React, React Router, REST API, SCSS"},"wtyker":{"title":"Wtyker","description":"Projekt nieistniej\u0105cego sklepu internetowego z elektronik\u0105. Mo\u017cna w nim filtrowa\u0107 oraz sortowa\u0107 produkty, dodawa\u0107 je do koszyka, a tak\u017ce z\u0142o\u017cy\u0107 zam\xf3wienie.","stack":"React, React Router, Redux, Styled Components"},"portfolio":{"title":"To portolio","description":"Strona na kt\xf3rej w\u0142a\u015bnie si\u0119 znajdujesz. Prezentuj\u0119 na niej swoje umiej\u0119tno\u015bci oraz uko\u0144czone projekty.","stack":"React, Context API, Bootstrap, EmailJS, Formik, Yup, SCSS"}},"contact":{"writeMe":{"title":"Napisz do mnie","subtitle":"Wype\u0142nij formularz \u017ceby si\u0119 ze mn\u0105 skontaktowa\u0107.","subtitleSending":"Wysy\u0142anie...","subtitleSuccess":"Twoja wiadomo\u015b\u0107 zosta\u0142a wys\u0142ana. Dzi\u0119kuj\u0119!","subtitleError":"Uuups! Co\u015b posz\u0142o nie tak...","emailInput":"Email","nameInput":"Imi\u0119","messageInput":"Wiadomo\u015b\u0107","emailError":"Wpisz sw\xf3j adres email","emailIncorrect":"Podany email jest nieprawid\u0142owy","nameError":"Wpisz swoje imi\u0119","messageError":"Nie wstyd\u017a si\u0119, przynajmniej si\u0119 przywitaj :)","buttonMessage":"Wy\u015blij wiadomo\u015b\u0107"},"contactInformations":{"title":"Informacje kontaktowe","subtitle":"Dowiedz si\u0119 o mnie wi\u0119cej lub skontaktuj si\u0119 w inny spos\xf3b."}}}')},9:function(e){e.exports=JSON.parse('{"navigation":{"about":"About","technologies":"Technologies","projects":"Projects","contact":"Contact"},"fox":{"header":"Micha\u0142 Lisowiec","subheader":"Junior Front-end Developer","alt":"Fox"},"about":{"title":"About me","description":"Hello, I am Micha\u0142 and I live in Bydgoszcz. In 2019, I got interested in programming and I develop this passion to this day. I devote for learning every free moment, and because it gives me pleasure, I\'d like it to become my job as well. I decided on a Front-end, because I pay attention to the appearance of websites and I like to see effects of my actions. For creating projects I use mostly React, but I always try to use something new, to learn as much as possible. I would like to work as Junior Front-end Developer.","alt":"Me in the Alps"},"technologies":{"title":"Technologies that I use"},"projects":{"title":"My projects","buttonGithub":"Github","buttonLive":"Live","saper":{"title":"Saper","description":"My version of a popular game from the early 1980s that is probably known to everyone. There are two difficulty levels to choose, that differ in the size of the board and the number of bombs. Passing time is an additional factor.","stack":"HTML, SCSS, JavaScript"},"quiz":{"title":"Quiz","description":"Quick game about history knowledge. This quiz is about guessing all Polish presidents. The only hints are the years in which each president was in office. This is the first project I created in React.","stack":"React, SCSS"},"top5":{"title":"Top 5 leagues","description":"Because I like sports, a football application could not be missing in my portfolio. On this page you will find the current league tables, top scorers and highlights of the latest matches in the top 5 European leagues. The data come from two different APIs.","stack":"React, React Router, REST API, SCSS"},"wtyker":{"title":"Wtyker","description":"Project of fake online shop with electronics. You can filter and sort products in it, add them to the cart and place an order.","stack":"React, React Router, Redux, Styled Components"},"portfolio":{"title":"This portfolio site","description":"The website you are currently on. I present here my skills and finished projects.","stack":"React, Context API, Bootstrap, EmailJS, Formik, Yup, SCSS"}},"contact":{"writeMe":{"title":"Write to me","subtitle":"Fill the form to contact me.","subtitleSending":"Sending...","subtitleSuccess":"Your message was sent. Thanks!","subtitleError":"Wooops! Something went wrong...","emailInput":"Email","nameInput":"Name","messageInput":"Message","emailError":"Please enter your email","emailIncorrect":"The email is incorrect","nameError":"Please enter your name","messageError":"Don\'t be shy, at least say hi :)","buttonMessage":"Send message"},"contactInformations":{"title":"Contact informations","subtitle":"Find out more about me or contact me in another way."}}}')}},[[258,1,2]]]);
//# sourceMappingURL=main.02b5b8a1.chunk.js.map