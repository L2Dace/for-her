const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.main-yes-btn');
const noBtn = document.querySelector('.main-no-btn');

noBtn.addEventListener('click', () => {
    // question.innerHTML = 'I Love You Too :)';
    window.location.href = 'no.html';
});
yesBtn.addEventListener('click', () => {
    // question.innerHTML = 'I Love You Too :)';
    window.location.href = 'yes.html';
});

const opt1Btn = document.querySelector('.opt-1-btn');
const opt2Btn = document.querySelector('.opt-2-btn');
opt1Btn.addEventListener('click', () => {
    // question.innerHTML = 'I Love You Too :)';
    window.location.href = 'opt1.html';
});
opt2Btn.addEventListener('click', () => {
    // question.innerHTML = 'I Love You Too :)';
    window.location.href = 'opt2.html';
});
