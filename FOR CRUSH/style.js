const cards = document.querySelectorAll('.card');
const nextButtons = document.querySelectorAll('.next-btn');
const envelope = document.querySelector('.envelope');
const giftButton = document.querySelector('.gift-button');
const giftBox = document.querySelector('.gift-box');
const butterflyBurst = document.querySelector('.butterfly-burst');

function showCard(targetId) {
  cards.forEach((card) => {
    const isTarget = card.id === targetId;
    card.classList.toggle('active', isTarget);
  });

  if (targetId === 'letterCard') {
    requestAnimationFrame(() => {
      envelope.classList.add('open');
    });
  }
}

nextButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.dataset.target;
    showCard(targetId);
  });
});

giftButton.addEventListener('click', () => {
  giftBox.classList.add('open');
  butterflyBurst.classList.remove('active');
  void butterflyBurst.offsetWidth;
  butterflyBurst.classList.add('active');
  giftButton.textContent = 'Opened!';
  giftButton.disabled = true;
});

window.addEventListener('load', () => {
  showCard('introCard');
});
