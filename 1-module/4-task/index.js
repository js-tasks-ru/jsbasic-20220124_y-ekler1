function checkSpam(str) {
  let registr = str.toLowerCase();

     return registr.includes('xxx') || registr.includes('1xbet')
}

console.log(checkSpam('1xbe'))
