// Get Data from LocalStorage
// JSON.parse() converts a JSON string into a JavaScript object, while JSON.stringify() converts a JavaScript object into a JSON string.
function getItem() {
    return JSON.parse(localStorage.getItem("itemlist")) || [];
}

// Saving the Data
function saveItem(itemlist) {
    localStorage.setItem("itemlist", JSON.stringify(itemlist));
}

// Post.html
const postForm = document.getElementById("post-form");

if (postForm) {
    postForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const Name = document.getElementById("item-name").value;
        const Description = document.getElementById("description").value;
        const Price = document.getElementById("price").value;
        const Image = document.getElementById("image").files[0];
        
        // Validation
        if (!Name || !Description || !Price || !Image) {
            alert("Please fill in all fields and select an image.");
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function() {
            const imageData = reader.result;
            
            const item = getItem();
            const newItem = {
                name: Name,
                description: Description,
                price: Price,
                image: imageData
            };
            item.push(newItem);
            saveItem(item);

            // Redirect to product page
            window.location.href = "product.html";
        };
        
        // the code below reads the uploaded image file and turns it into a format the browser can store and display
        reader.readAsDataURL(Image);    
    });
}

// index.html
const itemList = document.getElementById("itemlist");

if (itemList) {
    const items = getItem();

    if (items.length === 0) {
        itemList.innerHTML = "<p>No items available. Please check back later.</p>";
    }

    items.forEach((item) => {
        const div = document.createElement("div");
    


//  the below code creates the HTML content for one product and puts it inside a <div>.
div.innerHTML = `
    <h3>${item.name}</h3>
   <img src="${item.image}"
   <p>KES ${item.price}</p>
   <a href="product.html?id=${item.id}">View Details</a>
`;

itemlist.appendChild(div);  
});
}

// product.html
const productDetails = document.getElementById("product-details");

if (productDetails) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const items = getItem();
    const item = items.find(i => i.id === id);

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




    