menuArray = ['Veg Margherita Pizza','Peppy Paneer','CHEESE N CORN','Veg Extravaganza','Deluxe Veggie'];

function getmenu(){
    var displayMenu = document.getElementById("display_menu");
    a = "";
    for (let i = 0; i < menuArray.length; i++) {
        console.log(menuArray[i]);
        a = a +"<li>"+ menuArray[i] + "</li>";
    }
    displayMenu.innerHTML=a;
}

function add_item(){
    document.getElementById('display_addedmenu').style.display="block";
    var item = document.getElementById("add_item").value;
    var displayMenu = document.getElementById("display_menu");
    menuArray.push(item)
    a = '';
    for (let i = 0; i < menuArray.length; i++) {
        console.log(menuArray[i]);
        a = a + '<img src="./images/pizzaImg.png" width="45">' + menuArray[i] + '<br><br>';
    }
    document.getElementById('display_addedmenu').innerHTML=a;
    displayMenu.innerHTML=a;

}

function add_top(){
    document.getElementById('display_addedmenu').style.display="block";
    var item = document.getElementById("add_item").value;
    var displayMenu = document.getElementById("display_menu");
    menuArray.unshift(item)
    a = '';
    for (let i = 0; i < menuArray.length; i++) {
        console.log(menuArray[i]);
        a = a + '<img src="./images/pizzaImg.png" width="45">' + menuArray[i] + '<br><br>';
    }
    document.getElementById('display_addedmenu').innerHTML=a;
    displayMenu.innerHTML=a;
}