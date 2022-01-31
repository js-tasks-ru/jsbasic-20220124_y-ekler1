

function ucFirst(str) {
   
   if(str.includes('vv')) {

    return false;
  } else {
    let bigLetter = str.charAt(0).toUpperCase() + str.slice(1);
    return bigLetter;
  }
}


