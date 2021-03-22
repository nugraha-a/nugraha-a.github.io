let ngetik = document.querySelector('.jumbotron-text');
let textKetik = 'frontend web developer.';
let textKetikArr = ['frontend web developer.', 'freelance web developer.', 'javascript lover.', 'manusia.'];
let index = 0, tambah = true, textKetikIndex = 0;

function playAnimasiNgetik() {
    setTimeout(function () {
        ngetik.innerText = textKetikArr[textKetikIndex].slice(0, index);
        if (tambah) {
            if (index > textKetikArr[textKetikIndex].length) {
                tambah = false;
                ngetik.classList.add('tambahAnimasi');
                setTimeout(function () {
                    ngetik.classList.remove('tambahAnimasi');
                    playAnimasiNgetik();
                }, 2000);
                return;
            } else {
                index++;
            }
        } else {
            if (index === 0) {
                tambah = true;
                textKetikIndex = (textKetikIndex + 1) % textKetikArr.length;
            } else {
                index--;
            }
        }
        playAnimasiNgetik();
    }, tambah ? 120 : 60);
}
playAnimasiNgetik();

window.addEventListener('scroll',function () {
    let scrollToY  = this.scrollY;
    let goDown = document.querySelector('.go-down');
    if (scrollToY < 100) {
        goDown.classList.remove('fadeOut');
        goDown.classList.add('fadeIn');
    }

    if (scrollToY > 100) {
        goDown.classList.remove('fadeIn');
        goDown.classList.add('fadeOut');
    }

    // console.log(scrollToY);
})