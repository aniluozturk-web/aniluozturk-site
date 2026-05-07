// Mark current nav link active based on body[data-page]
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;
  document.querySelectorAll('nav.primary a[data-page]').forEach(a => {
    if (a.dataset.page === page) a.classList.add('active');
  });

  // Cite buttons → copy BibTeX or formatted citation to clipboard
  document.querySelectorAll('[data-cite]').forEach(btn => {
    btn.addEventListener('click', e => {
      const id = btn.dataset.cite;
      const target = document.getElementById('cite-' + id);
      if (!target) return;
      const text = target.textContent.trim();
      navigator.clipboard.writeText(text).then(() => {
        const orig = btn.textContent;
        btn.textContent = 'Copied';
        setTimeout(() => { btn.textContent = orig; }, 1400);
      });
    });
  });
});
