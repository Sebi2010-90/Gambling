// Alters-Modal & simple Interaktionen
document.addEventListener('DOMContentLoaded', () => {
  const ageGate = document.getElementById('age-gate');
  const confirm = document.getElementById('confirm-age');
  const leave = document.getElementById('leave-site');

  // Zeige Modal, falls nicht bestätigt
  if (!localStorage.getItem('ageConfirmed')) {
    ageGate.style.display = 'flex';
  } else {
    ageGate.style.display = 'none';
  }

  confirm?.addEventListener('click', () => {
    localStorage.setItem('ageConfirmed', 'true');
    ageGate.style.display = 'none';
  });

  leave?.addEventListener('click', () => {
    // Leitet den Nutzer weg (sicherer als schließen)
    window.location.href = 'about:blank';
  });

  // Akkordeon
  document.querySelectorAll('.accordion-button').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.nextElementSibling;
      const open = panel.style.display === 'block';
      // schließen aller Panels
      document.querySelectorAll('.accordion-panel').forEach(p => p.style.display = 'none');
      if (!open) panel.style.display = 'block';
    });
  });
});
