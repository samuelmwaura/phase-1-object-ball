const gameObject =()=>{
    const object ={
        home:{
          teamName:'Brooklyn Nets',
          colors:["Black", "White"],
          players:{
              'Alan Anderson':{
                "number" : 0,
                "shoe" : 16,
                "points" : 22,
                "rebounds": 12,
                "assists" : 12,
                "steals" :3,
                "blocks" :1,
                "slamDunks":1
              },
              'Reggie Evans':{
                "number":30,
                "shoe" :14,
                "points":12,
                "rebounds":12,
                "assists":12,
                "steals":12,
                "blocks" :12,
                "slamDunks":7
              },
              "Brook Lopez":{
                "number":11,
                "shoe" :17,
                "points":17,
                "rebounds":19,
                "assists" :10,
                "steals" :3,
                "blocks" :1,
                "slamDunks" : 15
              },
               "Mason Plumlee":{
                "number": 1,
                "shoe" :19,
                "points" :26,
                "rebounds" :12,
                "assists" :6,
                "steals" :3,
                "blocks" :8,
                "slamDunks" :5
               },
               "Jason Terry":{
                "number":31,
                "shoe": 15,
                "points":19,
                "rebounds":2,
                "assists":2,
                "steals":4,
                "blocks": 11,
                "slamDunks": 1
               }
          }
        },
        away:{
            teamName:'Charlotte Hornets',
            colors:["Turquoise", "Purple"],
            players:{
                'Jeff Adrien':{
                  "number" : 4,
                  "shoe" : 18,
                  "points" : 10,
                  "rebounds": 1,
                  "assists" : 1,
                  "steals" :2,
                  "blocks" :7,
                  "slamDunks":2
                },
                'Bismak Biyombo':{
                  "number":0,
                  "shoe" :16,
                  "points":12,
                  "rebounds":4,
                  "assists":7,
                  "steals":7,
                  "blocks" :15,
                  "slamDunks":10
                },
                "DeSagna Diop":{
                  "number":2,
                  "shoe" :14,
                  "points":24,
                  "rebounds":12,
                  "assists" :12,
                  "steals" :4,
                  "blocks" :5,
                  "slamDunks" :5
                },
                 "Ben Gordon":{
                  "number": 8,
                  "shoe" :15,
                  "points" :33,
                  "rebounds" :3,
                  "assists" :2,
                  "steals" :1,
                  "blocks" :1,
                  "slamDunks" :0
                 },
                 "Brendan Haywood":{
                  "number":33,
                  "shoe": 15,
                  "points":6,
                  "rebounds":12,
                  "assists":12,
                  "steals":22,
                  "blocks": 5,
                  "slamDunks":12
                 }
            }
        }
    }

    return object;
}


//function 1
function numPointsScored(playerName){
const gameObj = gameObject();
for (const gameProperty in gameObj){ // for each of the two first level keys of the game 0bject.
  let team = gameObj[gameProperty];
  for(const teamProperty in team){  // for each of the team properties pproperties of the teams in the object
    let players = team.players;   // set the value to the value of the players key which is the object containing players.
    for(const player in players){   //for each of the players in the player object.
      let singlePlayer = players[player];
      console.log(playerProperty ,singlePlayer);
      if(player === playerName){     //if the name of the player is similar to that of the passed in name.
      debugger;
      return singlePlayer.points;  // nb: The code iterators will stop at this line thus worry of the code execution after the result is found.
      }
    }
  }
}

}


//console.log(`This is the number of points for this player:${numPointsScored("Bismak Biyombo")}`);

//Function 2
function shoeSize(playerName){
const gameObj = gameObject();
for(const gameProperty in gameObj){
let team = gameObj[gameProperty];
for(const teamProperty in team){
let players = team.players;
for(const player in players){
if(player === playerName){
return players[player].shoe;
}}}}
}

//console.log(`This is the player shoe size:${shoeSize("Jason Terry")}`);
