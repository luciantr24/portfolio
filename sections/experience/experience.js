const experienceTemplate = document.createElement("template");
experienceTemplate.innerHTML = `
<link href="../../style/custom.css" rel="stylesheet">

<div class="timeline">
  <div class="outer">
    <div class="card">
      <div class="info">
        <h3 class="title">March 2018 - May 2018</h3>
        <p class="description">Software developer, SIVECO S.A - Faculty practice</p>
      </div>
    </div>
    <div class="card">
      <div class="info">
        <h3 class="title">Jan 2020 - Aug 2020</h3>
        <p class="description">.NET Developer/DevOps Intern, BearingPoint Romania</p>
      </div>
    </div>
    <div class="card">
      <div class="info">
        <h3 class="title">Aug 2020 - Now</h3>
        <p class="description">Software Developer, BearingPoint Romania</p>
      </div>
    </div>
  </div>
</div>
`;

class Experience extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(experienceTemplate.content);
  }
}

customElements.define("experience-component", Experience);
