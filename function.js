"reduce() reduces all array elements into a single value."
const result = arr.reduce((obj, current) => {
  /* example how you can use it  if (obj[current.?]) {
       
    } else {
        obj[current.?] = current.?
    } */
    return maxTempPerDayObj
}, {})


"The setTimeout() method calls a function after a number of milliseconds"
setTimeout(() => {
   
}, 1000);
"The setInterval() method calls a function at specified intervals (in milliseconds)."
setInterval(()=>{
"to stop it use " clearInterval()
}, 1000);

"find() : This method returns the first element in the array that satisfies the provided"
const Find = arr.find(current =>/*  current?.password === password && u.userName === username */)

"findIndex() : This method returns the index of the first element in the array that satisfies the provided testing function."
const foundIndex = arr.findIndex(current => /*=====example=== cuurent.?.toLowerCase().replaceAll(" ", "-") === id */)
if (foundIndex > -1) {
    arr.splice(foundIndex, 1)
}


"filter() removes elements that are not required and creates a new array containing the ones needed"
const arrayfilter = arr.filter(current => /*=====example=== current?.title.toLowerCase().includes(searchValue.toLowerCase()) */)
draw(newBooksArray)



"map() transforms every element in an array individually and creates a new array" =>"callback function"
const arraymap = arr.map(curent =>/*  example getSingleBookUI(book) */)

"The sort() method in JavaScript is used to sort the elements of an array in place and returns the sorted array."
let numbers = [25, 8, 7, 41];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [7, 8, 25, 41]


"local storge example"
const arr=[]
let LcArr = JSON.parse(localStorage.getItem("memorey"))||[]
arr.push(...LsArr)
localStorage.removeItem("memorey");


"the forEach() array method loops through any array, executing a provided function once for each array element in ascending index order"
"the main difference between map and forEach is that map returns a new array with the results of the function, while forEach does not return anything and only modifies the original array"
data.forEach(file => console.log(file))


"object. keys() returns the keys (properties) of any object type."
Object.keys(object)



"Object. values() returns the values of all object keys (properties)"
Object.values(object)


"object. entries() returns an array consisting of enumerable property [key, value] pairs of the object passed."
Object.entries(object)


"examle for draw if yoy need one"
function draw(data) {
   /* important */ if (!Array.isArray(data)) return
   console.log(data);
    const DrawUserUI =data.map(user =>getSingleuserUI(user))
    document.querySelector("#userList").append(...DrawUserUI)    
}

"remember in ui to use this"
function  getSingleuserUI(user){
    if (typeof user !== 'object') return;}

"querry selector example"
const userList = document.querySelector("#userList")

"example for fetch"
async function getUserApi() {
    const result = await fetch(`https://randomuser.me/api/`)
    const r = await result.json()
    return r;
}

"example for addEventListener"
clearbtn.addEventListener("click", function () {
    const title = document.getElementById("titlePapar");
    const info = document.getElementById("infopaper");
    const date = document.getElementById("datepaper");
    const time=document.getElementById("timepaper");
    title.value ="";
    info.value = "";
    date.value ="";
    time.value = "";
   
   
   
})

