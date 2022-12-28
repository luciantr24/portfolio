const renderTechologiesSectionData = () => {
  const technologies = fetch("../data/technologies.json");
  technologies
    .then((result) => result.json())
    .then((data) => {
      const skillsSection = document.getElementById("skills-section");
      data.forEach((element) => {
        const mainTechnologiesSection = document.createElement("div");
        mainTechnologiesSection.className =
          "col-lg-3 col-md-4 text-center border";

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

renderTechologiesSectionData();
