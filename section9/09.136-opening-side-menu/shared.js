document.addEventListener('DOMContentLoaded', function (event) {
  let backdrop = document.querySelector('.backdrop')
  let yesButton = document.querySelector('.modal__action')
  let noButton = document.querySelector('.modal__action--negative')
  let choosePlanButtons = document.querySelectorAll('button.button')
  let modal = document.querySelector('.modal')

  let toggleButton = document.querySelector('.toggle-button')
  let mobileNav = document.querySelector('.mobile-nav')

  choosePlanButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      backdrop.style.display = 'block';
      modal.style.display = 'block';
    })
  });

  function closeModal() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
  };

  noButton.addEventListener('click', closeModal);
  backdrop.addEventListener('click', function (e) {
    e.preventDefault()
    mobileNav.style.display = 'none';
    closeModal();
  });

  yesButton.addEventListener('click', function (e) {
    e.preventDefault();
    closeModal()
    alert("Thank you, we will be contacting you soon!")
  });

  toggleButton.addEventListener('click', function (e) {
    e.preventDefault();
    backdrop.style.display = 'block'
    mobileNav.style.display = 'block';
  });


});