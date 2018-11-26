var lowerCase ,upperCase
function shout(string) {
  return string.toUpperCase()
}

function whisper (string) {
  return string.toLowerCase()
}

function logShout (string) {
  console.log ("hello".toUpperCase())
}

function logWhisper(string) {
  console.log ('HELLO'.toLowerCase())
}

  function sayHiToGrandma(sting) {
    if (string.toLowerCase() === sting){
      return "I can\'t hear you!";
    }
    if (sting.toUpperCase() === sting) {
      return "YES INDEED!";
    }
    if (sting === "I love you, Grandma.") {
      return "I love you, too."
    }
  }