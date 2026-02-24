//1. Using a DOM property, retrieve the h1 and console.log it.
h1Section = document.getElementsByTagName('h1')[0];
console.log(h1Section);

//2. Using DOM methods, remove the last paragraph in the <article> tag.
articleTag = document.body.firstElementChild.lastElementChild;  
articleTag.remove();

//3. Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

h2Section = document.getElementsByTagName("h2")[0]
h2Section.addEventListener('click',changeBackgroundcolor)

function changeBackgroundcolor (e) {
    e.target.style = "background-color : red"
}

//4.Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

h3Section = document.getElementsByTagName("h3")[0]
h3Section.addEventListener('click', (e) => {e.target.style = "display: none"})

//5. Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
btnSection = document.getElementById("btn");
btnSection.addEventListener("click",boldFunction)
function boldFunction() {
    paragraphSection = document.getElementsByTagName("p");
    for (paragraph of paragraphSection) {
        paragraph.style = "font-weight: bold"
    }
}

//6. BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
