// Write your code in this file!

function scuberGreetingForFeet(ride){
  let response;

  switch (true) {
    case ride > 2500:
      response = 'No can do.'
      break;
    case ride > 2000:
      response = 'I will gladly take your thirty bucks.'
      break;
    case ride <= 400:
      response = 'This one is on me!';
      break;
  }
  return response;
}

function ternaryCheckCity(city){
  let response;
  city === "NYC" ? response = "Ok, sounds good." : response = "No go.";
}
