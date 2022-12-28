const renderProjectsSection = () => {
  fetch("../data/projects.json")
    .then((res) => res.json())
    .then((data) => {
      var projects_element = document.getElementById("projects_element");
      data.forEach((element) => {
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
    })
    .catch((err) => {
      console.log(err);
    });
};

renderProjectsSection();
