const menu=document.querySelector('.menu-btn'), links=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

const counters=document.querySelectorAll('.counter');
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){const el=entry.target,target=+el.dataset.target;let n=0;const step=Math.max(1,Math.ceil(target/40));const timer=setInterval(()=>{n+=step;if(n>=target){n=target;clearInterval(timer)}el.textContent=n},25);observer.unobserve(el)}})},{threshold:.6});
counters.forEach(c=>observer.observe(c));

function sendAdmission(e){
 e.preventDefault();
 const n=document.getElementById('aName').value.trim(), p=document.getElementById('aPhone').value.trim();
 const c=document.getElementById('aCourse').value, m=document.getElementById('aMode').value, msg=document.getElementById('aMessage').value.trim();
 const text=`Hello Let's Learn Coding!%0A%0A*Admission Enquiry*%0AName: ${encodeURIComponent(n)}%0APhone: ${encodeURIComponent(p)}%0ACourse: ${encodeURIComponent(c)}%0AMode: ${encodeURIComponent(m)}%0AMessage: ${encodeURIComponent(msg||'Please share details.')}`;
 window.open(`https://wa.me/918076492601?text=${text}`,'_blank');
}
function demoLogin(e){
 e.preventDefault();
 document.getElementById('loginMsg').textContent='Demo login submitted. Connect your backend/database to enable real student authentication.';
 document.getElementById('loginMsg').style.color='#0a9d50';
}
