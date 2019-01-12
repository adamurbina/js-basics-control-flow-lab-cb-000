// Write your code in this file!

function scuberGreetingForFeet(ride){
  let response;

  switch (true) {
    case ride <= 400:
      response = 'This one is on me!';
      break;
    case ride > 2000:
      response = 'I will gladly take your thirty bucks.'
    default:

  }
  return response;
}
