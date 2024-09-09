(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4911:function(e,t,a){Promise.resolve().then(a.bind(a,7073))},7073:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Z}});var r=a(7437),s=a(2265),n=a(9884),i=a.n(n),o=e=>{let{setShowSignIn:t,setShowLogin:a,userLogged:s,setUserLogged:n}=e;return(0,r.jsxs)("header",{className:i().header,children:[(0,r.jsx)("div",{className:i().logo,onClick:e=>{e.preventDefault(),t(!1),a(!1)},id:"logo-text",children:"URL Shortener"}),null==s?(0,r.jsxs)("div",{className:i().btnDiv,children:[(0,r.jsx)("button",{className:i().btnOutline,onClick:e=>{e.preventDefault(),t(!0),a(!1)},children:"Sign In"}),(0,r.jsx)("button",{className:i().btnOutline,onClick:e=>{e.preventDefault(),t(!1),a(!0)},children:"Login"})]}):(0,r.jsxs)("div",{className:i().btnDiv,children:[(0,r.jsxs)("h3",{children:["hi, ",(0,r.jsx)("span",{className:i().spanName,children:s.username})]}),(0,r.jsx)("button",{className:i().btnOutline,onClick:e=>{n(null),window.localStorage.clear()},children:"Logout"})]})]})},l=a(8792),c=a.n(l),d=a(672),u=a.n(d),_=a(8472);let m="/api/shorturls";class h{static setToken(e){this.token="Bearer ".concat(e),this.config={headers:{Authorization:this.token}}}static async createNewShortUrl(e){try{return await _.Z.post(m,e,this.config)}catch(e){return e.response}}static async editShortUrl(e,t){try{return await _.Z.put(m+"/"+t,e,this.config)}catch(e){console.log("Error al tratar de editar la url con id: ",t)}}static async deleteShortUrl(e){try{return await _.Z.delete(m+"/"+e,this.config)}catch(t){console.log("Error al tratar de eliminar la url con id: ",e)}}constructor(){this.token=null,this.config=null}}var x=a(2535),g=a.n(x),p=e=>{let{shortUrl:t}=e,[a,n]=(0,s.useState)(!1);return(0,r.jsx)("div",{className:g().card,children:(0,r.jsx)("div",{className:g().cardContent,children:(0,r.jsxs)("div",{className:g().cardItem,children:[(0,r.jsx)("a",{href:t,className:g().cardUrl,children:t}),(0,r.jsx)("span",{className:g().cardIcon,onClick:()=>{navigator.clipboard.writeText(t),n(!0)},children:a?(0,r.jsx)("i",{className:"bx bx-check-double"}):(0,r.jsx)("i",{className:"bx bx-copy"})})]})})})},f=a(8411),N=a.n(f),j=e=>{let{message:t}=e;return(0,r.jsx)("div",{className:N().errorContainer,children:(0,r.jsx)("div",{className:N().errorContent,children:(0,r.jsx)("p",{className:N().errorMessage,children:t})})})},C=e=>{let{setListOfUser:t}=e,[a,n]=(0,s.useState)(""),[i,o]=(0,s.useState)(null),[l,c]=(0,s.useState)(""),d=async e=>{if(e.preventDefault(),""!=a){let e=await h.createNewShortUrl({originalUrl:a});console.log(),void 0==e.data.urlExist?(void 0!=e.data.shortUrl&&(o(e.data.shortUrl),t(t=>[...t,e.data])),n(""),c("")):c(e.data.urlExist)}else c("The fields url must not be empty.")};return(0,r.jsxs)("div",{className:u().formContainer,children:[(0,r.jsx)("h1",{className:u().title,children:"Shorten your URLs"}),(0,r.jsx)("p",{className:u().description,children:"Enter a URL below to create a short, shareable link."}),(0,r.jsxs)("form",{className:u().form,onSubmit:d,value:a,children:[(0,r.jsx)("input",{className:u().input,value:a,onChange:e=>{let{target:t}=e;return n(t.value)},type:"text",placeholder:"Enter a URL"}),(0,r.jsx)("button",{className:u().btnFull,type:"submit",children:"Shorten URL"})]}),l&&(0,r.jsx)(j,{message:l}),i&&(0,r.jsx)(p,{shortUrl:i})]})},v=a(2786),S=a.n(v);class b{static async login(e){try{return(await _.Z.post("/api/login",e)).data}catch(e){console.log("Error al tratar de ingresar con el usuario desde el frontend",e)}}}function w(e){let{setShowLogin:t,setUserLogged:a,setShowSignIn:n}=e,[i,o]=(0,s.useState)(""),[l,c]=(0,s.useState)(""),[d,u]=(0,s.useState)(""),_=async e=>{e.preventDefault();let r=await b.login({username:i,password:l});if(!r)return u("Invalid username or password.");a(r),t(!1),o(""),c(""),h.setToken(r.token),window.localStorage.setItem("userLogged",JSON.stringify(r))};return(0,r.jsxs)("div",{className:S().loginContainer,children:[(0,r.jsx)("h1",{className:S().title,children:"Login"}),(0,r.jsxs)("form",{className:S().form,onSubmit:_,children:[(0,r.jsx)("input",{className:S().input,type:"text",placeholder:"Username",value:i,onChange:e=>{let{target:t}=e;return o(t.value)}}),(0,r.jsx)("input",{className:S().input,type:"password",placeholder:"Password",value:l,onChange:e=>{let{target:t}=e;return c(t.value)}}),(0,r.jsx)("button",{className:S().btnFull,type:"submit",children:"Login"})]}),d&&(0,r.jsx)(j,{message:d}),(0,r.jsxs)("p",{className:S().signupText,children:["Don't have an account? ",(0,r.jsx)("a",{onClick:e=>{e.preventDefault(),t(!1),n(!0)},className:S().signupLink,children:"Sign Up"})]})]})}var U=a(6355),I=a.n(U);let y="/api/users";class L{static async createNewUser(e){try{return await _.Z.post(y,e)}catch(e){console.log("Error al tratar de registrar un usuario desde el frontend")}}static validatePassword(e){return e.password===e.confirmPassword}static async getUrlsByUserId(e){try{let t={headers:{Authorization:"Bearer "+e.token}};return await _.Z.get(y+"/".concat(e.id,"/urls"),t)}catch(e){console.log("Error al tratar de tarer la lista de urls del usuario por el id")}}}var k=e=>{let{setShowSignIn:t,setShowLogin:a}=e,[n,i]=(0,s.useState)(""),[o,l]=(0,s.useState)(""),[c,d]=(0,s.useState)(""),[u,_]=(0,s.useState)(""),[m,h]=(0,s.useState)(),x=async e=>{e.preventDefault();let r={email:n,username:o,password:c,confirmPassword:u};n&&o&&c&&u?L.validatePassword(r)?await L.createNewUser(r)?(i(""),l(""),d(""),_(""),t(!1),a(!0)):console.log("Error al registrar el usuario desde el frontend..."):h("The password must be same"):h("All fields are required.")};return(0,r.jsxs)("div",{className:I().formContainer,children:[(0,r.jsx)("h1",{className:I().title,children:"Register"}),(0,r.jsxs)("form",{className:I().form,onSubmit:x,children:[(0,r.jsx)("input",{className:I().input,type:"email",placeholder:"Email",value:n,onChange:e=>i(e.target.value)}),(0,r.jsx)("input",{className:I().input,type:"text",placeholder:"Username",value:o,onChange:e=>l(e.target.value)}),(0,r.jsx)("input",{className:I().input,type:"password",placeholder:"Password",value:c,onChange:e=>d(e.target.value)}),(0,r.jsx)("input",{className:I().input,type:"password",placeholder:"Confirm Password",value:u,onChange:e=>_(e.target.value)}),m&&(0,r.jsx)(j,{message:m}),(0,r.jsx)("button",{className:I().btnFull,type:"submit",children:"Register"})]})]})},E=a(3169),D=a.n(E),B=e=>{let{longUrl:t,shortUrl:a,views:n,onEdit:i,onDelete:o}=e,[l,c]=(0,s.useState)(!1),[d,u]=(0,s.useState)(!1);return(0,r.jsx)("div",{className:D().card,children:(0,r.jsx)("div",{className:D().cardContent,children:d?(0,r.jsxs)("div",{className:D().confirmDeleteContainer,children:[(0,r.jsx)("p",{className:D().message,children:"Are you sure you want to delete this URL?"}),(0,r.jsxs)("div",{className:D().buttonContainer,children:[(0,r.jsx)("button",{className:D().cancelButton,onClick:()=>{u(!1)},children:"Cancel"}),(0,r.jsx)("button",{className:D().confirmButton,onClick:o,children:"Delete"})]})]}):(0,r.jsxs)("div",{className:D().cardItemContainer,children:[(0,r.jsxs)("div",{className:D().cardItem,children:[(0,r.jsx)("span",{className:D().cardUrl,children:t}),(0,r.jsx)("span",{className:D().cardIcon,children:(0,r.jsx)("i",{onClick:i,className:"bx bx-edit"})})]}),(0,r.jsxs)("div",{className:D().cardItem,children:[(0,r.jsx)("span",{className:D().cardUrl,children:a}),l?(0,r.jsx)("span",{className:D().cardIcon,children:(0,r.jsx)("i",{className:"bx bx-check-double"})}):(0,r.jsx)("span",{className:D().cardIcon,children:(0,r.jsx)("i",{onClick:()=>{navigator.clipboard.writeText(a),c(!0),setTimeout(()=>c(!1),5e3)},className:"bx bxs-copy"})})]}),(0,r.jsx)("div",{className:D().cardItem,children:(0,r.jsxs)("div",{className:D().cardItemBottom,children:[(0,r.jsxs)("div",{className:D().cardItemShow,children:[(0,r.jsx)("span",{className:D().cardView,children:n}),(0,r.jsx)("span",{className:D().cardIconShow,children:(0,r.jsx)("i",{className:"bx bx-show-alt"})})]}),(0,r.jsx)("span",{className:D().cardIconDelete,children:(0,r.jsx)("i",{onClick:()=>{u(!0)},className:"bx bx-trash-alt"})})]})})]})})})},T=a(923),F=a.n(T),R=e=>{let{card:t,handleCancel:a,listOfUser:n,setListOfUser:i,onSuccess:o}=e,[l,c]=(0,s.useState)(""),[d,u]=(0,s.useState)(""),_=async e=>{if(l!=t.originalUrl&&""!=l){let e=await h.editShortUrl({originalUrl:l},t.id);void 0!=e.data.shortUrl&&(i(n.map(a=>a.id===t.id?e.data:a)),c(""),a(),o())}else u("Url is not valid.")};return(0,r.jsxs)("div",{className:F().editCardContainer,children:[(0,r.jsx)("h2",{className:F().title,children:"Edit URL"}),(0,r.jsxs)("p",{className:F().currentUrl,children:["Current URL: ",t.originalUrl]}),(0,r.jsx)("input",{className:F().input,type:"text",placeholder:"Enter new URL",value:l,onChange:e=>c(e.target.value)}),(0,r.jsxs)("div",{className:F().buttonContainer,children:[(0,r.jsx)("button",{className:F().cancelButton,onClick:a,children:"Cancel"}),(0,r.jsx)("button",{className:F().confirmButton,onClick:_,children:"Confirm"})]}),d&&(0,r.jsx)(j,{message:d})]})},O=a(9530),M=a.n(O),A=e=>{let{message:t,onClose:a}=e;return(0,s.useEffect)(()=>{let e=setTimeout(()=>{a()},3e3);return()=>clearTimeout(e)},[a]),(0,r.jsx)("div",{className:M().notificationContainer,children:(0,r.jsx)("div",{className:M().notification,children:t})})},P=a(9714),H=e=>{let{showLogin:t,setShowLogin:a,showSignIn:n,setShowSignIn:i,setUserLogged:o,userLogged:l}=e,[d,u]=(0,s.useState)([]),[_,m]=(0,s.useState)(!1),[x,g]=(0,s.useState)(null),[p,f]=(0,s.useState)(),[N,j]=(0,s.useState)(!0);(0,s.useEffect)(()=>{(async()=>{if(null===l)return;let e=(0,P.o)(l.token);l.id=e.id,u((await L.getUrlsByUserId(l)).data)})()},[l]);let v=d.map(e=>(0,r.jsx)(B,{longUrl:e.originalUrl,shortUrl:e.shortUrl,views:e.countClick,onEdit:()=>S(e),onDelete:()=>b(e),deleteItem:N,setDeleteItem:j},e.id)),S=e=>{g(e),m(!0)},b=async e=>{200==(await h.deleteShortUrl(e.id)).request.status?(u(d.filter(t=>t.id!=e.id)),g(null),U()):console.log("hubo un error al eliminar la url con Id: ",e.id)},U=()=>{f(!0)};return t?(0,r.jsx)("main",{className:c().main,children:(0,r.jsx)("div",{className:c().content,children:(0,r.jsx)(w,{setShowLogin:a,setUserLogged:o,setShowSignIn:i})})}):n?(0,r.jsx)("main",{className:c().main,children:(0,r.jsx)("div",{className:c().content,children:(0,r.jsx)(k,{setShowSignIn:i,setShowLogin:a})})}):(0,r.jsx)("div",{className:c().main,children:_?(0,r.jsx)(R,{card:x,handleCancel:()=>{m(!1),g(null)},listOfUser:d,setListOfUser:u,onSuccess:U}):(0,r.jsx)("main",{className:c().main,children:(0,r.jsxs)("div",{className:c().content,children:[(0,r.jsx)(C,{setListOfUser:u}),(0,r.jsxs)("div",{className:c().inventory,children:[l&&(0,r.jsx)("div",{className:c().titleInventory,children:"History"}),(0,r.jsx)("div",{className:c().cardContainer,children:l&&v}),p&&(0,r.jsx)(A,{message:"Success!",onClose:()=>f(!1)})]})]})})})},V=a(2439),J=a.n(V),X=()=>(0,r.jsxs)("footer",{className:J().footer,children:[(0,r.jsx)("span",{className:J().footerText,children:"\xa9 2024 URL Shortener. All rights reserved."}),(0,r.jsxs)("nav",{className:J().footerNav,children:[(0,r.jsx)("a",{href:"#",className:J().footerLink,children:"Pol\xedtica de privacidad"}),(0,r.jsx)("a",{href:"#",className:J().footerLink,children:"T\xe9rminos del servicio"})]})]}),Z=()=>{let[e,t]=(0,s.useState)(!1),[a,n]=(0,s.useState)(!1),[i,l]=(0,s.useState)(null);return(0,s.useEffect)(()=>{i&&(n(!1),t(!1))},[i]),(0,s.useEffect)(()=>{let e=window.localStorage.getItem("userLogged");if(e){let t=JSON.parse(e);l(t),h.setToken(t.token)}},[]),(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(o,{setShowLogin:t,setShowSignIn:n,userLogged:i,setUserLogged:l}),(0,r.jsx)(H,{showLogin:e,setShowLogin:t,showSignIn:a,setShowSignIn:n,setUserLogged:l,userLogged:i}),(0,r.jsx)(X,{})]})}},3169:function(e){e.exports={cards:"Card_cards__5hW5B",card:"Card_card__aqCmJ",cardContent:"Card_cardContent__25bl1",cardItem:"Card_cardItem__SBb67",cardUrl:"Card_cardUrl__7QXnE",cardView:"Card_cardView__VVfAF",cardIcon:"Card_cardIcon__hUJUT",cardIconShow:"Card_cardIconShow__isvQ_",cardItemContainer:"Card_cardItemContainer___92S_",cardIconDelete:"Card_cardIconDelete__KXMBK",cardButton:"Card_cardButton__guqX6",cardItemShow:"Card_cardItemShow__HZ8W_",cardItemBottom:"Card_cardItemBottom__gkVrh",confirmDeleteContainer:"Card_confirmDeleteContainer__21guy",message:"Card_message__Q8Tlh",buttonContainer:"Card_buttonContainer__3oO7d",cancelButton:"Card_cancelButton__4pmhs",confirmButton:"Card_confirmButton____f_j"}},923:function(e){e.exports={editCardContainer:"EditCard_editCardContainer__p7Esf",title:"EditCard_title__HVX2h",currentUrl:"EditCard_currentUrl__f_t8B",input:"EditCard_input__N8t5o",buttonContainer:"EditCard_buttonContainer__pLD03",cancelButton:"EditCard_cancelButton__VBVmT",confirmButton:"EditCard_confirmButton__6u0xL"}},8411:function(e){e.exports={errorContainer:"ErrorMessage_errorContainer__oihW2",errorContent:"ErrorMessage_errorContent__iuMTW",errorMessage:"ErrorMessage_errorMessage__kRR4E"}},2439:function(e){e.exports={footer:"Footer_footer__UaG1g",footerText:"Footer_footerText__nqtso",footerNav:"Footer_footerNav__favhI",footerLink:"Footer_footerLink__twEJY"}},672:function(e){e.exports={formContainer:"Form_formContainer___wvsQ",title:"Form_title__Ebv__",description:"Form_description__Vso9f",form:"Form_form__gPOhg",input:"Form_input__FyLea",btnFull:"Form_btnFull__iAIzi"}},9884:function(e){e.exports={header:"Header_header__MvnS2",logo:"Header_logo__j7oID","logo-text":"Header_logo-text__yLPlT",icon:"Header_icon__JOAy9",btnOutline:"Header_btnOutline__u8LAe",btnDiv:"Header_btnDiv__9OXlx",spanName:"Header_spanName__3OaEd"}},2786:function(e){e.exports={loginContainer:"Login_loginContainer__I_mvg",title:"Login_title__KhFeO",form:"Login_form__5w8Aq",input:"Login_input__1BdUy",btnFull:"Login_btnFull__PN9Ie",signupText:"Login_signupText__bYT1K",signupLink:"Login_signupLink__a42Y_"}},8792:function(e){e.exports={main:"Main_main__kbS6g",content:"Main_content__y_rIl",cardContainer:"Main_cardContainer__LJNb6",titleInventory:"Main_titleInventory__M8j_5"}},6355:function(e){e.exports={formContainer:"Register_formContainer__jQ3Xe",title:"Register_title__uThx_",form:"Register_form__FSbWD",input:"Register_input__c8n6J",btnFull:"Register_btnFull__bBMS_"}},2535:function(e){e.exports={card:"ShortUrlDisplay_card__rXu40",cardContent:"ShortUrlDisplay_cardContent__rX_hd",cardItem:"ShortUrlDisplay_cardItem__0wrjN",cardUrl:"ShortUrlDisplay_cardUrl__FEkRk",cardIcon:"ShortUrlDisplay_cardIcon__gfk7U",copiedText:"ShortUrlDisplay_copiedText__GQkf6",paloma:"ShortUrlDisplay_paloma__AuA4a"}},9530:function(e){e.exports={notificationContainer:"SuccessNotification_notificationContainer__ANzEa",slideInRight:"SuccessNotification_slideInRight___z1ID",notification:"SuccessNotification_notification__wlmv5"}}},function(e){e.O(0,[634,528,971,23,744],function(){return e(e.s=4911)}),_N_E=e.O()}]);