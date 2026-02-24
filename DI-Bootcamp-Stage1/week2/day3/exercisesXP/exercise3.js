//1 Declare a global variable named allBoldItems.
let allBoldItems;
//2Create a function called getBoldItems() that takes no parameter. 
// This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

const getBoldItems = () => {
    allBoldItems = document.getElementsByTagName("strong");
}

getBoldItems()
console.log(allBoldItems);
//3 Create a function called highlight() that changes the color of all the bold text to blue.
const highlight = () => {
    for (let boldItems of allBoldItems) {
        boldItems.style = "color:blue";
    }
}
//4. Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

const returnItemsToDefault = () => {
    for (let boldItems of allBoldItems) {
        boldItems.style = "color:black";
    }
}
let paragraph = document.getElementsByTagName("p")[0]
paragraph.addEventListener("mouseover",highlight);
paragraph.addEventListener("mouseout",returnItemsToDefault)