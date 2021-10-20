// 1
function spookyGhost() {
    console.log(`Boo!!!`);
  }
  spookyGhost();
  
  // 2
  function candy(goal) {
    console.log(`${goal}, ${goal}, ${goal}, ${goal}`);
  }
  
  candy(`Get Candy`);
  
  // 3
  function werewolf(a, b) {
    if (a === "Full" && b === "Moon") {
      console.log("ARH-WOOO!");
    }
  }
  werewolf("Full", "Moon");
  
  // 4
  function halloween() {
    return `October 31st`;
  }
  console.log(halloween());
  
  // 5
  function isEnoughCandy(pieces) {
    if (pieces >= 31) {
      return true;
    } else {
      return false;
    }
  }
  console.log(isEnoughCandy(31));
  
  // 6
  function candyCounter(num) {
    let total = 0;
    for (n of num) {
      total = total + n;
    }
    return total;
  }
  console.log(candyCounter([2, 3, 4, 5]));
  console.log(candyCounter([2, 3, 4, 5, 6, 6]));
  
  // 7
  const hauntedMansion = function(){
    console.log("Welcome, foolish mortals, to the Haunted Mansion!");
  }
  hauntedMansion();
  
  // 8
  const ghostbusters = () => ("Who You Gonna Call?")
  console.log(ghostbusters());
  
  // 9
  // No
  
  // 10
  // Yes
  
  // 11
  const costumes = [`Ghost`, `Princess`, `Pirate`];

  const upperCostumes = costumes.map(i => i.toUpperCase());
  console.log(upperCostumes);

  // 12
  const stephenKingMovies = [
    "The Shining",
    "Christine",
    "It",
    "The Mist",
    "Creepshow",
    "Pet Sematary"
  ];
  
  const twoMovies = stephenKingMovies.filter(i => i.length === 9);
  console.log(twoMovies);

  // 13
  const halloweenSongs1 = ["Monster Mash", "Thriller"];
  
  const halloweenSongs2 = ["I Put A Spell On You", "This Is Halloween", "Ghostbusters"];
  
  halloweenJukeBox = (songs) => {
    const random = Math.floor(Math.random() * songs.length);
    console.log(songs[random]);
  }

  halloweenJukeBox(halloweenSongs1);
  halloweenJukeBox(halloweenSongs2);

  //14
caps = string => {
  for (i = 0; i < string.length; i += 2){
    string = string.substring(0, i) + string[i].toUpperCase() + string.substring(i + 1);
  }
  return string;
}