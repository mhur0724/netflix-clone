const faq = document.querySelector('.section-faq');
const faqLi = faq.querySelectorAll('li');

faqLi.forEach(item => {
    item.addEventListener('click', expandLi)
})

function expandLi(e) {
    e.target.classList.toggle('expanded-li')
}