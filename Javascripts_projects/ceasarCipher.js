function rot13(str) { // LBH QVQ VG!
    var newArr = str.toUpperCase().split('');
    var z = "";
    
    for (var i = 0; i < newArr.length; i++) {
      z = newArr[i].charCodeAt();
      
      if (z > 64 && z < 78) {
        newArr[i] = String.fromCharCode(z + 13);
      } else if (z > 77 && z < 91) {
        newArr[i] = String.fromCharCode(z - 13);
      }
      
    }
    
    return newArr.join('');
  }
  
  // Change the inputs below to test
  rot13("SERR PBQR PNZC");