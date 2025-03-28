console.log("Working");

document.getElementById("search").addEventListener("click", async () => {
  const keyword = document.getElementById("keyword").value.trim();
  console.log(keyword);
  // Validate the keyword input
  // If the input is empty, show an alert
  // If the input is not empty, proceed with the fetch request
  // Fetch the products from the server
  // Update the UI with the fetched products
  // Clear previous results

  if (!keyword) return alert("Enter a keyword!");

  const response = await fetch(`http://localhost:3000/api/scrape?keyword=${encodeURIComponent(keyword)}`);
  const products = await response.json();

  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  products.forEach(product => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";

      productCard.innerHTML = `
          <img src="${product.image}" alt="${product.title}">
          <h2>${product.title}</h2>
          <h3>${product.price}</h3>
          <p>⭐ ${product.rating} avaliações</p>
      `;

      resultsContainer.appendChild(productCard);
  });
});
