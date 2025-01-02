    async function loadCardComponent2() {
      const response = await fetch('components/DMcards/Card1/card5/card5.html');
      return await response.text();
    }
    async function renderCards2() {
      const cardContainer = document.getElementById('card3');
      cardContainer.innerHTML = ""; // Clear any existing content
    
      const cardTemplate = await loadCardComponent2();
    
      // Array of possible classes
  
      
      cardData1.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.innerHTML = cardTemplate;
        
        // Replace placeholder text with dynamic data
        cardElement.querySelector('.card-title').innerText = card.title;
        // cardElement.querySelector('.card-description').innerText = card.description;
        // cardElement.style.backgroundImage = `linear-gradient(to bottom, #f7e67c, #ffffff), url(${card.imageUrl})`;
        // cardElement.style.background = ` url(${card.imageUrl}),linear-gradient(to bottom, #f7e67c, #ffffff)`;
  // cardElement.style.backgroundSize = "cover";  // Ensure the image covers the card properly
  // cardElement.style.backgroundPosition = "center"; // Position the image at the center
  
          
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
        // cardElement.classList.add("w-72", "h-88", "rounded-2xl", "overflow-hidden", ss"relative" ,"shadow-lg" ,"bg-cover", "bg-center")
      //   cardElement.classList.add(randomClass); // Add the randomly selected class
        
    
        cardContainer.appendChild(cardElement);
      });
    }
  