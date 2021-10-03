const showModal = () => {
  const modal = document.querySelector('.modal');
  if (!modal.classList.contains('visible')) {
    modal.classList.add('visible');
    setTimeout(() => {
      modal.classList.remove('visible');
    }, 2000);
  }
};

document.querySelectorAll('.shellBlock button').forEach((button) => {
  button.addEventListener('click', () => {
    navigator.clipboard.writeText(button.textContent);
    showModal();
  });
});
