import Glide from '@glidejs/glide';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';

window.onload = function () {
  const footerFixed = document.getElementById('fixed__footer');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
      footerFixed.classList.add('is-fixed');
    } else {
      footerFixed.classList.remove('is-fixed');
    }
  });

  document.getElementById('input__cep').addEventListener('input', function (e) {
    console.log(e);
    console.log(this.value.length >= 9);
    if (this.value.length >= 9) {
      e.preventDefault();
      return;
    }
    this.value = this.value.replace(/[^\d]/, '').replace(/(\d{5})(\d{3})/, '$1-$2');
  });

  const btnCopy = document.querySelector('.indication__copy-link');
  btnCopy.addEventListener('click', function (e) {
    navigator.clipboard.writeText(e.target.nextElementSibling.value);
  });

  const root = document.querySelector(':root');
  const a11yPlus = document.getElementById('a11y__plus');
  const a11yMinus = document.getElementById('a11y__minus');

  a11yPlus.addEventListener('click', function (e) {
    e.preventDefault();
    if (parseInt(root.style.fontSize) === 26) return;
    root.style.fontSize = root.style.fontSize ? `${parseInt(root.style.fontSize) + 2}px` : '16px';
  });

  a11yMinus.addEventListener('click', function (e) {
    e.preventDefault();
    if (parseInt(root.style.fontSize) === 16) return;
    root.style.fontSize = root.style.fontSize ? `${parseInt(root.style.fontSize) - 2}px` : '16px';
  });

  const btnFormArea = document.getElementById('send__form--area');
  const inputCEP = document.getElementById('input__cep');
  const modalCEPVariable = document.getElementById('modal__cep--variable');
  const spanOnlineSearching = document.getElementById('online__searching');
  const modalArea = new bootstrap.Modal(document.getElementById('modal__area'), {});
  btnFormArea.addEventListener('click', function (e) {
    e.preventDefault();
    this.setAttribute('disabled', true);
    setTimeout(() => {
      btnFormArea.removeAttribute('disabled');
      if (!inputCEP.value) {
        inputCEP.classList.add('has-error');
        alert('Você precisa informar um CEP');
        return;
      }

      inputCEP.classList.remove('has-error');

      modalCEPVariable.innerHTML = inputCEP.value;
      spanOnlineSearching.innerHTML = Math.floor(Math.random() * (180 - 140 + 1) + 140);

      modalArea.show();
    }, 600);
  });

  if (document.querySelector('#ultrafibra-carousel')) {
    // Mounts first products carousel listing all items
    new Glide('#ultrafibra-carousel', {
      type: 'slider',
      rewind: false,
      startAt: 1,
      perView: 3,
      focusAt: 'center',
      autoplay: 3000,
      rewind: true,
      gap: -5,
      breakpoints: {
        1000: {
          perView: 2,
        },
        768: {
          perView: 1,
        },
      },
    }).mount();
    const alreadyActive = ['#ultrafibra-carousel'];

    const tabNavLinks = document.querySelectorAll('.tabs__promotions .nav-link');

    // Builds the rest, on click, of the products carousel
    for (const tabItem of tabNavLinks) {
      tabItem.addEventListener('click', function () {
        let attrHref = this.getAttribute('data-bs-target').replace('tab-pane', 'carousel');

        if (!alreadyActive.includes(attrHref)) {
          setTimeout(function () {
            alreadyActive.push(attrHref);

            new Glide(attrHref, {
              type: 'slider',
              rewind: false,
              startAt: 0,
              perView: 3,
              focusAt: 'center',
              autoplay: 3000,
              rewind: true,
              gap: -5,
              breakpoints: {
                1000: {
                  perView: 2,
                },
                768: {
                  perView: 1,
                },
              },
            }).mount();
          }, 300);
        }
      });
    }
  }
};
