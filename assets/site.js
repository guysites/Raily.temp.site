const toggle=document.querySelector('.menu-toggle');const links=document.querySelector('.navlinks');if(toggle&&links){toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰'});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}))}
// Gentle entrance motion for visual storytelling sections (hero remains static and unchanged).
const revealTargets=document.querySelectorAll('.problem-intro,.problem-visual,.section-head,.iceberg-art,.solution-flow,.steps,.ecosystem,.proof,.vision,.final-cta-inner');
revealTargets.forEach(el=>el.classList.add('reveal-ready'));
if('IntersectionObserver' in window){
  const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -35px 0px'});
  revealTargets.forEach(el=>revealObserver.observe(el));
}else{revealTargets.forEach(el=>el.classList.add('is-visible'))}
