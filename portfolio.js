const dialog = document.querySelector('.experience-dialog');
const dialogBody = dialog.querySelector('.dialog-body');
let trigger;
let previousOverflow;

document.querySelectorAll('[data-case]').forEach(card => {
  card.setAttribute('aria-haspopup', 'dialog');
  card.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const template = document.getElementById(`case-${card.dataset.case}`);
    if (!template || !dialog.showModal) return;
    event.preventDefault();
    trigger = card;
    dialogBody.replaceChildren(template.content.cloneNode(true));
    // Templates are inert; give the visible article a unique accessible title.
    const title = dialogBody.querySelector('h1, h2');
    title.id = 'experience-title';
    dialog.setAttribute('aria-labelledby', title.id);
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    dialogBody.scrollTop = 0;
  });
});
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.style.overflow = previousOverflow;
  trigger?.focus({ preventScroll: true });
});

// Measure the actual fixed header, including wrapped navigation on small screens.
const nav = document.querySelector('nav');
const syncHeader = () => document.documentElement.style.setProperty('--nav-height', `${nav.getBoundingClientRect().height}px`);
new ResizeObserver(syncHeader).observe(nav);
syncHeader();

// Align navigation to the section's text, even when a taller photo centres it.
function alignSection(hash, behavior = 'smooth') {
  const section = document.getElementById(hash.slice(1));
  if (!section) return;
  const target = section.querySelector('.section-label') || section;
  const top = target.getBoundingClientRect().top + window.scrollY - nav.getBoundingClientRect().height - 27;
  window.scrollTo({ top, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : behavior });
}
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    if (!document.getElementById(link.hash.slice(1))) return;
    event.preventDefault();
    history.pushState(null, '', link.hash);
    alignSection(link.hash);
  });
});
window.addEventListener('load', () => { if (location.hash) alignSection(location.hash, 'instant'); });
window.addEventListener('popstate', () => { if (location.hash) alignSection(location.hash); });
