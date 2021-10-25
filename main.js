const faq = document.querySelector('.section-faq');
const faqLi = faq.querySelectorAll('li');

faqLi.forEach(item => {
    item.addEventListener('click', expandLi)
})

function expandLi(e) {
  e.target.parentNode.lastElementChild.classList.toggle('closed-li');
  e.target.parentNode.lastElementChild.classList.toggle('expanded-li');
  e.target.firstElementChild.classList.toggle('li-span');
}