"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[66],{7134:function(e,s,l){var t=l(5893),r=l(1664),n=l.n(r),a=l(3967),c=l.n(a);s.Z=e=>{let{children:s,href:l,className:r,variant:a="default",target:i="_self",disabled:o,onClick:d}=e;return(0,t.jsx)(n(),{className:c()("button flex flex-row px-4 py-2 rounded-md mx-auto border-2",r,o?"!border-[#CCC] !bg-black !text-[#CCC] !hover:text-[#CCC] !cursor-default":({default:"border-[#0F0] bg-[#0F0] !text-black hover:bg-black hover:!text-[#0F0]",dark:"border-[#060] bg-black !text-white hover:bg-black hover:border-[#0F0] hover:!text-[#0F0]",darkred:"border-[#600] bg-black !text-white hover:bg-black hover:border-[#F00] hover:!text-[#F00]"})[a]),href:l||"",target:i,onClick:e=>{o&&e.preventDefault(),d&&(e.preventDefault(),o||d(e))},children:(0,t.jsx)("div",{className:"flex flex-col mx-auto justify-center text-center",children:s})})}},1122:function(e,s,l){l.r(s);var t=l(5893),r=l(7294),n=l(1163),a=l(1664),c=l.n(a),i=l(9008),o=l.n(i),d=l(5518),x=l(3967),u=l.n(x),h=l(7134),m=l(1126),f=l(6113),j=l(8823);s.default=()=>{(0,n.useRouter)();let e=(0,r.useRef)(),s=(0,f.Z)(e=>e.account),[l,a]=(0,r.useState)(!1),[i,x]=(0,r.useState)(),[p,v]=(0,r.useState)(!1),[g,b]=(0,r.useState)(!1),[N,k]=(0,r.useState)(!1),[w,y]=(0,r.useState)(!1),[C,F]=(0,r.useState)(),[D,S]=(0,r.useState)({proof:"",next:{level:2,difficulty:1,indice:"Inspecteur F12",label:"",name:"",outlink:null},answer:""});(0,r.useEffect)(()=>{let e=localStorage.getItem("hx_biscuit");e&&F(e),y(d.tq)},[]);let Z=new Date,E="wtf".concat(("0"+(Z.getMonth()+1)).slice(-2)).concat(Z.getFullYear().toString().substring(2,4)),_=t=>{if(e){let r=t&&C||e.current.value;if(b(!0),(null==r?void 0:r.length)<=3)return setTimeout(()=>{x("Code incorrect"),b(!1)},Math.floor(100*Math.random()));if(l){let e=localStorage.getItem("hx_biscuit");fetch("/api/v1/wtf?username=".concat(s.username,"&challenge=").concat(D.next.label,"&value=").concat(r,"&code=").concat(e)).then(e=>e.json()).then(e=>{console.log("c",e),b(!1),e.next?(x(null),S(e),e.proof&&localStorage.setItem("hx_biscuit",e.proof),k(!1),v(!1)):e.error&&x(e.error),x(null)})}else fetch("/api/v1/wtf?username=".concat(s.username,"&challenge=wtf&value=").concat(r)).then(e=>e.json()).then(e=>{b(!1),e.next?(x(null),a(!0),S(e),e.proof&&localStorage.setItem("hx_biscuit",e.proof),k(!1),v(!1)):e.error&&x(e.error),x(null)})}},z=()=>(0,t.jsx)("small",{style:{animation:i?".5s shake":""},className:u()("mb-1",i?"text-red-400":""),children:i||(l?"Entrez le code:":s?"Entrez la preuve WTF":"Connectez-vous pour participer !")}),T="Testez vos capacit\xe9s de hacking avec nos nombreux challenge de CTF !";return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o(),{children:[(0,t.jsxs)("title",{children:["Challenge pour ",(null==s?void 0:s.username)||"pirates !"]}),s?(0,t.jsx)("meta",{name:"PREUVE WTF",content:(null==D?void 0:D.proof)||E}):"",(0,t.jsx)("meta",{name:"keywords",content:"hacking, piracy, white, hat, crack, warez, tiktok, discord, linux, bash, c2, crow, trojan, virus, malware, cyber, security, osint, bot, lookup, concours, jeux, challenge"}),(0,t.jsx)("meta",{name:"description",content:T}),(0,t.jsx)("meta",{name:"og:description",content:T})]}),(0,t.jsx)(m.Z,{fileName:"wwwtf",h1:"Challenge WTF"}),s?"":(0,t.jsxs)("div",{className:"reading",children:[(0,t.jsxs)("h2",{className:"title",children:["Bienvenue ",(null==s?void 0:s.username)||"cher pirate"," !"]}),(0,t.jsx)("p",{children:"Je voudrais te proposer un challenge !"}),(0,t.jsx)("p",{children:"Voici un input, et un bouton. Il y a un code secret pour entrer dans la partie WTF du site, \xe0 toi de le trouver ^^"})]}),l?(0,t.jsxs)("div",{className:"flex flex-col md:flex-row justify-center",children:[(0,t.jsx)(m.Z,{fileName:"seahorse",className:"-my-6 hidden md:block"}),(0,t.jsx)("div",{children:(0,t.jsx)(()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"md:reading text-center md:text-left",children:[(0,t.jsxs)("h2",{className:"title text-center",children:["Bravo ",s.username," !"]}),(0,t.jsx)("div",{className:"flex flex-row justify-center text-center my-5",children:(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("span",{children:"Votre preuve WTF:"}),(0,t.jsx)("code",{children:D.proof}),(0,t.jsx)("small",{children:"(Notez-la pour revenir)"})]})}),(0,t.jsx)("h3",{className:"title text-center",children:(0,t.jsxs)("strong",{children:["Vous avez fini le challenge n\xb0",D.next.level-1]})}),(0,t.jsxs)("p",{className:"text-center",children:["La r\xe9ponse \xe9tait ",(0,t.jsx)("code",{className:"cursor-pointer",onClick:()=>v(!0),children:p?D.answer:"[spoiler]"})]})]}),!N&&D.next.difficulty<=100?(0,t.jsx)("div",{className:"flex flex-row mt-4",children:(0,t.jsx)(h.Z,{onClick:()=>k(!0),children:"Challenge suivant"})}):"",N?(0,t.jsx)("div",{className:"flex flex-row justify-center mt-6",children:D.next.difficulty<=100?(0,t.jsxs)("div",{className:"reading border-2 bg-black max-w-[480px] p-4 rounded-lg",children:[(0,t.jsxs)("h4",{className:"title",children:["Challenge n\xb0",D.next.level,": ",(0,t.jsx)("code",{children:D.next.name})]}),(0,t.jsxs)("p",{children:["Indice: ",(0,t.jsx)("code",{children:D.next.indice})]}),(0,t.jsxs)("p",{children:["Difficult\xe9: ",(0,t.jsxs)("code",{children:[D.next.difficulty,"%"]})]}),D.next.outlink&&(0,t.jsxs)("p",{children:["Aide: ",(0,t.jsxs)(c(),{href:D.next.outlink.href,target:"_blank",children:[D.next.outlink.name,"\xa0>"]})]}),(0,t.jsx)("div",{className:"flex flex-row justify-center mt-6",children:(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)(z,{}),(0,t.jsxs)("div",{className:"flex flex-row",children:[(0,t.jsx)("input",{disabled:g,type:"password",ref:e,className:"rounded-lg p-2 mr-2 text-black",placeholder:"Challenge ?",onKeyDown:e=>{"Enter"===e.key&&_()}}),s?(0,t.jsx)(h.Z,{disabled:g,onClick:()=>_(),className:"rounded-lg",children:"Essayer"}):""]})]})})]}):""}):"",D.next.difficulty>100?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"md:reading text-center mt-4",children:[(0,t.jsx)("h2",{className:"title",children:"Bravo !!"}),(0,t.jsx)(m.Z,{fileName:"ggbg"}),(0,t.jsx)("p",{className:"max-w-[480px] mx-auto text-[#0F0]",children:"Tu es arriv\xe9 \xe0 la fin !"}),(0,t.jsx)("p",{className:"max-w-[480px] mx-auto",children:"D'autres challenges arrivent prochainement :) "}),(0,t.jsx)("p",{className:"max-w-[480px] mx-auto",children:"N'oublie pas de sauvegarder ta preuve sinon tu devras tout recommencer !!"})]}),(0,t.jsx)(h.Z,{className:"max-w-[240px] mt-6 text-center",href:"/discord",children:"Rejoignez discord !"})]}):"",(0,t.jsx)(m.Z,{fileName:"key02",color:"#888",className:"hidden md:block"})]}),{})})]}):(0,t.jsx)(()=>(0,t.jsxs)(t.Fragment,{children:[s?(0,t.jsxs)("div",{className:"reading",children:[(0,t.jsxs)("h2",{className:"title",children:["Bienvenue ",s.username||"cher pirate"," !"]}),(0,t.jsx)("p",{children:"Je voudrais te proposer un challenge !"}),(0,t.jsx)("p",{children:"Voici un input, et un bouton. Il y a un code secret pour entrer dans la partie WTF du site, \xe0 toi de le trouver ^^"})]}):"",(0,t.jsxs)("div",{className:"reading border-2 bg-black max-w-[480px] p-4 rounded-lg",onClick:e=>s?"":x("Vous devez vous connecter"),children:[(0,t.jsxs)("p",{children:["Indice: ",(0,t.jsx)("code",{children:D.next.indice})]}),(0,t.jsxs)("p",{children:["Difficult\xe9: ",(0,t.jsxs)("code",{children:[D.next.difficulty,"%"]})]}),(0,t.jsx)("div",{className:"flex flex-row justify-center mt-6",children:(0,t.jsx)("div",{className:"flex flex-col",children:s?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(z,{}),(0,t.jsxs)("div",{className:"flex flex-row",children:[(0,t.jsx)("input",{type:"password",disabled:!s||g,ref:e,className:"rounded-lg p-2 mr-2 text-black",placeholder:"Mot de passe ?",onKeyDown:e=>{"Enter"===e.key&&_()}}),(0,t.jsx)(h.Z,{disabled:!s||g,onClick:()=>s?_():"",className:"rounded-lg",children:"Envoyer"})]})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{children:"Connecte-toi avec Discord pour participer \uD83C\uDFC1"}),(0,t.jsx)("div",{className:"flex flex-row justify-center mt-2",children:(0,t.jsx)(j.Z,{text:"\uD83C\uDFCE\uD83D\uDCA8 Let's GOOO!!"})})]})})}),w&&s?(0,t.jsx)("div",{className:"mt-2 w-7/8",children:(0,t.jsxs)("span",{className:"mt-2",children:["Vous \xeates sur mobile ? Votre indice est ",(0,t.jsx)(c(),{href:"/mobile-view-source",target:"_blank",children:"par ici"})]})}):"",C?(0,t.jsx)("div",{className:"mt-2 flex flex-col",children:(0,t.jsx)("span",{className:"cursor-pointer hover:underline mx-auto text-[#0F0]",onClick:()=>_(!0),children:"Vous l'avez d\xe9j\xe0 fait ?"})}):""]})]}),{}),(0,t.jsx)(m.Z,{fileName:"chest01",color:"#888",className:u()(l?"hidden":"")}),l?(0,t.jsx)(m.Z,{fileName:"seahorse",className:"-my-6  md:hidden"}):""]})}}}]);