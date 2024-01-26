//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
  const squares = document.querySelectorAll('.square');

  function changeColor(event) {
    squares.forEach(square => {
      square.style.backgroundColor = #6F4E37; // Change color to Coffee
    });

    const currentSquare = event.target;
    currentSquare.style.backgroundColor = #E6E6FA; // Keep the current square lavender
  }

  squares.forEach(square => {
    square.addEventListener('mouseover', changeColor);
  });
});
