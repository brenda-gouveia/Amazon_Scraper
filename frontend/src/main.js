import './style.css'

  // Get the modal element
  let modal = document.getElementById("myModal"); 

  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0]; 

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  }

  // Add an event listener to the search button
  document.getElementById("search").addEventListener("click", async () => {
    // Get the keyword input value and trim any whitespace
    const keyword = document.getElementById("keyword").value.trim();
    
    // If the keyword is empty, show an alert and stop execution
    if (!keyword) return alert("Enter a keyword!");

    // Make a fetch request to the server with the keyword as a query parameter
    const response = await fetch(`http://localhost:3000/api/scrape?keyword=${encodeURIComponent(keyword)}`);
    
    // Parse the JSON response to get the list of products
    const products = await response.json();

    // Get the unordered list element inside the modal
    const productList = document.querySelector(".modal-ul");

    // Clear any previous results in the list
    productList.innerHTML = "";

    // Iterate over the fetched products and create list items for each product
    products.forEach(product => {
      // Create a new <li> element
      const li = document.createElement("li");
      
      // Set the inner HTML of the <li> with product details
      li.innerHTML = `
          <div class="product-card">
            <div class="img-container">
              <img src="${product.image}" alt="${product.title}">
              <h2>${product.title}</h2>
              <h3>${product.price}</h3>
              <h4>⭐ ${product.rating} avaliations - ${product.reviewsCount} reviews<h4>
            </div>
          </div>
      `;

      // Append the <li> to the unordered list
      productList.appendChild(li);

      // Display the modal with the product list
      modal.style.display = "block";
    });
  });
