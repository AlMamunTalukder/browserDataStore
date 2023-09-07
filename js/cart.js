

const addProduct = () =>{
    const nameField = document.getElementById('product-name'); 
    const quantityField = document.getElementById('product-quantity'); 

    const product = nameField.value; 
    const quantity = quantityField.value; 


    nameField.value = ''; 
    quantityField.value = ''; 



    console.log(product,quantity); 
    productDislplay(product,quantity);
    saveDatainlocalServer(product,quantity);
}


const productDislplay = (product,quantity) =>{
    const ul = document.getElementById('product-Dislplay'); 
    
    const li = document.createElement('li'); 
    li.innerText = `${product}:${quantity}`;

    ul.appendChild(li); 



}



const getStoredShoppingCart = () =>{
    let cart ={};
    const storedCart = localStorage.getItem('cart');
    
    if (storedCart) {
        cart = JSON.parse(storedCart); 
        
    }
    return cart; 
}


const saveDatainlocalServer = (product,quantity) =>{
    const cart = getStoredShoppingCart(); 
    cart [product] = quantity; 
    const cartStringfied = JSON.stringify(cart) ; 
    localStorage.setItem('cart', cartStringfied); 

}
const displayproductfromloaclstorage = () => {
    const savecart = getStoredShoppingCart(); 
    console.log(savecart); 
    for (const product in savecart) {
        const quantity = savecart[product];
        console.log(product,quantity); 
        productDislplay(product,quantity);
        
    }
    
}
displayproductfromloaclstorage(); 

