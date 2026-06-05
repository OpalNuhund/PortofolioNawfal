const cur=document.getElementById('cur'),ring=document.getElementById('curRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px'});
(function anim(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(anim)})();
document.querySelectorAll('a,button,.proj-item,.skill-cat,.platform').forEach(el=>{
el.addEventListener('mouseenter',()=>{cur.style.width='16px';cur.style.height='16px';ring.style.width='48px';ring.style.height='48px'});
el.addEventListener('mouseleave',()=>{cur.style.width='8px';cur.style.height='8px';ring.style.width='32px';ring.style.height='32px'});
});

// Hero entrance
const hl=document.getElementById('heroLeft');
Array.from(hl.children).forEach((el,i)=>{
setTimeout(()=>{el.style.opacity='1';el.style.transform='none';el.style.transition='opacity .7s ease, transform .7s ease'},200+i*120);
});

// Scroll reveal
const obs=new IntersectionObserver(entries=>{
entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('on'),i*60);obs.unobserve(e.target)}});
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));