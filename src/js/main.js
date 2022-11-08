import Glide from '@glidejs/glide';

window.onload = function () {
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

  new Glide('#ultrafibra-carousel', {
    type: 'slider',
    rewind: false,
    startAt: 0,
    perView: 3,
    focusAt: 'center',
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

  if (document.querySelector('#ultrafibra-carousel')) {
    // Mounts first products carousel listing all items
    new Glide('#ultrafibra-carousel', {
      type: 'slider',
      rewind: false,
      startAt: 0,
      perView: 3,
      focusAt: 'center',
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
