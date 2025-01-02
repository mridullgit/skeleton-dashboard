async function loadCardComponent1() {
  const response = await fetch('components/DMcards/Card1/card4/card4.html');
  return await response.text();
}

// Function to render cards dynamically using card component
async function renderCards1() {
    const cardContainer = document.getElementById('card1');
    cardContainer.innerHTML = ""; // Clear any existing content
  
    const cardTemplate = await loadCardComponent1();
  
    // Array of possible classes

    
    cardData2.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.innerHTML = cardTemplate;
      
      // Replace placeholder text with dynamic data
      // cardElement.querySelector('.card-title').innerText = card.title;
      // cardElement.querySelector('.card-description').innerText = card.description;
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