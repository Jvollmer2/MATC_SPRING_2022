const cart = [];

setTimeoutClothing();
setTimeoutShoes();

function navBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}


function setTimeoutClothing() {
    let clothing = [
        {
            "name": "Dale Bleach Tie-Dye",
            "size": "2XL",
            "condition": "Used",
            "price": 20
        },
        {
            "name": "Pearl Jam Tour Tshirt",
            "size": "XL",
            "condition": "Used",
            "price": 70
        },
        {
            "name": "Polo Turtleneck Sweater",
            "size": "XL",
            "condition": "Used",
            "price": 45
        },
    ];
    let htmlClothing = "<table border = '1|1'>";

    htmlClothing+='<thead>';
    htmlClothing+='<tr>';
    htmlClothing+='<td>' + 'Name' + '</td>';
    htmlClothing+='<td>' + 'Size' + '</td>';
    htmlClothing+='<td>' + 'Condition' + '</td>';
    htmlClothing+='<td>' + 'Price' + '</td>';
    htmlClothing+='<td></td>';
    htmlClothing+='</tr>';
    htmlClothing+='</thead>';

    for (let i = 0; i < clothing.length; i++) {
        htmlClothing+='<tr>';
        htmlClothing+='<td>'+clothing[i].name+'</td>';
        htmlClothing+='<td>'+clothing[i].size+'</td>';
        htmlClothing+='<td>'+clothing[i].condition+'</td>';
        htmlClothing+='<td>'+clothing[i].price+'</td>';
        htmlClothing+='<td>'+'<button class="cartbutton" onclick="addToCart(clothing[i])">Add To Cart</button>'+'</td>';
        htmlClothing+='</tr>';
    }

      document.getElementById("clothingList").innerHTML = htmlClothing;
}

function setTimeoutShoes() {
    let shoes = [
        {
            "imgFile": 'img1.jpg',
            "name": "Jordan 1",
            "colorway": "UNC",
            "size": "11.5",
            "condition": "Used",
            "price": 650
        },
        {
            "name": "Jordan 3",
            "colorway": "A Ma Maniere",
            "size": "12.5",
            "condition": "New",
            "price": 600
        },
        {
            "name": "Jordan 1",
            "colorway": "Court Purple 2.0",
            "size": "11.5",
            "condition": "Used",
            "price": 225
        },
        {
            "name": "Air Max 1",
            "colorway": "Bacon 2021",
            "size": "11.5",
            "condition": "Used",
            "price": 150
        },
    ];    
    let htmlShoes = "<table border = '1|1'>";

    htmlShoes+='<thead>';
    htmlShoes+='<tr>';
    htmlShoes+='<td>' + 'Name' + '</td>';
    htmlShoes+='<td>' + 'Colorway' + '</td>';
    htmlShoes+='<td>' + 'Size' + '</td>';
    htmlShoes+='<td>' + 'Condition' + '</td>';
    htmlShoes+='<td>' + 'Price' + '</td>';
    htmlShoes+='<td></td>';
    htmlShoes+='</tr>';
    htmlShoes+='</thead>';

    for (let i = 0; i < shoes.length; i++) {
      htmlShoes+='<tr>';
      htmlShoes+='<td>'+shoes[i].name+'</td>';
      htmlShoes+='<td>'+shoes[i].colorway+'</td>';
      htmlShoes+='<td>'+shoes[i].size+'</td>';
      htmlShoes+='<td>'+shoes[i].condition+'</td>';
      htmlShoes+='<td>'+shoes[i].price+'</td>';
      htmlShoes+='<td>'+'<button class="cartbutton" onclick="addToCart(shoes[i])">Add To Cart</button>'+'</td>';
      htmlShoes+='</tr>';
    }

    document.getElementById("shoesList").innerHTML = htmlShoes;
}

//cart
function addToCart(item) {
    cart.push(item);
}

function setTimeoutCart(cart) {
    let htmlCart = "<table border = '1|1'>";

    htmlCart+='<thead>';
    htmlCart+='<tr>';
    htmlCart+='<td>' + 'Name' + '</td>';
    htmlCart+='<td>' + 'Price' + '</td>';
    htmlCart+='<td>' + 'Total' + '</td>';
    htmlCart+='</tr>';
    htmlCart+='</thead>';

    let cartTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        cartTotal+=cart.price;
        htmlCart+='<tr>';
        htmlCart+='<td>'+cart[i].name+'</td>';
        htmlCart+='<td>'+cart[i].price+'</td>';
        if ((i+1) == cart.length) {
            htmlCart+='<td>'+cartTotal+'</td>';
        }
        else {
            htmlCart+='<td> </td>';
        }
        htmlCart+='</tr>';
    }

    document.getElementById("cartList").innerHTML = htmlCart;
}

setTimeoutCart(cart);


