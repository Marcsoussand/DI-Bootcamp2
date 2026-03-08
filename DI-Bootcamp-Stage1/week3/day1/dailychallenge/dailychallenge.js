const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];
let usernames = [];
gameInfo.forEach((game) => {usernames.push(game.username+"!")});

console.log(usernames);

let winners = [];
gameInfo.forEach((game) => {
    if(game.score > 5) winners.push(game.username);
});
console.log(winners)

let score = 0;
gameInfo.forEach((game) => score += game.score);
console.log("score: ",score);


