// Get Data from LocalStorage

function getItem() {
    return JSON.parse(localStorage.getItem("itemlist")) || [];
}
// JSON.parse() converts a JSON string into a JavaScript object, while JSON.stringify() converts a JavaScript object into a JSON string.

// Saving the Data
function saveItem(itemlist) {
    localStorage.setItem("itemlist", JSON.stringify(itemlist));
}
// JSON.stringify(itemlist) -Converts JavaScript array → string
// localStorage.setItem(...) -Saves it in the browser's local storage under the key "itemlist"

// Post.html
const postForm = document.getElementById("post-form");

if (postForm) {
    postForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const Name = document.getElementById("item-name").value;
      const Description = document.getElementById("description").value;
      const Price = document.getElementById("price").value;
      const Image = document.getElementById("image").files[0];

      // Validation( To check if anything is missing)
      if (!Name || !Description || !Price || !Image) {
        alert("Please fill in all fields and select an image.");
        return;
      }

      const reader = new FileReader(); // -Tool to read files from user’s computer
      reader.onload = function () {
        // reader.onload = function() { -Runs after the image is fully read

        const imageData = reader.result;

        const item = getItem();
        const newItem = {
          id: Date.now(), // -Creates unique ID (timestamp)
          name: Name,
          description: Description,
          price: Price,
          image: imageData,
        };

        item.push(newItem);
        saveItem(item);

        // Redirect to product page
        window.location.href = `product.html?id=${newItem.id}`;
      };  // Redirects to product page with ID
      
      // the code below reads the uploaded image file and turns it into a format the browser can store and display
      reader.readAsDataURL(Image);
    }); // Converts image into string so it can be stored
}


    // index.html
const itemList = document.getElementById("itemlist");

if (itemList) {
    const items = getItem();

    if (items.length === 0) {    // if there are no items in the list
        itemList.innerHTML = "<p>No items available. Please check back later.</p>";
    }

    items.forEach((item) => {
        const div = document.createElement("div");  // Creates a container for each item
    


//  the below code creates the HTML content for one product and puts it inside a <div>.
div.innerHTML = `
    <h3>${item.name}</h3>
   <img src="${item.image}">
   <p>KES ${item.price}</p>
   <a href="product.html?id=${item.id}">View Details</a> 
`; // Link to product page with ID

itemList.appendChild(div);   // Adds item to page
});
}

// product.html
const productDetails = document.getElementById("product-details");

if (productDetails) {
    const params = new URLSearchParams(window.location.search);  // Reads URL parameters
    const id = params.get("id");  // Gets item ID from URL

    const items = getItem();
    const item = items.find(i => i.id == id);  // Finds the ONE item with matching ID

    if (!item) {
        productDetails.innerHTML = "<p>Item not found.</p>";
    } else {
        productDetails.innerHTML = `
            <h2>${item.name}</h2>
            <img src="${item.image}" alt="${item.name}">
            <p><strong>Description:</strong> ${item.description}</p>
               <p><strong>Price:</strong> KES ${item.price}</p>  
    `;
    }
}




    