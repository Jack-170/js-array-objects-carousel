// array immagini con proprietà
const images = [ 
{ 
    image: 'img/01.webp',
     title: 'Marvel\'s Spiderman Miles Morale', 
     text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', 
}, { 
    image: 'img/02.webp', 
    title: 'Ratchet & Clank: Rift Apart', 
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', 
}, { 
    image: 'img/03.webp',
     title: 'Fortnite', 
     text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
},{
     image: 'img/04.webp',
      title: 'Stray',
       text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
}, {
     image: 'img/05.webp',
     title: "Marvel's Avengers",
     text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 
} ];

// console.log(images);


const container = document.querySelector(".main-container");


// creo una funzione per generare il carosello che ancora non scorrerà
const generateCarousel = () => {
    const carouselItems = images.map((image, index) => {
        const activeClass = index === 0 ? 'active' : ''; // Imposta la prima immagine come attiva

        return `
            <div class="item ${activeClass}">
                <div class="content">
                    <h2>${image.title}</h2>
                    <p>${image.text}</p>
                </div>
                <img src="${image.image}" alt="${image.title}">
            </div>
        `;
    }).join('');

    const carousel = `
        <div class="ms-container">
            <div class="item-container">
                ${carouselItems}
            </div>
            <div class="next">
                <i class="ms-grey fa-solid fa-circle-chevron-up"></i>
            </div>
            <div class="previous">
                <i class="ms-grey fa-solid fa-circle-chevron-down"></i>
            </div>
        </div>
    `;

    container.innerHTML = carousel;
};


generateCarousel();

// faccio funzionare next e previous

let activeItem = 0;
const items = document.querySelectorAll('.item');


const next = document.querySelector(".next");

next.addEventListener("click" ,

    function () {
        if (activeItem < items.length - 1) {
            // rimuovo active dall'elemento
            items[activeItem].classList.remove("active");
            // incremento indice elemento da visualizzare
            activeItem++;
            //  passo la classe active all'elemento successivo
            items[activeItem].classList.add("active");
        } else {
            // "ciclo infinito"
            items[activeItem].classList.remove("active");
            activeItem = 0;
            items[activeItem].classList.add("active");
        }

    }


)



const previous = document.querySelector(".previous");

previous.addEventListener("click" ,
    function(){ 

        if (activeItem > 0) {
             // rimuovo active dall'elemento
            items[activeItem].classList.remove("active");
            // decremento indice elemento da visualizzare
            activeItem--;
             // passo la classe active all'elemento precedente
            items[activeItem].classList.add("active");
        } else {
            // "loop infinito"
            items[activeItem].classList.remove("active");
            activeItem = items.length - 1;
            items[activeItem].classList.add("active");
        }
    }


)