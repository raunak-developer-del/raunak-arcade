document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.nav-links');
  if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'✕':'☰';});}
  const filterButtons=document.querySelectorAll('[data-filter]');
  const cards=document.querySelectorAll('[data-category]');
  const empty=document.querySelector('.empty-state');
  filterButtons.forEach(button=>button.addEventListener('click',()=>{
    filterButtons.forEach(b=>b.classList.remove('active'));button.classList.add('active');
    let visible=0;cards.forEach(card=>{const show=button.dataset.filter==='all'||card.dataset.category===button.dataset.filter;card.hidden=!show;if(show)visible++;});
    if(empty)empty.hidden=visible!==0;
  }));
});