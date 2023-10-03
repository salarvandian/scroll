const navabar = document.querySelector('#navabar')
let lastScrollTop = 0

window.addEventListener('scroll', () => {
    let nowScrollTop = document.documentElement.scrollTop

    if (nowScrollTop > lastScrollTop) {
        navabar.style.top = '-80px'
    } else {
        navabar.style.top = '0px'
    }

    lastScrollTop = nowScrollTop
})