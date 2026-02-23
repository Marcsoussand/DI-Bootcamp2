let allBooks = [{title: 'Pillars of the Earth', author: 'Ken Follett', image:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1576956100i/5043.jpg", alreadyRead: true},
    {title: 'Azteca', author: 'Gary Jennings', image: "https://m.media-amazon.com/images/I/61BO6pp9XZL._AC_UF1000,1000_QL80_.jpg", alreadyRead: true}]

let div1 = document.createElement('div')
let div2 = document.createElement('div')
let book1 = document.createTextNode(`${allBooks[0].title} written by ${allBooks[0].author} `)

if (allBooks[0].alreadyRead) {
    div1.style.color = 'red';
}
const image1 = document.createElement('img')
image1.src = allBooks[0].image;
image1.setAttribute('width','100px')
let book2 = document.createTextNode(`${allBooks[1].title} written by ${allBooks[1].author} `)
if (allBooks[1].alreadyRead) {
    div2.style.color = 'red';
}
const image2 = document.createElement('img')
image2.src = allBooks[1].image;
image2.setAttribute('width','100px')
div1.appendChild(book1);
div1.appendChild(image1);
div2.appendChild(book2);
div2.appendChild(image2);
let section = document.getElementsByClassName("listBooks")[0]
section.appendChild(div1)
section.appendChild(div2)