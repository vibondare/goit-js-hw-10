import{e as H}from"./assets/error-icon-1b418090.js";/* empty css                      */import{f as g,i as k}from"./assets/vendor-77e16229.js";let s="";const c=document.querySelector("#datetime-picker"),e=document.querySelector("button[data-start]"),i=document.querySelector("span[data-seconds]"),u=document.querySelector("span[data-minutes]"),d=document.querySelector("span[data-hours]"),l=document.querySelector("span[data-days]"),q={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(r){s=r[0],s.getTime()<=Date.now()?(k.show({title:"Error",message:"Please choose a date in the future",backgroundColor:"#B51B1B",messageColor:"#FFFFFF",position:"topRight",theme:"dark",iconUrl:H}),e.classList.remove("active-button")):(e.classList.add("active-button"),console.log(s))}};g("#datetime-picker",q);e.addEventListener("click",D);function D(){if(!e.classList.contains("active-button"))return;e.classList.remove("active-button"),c.setAttribute("disabled","disabled");function r(){const p=Date.now();let a=s-p;function o(t){return String(t).padStart(2,"0")}let n=M(a);const h=o(n.seconds),f=o(n.minutes),y=o(n.hours),L=o(n.days);i.innerHTML=h,u.innerHTML=f,d.innerHTML=y,l.innerHTML=L;function M(t){const T=Math.floor(t/864e5),b=Math.floor(t%864e5/36e5),v=Math.floor(t%864e5%36e5/6e4),S=Math.floor(t%864e5%36e5%6e4/1e3);return{days:T,hours:b,minutes:v,seconds:S}}a<=0&&(clearInterval(m),i.innerHTML="00",u.innerHTML="00",d.innerHTML="00",l.innerHTML="00",c.removeAttribute("disabled"))}const m=setInterval(r,1e3)}
//# sourceMappingURL=commonHelpers.js.map