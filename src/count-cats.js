module.exports = function countCats(backyard) {
  let cats = 0;

  backyard.forEach(element => {
    if (Array.isArray(element)) {
      element.forEach(elem => {
        if (elem == "^^") {
          cats += 1;
        }
      } 
      )
    } else {
      if (element == "^^") {
        cats += 1;
      }
    }
  });

  return cats
}

