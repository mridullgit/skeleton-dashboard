const cardData2 = [
  { title: "Order",
  description: "This is the dynamic description that comes from an object.",
  imageUrl:"assets/images/try.jpg" ,
  case : "wide"}
  ];


async function loadCardComponent() {
  const response = await fetch('components/DMcards/Card1/card3/card3.html');
  return await response.text();
}

// Function to render cards dynamically using card component
async function renderCards() {
    const cardContainer = document.getElementById('cards-container');
    cardContainer.innerHTML = ""; // Clear any existing content
  
    const cardTemplate = await loadCardComponent();
  
    // Array of possible classes

    
    cardData2.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.innerHTML = cardTemplate;
      
      // Replace placeholder text with dynamic data
      cardElement.querySelector('.card-title').innerText = card.title;
      cardElement.querySelector('.card-description').innerText = card.description;
      // cardElement.style.backgroundImage = `linear-gradient(to bottom, #f7e67c, #ffffff), url(${card.imageUrl})`;
      cardElement.style.background = ` url(${card.imageUrl}),linear-gradient(to bottom, #f7e67c, #ffffff)`;
cardElement.style.backgroundSize = "cover";  // Ensure the image covers the card properly
cardElement.style.backgroundPosition = "center"; // Position the image at the center

        
      // Randomly select a class from the randomClasses array
      if(card.case == "big"){
        cardElement.classList.add("big");
      }
      if(card.case == "wide"){
        cardElement.classList.add("wide");
        }
        if(card.case == "tall"){
            cardElement.classList.add("tall");
            }
      cardElement.classList.add("flex","justify-center","items-center","w-full","h-full","rounded-3xl")
    //   cardElement.classList.add(randomClass); // Add the randomly selected class
      
  
      cardContainer.appendChild(cardElement);
    });
  }
 // to render card3 dynamically
  
