const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const indexyesBtn = document.querySelector('.index-yes-btn');
const indexnoBtn = document.querySelector('.index-no-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const indexnoBtnRect = indexnoBtn.getBoundingClientRect();
indexyesBtn.addEventListener('click', () => {
    // question.innerHTML = 'I Love You Too :)';
    window.location.href = 'main.html';
});
indexnoBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - indexnoBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - indexnoBtnRect.height)) + 1;
    indexnoBtn.style.left = i + 'px';
    indexnoBtn.style.top = j + 'px';
});

