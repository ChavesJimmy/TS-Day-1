var text = "Hello world!";
console.log(text);
// basic exercise 1
/* for (let i =1 ; i<11; i++){

    document.body.innerHTML += `
    1 * ${i} = ${i*1}<br>
    2 * ${i} = ${i*2}<br>
    3 * ${i} = ${i*3}<br>
    4 * ${i} = ${i*4}<br>
    5 * ${i} = ${i*5}<br>
    6 * ${i} = ${i*6}<br>
    7 * ${i} = ${i*7}<br>
    8 * ${i} = ${i*8}<br>
    9 * ${i} = ${i*9}<br>
    10 * ${i} = ${i*10}<br>
    ____________________<br>`
}  */
//basic exercise 2
var fName = "Jimmy";
var lName = "Chaves";
/* document.body.innerHTML = `My name is ${fName}  ${lName}`;
 */
/* let array : Array<{fName: string, lName : string}> = [
    {"fName" : "jimmy",
    "lName" : "chaves"},
    {"fName" : "jimmy",
    "lName" : "chaves"},
    {"fName" : "jimmy",
    "lName" : "chaves"},
    {"fName" : "jimmy",
    "lName" : "chaves"},
    {"fName" : "jimmy",
    "lName" : "chaves"},
    {"fName" : "jimmy",
    "lName" : "chaves"},
    {"fName" : "jimmy",
    "lName" : "chaves"},
    {"fName" : "jimmy",
    "lName" : "chaves"},
    {"fName" : "jimmy",
    "lName" : "chaves"},
    {"fName" : "jimmy",
    "lName" : "chaves"}
   
];
array.forEach(function(name) {
    console.log(name);
    document.body.innerHTML += `My name is ${fName}<br>`
 
}) */
// basic exercise 3
/* let nameArray : Array<string> = ["Jon", "Max", "Kate", "Mina"];

nameArray.forEach(function(val, index){
    document.body.innerHTML += `1 value : ${val}<br>
    ~~~~~~~~~~<br>`

    document.body.innerHTML += `2 index : ${index}<br>
    --------<br>`

    document.body.innerHTML += `value : ${val}<br>
    index ${index}<br>
    _______________<br>`
})
 */
// last exercise
var menuItems = [
    { item: "Today's Menu (Entrance + Today's Special + Dessert",
        category: "Meat",
        lunchPosition: "Lunch",
        price: 25,
        image: "https://media.istockphoto.com/photos/fish-and-meat-meals-variety-flat-lay-picture-id646207148?b=1&k=20&m=646207148&s=170667a&w=0&h=lyD3m0Kl-eBNLw7jS6vcvaXzKynEg_ORZfCflfaR-xs=" },
    { item: "Swordfish + french fries",
        category: "Fish",
        lunchPosition: "Lunch",
        price: 16,
        image: "https://cdn.pixabay.com/photo/2014/10/03/15/04/sashimi-471802__480.jpg" },
    { item: "Lasagne with vegatables",
        category: "Vegatarian",
        lunchPosition: "Lunch",
        price: 12,
        image: "https://cdn.pixabay.com/photo/2016/02/04/03/22/lasagne-1178514__480.jpg" },
    { item: "Beef filet + mashed potatoes",
        category: "Meat",
        lunchPosition: "Lunch",
        price: 20,
        image: "https://cdn.pixabay.com/photo/2017/02/13/19/03/fillet-2063452__480.jpg" },
    { item: "Tiramisu",
        category: "Vegetarian",
        lunchPosition: "Dessert",
        price: 7,
        image: "https://cdn.pixabay.com/photo/2016/09/01/14/20/tiramisu-1636223__480.jpg" },
    { item: "Veggie salad",
        category: "Vegan",
        lunchPosition: "Entrance",
        price: 7,
        image: "https://cdn.pixabay.com/photo/2015/05/31/13/59/salad-791891__480.jpg" },
];
var myMenu = document.getElementById("Menu2");
for (var _i = 0, menuItems_1 = menuItems; _i < menuItems_1.length; _i++) {
    var items = menuItems_1[_i];
    var menuDisplay = "\n<div class=\"card p-6 m-6\" style=\"width: 18rem;\">\n<img src=\"".concat(items.image, "\" class=\"card-img-top\" alt=\"...\">\n<div class=\"card-body\">\n  <h5 class=\"card-title\">").concat(items.item, "</h5>\n  <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n</div>\n<ul class=\"list-group list-group-flush\">\n  <li class=\"list-group-item\">An item</li>\n  <li class=\"list-group-item\">A second item</li>\n  <li class=\"list-group-item\">A third item</li>\n</ul>\n</div>\n");
    myMenu.innerHTML += menuDisplay;
}
