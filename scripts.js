// scripts.js

const projects = [
    {
        title: "Projeto 1",
        description: "Descrição do projeto 1.",
        link: "jogo-cobrinha/index02.html"
    },
    {
        title: "Projeto 2",
        description: "Descrição do projeto 2.",
        link: "jogo-da-velha/index.html"
    },
    {
    title: "Projeto 3",
        description: "Descrição do projeto 3.",
        link: "site-aniversario/index.html"
    },
    // Adicione mais projetos conforme necessário
];

const projectsContainer = document.getElementById('projects');

projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');

    projectElement.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">Ver projeto</a>
    `;

    projectsContainer.appendChild(projectElement);
});
