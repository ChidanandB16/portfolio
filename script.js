// typing line
const lines=["Currently building: Java, Node and React projects.","Practising DSA in Java on LeetCode.","Exploring cloud on AWS and computer vision."];
let li=0,ci=0,del=false;const t=document.getElementById("typed");
(function tick(){const w=lines[li];t.textContent=w.slice(0,ci);
 if(!del&&ci<w.length){ci++;setTimeout(tick,45)}else if(!del){del=true;setTimeout(tick,1800)}
 else if(ci>0){ci--;setTimeout(tick,20)}else{del=false;li=(li+1)%lines.length;setTimeout(tick,300)}})();
// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".rv,.proj,.mf").forEach(el=>io.observe(el));
// counters
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const b=e.target,n=+b.dataset.n,d=+(b.dataset.d||0);
 if(n>1900){b.textContent=n;co.unobserve(b);return}
 let s=null;const step=x=>{s=s||x;const p=Math.min((x-s)/1100,1);b.textContent=(n*p).toFixed(d);if(p<1)requestAnimationFrame(step);else b.textContent=n.toFixed(d)};requestAnimationFrame(step);co.unobserve(b)}),{threshold:.6});
document.querySelectorAll("[data-n]").forEach(b=>co.observe(b));
// progress indicator
const secs=[...document.querySelectorAll(".stats,#about,.proj,#experience,#looking,#contact")];
const secsSel=[...document.querySelectorAll("#about,.proj,#experience,#looking,#contact")];
const bars=[...document.querySelectorAll("#prog .bars i")],pn=document.getElementById("pn");
function upd(){let cur=0;secsSel.forEach((s,i)=>{if(scrollY>=s.offsetTop-window.innerHeight*.5)cur=i+1});
 const n=Math.min(cur,6);pn.textContent=String(n).padStart(2,"0");bars.forEach((b,i)=>b.classList.toggle("on",i<n))}
addEventListener("scroll",upd,{passive:true});upd();
document.getElementById("yr").textContent=new Date().getFullYear();
// rings background
const cv=document.getElementById("rings"),cx=cv.getContext("2d");let W,H,tt=0;
function rs(){const r=devicePixelRatio||1;W=cv.width=innerWidth*r;H=cv.height=innerHeight*r}
rs();addEventListener("resize",rs);
(function draw(){tt+=.004;cx.clearRect(0,0,W,H);const m=Math.min(W,H);
 for(let i=0;i<9;i++){const r=m*(.12+i*.09)+Math.sin(tt*2+i)*m*.012;cx.beginPath();cx.arc(W*.78,H*.3-scrollY*.15,r,0,7);cx.strokeStyle=`rgba(110,231,183,${.08-i*.007})`;cx.lineWidth=1.2;cx.stroke()}
 requestAnimationFrame(draw)})();
