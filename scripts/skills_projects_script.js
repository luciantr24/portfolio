const renderTechologiesSectionData = () => {
  const skillsSection = document.getElementById("skills-section");
  technologies.forEach((element) => {
    const mainTechnologiesSection = document.createElement("div");
    mainTechnologiesSection.className = "col-lg-3 col-md-4 text-center border";

    const second_col = document.createElement("div");
    second_col.className = "mt-5";

    const icon = document.createElement("i");
    icon.className = `fas fa-4x ${getIconBasedOnType(
      element.name
    )} text-primary mb-4`;

    const title = document.createElement("h3");
    title.className = "h4 mb-2";
    title.innerText = element.name;

    second_col.append(icon, title);

    element.values.forEach((i) => {
      const p = document.createElement("p");
      p.className = "text-muted mb-0";
      p.innerText = i;

      second_col.append(p);
    });

    mainTechnologiesSection.append(second_col);
    skillsSection.append(mainTechnologiesSection);
  });
};

const getIconBasedOnType = (type) => {
  switch (type) {
    case "Main":
      return "fa-laptop-code";
    case "Databases":
      return "fa-database";
    case "Web development":
      return "fa-file-code";
    case "DevOps & Other tools":
      return "fa-server";
    default:
      return;
  }
};

const technologies = [
  {
    name: "Main",
    values: [
      "C#",
      "React",
      "JavaScript",
      "TypeScript",
      "Node",
      "Python",
      "Unit Testing",
    ],
  },
  {
    name: "Databases",
    values: ["MySql", "Azure CosmosDB", "MongoDb", "Google Firebase"],
  },
  {
    name: "Web development",
    values: [
      "HTML, CSS",
      "React",
      "Context API, Redux",
      "Material UI, Bootstrap, Antd",
      "Microsoft PowerApps",
    ],
  },
  {
    name: "DevOps & Other tools",
    values: [
      "Azure Devops",
      "Azure KeyValut",
      "Azure ServiceBus, RabbitMQ",
      "Docker",
      "GIT",
      "CI/CD with Azure Pipelines/Heroku/GitHub Actions",
    ],
  },
];

const renderProjectsSection = () => {
  var projects_element = document.getElementById("projects_element");
  projects.forEach((element) => {
    const col_sm_6 = document.createElement("div");
    col_sm_6.className = "col-sm-6";

    const card = document.createElement("div");
    card.className = "card";

    const card_body = document.createElement("div");
    card_body.className = "card-body";

    const h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.innerText = `${element.name} [${element.type}]`;

    const p = document.createElement("p");
    p.className = "card-text";
    p.innerText = element.description;

    //tags list
    const tags_ul = document.createElement("ul");
    tags_ul.className = "tags_ul";

    element.technologies.forEach((item) => {
      const _span = document.createElement("span");
      _span.className = "label label-primary";
      _span.innerText = item;

      const li = document.createElement("li");
      li.className = "tags_li";
      li.append(_span);

      tags_ul.append(li);
    });

    card_body.append(h5, p, tags_ul);
    card.append(card_body);
    col_sm_6.append(card);
    projects_element.append(col_sm_6);
  });
};

const projects = [
  {
    name: "Pluto - Project Management Tool",
    description:
      "Application with features like Kanban board, backlog, overviews notifications support in Slack",
    type: "web",
    technologies: ["React", "Redux", "Firebase", ".NET", "Docker", "Heroku"],
  },
  {
    name: "Radical - No-Sql Database",
    description: "Application to manage json documents",
    type: "web",
    technologies: ["React", "Redux", ".NET"],
  },
  {
    name: "Covid Web Application",
    description:
      "Web application using covid-19 API to display the actual/current status of the pandemic situation",
    type: "web",
    technologies: ["React"],
  },
  {
    name: "Students management application",
    description:
      "An application where you can manage students of an university",
    type: "web",
    technologies: [".NET WPF"],
  },
  {
    name: "Take Notes App",
    description: "Applicaiton to manage your daily tasks",
    type: "web & mobile",
    technologies: ["React", "React Native", "Typescript", "Redux"],
  },
  {
    name: "Weather Web Application",
    description: "Web applicaiton to check cities weather information",
    type: "web",
    technologies: ["React"],
  },
];

window.onload = () => {
  renderTechologiesSectionData();
  renderProjectsSection();
};
