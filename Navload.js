
// Navbar content data
const navbarData = {
  title: "Inventory",
  storageInfo: "Storage: 51 Port Terminal Blvd #12, Bayonne, NJ",
  dateInfo: "Month",
  companyLogo: "path/to/your/company-logo.png" // Replace with the actual path to your image
};

// Function to load navbar from external file and populate data
async function loadNavbar() {
  const response = await fetch('components/DMcards/navbar/nav1.html');
  const navbarHtml = await response.text();
  document.getElementById('navbar-container').innerHTML = navbarHtml;

  // Insert dynamic content after navbar is loaded
  document.getElementById('navbar-title').innerText = navbarData.title;
  document.getElementById('storage-info').children[1].innerText = navbarData.storageInfo;
  
  // Set the company logo image path
  document.getElementById('company-logo').src = navbarData.companyLogo;
}


