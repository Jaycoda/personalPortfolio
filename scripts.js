// Example interactive feature: Change background color on button click
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("funButton");

  button.addEventListener("click", function () {
    document.body.style.backgroundColor = getRandomColor();
  });

  function getRandomColor() {
    const colors = [
      "#FFFFFF", // white
      "#FFCCCC", // light red
      "#FFE5CC", // light orange
      "#FFFFCC", // light yellow
      "#CCFFCC", // light green
      "#CCFFFF", // light cyan
      "#CCE5FF", // light blue
      "#E5CCFF", // light purple
    ];

    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  //   function getRandomColor() {
  //     const letters = "0123456789ABCDEF";
  //     let color = "#";
  //     for (let i = 0; i < 6; i++) {
  //       color += letters[Math.floor(Math.random() * 16)];
  //     }
  //     return color;
  //     }
});
