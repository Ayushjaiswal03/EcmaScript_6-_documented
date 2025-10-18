const images = [
    {
        src: 'https://images.unsplash.com/photo-1526034332220-067b0f400e06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGlnZXJ8ZW58MHx8MHx8fDA%3D',
        name: 'tiger'
    },
    {
        src: 'https://images.unsplash.com/photo-1516642499105-492ff3ac521b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGlvbnxlbnwwfHwwfHx8MA%3D%3D',
        name: 'lion'
    }
];

let currentIndex = 0;

function loadInitialCard(index) {
    const imgElement = document.getElementById("mainImage");
    const captionElement = document.getElementById("mainCaption");

    const imageObj = images[index];

    if(imageObj){
        imgElement.src = imageObj.src;
        imgElement.alt = imageObj.name;
        captionElement.textContent = imageObj.name
    }
}

function updateMainCard(newIndex) {
    const displayArea = document.querySelector('.displayArea');
    const imageCard = displayArea.querySelector('.imageCard');
    const imgElement = document.getElementById('mainImage');
    const captionElement = document.getElementById("mainCaption");
    const loader = displayArea.querySelector('loader');


    imageCard.style.visibility = 'hidden';
    loader.style.display = 'flex';

    const imageObj = images[newIndex];

    setTimeout(()=> {
        imgElement.src = imageObj.src;
        imgElement.alt = imageObj.name;
        captionElement.textContent = imageObj.name;

        loader.style.display = 'none';
        imageCard.style.visibility = 'visible';
    }, 1000);
}