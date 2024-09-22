(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4911:function(e,t,a){Promise.resolve().then(a.bind(a,2033))},2033:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return z}});var n=a(7437),r=a(2265),s=a(9884),i=a.n(s),o=a(8472);let l="/api/shorturls";class c{static setToken(e){this.token="Bearer ".concat(e),this.config={headers:{Authorization:this.token}}}static async createNewShortUrl(e){try{return await o.Z.post(l,e,this.config)}catch(e){return e.response}}static async editShortUrl(e,t){try{return await o.Z.put(l+"/"+t,e,this.config)}catch(e){console.log("Error al tratar de editar la url con id: ",t)}}static async deleteShortUrl(e){try{return await o.Z.delete(l+"/"+e,this.config)}catch(t){console.log("Error al tratar de eliminar la url con id: ",e)}}constructor(){this.token=null,this.config=null}}var d=a(5101),u=a.n(d),_=e=>{let{handleLogout:t,setShowDeleteAccount:a,showDeleteAccount:s}=e,[i,o]=(0,r.useState)(!1);return(0,n.jsxs)("div",{className:u().profileMenuContainer,children:[(0,n.jsx)("button",{className:u().profileButton,onClick:()=>{o(!i)},children:(0,n.jsx)("span",{className:u().iconProfile,children:(0,n.jsx)("i",{className:"bx bxs-user "})})}),i&&(0,n.jsxs)("div",{className:u().dropdownMenu,children:[(0,n.jsx)("button",{className:u().menuItem,onClick:e=>{e.preventDefault(),a(!0),o(!i)},children:"Delete Account"}),(0,n.jsx)("button",{className:u().menuItem,onClick:t,children:"Logout"})]})]})},m=e=>{let{setShowSignIn:t,setShowLogin:a,userLogged:r,setUserLogged:s,showDeleteAccount:o,setShowDeleteAccount:l}=e;return(0,n.jsxs)("header",{className:i().header,children:[(0,n.jsx)("div",{className:i().logo,onClick:e=>{e.preventDefault(),t(!1),a(!1)},id:"logo-text",children:(0,n.jsx)("strong",{children:"Linkly"})}),null==r?(0,n.jsxs)("div",{className:i().btnDiv,children:[(0,n.jsx)("button",{className:i().btnOutline,onClick:e=>{e.preventDefault(),t(!0),a(!1)},children:"Sign In"}),(0,n.jsx)("button",{className:i().btnOutline,onClick:e=>{e.preventDefault(),t(!1),a(!0)},children:"Login"})]}):(0,n.jsxs)("div",{className:i().btnDiv,children:[(0,n.jsxs)("h3",{children:["hi, ",(0,n.jsx)("span",{className:i().spanName,children:r.username})]}),(0,n.jsx)(_,{handleLogout:e=>{s(null),c.setToken(null),window.localStorage.clear()},setShowDeleteAccount:l,showDeleteAccount:o})]})]})},h=a(8792),x=a.n(h),p=a(672),f=a.n(p),g=a(2535),N=a.n(g),j=e=>{let{shortUrl:t}=e,[a,s]=(0,r.useState)(!1);return(0,n.jsx)("div",{className:N().card,children:(0,n.jsx)("div",{className:N().cardContent,children:(0,n.jsxs)("div",{className:N().cardItem,children:[(0,n.jsx)("a",{href:t,className:N().cardUrl,children:t}),(0,n.jsx)("span",{className:N().cardIcon,onClick:()=>{navigator.clipboard.writeText(t),s(!0)},children:a?(0,n.jsx)("i",{className:"bx bx-check-double"}):(0,n.jsx)("i",{className:"bx bx-copy"})})]})})})},C=a(8411),v=a.n(C),S=e=>{let{message:t}=e;return(0,n.jsx)("div",{className:v().errorContainer,children:(0,n.jsx)("div",{className:v().errorContent,children:(0,n.jsx)("p",{className:v().errorMessage,children:t})})})},w=e=>{let{setListOfUser:t}=e,[a,s]=(0,r.useState)(""),[i,o]=(0,r.useState)(null),[l,d]=(0,r.useState)(""),u=async e=>{if(e.preventDefault(),""!=a){let e=await c.createNewShortUrl({originalUrl:a});void 0==e.data.urlExist?(void 0!=e.data.shortUrl&&(o(e.data.shortUrl),t(t=>[...t,e.data])),s(""),d("")):d(e.data.urlExist)}else d("The fields url must not be empty.")};return(0,n.jsxs)("div",{className:f().formContainer,children:[(0,n.jsx)("h1",{className:f().title,children:"Shorten your URLs"}),(0,n.jsx)("p",{className:f().description,children:"Enter a URL below to create a short, shareable link."}),(0,n.jsxs)("form",{className:f().form,onSubmit:u,value:a,children:[(0,n.jsx)("input",{className:f().input,value:a,onChange:e=>{let{target:t}=e;return s(t.value)},type:"text",placeholder:"Enter a URL"}),(0,n.jsx)("button",{className:f().btnFull,type:"submit",children:"Shorten URL"})]}),l&&(0,n.jsx)(S,{message:l}),i&&(0,n.jsx)(j,{shortUrl:i})]})},b=a(2786),y=a.n(b);class U{static async login(e){try{return(await o.Z.post("/api/login",e)).data}catch(e){console.log("Error al tratar de ingresar con el usuario desde el frontend",e)}}}function I(e){let{setShowLogin:t,setUserLogged:a,setShowSignIn:s}=e,[i,o]=(0,r.useState)(""),[l,d]=(0,r.useState)(""),[u,_]=(0,r.useState)(""),m=async e=>{e.preventDefault();let n=await U.login({username:i,password:l});if(!n)return _("Invalid username or password.");a(n),t(!1),o(""),d(""),c.setToken(n.token),window.localStorage.setItem("userLogged",JSON.stringify(n))};return(0,n.jsxs)("div",{className:y().loginContainer,children:[(0,n.jsx)("h1",{className:y().title,children:"Login"}),(0,n.jsxs)("form",{className:y().form,onSubmit:m,children:[(0,n.jsx)("input",{className:y().input,type:"text",placeholder:"Username",value:i,onChange:e=>{let{target:t}=e;return o(t.value)}}),(0,n.jsx)("input",{className:y().input,type:"password",placeholder:"Password",value:l,onChange:e=>{let{target:t}=e;return d(t.value)}}),(0,n.jsx)("button",{className:y().btnFull,type:"submit",children:"Login"})]}),u&&(0,n.jsx)(S,{message:u}),(0,n.jsxs)("p",{className:y().signupText,children:["Don't have an account? ",(0,n.jsx)("a",{onClick:e=>{e.preventDefault(),t(!1),s(!0)},className:y().signupLink,children:"Sign Up"})]})]})}var k=a(6355),L=a.n(k);let E="/api/users";class D{static async createNewUser(e){try{return await o.Z.post(E,e)}catch(e){return console.log("Error al tratar de registrar un usuario desde el frontend"),e.response.data}}static validatePassword(e){return e.password===e.confirmPassword}static async getUrlsByUserId(e){try{let t={headers:{Authorization:"Bearer "+e.token}};return await o.Z.get(E+"/".concat(e.id,"/urls"),t)}catch(e){console.log("Error al tratar de tarer la lista de urls del usuario por el id")}}static async deleteUser(e){try{let t={headers:{Authorization:"Bearer "+e.token}};return await o.Z.delete(E+"/".concat(e.id),t)}catch(e){console.log("Error al tratar de eliminar el usuario desde el frontend")}}}var B=e=>{let{setShowSignIn:t,setShowLogin:a}=e,[s,i]=(0,r.useState)(""),[o,l]=(0,r.useState)(""),[c,d]=(0,r.useState)(""),[u,_]=(0,r.useState)(""),[m,h]=(0,r.useState)(),x=async e=>{e.preventDefault();let n={email:s,username:o,password:c,confirmPassword:u};if(s&&o&&c&&u){if(D.validatePassword(n)){let e=await D.createNewUser(n);void 0===e.error?(i(""),l(""),d(""),_(""),t(!1),a(!0)):h(e.error)}else h("The password must be the same")}else h("All fields are required.")};return(0,n.jsxs)("div",{className:L().formContainer,children:[(0,n.jsx)("h1",{className:L().title,children:"Register"}),(0,n.jsxs)("form",{className:L().form,onSubmit:x,children:[(0,n.jsx)("input",{className:L().input,type:"email",placeholder:"Email",value:s,onChange:e=>i(e.target.value)}),(0,n.jsx)("input",{className:L().input,type:"text",placeholder:"Username",value:o,onChange:e=>l(e.target.value)}),(0,n.jsx)("input",{className:L().input,type:"password",placeholder:"Password",value:c,onChange:e=>d(e.target.value)}),(0,n.jsx)("input",{className:L().input,type:"password",placeholder:"Confirm Password",value:u,onChange:e=>_(e.target.value)}),m&&(0,n.jsx)(S,{message:m}),(0,n.jsx)("button",{className:L().btnFull,type:"submit",children:"Register"})]})]})},M=a(3169),T=a.n(M),A=e=>{let{longUrl:t,shortUrl:a,views:s,onEdit:i,onDelete:o}=e,[l,c]=(0,r.useState)(!1),[d,u]=(0,r.useState)(!1);return(0,n.jsx)("div",{className:T().card,children:(0,n.jsx)("div",{className:T().cardContent,children:d?(0,n.jsxs)("div",{className:T().confirmDeleteContainer,children:[(0,n.jsx)("p",{className:T().message,children:"Are you sure you want to delete this URL?"}),(0,n.jsxs)("div",{className:T().buttonContainer,children:[(0,n.jsx)("button",{className:T().cancelButton,onClick:()=>{u(!1)},children:"Cancel"}),(0,n.jsx)("button",{className:T().confirmButton,onClick:o,children:"Delete"})]})]}):(0,n.jsxs)("div",{className:T().cardItemContainer,children:[(0,n.jsxs)("div",{className:T().cardItem,children:[(0,n.jsx)("span",{className:T().cardUrl,children:t}),(0,n.jsx)("span",{className:T().cardIcon,children:(0,n.jsx)("i",{onClick:i,className:"bx bx-edit"})})]}),(0,n.jsxs)("div",{className:T().cardItem,children:[(0,n.jsx)("span",{className:T().cardUrl,children:a}),l?(0,n.jsx)("span",{className:T().cardIcon,children:(0,n.jsx)("i",{className:"bx bx-check-double"})}):(0,n.jsx)("span",{className:T().cardIcon,children:(0,n.jsx)("i",{onClick:()=>{navigator.clipboard.writeText(a),c(!0),setTimeout(()=>c(!1),5e3)},className:"bx bxs-copy"})})]}),(0,n.jsx)("div",{className:T().cardItem,children:(0,n.jsxs)("div",{className:T().cardItemBottom,children:[(0,n.jsxs)("div",{className:T().cardItemShow,children:[(0,n.jsx)("span",{className:T().cardView,children:s}),(0,n.jsx)("span",{className:T().cardIconShow,children:(0,n.jsx)("i",{className:"bx bx-show-alt"})})]}),(0,n.jsx)("span",{className:T().cardIconDelete,children:(0,n.jsx)("i",{onClick:()=>{u(!0)},className:"bx bx-trash-alt"})})]})})]})})})},F=a(923),P=a.n(F),R=e=>{let{card:t,handleCancel:a,listOfUser:s,setListOfUser:i,onSuccess:o}=e,[l,d]=(0,r.useState)(""),[u,_]=(0,r.useState)(""),m=async e=>{if(l!=t.originalUrl&&""!=l){let e=await c.editShortUrl({originalUrl:l},t.id);void 0!=e.data.shortUrl&&(i(s.map(a=>a.id===t.id?e.data:a)),d(""),a(),o())}else _("Url is not valid.")};return(0,n.jsxs)("div",{className:P().editCardContainer,children:[(0,n.jsx)("h2",{className:P().title,children:"Edit URL"}),(0,n.jsxs)("p",{className:P().currentUrl,children:["Current URL: ",t.originalUrl]}),(0,n.jsx)("input",{className:P().input,type:"text",placeholder:"Enter new URL",value:l,onChange:e=>d(e.target.value)}),(0,n.jsxs)("div",{className:P().buttonContainer,children:[(0,n.jsx)("button",{className:P().cancelButton,onClick:a,children:"Cancel"}),(0,n.jsx)("button",{className:P().confirmButton,onClick:m,children:"Confirm"})]}),u&&(0,n.jsx)(S,{message:u})]})},O=a(9530),H=a.n(O),V=e=>{let{message:t,onClose:a}=e;return(0,r.useEffect)(()=>{let e=setTimeout(()=>{a()},3e3);return()=>clearTimeout(e)},[a]),(0,n.jsx)("div",{className:H().notificationContainer,children:(0,n.jsx)("div",{className:H().notification,children:t})})},J=a(9714),X=e=>{let{showLogin:t,setShowLogin:a,showSignIn:s,setShowSignIn:i,setUserLogged:o,userLogged:l,showDeleteAccount:d,setShowDeleteAccount:u}=e,[_,m]=(0,r.useState)([]),[h,p]=(0,r.useState)(!1),[f,g]=(0,r.useState)(null),[N,j]=(0,r.useState)(),[C,v]=(0,r.useState)(!1),[S,b]=(0,r.useState)("");(0,r.useEffect)(()=>{(async()=>{if(null===l)return;let e=(0,J.o)(l.token);l.id=e.id,m((await D.getUrlsByUserId(l)).data)})()},[l]);let y=_.map(e=>(0,n.jsx)(A,{longUrl:e.originalUrl,shortUrl:e.shortUrl,views:e.countClick,onEdit:()=>U(e),onDelete:()=>k(e),deleteItem:C,setDeleteItem:v},e.id)),U=e=>{g(e),p(!0)},k=async e=>{200==(await c.deleteShortUrl(e.id)).request.status?(m(_.filter(t=>t.id!=e.id)),g(null),L()):console.log("hubo un error al eliminar la url con Id: ",e.id)},L=()=>{j(!0)},E=async()=>{200==(await D.deleteUser(l)).request.status?(o(null),u(!1),L(),c.setToken(null),window.localStorage.clear()):console.log("Internal Server Error")};return t?(0,n.jsx)("main",{className:x().main,children:(0,n.jsx)("div",{className:x().content,children:(0,n.jsx)(I,{setShowLogin:a,setUserLogged:o,setShowSignIn:i})})}):s?(0,n.jsx)("main",{className:x().main,children:(0,n.jsx)("div",{className:x().content,children:(0,n.jsx)(B,{setShowSignIn:i,setShowLogin:a})})}):d?(0,n.jsxs)("div",{className:x().deleteAccountContainer,children:[(0,n.jsx)("h2",{className:x().title,children:"Delete Account."}),(0,n.jsx)("p",{className:x().paragraf,children:"If you delete your account, we will delete the next things:"}),(0,n.jsxs)("ul",{className:x().listContainer,children:[(0,n.jsx)("li",{className:x().itemList,children:"Your user account."}),(0,n.jsx)("li",{className:x().itemList,children:"All the links you have created."})]}),(0,n.jsxs)("p",{className:x().paragraf,children:["To confirm, type ",(0,n.jsx)("strong",{children:'"DELETE ACCOUNT"'})," in the next step."]}),(0,n.jsx)("input",{value:S,onChange:e=>b(e.target.value),className:x().input}),(0,n.jsxs)("div",{className:x().buttonContainer,children:[(0,n.jsx)("button",{className:x().cancelButton,onClick:()=>u(!1),children:"Cancel"}),(0,n.jsx)("button",{className:x().confirmButton,onClick:E,children:"Delete"})]})]}):(0,n.jsx)("div",{className:x().main,children:h?(0,n.jsx)(R,{card:f,handleCancel:()=>{p(!1),g(null)},listOfUser:_,setListOfUser:m,onSuccess:L}):(0,n.jsx)("main",{className:x().main,children:(0,n.jsxs)("div",{className:x().content,children:[(0,n.jsx)(w,{setListOfUser:m}),(0,n.jsxs)("div",{className:x().inventory,children:[l&&(0,n.jsx)("div",{className:x().titleInventory,children:"History"}),(0,n.jsx)("div",{className:x().cardContainer,children:l&&y}),N&&(0,n.jsx)(V,{message:"Success!",onClose:()=>j(!1)})]})]})})})},Z=a(2439),q=a.n(Z),Q=()=>(0,n.jsxs)("footer",{className:q().footer,children:[(0,n.jsx)("span",{className:q().footerText,children:"\xa9 2024 Linkly.es"}),(0,n.jsxs)("nav",{className:q().footerNav,children:[(0,n.jsx)("a",{href:"/privacy",className:q().footerLink,children:"Privacy Policy"}),(0,n.jsx)("a",{href:"/terms",className:q().footerLink,children:"Terms of use"})]})]}),z=()=>{let[e,t]=(0,r.useState)(!1),[a,s]=(0,r.useState)(!1),[i,o]=(0,r.useState)(null),[l,d]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{i&&(s(!1),t(!1))},[i]),(0,r.useEffect)(()=>{let e=window.localStorage.getItem("userLogged");if(e){let t=JSON.parse(e);o(t),c.setToken(t.token)}},[]),(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(m,{setShowLogin:t,setShowSignIn:s,userLogged:i,setUserLogged:o,setShowDeleteAccount:d,showDeleteAccount:l}),(0,n.jsx)(X,{showLogin:e,setShowLogin:t,showSignIn:a,setShowSignIn:s,setUserLogged:o,userLogged:i,showDeleteAccount:l,setShowDeleteAccount:d}),(0,n.jsx)(Q,{})]})}},3169:function(e){e.exports={cards:"Card_cards__5hW5B",card:"Card_card__aqCmJ",cardContent:"Card_cardContent__25bl1",cardItem:"Card_cardItem__SBb67",cardUrl:"Card_cardUrl__7QXnE",cardView:"Card_cardView__VVfAF",cardIcon:"Card_cardIcon__hUJUT",cardIconShow:"Card_cardIconShow__isvQ_",cardItemContainer:"Card_cardItemContainer___92S_",cardIconDelete:"Card_cardIconDelete__KXMBK",cardButton:"Card_cardButton__guqX6",cardItemShow:"Card_cardItemShow__HZ8W_",cardItemBottom:"Card_cardItemBottom__gkVrh",confirmDeleteContainer:"Card_confirmDeleteContainer__21guy",message:"Card_message__Q8Tlh",buttonContainer:"Card_buttonContainer__3oO7d",cancelButton:"Card_cancelButton__4pmhs",confirmButton:"Card_confirmButton____f_j"}},923:function(e){e.exports={editCardContainer:"EditCard_editCardContainer__p7Esf",title:"EditCard_title__HVX2h",currentUrl:"EditCard_currentUrl__f_t8B",input:"EditCard_input__N8t5o",buttonContainer:"EditCard_buttonContainer__pLD03",cancelButton:"EditCard_cancelButton__VBVmT",confirmButton:"EditCard_confirmButton__6u0xL"}},8411:function(e){e.exports={errorContainer:"ErrorMessage_errorContainer__oihW2",errorContent:"ErrorMessage_errorContent__iuMTW",errorMessage:"ErrorMessage_errorMessage__kRR4E"}},2439:function(e){e.exports={footer:"Footer_footer__UaG1g",footerText:"Footer_footerText__nqtso",footerNav:"Footer_footerNav__favhI",footerLink:"Footer_footerLink__twEJY"}},672:function(e){e.exports={formContainer:"Form_formContainer___wvsQ",title:"Form_title__Ebv__",description:"Form_description__Vso9f",form:"Form_form__gPOhg",input:"Form_input__FyLea",btnFull:"Form_btnFull__iAIzi"}},9884:function(e){e.exports={header:"Header_header__MvnS2",logo:"Header_logo__j7oID","logo-text":"Header_logo-text__yLPlT",icon:"Header_icon__JOAy9",btnOutline:"Header_btnOutline__u8LAe",btnDiv:"Header_btnDiv__9OXlx",spanName:"Header_spanName__3OaEd"}},2786:function(e){e.exports={loginContainer:"Login_loginContainer__I_mvg",title:"Login_title__KhFeO",form:"Login_form__5w8Aq",input:"Login_input__1BdUy",btnFull:"Login_btnFull__PN9Ie",signupText:"Login_signupText__bYT1K",signupLink:"Login_signupLink__a42Y_"}},8792:function(e){e.exports={main:"Main_main__kbS6g",content:"Main_content__y_rIl",cardContainer:"Main_cardContainer__LJNb6",titleInventory:"Main_titleInventory__M8j_5",cancelButton:"Main_cancelButton__HA2a4",confirmButton:"Main_confirmButton__Wmacy",deleteAccountContainer:"Main_deleteAccountContainer__8Hi_0",title:"Main_title__HYJNu",paragraf:"Main_paragraf__p8uX0",listContainer:"Main_listContainer__SB_4w",buttonContainer:"Main_buttonContainer__t2U4V",input:"Main_input__8s23N"}},5101:function(e){e.exports={profileMenuContainer:"ProfileMenu_profileMenuContainer__sJVlE",profileIcon:"ProfileMenu_profileIcon__dJ5iN",profileButton:"ProfileMenu_profileButton__nuPHs",iconProfile:"ProfileMenu_iconProfile__l1a3Q",dropdownMenu:"ProfileMenu_dropdownMenu__3CKM5",menuItem:"ProfileMenu_menuItem__eVysE"}},6355:function(e){e.exports={formContainer:"Register_formContainer__jQ3Xe",title:"Register_title__uThx_",form:"Register_form__FSbWD",input:"Register_input__c8n6J",btnFull:"Register_btnFull__bBMS_"}},2535:function(e){e.exports={card:"ShortUrlDisplay_card__rXu40",cardContent:"ShortUrlDisplay_cardContent__rX_hd",cardItem:"ShortUrlDisplay_cardItem__0wrjN",cardUrl:"ShortUrlDisplay_cardUrl__FEkRk",cardIcon:"ShortUrlDisplay_cardIcon__gfk7U",copiedText:"ShortUrlDisplay_copiedText__GQkf6",paloma:"ShortUrlDisplay_paloma__AuA4a"}},9530:function(e){e.exports={notificationContainer:"SuccessNotification_notificationContainer__ANzEa",slideInRight:"SuccessNotification_slideInRight___z1ID",notification:"SuccessNotification_notification__wlmv5"}}},function(e){e.O(0,[533,528,971,23,744],function(){return e(e.s=4911)}),_N_E=e.O()}]);