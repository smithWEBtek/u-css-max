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
      console.log('choosePlanButton clicked ')
      backdrop.style.display = 'block';
      modal.style.display = 'block';

      // modal.classList.add('open');
      // backdrop.classList.add('open');
    })
  });

  function closeModal() {
    if (backdrop) {
      backdrop.style.display = 'none';
    }

    if (modal) {
      modal.style.display = 'none';
    }
    // backdrop.classList.remove('open')
    // modal.classList.remove('open')
  };

  if (noButton) {
    noButton.addEventListener('click', closeModal);
  }

  if (backdrop) {
    backdrop.addEventListener('click', function (e) {
      e.preventDefault()
      mobileNav.style.display = 'none';
      closeModal();
    });
  }

  if (yesButton) {
    yesButton.addEventListener('click', function (e) {
      e.preventDefault();
      closeModal()
      alert("Thank you, we will be contacting you soon!")
    });
  }

  if (toggleButton) {
    toggleButton.addEventListener('click', function (e) {
      e.preventDefault();
      backdrop.style.display = 'block'
      mobileNav.style.display = 'block';
      // backdrop.classList.add('open');
      // mobileNav.classList.add('open');
    });
  };
});