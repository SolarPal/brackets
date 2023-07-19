module.exports = function check(str, bracketsConfig) {
  let strArr = str.split("");
  
  for (let i = 0; i < strArr.length; i += 1) {
    //console.log("======================")
    //console.log("i=" + i);
    for (let iConf = 0; iConf < bracketsConfig.length; iConf += 1) {
      if (strArr[i] === bracketsConfig[iConf][0] && strArr[i + 1] === bracketsConfig[iConf][1]) {
        //console.log("Brackets: " + bracketsConfig[iConf][0] + bracketsConfig[iConf][1] + " REMOVED! at i=" + i + " in " + strArr);
        strArr.splice(i, 2);
        //console.log("New array: " + strArr);
        i = -1;
        iConf = -1;
      }
    }
  }
  
  //console.log(strArr);
  
  return strArr.length === 0;
}
