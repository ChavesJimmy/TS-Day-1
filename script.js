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
var array = [
    { "fName": "jimmy",
        "lName": "chaves" },
    { "fName": "jimmy",
        "lName": "chaves" },
    { "fName": "jimmy",
        "lName": "chaves" },
    { "fName": "jimmy",
        "lName": "chaves" },
    { "fName": "jimmy",
        "lName": "chaves" },
    { "fName": "jimmy",
        "lName": "chaves" },
    { "fName": "jimmy",
        "lName": "chaves" },
    { "fName": "jimmy",
        "lName": "chaves" },
    { "fName": "jimmy",
        "lName": "chaves" },
    { "fName": "jimmy",
        "lName": "chaves" }
];
array.forEach(function (name) {
    console.log(name);
    document.body.innerHTML += "My name is ".concat(fName, "<br>");
});
