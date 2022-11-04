window.onload = function () {
  const btnCopy = document.querySelector('.indication__copy-link');

  btnCopy.addEventListener('click', function (e) {
    navigator.clipboard.writeText(e.target.nextElementSibling.value);
  });
};
