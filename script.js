function firstWord(s) {
  let trimmed = s.trim();
  if(trimmed.length == 0){
    return trimmed;
  }
  // console.log(trimmed);
  let sliced  = trimmed.split(" ");
  // console.log(sliced);
  return sliced[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
