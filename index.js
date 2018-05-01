const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var names = []
  for (var i = 0; i < musicians.length; i++) {
  names.push(musicians[i] + " plays " + instruments[i]);
    
  }
  return names
}

const facts = ["He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"]

function johnLennonFacts(facts) {
  var newfacts = []
  var i = 0
  while (i < facts.length) {
    newfacts.push(facts[i] + "!!!")
    i++
}
return newfacts
}
function iLoveTheBeatles(){
  
}
