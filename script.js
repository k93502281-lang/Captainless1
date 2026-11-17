// ใส่ลิงก์จริงของคุณในช่อง url ด้านล่าง เช่น https://instagram.com/yourname
const siteLinks = {
  Instagram: '',
  TikTok: '',
  YouTube: '',
  Facebook: '',
  'LINE OpenChat': ''
};

document.getElementById('year').textContent = new Date().getFullYear();
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(opened));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('[data-placeholder]').forEach(link => {
  const name = link.dataset.placeholder;
  if (siteLinks[name]) link.href = siteLinks[name];
  else link.addEventListener('click', event => {
    event.preventDefault();
    alert(`ยังไม่ได้ใส่ลิงก์ ${name} — แก้ไขได้ในไฟล์ script.js`);
  });
});
const topButton = document.querySelector('.to-top');
window.addEventListener('scroll', () => topButton.classList.toggle('visible', window.scrollY > 420));
topButton.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
