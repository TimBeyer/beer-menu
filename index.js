var items = document.querySelectorAll('.item');
var descriptions = document.querySelectorAll('.description');
var images = document.querySelectorAll('.image');

var numSlides = items.length;

var i = 0;
setInterval(function () {
  var current = i % numSlides;
  var previous = (i - 1) % numSlides;

  [items, descriptions, images].forEach(function (nodeList) {
      nodeList[current].classList.toggle('active');
      if (i >= 1) {
        nodeList[previous].classList.toggle('active');   
      }
    
  });

  i++;
}, 5000);

