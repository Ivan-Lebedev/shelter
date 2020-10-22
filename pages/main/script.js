const header__burger = document.querySelector('.burger-button')
const header_menu = document.querySelector('.header-nav')
const back = document.querySelector('body')

/* Toggle Burger-menu */
header__burger.onclick = toggleMenu = () => {
    header__burger.classList.toggle('active')
    header_menu.classList.toggle('active')
    back.classList.toggle('lock')
}

/* Close burger-menu by clicking outside the menu */
document.addEventListener('click', e => {
    const target = e.target
    const menu = target === header_menu || header_menu.contains(target)
    const burgerBtn = target === header__burger || header__burger.contains(target)
    const menuIsActive = header_menu.classList.contains('active')
    if (!menu && !burgerBtn && menuIsActive) {
        toggleMenu()
    }
})

/* Pet-cards */
let pets = []
fetch('./pets.json').then(res => res.json()).then(list => {
    pets = list

    pets.forEach(item => {
        new PetCard(
            item.img,
            item.name,
            item.name,
            item.type,
            item.breed,
            item.description,
            item.age,
            item.inoculations,
            item.diseases,
            item.parasites
        ).renderPetCard()

        const btnForCallModal = document.querySelectorAll('.call-modal')
        const btnForCloseModal = document.querySelectorAll('.modal-close')
        const modalPetWindow = document.querySelectorAll('.modal-wrapper')

        btnForCallModal.forEach(btn => btn.addEventListener('click', (e) => {
            const target = e.target
            modalPetWindow.forEach(petItem => {
                if (target.classList.contains(item.name) && petItem.classList.contains(item.name)) {
                    petItem.style.display = 'flex'
                    // back.classList.add('lock')
                }
            })

        }))

        btnForCloseModal.forEach(item => item.addEventListener('click', (e) => {
            const target = e.target
            modalPetWindow.forEach(item => {
                item.style.display = 'none'
            })
            // back.classList.remove('lock')         
        }))

    })    

    /* Slider */
    let slideIndex = 0
    const slides = document.querySelectorAll('.animal-single-card')
    const prevSlide = document.querySelector('.slider-btn-prev')
    const nextSlide = document.querySelector('.slider-btn-next')

    /* Rendering slider on loading and resizing the window */
    function renderSlider(n) {
        window.addEventListener("load", () => {
            showSlides(n)
            console.log('1')
        })
        window.addEventListener("resize", () => {
            showSlides(n)
        })
    }

    /* Shows slides depending on width of the window */
    function showSlides(n = 0) {

        let width = this.window.innerWidth

        if (width > 1279) {

            if (n > slides.length - 3) {
                slideIndex = 0
            }
            if (n < 0) {
                slideIndex = slides.length - 3
            }
            slides.forEach(item => item.style.display = 'none')

            slides[slideIndex].style.display = 'flex'
            slides[slideIndex + 1].style.display = 'flex'
            slides[slideIndex + 2].style.display = 'flex'

        } else if (width > 767) {

            if (n > slides.length - 2) {
                slideIndex = 0
            }
            if (n < 0) {
                slideIndex = slides.length - 2
            }
            slides.forEach(item => item.style.display = 'none')

            slides[slideIndex].style.display = 'flex'
            slides[slideIndex + 1].style.display = 'flex'

        } else if (width > 0) {

            if (n > slides.length - 1) {
                slideIndex = 0
            }
            if (n < 0) {
                slideIndex = slides.length - 1
            }
            slides.forEach(item => item.style.display = 'none')

            slides[slideIndex].style.display = 'flex'
        }

    }
    nextSlide.addEventListener('click', nextSlideMaxWidth = () => {
        // let width = this.window.innerWidth
        // if (width > 1279) {
        //     showSlides(slideIndex += 3)
        // } else if (width > 767) {
        //     showSlides(slideIndex += 2)
        // } else {
        //     showSlides(slideIndex += 1)
        // }
        showSlides(slideIndex += 1)
    })

    prevSlide.addEventListener('click', prevSlideMaxWidth = () => {
        showSlides(slideIndex -= 1)
    })

    renderSlider(slideIndex)
    showSlides()

})

class PetCard {
    constructor(
        src, alt, petName, type,
        breed, description, age,
        inoculations, diseases, parasites
    ) {
        this.src = src
        this.alt = alt
        this.petName = petName
        this.type = type
        this.breed = breed
        this.description = description
        this.age = age
        this.inoculations = inoculations
        this.diseases = diseases
        this.parasites = parasites
        this.petCardParent = document.querySelector('.animal-cards')
        this.petModalParent = document.querySelector('body')
    }
    renderPetCard() {
        const newPetCard = document.createElement('div')
        newPetCard.classList.add('animal-single-card')
        newPetCard.classList.add(this.petName)
        newPetCard.classList.add('call-modal')

        newPetCard.innerHTML = `
        <img class="call-modal ${this.petName}" src=${this.src} alt=${this.alt}>
        <h3 class="pet-name">
            ${this.petName}
        </h3>
        <button class="main-btn slider-btn-resp-320 call-modal ${this.petName}">
            Learn more
        </button>     
        `
        this.petCardParent.append(newPetCard)

        /* *******************renderPetModals**************** */
        const newPetModal = document.createElement('div')
        newPetModal.classList.add('modal-wrapper')
        newPetModal.classList.add(this.petName)

        newPetModal.innerHTML = `
        <div class="modal">
        <div class="pet-image-modal"><img src=${this.src} alt=${this.alt}></div>
        <div class="pet-info">
            <div class="pet-name-modal">${this.petName}</div>
            <div class="pet-breed-modal">${this.type} - ${this.breed}</div>
            <div class="pet-desc-modal">${this.description}</div>
            <ul class="pet-features-list">
                <li class="pet-features-item"><span>Age: </span>${this.age}</li>
                <li class="pet-features-item"><span>Inoculations: </span>${this.inoculations}</li>
                <li class="pet-features-item"><span>Diseases: </span>${this.diseases}</li>
                <li class="pet-features-item"><span>Parasites: </span>${this.parasites}</li>
            </ul>
            <button class="modal-close"><img src="../../assets/icons/modal-close.svg" alt="modal-close"></button>
        </div> 
        </div>    
        `
        this.petModalParent.append(newPetModal)
    }
}





