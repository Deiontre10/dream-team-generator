

const generateTeamMembers = (team) => {
  return `
  <article>
    <h2>Name:${team.name}</h2>
    <ul>
      <li>ID:${team.id}</li>
      <li>Email:${team.email}</li>
      <li>Office Number:${team.officeNumber}</li>
    </ul>
  </article>
  <article>
    <h2>Name:${team.name}</h2>
    <ul>
      <li>ID:${team.id}</li>
      <li>Email:${team.email}</li>
      <li>GitHub:${team.github}</li>
    </ul>
  </article>
  <article>
    <h2>Name:${team.name}</h2>
    <ul>
      <li>ID:${team.id}</li>
      <li>Email:${team.email}</li>
      <li>School:${team.school}</li>
    </ul>
  </article>`
};

generateHTML = (data) => {
  team = [];

  for (let i = 0; i < data.length; i++){
      const employee = data[i];
      const role = employee.getRole();

      if (role === "Manager") {
          const manager = generateTeamMembers(employee)
          team.push(manager)
      };

      if (role === "Intern") {
          const intern = generateTeamMembers(employee)
          team.push(intern)
      };

      if (role === "Engineer") {
          const engineer = generateTeamMembers(employee)
          team.push(engineer)
      };
  }

  const teamArticles = team.join('')
}

// export function to generate entire page
module.exports = (team) => {
  generateTeamMembers(team)
}
