// 1.
function spookyGhost(){
    console.log(`Boo!!!`);
};
spookyGhost();

// 2.
function candy(goal){
    console.log(goal);
    console.log(goal);
    console.log(goal);
    console.log(goal);
};
candy(`Get Candy`);

// 3.
function werewolf(a, b){
    if (a === `Full` && b === `Moon`){
        console.log(`ARH-WOOO!`);
    }
};

// 4.
function halloween(){
    return `October 31st`;
};
halloween();

// 5.
function isEnoughCandy(pieces){
    if (pieces >= 31){
        return true;
    } else if (pieces < 31){
        return false;
    };
}
// Using a Ternary
// return (pieces >= 31) ? true : false;

// 6.
function candyCounter(nums){
    let total = 0;
    for(i = 0; i < nums.length; i++){
        total += nums[i];
    }
    return total
}
candyCounter([12,34,2]);
console.log(candyCounter([12,34,2]));

// 7.
const hauntedMansion = function(){
    console.log(`Welcome. foolish mortals, to the Haunted Mansion!!`);
}
hauntedMansion();

// 8.
ghostbusters = () => `Who you gonna call?`;

// 9.
// No

// 10.
// Yes

// 11a
const costumes = [`Ghost`, `Princess`, `Pirate`];

// 11b
const upperCostumes = costumes.map(i => i.toUpperCase());

// 12a
const stephenKingMovies = [
    `The Shining`,
    `Christine`,
    `It`,
    `The Mist`,
    `Creepshow`,
    `Pet Cemetary`
];

// 12b
const twoMovies = stephenKingMovies.filter(i => i.length === 9);
console.log(twoMovies);

// 13a
const halloweenSongs1 = [`Monster Mash`, `Thriller`];

// 13b
const halloweenSongs2 = [`I Put A Spell On You`, `This Is Halloween`, `Ghostbusters`];

// 13c
halloweenJukeBox = (songs) => {
    const random = Math.floor(Math.random() * songs.length);
    console.log(songs[random]);
}

// 13d
halloweenJukeBox(halloweenSongs1); // Random item/song from the halloweenSongs1 array
halloweenJukeBox(halloweenSongs2); // Random item/song from the halloweenSongs2 array

// 14
caps = string => {
    let newString = "";
    for (i = 0; i < string.length; i++){
        if (i % 2 === 0){
            newString = newString + string[i].toUpperCase();
        } else {
            newString = newString + string[i]
        }
    }
    return newString;
}

console.log(caps(`I have no idea what I am doing right now`));