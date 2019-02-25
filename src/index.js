/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
                                   // 1  2  3  Spichonees
 //let count = getLoveTrianglesCount([2, 3, 1]);

module.exports = function getLoveTrianglesCount(preferences = []) {
  var counter = 0;
  preferences.forEach(function(element, index) {
      var pos = index + 1;
      var element2 = preferences[element - 1];
      var element3 = preferences[preferences[element - 1] - 1];
      if (element != pos && 
          element2 != element3 &&
          element3 == pos)
              counter++;
  })
  return counter / 3;
};
