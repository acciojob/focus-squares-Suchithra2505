//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
  const squares = document.querySelectorAll('.square');

  function changeColor(event) {
    squares.forEach(square => {
      square.style.backgroundColor = rgb(111, 78, 55); // Change color to Coffee
    });

    const currentSquare = event.target;
    currentSquare.style.backgroundColor = rgb(230, 230, 250); // Keep the current square lavender
  }

  squares.forEach(square => {
    square.addEventListener('mouseover', changeColor);
  });
});
