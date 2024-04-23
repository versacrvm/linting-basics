function toggleButton() {
  const cards = document.querySelectorAll('[data-js=card]');
  // const buttons = document.querySelectorAll('[data-js=button]');
  cards.forEach(card => {
    const button = card.querySelector('[data-js="button"]');
    const link = card.querySelector('[data-js="link"]');
    const arrow = card.querySelector('[data-js="arrow"]');
    button.addEventListener('click', () => {
      link.classList.toggle('hide');
      arrow.classList.toggle('rotate');
    });
  });
}
toggleButton();
