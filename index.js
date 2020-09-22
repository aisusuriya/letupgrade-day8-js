let products=[
    {   
        id:1,
        name:"Blue Shirt",
        size:"L",
        color:"Blue",
        price:1200,
        image:"product1.jpg",
        description:"Good Looking Blue Shirt"
    },
    {   
        id:2,
        name:"Black Shirt",
        size:"M",
        color:"Black",
        price:1500,
        image:"product2.jpg",
        description:"Good Looking Black Shirt"
    },
    {   
        id:3,
        name:"White Shirt",
        size:"L",
        color:"White",
        price:1100,
        image:"product3.jpg",
        description:"Smart Looking White Shirt"
    },
    {   
        id:4,
        name:"Sandal Shirt",
        size:"M",
        color:"Sandal",
        price:1600,
        image:"product4.jpg",
        description:"Handsome Looking Shirt"
    },
    {   
        id:5,
        name:"Black Shirt",
        size:"L",
        color:"Black",
        price:1900,
        image:"product5.jpg",
        description:"Formal Shirt"
    },
    {   
        id:6,
        name:"Checked Shirt",
        size:"L",
        color:"Black and White",
        price:1100,
        image:"product6.jpg",
        description:"Professional Looking"
    },
    {   
        id:7,
        name:"Navy Kurthis",
        size:"M",
        color:"Navy Blue",
        price:1200,
        image:"product7.jpg",
        description:"Good Looking Blue kurthis"
    },
    {   
        id:8,
        name:"Yellow Long Top",
        size:"L",
        color:"Yellow",
        price:1500,
        image:"product8.jpg",
        description:"Function wear"
    },
    {   
        id:9,
        name:"Black short Top",
        size:"S",
        color:"Black",
        price:1700,
        image:"product9.jpg",
        description:"Model Look"
    },
    {   
        id:10,
        name:"Green Salwar",
        size:"M",
        color:"Green",
        price:1000,
        image:"product10.jpg",
        description:"Homely Looking"
    },
    {   
        id:11,
        name:"Pink Top",
        size:"M",
        color:"Pink",
        price:1200,
        image:"product11.jpg",
        description:"Slimy Look"
    },
    {   
        id:12,
        name:"Designed Kurthi",
        size:"L",
        color:"Pink",
        price:1200,
        image:"product12.jpg",
        description:"Simple Look"
    },   
];
let cart=[];
function displayProducts(productData,who="productwrapper"){
    let productString="";
    productData.forEach(function(product,index){
        let {id,name,size,color,price,image,description}=product;
        if(who=="productwrapper"){
        productString+=`<div class="product">
        <div class="productimg">
        <img src="product_images/${image}" width="100%" height="300px">
        </div>
        <h3>${name}</h3>
        <p style="color:green">Price:${price}</p>
        <p>Size:${size}</p>
        <p>Color:${color}</p>
        <p>${description}</p>
        <p>
        <button onclick="addCart(${id})">Add cart</button>
        </p>
    </div>`}
    else if(who=="cart"){
        productString+=`<div class="product">
        <div class="productimg">
        <img src="product_images/${image}" width="100%" height="300px">
        </div>
        <h3>${name}</h3>
        <p style="color:green">Price:${price}</p>
        <p>Size:${size}</p>
        <p>Color:${color}</p>
        <p>${description}</p>
        <p>
        <button onclick="removeCart(${index})">Remove cart</button>
        </p>
    </div>`}
    });
    document.getElementById(who).innerHTML=productString;
}
displayProducts(products);


function searchData(searchValue){
    let searchProducts=products.filter(function(product){
        let searchString=product.name+""+product.color+""+product.description;
        return searchString.toUpperCase().indexOf(searchValue.toUpperCase())!= -1;
    });
    displayProducts(searchProducts);
}

// function filterPriceMax(priceValue){
//     let priceFilter=products.filter(function(product){
//         let filterValue=product.price;
//         return filterValue<=priceValue;
//     });
//     displayProducts(priceFilter);
// }
// function filterPriceMin(priceValue){
//     let priceFilter=products.filter(function(product){
//         let filterValue=product.price;
//         return filterValue>=priceValue;
//     });
//     displayProducts(priceFilter);
// }

function searchByPrice(){
    let max=document.getElementById("max").value;
    let min=document.getElementById("min").value;
    let priceFilter=products.filter(function(product){
        return product.price>=min && product.price<=max;

    });
    displayProducts(priceFilter);

}








// function addCart(index){
//     cart.push(products[index]);
//     displayProducts(cart,"cart");
//     cartLength();
// }
function cartLength(){
    let length=cart.length;
    document.getElementById("cartItems").innerHTML=length;
}


function removeCart(index){
    cart.splice(index,1);
    displayProducts(cart,"cart");
    cartLength();
}
function getProductById(productArray,id){
    return productArray.find(function(product){
        return product.id==id;
    });
}




function addCart(id){
    let pro=getProductById(products,id);
    if(cart.length==0){
        document.getElementById("cartItems").innerText=cart.length;
        cart.push(pro);
        displayProducts(cart,"cart");
        document.getElementById("cartItems").innerText=cart.length;
    }
    else{
        //let obj=cart.find((cartprod)=>cartprod.id===id);
        let obj=cart.find(function(cartprod){
            return cartprod.id===id;
        });
        if(obj===undefined){
        cart.push(pro);
        displayProducts(cart,"cart");
        document.getElementById("cartItems").innerText=cart.length;
        }
        else{
            alert("Product was already Added");
        }

    }
}


