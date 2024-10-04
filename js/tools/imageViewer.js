export default function imageViewer(){let o=!1,l=1,c=!1,d=!1,m=0,u=0,v=0,g=0,y=0,t=document.querySelector(".image-viewer-container");if(t){let s=t.querySelector("img");if(s){let n=e=>{document.body.style.overflow=e?"hidden":"auto",e?t.classList.add("active"):t.classList.remove("active")};let r=0;var e=e=>{c&&e.stopPropagation(),c=!1,s.style.cursor="grab"};s.addEventListener("wheel",e=>{e.preventDefault();var t=s.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top,n=n-t.width/2,r=r-t.height/2,t=l;l+=-.001*e.deltaY,t<(l=Math.min(Math.max(.8,l),4))?(g-=n*(l-t),y-=r*(l-t)):(g=0,y=0),s.style.transform=`translate(${g}px, ${y}px) scale(${l})`},{passive:!1}),s.addEventListener("mousedown",e=>{e.preventDefault(),c=!0,u=e.clientX,v=e.clientY,s.style.cursor="grabbing"},{passive:!1}),s.addEventListener("mousemove",e=>{var t,n;!c||(t=(new Date).getTime())-r<100||(r=t,t=e.clientX-u,n=e.clientY-v,g+=t,y+=n,u=e.clientX,v=e.clientY,s.style.transform=`translate(${g}px, ${y}px) scale(${l})`,d=!0)},{passive:!1}),s.addEventListener("mouseup",e,{passive:!1}),s.addEventListener("mouseleave",e,{passive:!1}),t.addEventListener("click",e=>{d||(o=!1,n(o),l=1,g=0,y=0,s.style.transform=`translate(${g}px, ${y}px) scale(${l})`),d=!1});let a=document.querySelectorAll(".markdown-body img, .masonry-item img, #shuoshuo-content img"),i=e=>{"Escape"===e.key&&o&&(o=!1,n(o),l=1,g=0,y=0,s.style.transform=`translate(${g}px, ${y}px) scale(${l})`,document.removeEventListener("keydown",i))};0<a.length&&(a.forEach((e,t)=>{e.addEventListener("click",()=>{m=t,o=!0,n(o),s.src=e.src,document.addEventListener("keydown",i)})}),document.addEventListener("keydown",t=>{if(o){if("ArrowUp"===t.key||"ArrowLeft"===t.key)m=(m-1+a.length)%a.length;else{if("ArrowDown"!==t.key&&"ArrowRight"!==t.key)return;m=(m+1)%a.length}t=a[m];let e=t.src;t.hasAttribute("lazyload")&&(e=t.getAttribute("data-src"),t.src=e,t.removeAttribute("lazyload")),s.src=e}}))}else console.warn("Target image not found in image viewer container. Exiting imageViewer function.")}else console.warn("Image viewer container not found. Exiting imageViewer function.")}