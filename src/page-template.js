
const generateManagers = (team) => {
  return `
  <article>
    <h2>Name:${team.name}</h2>
    <ul>
      <li>ID:${team.id}</li>
      <li>Email:${team.email}</li>
      <li>Office Number:${team.officeNumber}</li>
    </ul>
  </article>
  `
};

const generateEngineers = (team) => {
  return `
  <article>
    <h2>Name:${team.name}</h2>
    <ul>
      <li>ID:${team.id}</li>
      <li>Email:${team.email}</li>
      <li>GitHub:${team.github}</li>
    </ul>
  </article>`
};

const generateInterns = (team) => {
  return `
  <article>
    <h2>Name:${team.name}</h2>
    <ul>
      <li>ID:${team.id}</li>
      <li>Email:${team.email}</li>
      <li>School:${team.school}</li>
    </ul>
  </article>`
};

const generateHTML = (data) => {
  team = [];

  for (let i = 0; i < data.length; i++){
      const employee = data[i];
      const role = employee.getRole();

      if (role === "Manager") {
          const manager = generateManagers(employee)
          team.push(manager)
      };
      
      if (role === "Engineer") {
          const engineer = generateEngineers(employee)
          team.push(engineer)
      };

      if (role === "Intern") {
          const intern = generateInterns(employee)
          team.push(intern)
      };
      
  }

  const teamArticles = team.join('');
  const generateTeam = generateFullPage(teamArticles);
  return generateTeam;
};

const generateFullPage = (teamArticles) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dream Team</title>
  <!-- Minified version -->
  <style>
    @import "https://cdn.simplecss.org/simple.min.css";

    main {
      display: grid;
      grid-column: 1/-1;
      justify-items: center;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
      max-width: 1140px;
      margin: auto;
    }

    article {
      width: 100%;
    }

    @media screen and (max-width: 1140px) {
      main {
        grid-template-columns: 1fr 1fr;
      }
    }
    @media screen and (max-width: 720px) {
      main {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>Dream Team</h1>
  </header>
  <main>
    ${teamArticles}
  </main>
  <footer>
    &copy; 2022-2023
  </footer>
</body>
</html>`
};

// export function to generate entire page
module.exports = generateHTML

