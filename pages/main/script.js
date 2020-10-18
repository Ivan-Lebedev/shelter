const header__burger = document.querySelector('.burger-button')
const header_menu = document.querySelector('.header-nav')
const back = document.querySelector('body')

header__burger.onclick = toggleMenu = () => {
    header__burger.classList.toggle('active')
    header_menu.classList.toggle('active')
    back.classList.toggle('lock')
}

document.addEventListener('click', e => {
    const target = e.target
    const menu = target === header_menu || header_menu.contains(target)
    const burgerBtn = target === header__burger || header__burger.contains(target)
    const menuIsActive = header_menu.classList.contains('active')
    if (!menu && !burgerBtn && menuIsActive) {
        toggleMenu()
    }
})

