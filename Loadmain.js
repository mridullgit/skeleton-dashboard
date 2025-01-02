
// Dummy array of objects with card data
const cardData = [

  { title: "Card 1", description: "This is the description for card 1" , case : "big" },
  { title: "Card 2", description: "This is the description for card 2" , case : "wide"},
  { title: "Card 3", description: "This is the description for card 3" , case : "wide" },
  { title: "Card 4", description: "This is the description for card 4", case :"tall" },
  

];
const cardData2 = [
  { title: "Order",
  description: "This is the dynamic description that comes from an object.",
  imageUrl:"assets/images/try.jpg" ,
  case : "wide"},
  ];


  
  const cardData1 = [
    { title: "ReOrder",
    case : "big"}
    ];
  



  
  



   // to render card3 dynamically
    
  
  

// Load Sidebar dynamically
async function loadSidebar() {
  const response = await fetch('components/DMcards/Sidebars/sidebar1.html');
  const sidebarHtml = await response.text();
  document.getElementById('sidebar-container').innerHTML = sidebarHtml;
}



