// typing effect
const roles=["Full-Stack Developer","Problem Solver","Builder","ISE Student"];
let ri=0,ci=0,del=false;const el=document.getElementById("typed");
(function tick(){const w=roles[ri];el.textContent=w.slice(0,ci);
 if(!del&&ci<w.length){ci++;setTimeout(tick,85)}else if(!del){del=true;setTimeout(tick,1400)}
 else if(ci>0){ci--;setTimeout(tick,45)}else{del=false;ri=(ri+1)%roles.length;setTimeout(tick,300)}})();
// skills
["Java","Spring Boot","Python","Django","JavaScript","Node.js","Express","React","Next.js","Angular","Tailwind CSS","PostgreSQL","MySQL","MongoDB","AWS (EC2, S3)","Git","Jenkins","Maven","Ansible","REST APIs","JWT","DSA","System Design"]
 .forEach(s=>{const e=document.createElement("span");e.textContent=s;document.getElementById("skills").appendChild(e)});
// reveal + counters
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");
 e.target.querySelectorAll("[data-count]").forEach(c=>{const t=+c.dataset.count,d=+(c.dataset.dec||0);let s=null;
 const step=n=>{s=s||n;const p=Math.min((n-s)/1200,1);c.textContent=(t*p).toFixed(d).replace(/^(\d{4})\.0+$/,"$1");if(p<1)requestAnimationFrame(step);else c.textContent=d?t.toFixed(d):String(t)};requestAnimationFrame(step)});
 io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll(".reveal").forEach(s=>io.observe(s));
// progress + active nav
const links=[...document.querySelectorAll(".nav nav a")];
addEventListener("scroll",()=>{const h=document.documentElement;document.getElementById("progress").style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+"%";
 let cur="";document.querySelectorAll("section[id]").forEach(s=>{if(scrollY>=s.offsetTop-160)cur=s.id});
 links.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+cur))});
// tilt
document.querySelectorAll(".tilt").forEach(c=>{c.addEventListener("mousemove",e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(700px) rotateY(${x*8}deg) rotateX(${-y*8}deg)`});c.addEventListener("mouseleave",()=>c.style.transform="")});
// theme
document.getElementById("theme").onclick=()=>document.body.classList.toggle("light");
document.getElementById("yr").textContent=new Date().getFullYear();
// particle background
const cv=document.getElementById("bg"),cx=cv.getContext("2d");let W,H,P=[];
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;P=Array.from({length:Math.min(70,W/18)},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4}))}
rs();addEventListener("resize",rs);
(function draw(){cx.clearRect(0,0,W,H);const col=document.body.classList.contains("light")?"37,99,235":"110,231,183";
 P.forEach((p,i)=>{p.x=(p.x+p.vx+W)%W;p.y=(p.y+p.vy+H)%H;cx.fillStyle=`rgba(${col},.6)`;cx.beginPath();cx.arc(p.x,p.y,1.6,0,7);cx.fill();
 for(let j=i+1;j<P.length;j++){const q=P[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<120){cx.strokeStyle=`rgba(${col},${.18*(1-d/120)})`;cx.beginPath();cx.moveTo(p.x,p.y);cx.lineTo(q.x,q.y);cx.stroke()}}});
 requestAnimationFrame(draw)})();
