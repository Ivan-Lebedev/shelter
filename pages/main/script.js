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
const pets = [
    {
        "name": "Katrine",
        "img": "../../assets/images/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Jennifer",
        "img": "../../assets/images/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "../../assets/images/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "../../assets/images/pets-Sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },   
    {
        "name": "Scarlett",
        "img": "../../assets/images/pets-scarlet.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },    
    {
        "name": "Timmy",
        "img": "../../assets/images/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Freddie",
        "img": "../../assets/images/pets-Freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "../../assets/images/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
]
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
    // const modalPetWindowInside = document.querySelectorAll('.modal')

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

    // modalPetWindow.forEach(itemArea => itemArea.addEventListener('click', (e) => {
    //     const target = e.target

    //     modalPetWindow.forEach(petItem => {
    //         if (!target.classList.contains(item.name) && petItem.classList.contains(item.name)) {
    //             petItem.style.display = 'none'
    //         }
    //     })    
    //     back.classList.remove('lock')
    // }))

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
    })
    window.addEventListener("resize", () => {
        showSlides(n)
    })
}

/* Shows slides depending on width of the window */
function showSlides(n) {

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