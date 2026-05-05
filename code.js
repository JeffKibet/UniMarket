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
        };
        
        reader.readAsDataURL(Image);
    });
}
    