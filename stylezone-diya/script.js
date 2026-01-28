//shirts
const products=[
{name: "Basic Textured Shirt", category: "Shirts" , price: 1500, image: "product_images/t-shirt01.jpg"},
{name: "Raglan Sleeves shirt", category: "Shirts" , price: 2090, image: "product_images/t-shirt02.jpg"},
{name: "Embroidered T-hirt", category: "Shirts" , price: 2500, image: "product_images/t-shirt03.jpg"},
{name: "Mock Neck Tank Top", category: "Shirts" , price: 1400, image: "product_images/t-shirt04.jpg"},
{name: "Basic pink Shirt", category: "Shirts" , price: 1700, image: "product_images/t-shirt05.jpg"},

// Hoodies 
  { name: "Nike Mens Hoodie", category: "Hoodies", price: 2400, image: "product_images/h01.jpg" },
  { name: "Women sweatShirt Hoodie", category: "Hoodies", price: 2400, image: "product_images/h02.jpg" },
  { name: "Navy Blue Hoodie", category: "Hoodies", price: 2600, image: "product_images/h003.jpg" },
  { name: "Ticticimimi Women's Hoodie", category: "Hoodies", price: 2650, image: "product_images/h004.jpg" },
  { name: "Gildan Fleece Hoodie", category: "Hoodies", price: 2400, image: "product_images/h0005.jpg" },
  
// Shoes 
  { name: "Running Shoes", category: "Shoes", price: 4000, image: "product_images/shoes1.jpg" },
  { name: "Adidas Shoes", category: "Shoes", price: 4200, image: "product_images/shoes2.jpg" },
  { name: "Non slipping Walking Sneakers", category: "Shoes", price: 4100, image: "product_images/shoes3.jpg" },
  { name: "Puma Men's Tazon", category: "Shoes", price: 4300, image: "product_images/shoes4.jpg" },
  { name: "Skechers Summits", category: "Shoes", price: 4050, image: "product_images/shoes5.jpg" },  

// Accessories 
  { name: "Chokers", category: "Accessories", price: 2500, image: "product_images/01.jpg" },
  { name: "Bangles", category: "Accessories", price: 1000, image: "product_images/02.jpg" },
  { name: "Earrings", category: "Accessories", price: 1200, image: "product_images/03.jpg" },
  { name: "Clutch & Bags", category: "Accessories", price: 1700, image: "product_images/04.jpg" },
  { name: "Anklets", category: "Accessories", price: 1800, image: "product_images/05.jpg" }, 
];

           // Display products function
 
const product_container = document.getElementById("product_container")  ;

function displayProducts(productList){
    //clear previous product
    product_container.innerHTML ="";

    // Loop through product list and create cards
    productList.forEach(product => {
        product_container.innerHTML += `
<div class="col product-wrapper mb-3 ">
<div class="card product-card">
<img src="${product.image}" class="card-img-top" alt="${product.name}">
<div class="card-body">
    <h5 class="card-title"> ${product.name}</h5>
    <p  class="card-text">Rs ${product.price}</p>
</div>
</div>
</div>
`;
    });
}

//show all products on page load
displayProducts(products);

//search filters
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup" , function(){
const searchValue = searchInput.value.toLowerCase();

const filterProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchValue) ||
    product.category.toLowerCase().includes(searchValue)
);
//display filter products
displayProducts(filterProducts);
});
