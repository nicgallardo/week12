exports.intersect = function (array1, array2) {
  var pushed = [];
  for(var i = 0; i < array1.length; i++){
    if(array2.indexOf(array1[i]) > -1){
      pushed.push(array1[i])
    }
  }
  return pushed;
}
//with jasmine challange complete!
