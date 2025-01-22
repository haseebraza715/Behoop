"use strict";(self.webpackChunkbehoop=self.webpackChunkbehoop||[]).push([[211],{211:(e,a,t)=>{t.r(a),t.d(a,{default:()=>c});var s=t(555),i=t(43),r=t(56),l=t(184),n=t(200);const m=t.p+"static/media/undraw_contact-us_kcoa.9305e6a2a7d49d7b9b6207338f8f1c34.svg";var o=t(579);const c=()=>{const[e,a]=(0,i.useState)({name:"",email:"",message:""}),[t,c]=(0,i.useState)({}),[d,x]=(0,i.useState)(!1),[h,u]=(0,i.useState)(!1),p=i=>{const{name:r,value:l}=i.target;a((0,s.A)((0,s.A)({},e),{},{[r]:l})),"email"===r&&l&&!/\S+@\S+\.\S+/.test(l)?c((0,s.A)((0,s.A)({},t),{},{email:"Invalid email address."})):c((0,s.A)((0,s.A)({},t),{},{[r]:""}))};return(0,o.jsxs)("section",{className:"relative bg-gradient-to-br from-primary-light via-white to-light-teal py-24 overflow-hidden",children:[(0,o.jsx)(r.P.div,{className:"absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20",initial:{x:-100,opacity:0},animate:{x:0,opacity:.3},transition:{duration:1}}),(0,o.jsx)(r.P.div,{className:"absolute bottom-0 right-0 w-80 h-80 bg-primary-dark rounded-full blur-3xl opacity-20",initial:{x:100,opacity:0},animate:{x:0,opacity:.3},transition:{duration:1}}),(0,o.jsxs)("div",{className:"max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10",children:[(0,o.jsxs)(r.P.div,{className:"text-center mb-16",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.8},children:[(0,o.jsx)("h2",{className:"text-5xl font-extrabold text-gray-800 leading-tight",children:(0,o.jsx)("span",{className:"bg-gradient-to-r from-primary-dark to-accent bg-clip-text text-transparent",children:"Contact Us"})}),(0,o.jsx)("p",{className:"text-lg text-gray-600 mt-4 max-w-2xl mx-auto",children:"Let\u2019s create something amazing together. Reach out to us today!"})]}),(0,o.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[(0,o.jsx)(r.P.div,{className:"flex justify-center",initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.8},children:(0,o.jsx)("img",{src:m,alt:"Contact Us",className:"w-full max-w-lg"})}),(0,o.jsxs)(r.P.div,{className:"bg-white p-8 rounded-lg shadow-lg",initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.8},children:[(0,o.jsx)("h3",{className:"text-2xl font-bold text-gray-800 mb-6",children:"Send Us a Message"}),d&&(0,o.jsx)(r.P.div,{className:"mb-6 text-green-600 font-semibold",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{duration:.5},children:"Message sent successfully!"}),(0,o.jsxs)("form",{className:"space-y-6",onSubmit:t=>{t.preventDefault();let s={};e.name||(s.name="Name is required."),e.email?/\S+@\S+\.\S+/.test(e.email)||(s.email="Invalid email address."):s.email="Email is required.",e.message||(s.message="Message is required."),Object.keys(s).length>0?c(s):(u(!0),setTimeout((()=>{u(!1),x(!0),a({name:"",email:"",message:""}),setTimeout((()=>x(!1)),3e3)}),2e3))},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-600 mb-2",children:"Name"}),(0,o.jsxs)("div",{className:"flex items-center border border-gray-300 rounded-lg py-3 px-4",children:[(0,o.jsx)(l.x$1,{className:"text-primary-dark mr-3"}),(0,o.jsx)("input",{type:"text",id:"name",name:"name",value:e.name,onChange:p,className:"w-full focus:ring-primary focus:border-primary outline-none",placeholder:"Enter your name"})]}),t.name&&(0,o.jsx)("p",{className:"text-red-600 text-sm mt-1",children:t.name})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-600 mb-2",children:"Email"}),(0,o.jsxs)("div",{className:"flex items-center border border-gray-300 rounded-lg py-3 px-4",children:[(0,o.jsx)(l.maD,{className:"text-primary-dark mr-3"}),(0,o.jsx)("input",{type:"email",id:"email",name:"email",value:e.email,onChange:p,className:"w-full focus:ring-primary focus:border-primary outline-none",placeholder:"Enter your email"})]}),t.email&&(0,o.jsx)("p",{className:"text-red-600 text-sm mt-1",children:t.email})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-600 mb-2",children:"Message"}),(0,o.jsx)("div",{className:"border border-gray-300 rounded-lg p-4",children:(0,o.jsx)("textarea",{id:"message",name:"message",rows:"5",value:e.message,onChange:p,className:"w-full focus:ring-primary focus:border-primary outline-none",placeholder:"Enter your message"})}),t.message&&(0,o.jsx)("p",{className:"text-red-600 text-sm mt-1",children:t.message})]}),(0,o.jsxs)("div",{className:"flex space-x-4",children:[(0,o.jsxs)("button",{type:"submit",className:"w-full bg-gradient-to-r from-primary to-primary-dark text-white py-3 px-8 rounded-lg shadow-lg hover:opacity-90 transform hover:scale-105 transition-all flex items-center justify-center",disabled:h,children:[h?(0,o.jsx)(l.Cer,{className:"animate-spin "}):(0,o.jsx)(l.Cer,{className:"mr-2"}),h?"Sending...":"Send"]}),(0,o.jsx)("button",{type:"button",onClick:()=>{a({name:"",email:"",message:""}),c({})},className:"w-full bg-gray-200 text-gray-800 py-3 px-8 rounded-lg shadow-lg hover:bg-gray-300 transform hover:scale-105 transition-all",children:"Reset"})]})]}),(0,o.jsxs)("div",{className:"flex space-x-6 justify-center mt-8",children:[(0,o.jsx)("a",{href:"#",className:"text-primary-dark text-2xl hover:text-accent","aria-label":"LinkedIn",children:(0,o.jsx)(n.Wjy,{})}),(0,o.jsx)("a",{href:"#",className:"text-primary-dark text-2xl hover:text-accent","aria-label":"Twitter",children:(0,o.jsx)(n.TC4,{})}),(0,o.jsx)("a",{href:"#",className:"text-primary-dark text-2xl hover:text-accent","aria-label":"Instagram",children:(0,o.jsx)(n.eCe,{})})]})]})]}),(0,o.jsxs)("div",{className:"mt-24 px-4 sm:px-6 lg:px-8",children:[(0,o.jsxs)(r.P.div,{className:"text-center mb-12",initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:.8},children:[(0,o.jsx)("h3",{className:"text-4xl font-bold text-gray-800 mb-4",children:(0,o.jsx)("span",{className:"bg-gradient-to-r from-primary-dark to-accent bg-clip-text text-transparent",children:"Find Us on the Map"})}),(0,o.jsx)("p",{className:"text-lg text-gray-600 max-w-2xl mx-auto",children:"Visit us at our office in Lahore, Pakistan. We\u2019re here to help you bring your ideas to life!"})]}),(0,o.jsxs)(r.P.div,{className:"relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20",initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},transition:{duration:.8},children:[(0,o.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-10"}),(0,o.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.674715060093!2d74.35227231510494!3d31.467081981391636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919067a89b18b4d%3A0x4c2c9a9a1a1a1a1a!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1622549402997!5m2!1sen!2sus",width:"100%",height:"100%",style:{border:0},allowFullScreen:"",loading:"lazy",className:"absolute inset-0"}),(0,o.jsx)("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20",children:(0,o.jsxs)("div",{className:"flex flex-col items-center",children:[(0,o.jsx)("div",{className:"w-12 h-12 bg-primary-dark rounded-full flex items-center justify-center shadow-lg animate-pulse",children:(0,o.jsx)(l.vq8,{className:"text-white text-2xl"})}),(0,o.jsx)("div",{className:"mt-2 bg-white px-4 py-2 rounded-lg shadow-md text-sm font-medium text-gray-800",children:"Lahore, Pakistan"})]})})]})]})]})]})}}}]);
//# sourceMappingURL=211.d92ca296.chunk.js.map