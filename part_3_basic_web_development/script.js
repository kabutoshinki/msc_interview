document.getElementById("userForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const color = document.getElementById("color").value;

  // Display values in output
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
        <h3>Submitted Values:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Favorite Color:</strong> ${color}</p>
    `;

  // Change background color
  document.body.style.backgroundColor = color;
});
