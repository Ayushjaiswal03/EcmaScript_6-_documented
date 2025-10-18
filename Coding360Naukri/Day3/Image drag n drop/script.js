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

function previewNewImage(imageObj) {
    const previewArea = document.querySelector('.previewArea');

     previewArea.querySelectorAll('.miniImageCard').forEach(el => el.remove());

            const miniCard = document.createElement('figure');
            miniCard.className = 'miniImageCard';
            
            // NOTE: The figure element already exists with class 'miniImageCard' in the problem statement, 
            // but this dynamic creation is necessary to correctly display the preview element.
            miniCard.innerHTML = `
                <img alt="${imageObj.name}" src="${imageObj.src}" loading="lazy" />
                <figcaption class="description">${imageObj.name}</figcaption>
            `;

            previewArea.appendChild(miniCard);
            
            // Remove the card after 1 second (1000ms)
            setTimeout(() => {
                miniCard.remove();
            }, 1000);
        }

        // nextImageCard method
        function nextImageCard() {
            // Cycle forward: wrap around using modulo operator
            currentIndex = (currentIndex + 1) % images.length;
            updateMainCard(currentIndex);
        }

        // previousImageCard method
        function previousImageCard() {
            // Cycle backward: add length before modulo to handle negative results
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateMainCard(currentIndex);
        }

        // addNewImage method
        function addNewImage(event) {
            event.preventDefault(); // Prevents the default form submission behavior

            const addressInput = document.getElementById('imgAddressInput');
            const nameInput = document.getElementById('imgNameInput');

            // Create the new image object
            const newImage = {
                src: addressInput.value.trim(),
                name: nameInput.value.trim(),
            };
            
            // Add new object to the array
            images.push(newImage);

            // Display the new image as a preview for 1s
            previewNewImage(newImage);

            // Set current index to the new image and update the main card
            currentIndex = images.length - 1;
            updateMainCard(currentIndex); 

            // Clear the form inputs
            addressInput.value = '';
            nameInput.value = '';

            return false; // For older browser compatibility, though preventDefault is sufficient
        }

        // previewLastAddedImage method
        function previewLastAddedImage() {
            if (images.length === 0) {
                // Use a custom message box instead of alert()
                const previewArea = document.querySelector('.previewArea');
                const message = document.createElement('p');
                message.style.color = 'red';
                message.style.marginTop = '10px';
                message.textContent = 'No images have been added yet!';
                
                previewArea.appendChild(message);
                
                setTimeout(() => {
                    message.remove();
                }, 2000);
                return;
            }
            
            // The last added image is always the last element in the array
            const lastImage = images[images.length - 1];
            previewNewImage(lastImage);
        }

        // Initial load: Set the first image synchronously on page load
        window.onload = () => {
            loadInitialCard(currentIndex);
        };