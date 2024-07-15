# Dynamic HTML Page with Form Submission

## Description

This repository contains a simple HTML page with a form that allows users to input their name, age, and favorite color. Upon form submission, the inputted values are displayed dynamically on the same page without refreshing. Additionally, the background color of the page changes to the selected favorite color.

## Installation && Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/kabutoshinki/msc_interview.git
   cd part_3_basic_web_development
   ```

2. Open index.html in a web browser.
3. Fill out the form and submit to see the results.

## Features

- Form Inputs:
  - Text input for the user's name.
  - Number input for the user's age.
  - Dropdown (select) for selecting the user's favorite color with options for at least three colors.
- Form Submission Handling:
  - The form submission is handled using JavaScript to prevent the default behavior (refreshing the page).
  - The inputted values are displayed immediately below the form.
- Background Color Change:
  - Upon submission, the background color of the page changes to the selected favorite color.

### HTML Structure

```bash
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dynamic Form Submission</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h2>Dynamic Form Submission</h2>
    <form id="userForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="form-group">
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" required>
      </div>
      <div class="form-group">
        <label for="color">Favorite Color:</label>
        <select id="color" name="color" required>
          <option value="">Select color...</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="purple">Purple</option>
          <option value="pink">Pink</option>
        </select>
      </div>
      <div class="form-group">
        <input type="submit" value="Submit">
      </div>
    </form>
    <div id="output" class="output"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

### CSS Styling (style.css):

```bash
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  padding: 20px;
}
.container {
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.form-group {
  margin-bottom: 15px;
}
label {
  font-weight: bold;
}
input[type="text"],
input[type="number"],
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}
input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
input[type="submit"]:hover {
  background-color: #45a049;
}
.output {
  margin-top: 20px;
  padding: 15px;
  background-color: #e0e0e0;
  border-radius: 4px;
}
```

### JavaScript (script.js)

```bash
document.getElementById("userForm").addEventListener("submit", function(event) {
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

```
