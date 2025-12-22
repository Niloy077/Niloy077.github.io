---
layout: default
---

<section class="hero" id="home">
  <!-- MAIN HERO CONTENT (TEXT + IMAGE) -->
  <div class="hero-content">
    <div class="hero-text">
      <h1>NILOY BISWAS</h1>

      <p>
        I focus on turning complex ideas into clean, working systems that solve
        real-world problems.
      </p>

      <a href="#work-and-experience" class="btn">
        Explore my works →
      </a>

      <div class="hero-designations">
        <div class="designation-card">
          <span class="designation-icon"></span>
          <h3>Software Engineer</h3>
        </div>

        <div class="designation-card">
          <span class="designation-icon"></span>
          <h3>MLOps Enthusiast</h3>
        </div>

        <div class="designation-card">
          <span class="designation-icon"></span>
          <h3>Web Developer</h3>
        </div>

        <div class="designation-card">
          <span class="designation-icon"></span>
          <h3>Researcher</h3>
        </div>
      </div>
    </div>

    <!-- Globe Canvas -->
    <div class="hero-globe">
      <canvas id="globe"></canvas>
    </div>
  </div>
</section>

<section class="projects" id="work-and-experience">
  <h2 id="work-experience">Work Experience</h2>

  <div class="project-card scroll-target" id="skills">
    <div class="project-text">
      <h3>My Skills</h3>
      <p>
        An overview of my technical skill set, including programming languages,
        frameworks, and development tools.
      </p>

      <a href="{{ '/skills/' | relative_url }}" class="outline-btn">
        View Skills
      </a>
    </div>

    <img
      src="{{ '/assets/images/site_image/skills.png' | relative_url }}"
      alt="Skills overview"
    />
  </div>

  <div class="project-card reverse scroll-target" id="software-projects">
    <div class="project-text">
      <h3>Explore My Projects</h3>
      <p>
        A curated collection of my software engineering, web development,
        application, and machine learning projects.
      </p>

      <a href="{{ '/projects/' | relative_url }}" class="outline-btn">
        View Projects
      </a>
    </div>

    <img
      src="{{ '/assets/images/site_image/projects.png' | relative_url }}"
      alt="Projects preview"
    />
  </div>

  <div class="project-card scroll-target" id="research">
    <div class="project-text">
      <h3>Research</h3>
      <p>
        This page highlights an overview of my research projects and the
        progress of my ongoing research work.
      </p>

      <a href="{{ '/research/' | relative_url }}" class="outline-btn">
        View Research
      </a>
    </div>

    <img
      src="{{ '/assets/images/site_image/research.png' | relative_url }}"
      alt="Research overview"
    />
  </div>
</section>

<section class="projects" id="education">
  <h2 id="education-title">Education</h2>

  <div class="project-card scroll-target">
    
    <!-- LEFT IMAGE -->
    <img
      src="{{ '/assets/images/site_image/education.png' | relative_url }}"
      alt="Education"
    />

    <!-- RIGHT CONTENT -->
    <div class="project-text">

      <!-- University Row -->
      <div class="education-row">
        <!-- <img
          src="{{ '/assets/images/site_image/research.png' | relative_url }}"
          alt="University Logo"
          class="edu-logo"
        /> -->
        <span class="edu-text">
          B.Sc. Computer Science and Engineering<br />
          <strong>North South University</strong>
        </span>
      </div>

      <!-- CAIE Row -->
      <div class="education-row">
        <!-- <img
          src="{{ '/assets/images/site_image/research.png' | relative_url }}"
          alt="CAIE Logo"
          class="edu-logo"
        /> -->
        <span class="edu-text">
          Cambridge Assessment International Education<br />
          <strong>O Levels | A Levels</strong>
        </span>
      </div>

    </div>
  </div>
</section>
