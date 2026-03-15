const robots = [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            image: 'https://robohash.org/1?200x200&set=set2'
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            image: 'https://robohash.org/2?200x200&set=set2'
          },
          {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            image: 'https://robohash.org/3?200x200&set=set2'
          },
          {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            image: 'https://robohash.org/4?200x200&set=set2'
          },
          {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            image: 'https://robohash.org/5?200x200&set=set2'
          },
          {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            image: 'https://robohash.org/6?200x200&set=set2'
          },
          {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            image: 'https://robohash.org/7?200x200&set=set2'
          },
          {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            image: 'https://robohash.org/8?200x200&set=set2'
          },
          {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            image:'https://robohash.org/9?200x200&set=set2'
          },
          {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            image:'https://robohash.org/10?200x200&set=set2'
          }
          ];

function createRobotCards() {
    robots.forEach(robot => {
        const div = document.createElement("div");
        div.id = `robot-${robot.id}`;
        div.classList.add("robotCard")
        const name = document.createElement("h1");
        name.classList.add("nameCard")
        const nameText = document.createTextNode(robot.name);
        name.appendChild(nameText);
        const pusername = document.createElement("p");
        pusername.classList.add("username")
        const pusernameText = document.createTextNode(robot.username);
        pusername.appendChild(pusernameText);
        const pemail = document.createElement("p");
        pemail.classList.add("email")
        const pemailText = document.createTextNode(robot.email);
        pemail.appendChild(pemailText);
        const picture = document.createElement("img");
        picture.classList.add("picture");
        picture.src = robot.image;
        picture.alt = `robot-${robot.id}`;
        div.appendChild(picture);
        div.appendChild(name);
        div.appendChild(pusername);
        div.appendChild(pemail);
        const main = document.querySelector("main");
        main.appendChild(div);
    })
};

createRobotCards();

const searchInput = document.querySelector("nav input");
searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    robots.forEach(robot => {
        const card = document.getElementById(`robot-${robot.id}`);
        if (robot.name.toLowerCase().includes(searchTerm)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
});


