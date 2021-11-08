
// function to create manager card
const generateManCard = () => {
  return `
  <div class = "card">
  <h3 class ="card-header">John</h3>
  <h4 class = "title">Manager</h4>
  <ul class = "data">
  <li>ID: 111</li>
  <li>Email: john@email.com </li>    
  <li>Office number: 222</li> 
</div>
  `;
}

const generateEngCard = () => {
  return `
  <div class = "card">
  <h3 class ="card-header">Jack</h3>
  <h4 class = "title">Engineer</h4>
  <ul class = "data">
  <li>ID: 112</li>
  <li>Email: jack@email.com </li>    
  <li>GitHub: jack@github</li> 
</div>
  `;
}

const generateIntCard = () => {
  return `
  <div class = "card">
  <h3 class ="card-header">Joe</h3>
  <h4 class = "title">Intern</h4>
  <ul class = "data">
  <li>ID: 113</li>
  <li>Email: joe@email.com </li>    
  <li>School: Trilogy</li> 
</div>
  `;
}




//function to create HTML
function generateHTML(data) {
  return `
  <!DOCTYPE html> 
  <html lang="en"> 

  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Project Team</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" href="../assets/css/style.css">
</head>

<body>
  <header class = "header">
    <h1 class = "title">
    The Development Team
    </h1>
  </header>

  <main class = "container">
      
     ${generateManCard(data)}
     ${generateEngCard(data)}
     ${generateIntCard(data)}
    
  </main>

  <footer>
  </footer>

</body>
</html>
`;
}

module.exports = generateHTML;
