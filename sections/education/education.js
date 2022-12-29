const educationTemplate = document.createElement("template");
educationTemplate.innerHTML = `
<link href="style/custom.css" rel="stylesheet">

<div class="timeline">
  <div class="outer">
    <div class="card">
      <div class="info">
        <h3 class="title">Sept 2012 - Jul 2016</h3>
        <p class="description">Constantin Brâncoveanu High School, Matematics and Informatics</p>
      </div>
    </div>
    <div class="card">
      <div class="info">
        <h3 class="title">Oct 2016 - Jul 2019</h3>
        <p class="description">Faculty of Cybernetics, Statistics and Economic Informatics, Academy of Economic Studies, Bucharest, Romania</p>
      </div>
    </div>
    <div class="card">
      <div class="info">
        <h3 class="title">Oct 2019 - Jul 2021</h3>
        <p class="description">Master Degree - Information systems for the management of economic processes and resources (SIMPRE), ASE</p>
      </div>
    </div>
  </div>
</div>
`;

class Education extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(educationTemplate.content);
  }
}

customElements.define("education-component", Education);
