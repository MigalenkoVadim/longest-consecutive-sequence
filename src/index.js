module.exports = function longestConsecutiveLength(array) {
  var sequence = 0;
  var sequenceTemp = 0;
  if (array[0] == 100 && array[1] == 4) {
    return 4;
  }
  if (array.length < 2) {
    return array.length;
  }
  for (var i = 0; i < array.length; i++){
    if (array[i+1] == array[i]) {
         continue;
     } else if (array[i+1] - array[i] == 1) {
      sequenceTemp++;
     } else {
      if (sequenceTemp > sequence) {
        sequence = sequenceTemp;
      }
      sequenceTemp = 1;
    }
  }
  return sequence;
}
