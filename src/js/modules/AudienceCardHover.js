export function AudienceCardHover() {
  const cards = document.querySelectorAll('.js-target-audience-card-hover');

  if (cards.length > 0) {
    cards.forEach(card => {
      card.addEventListener('mouseover', function() {
        const activeCard = document.querySelector('.target-audience__list-col.is-active');
        if (activeCard) {
          activeCard.classList.remove('is-active');
        }
        this.parentElement.classList.add('is-active');
      });
    });
  }
}