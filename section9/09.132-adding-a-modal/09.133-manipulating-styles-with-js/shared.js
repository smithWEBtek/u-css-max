document.addEventListener('DOMContentLoaded', function (event) {
  let backdrop = document.querySelector('.backdrop')
  let yesButton = document.querySelector('.modal__action')
  let noButton = document.querySelector('.modal__action--negative')
  let choosePlanButtons = document.querySelectorAll('button.button')
  let modal = document.querySelector('.modal')

  choosePlanButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      backdrop.style.display = 'block';
      modal.style.display = 'block';
    })
  })

  noButton.addEventListener('click', function (e) {
    e.preventDefault();
    backdrop.style.display = 'none';
    modal.style.display = 'none';
  })

  yesButton.addEventListener('click', function (e) {
    e.preventDefault();
    backdrop.style.display = 'none';
    modal.style.display = 'none';
    alert("Thank you, we will be contacting you soon!")
  })

  backdrop.addEventListener('click', function (e) {
    e.preventDefault();
    backdrop.style.display = 'none';
    modal.style.display = 'none';
  })
});