/* =========================
   SMOOTH SCROLL
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    // 🚫 ignore empty hash links (like Profiles toggle)
    if (targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});


/* =========================
   MOBILE NAV
========================= */
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  document.querySelectorAll("#nav-menu > a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });

}

/* Prfile toggle */
const profilesToggle = document.querySelector("#profiles-toggle");

if (profilesToggle) {
  profilesToggle.addEventListener("click", (e) => {
    e.preventDefault();       // 🚫 no page jump
    e.stopPropagation();      // 🚫 don’t trigger nav close
    profilesToggle.parentElement.classList.toggle("open");
  });
}

/* =========================
   EMAIL COPY
========================= */
const emailCopy = document.getElementById("email-copy");

if (emailCopy) {
  const toast = emailCopy
    .closest(".social-item")
    ?.querySelector(".copy-toast");

  emailCopy.addEventListener("click", e => {
    e.preventDefault();

    navigator.clipboard.writeText("niloybiswas0100@gmail.com");

    if (!toast) return;

    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2000);
  });
}

/* =========================
   DECORATIVE ROTATION
========================= */
document.querySelectorAll(".c").forEach((el, i) => {
  el.style.setProperty("--rz", Math.random() * 360 + "deg");
  el.style.setProperty("--ry", Math.random() * 360 + "deg");
  el.style.setProperty("--hue", Math.random() * 60);
  el.style.animationDelay = -i * 0.03 + "s";
});

/* =========================
   GLOBE CANVAS
========================= */
const canvas = document.getElementById("globe");

if (canvas) {
  const ctx = canvas.getContext("2d");

  let hover = false;
  canvas.addEventListener("mouseenter", () => (hover = true));
  canvas.addEventListener("mouseleave", () => (hover = false));

  const DPR = window.devicePixelRatio || 1;
  const DOTS = window.innerWidth >= 1600 ? 450 : 350;
  const ROTATION_SPEED = 0.002;
  const BRIGHT_RATIO = 0.15;

  let BASE_RADIUS = 120; // default fallback

  let w, h, cx, cy;

  const dots = [];

  const pickColor = () => {
    const palette = [
      () => 190 + Math.random() * 6,
      () => 210 + Math.random() * 6
    ];
    return palette[Math.floor(Math.random() * palette.length)]();
  };

  function updateBaseRadius() {
    const size = Math.min(w, h); // use smaller dimension
    BASE_RADIUS = size * 0.38;   // ~38% of canvas size feels perfect
    // Adjust if you want it fuller: 0.40–0.45, or tighter: 0.35
  }

  function resize() {
    w = canvas.clientWidth;
    h = canvas.clientHeight;

    canvas.width = w * DPR;
    canvas.height = h * DPR;

    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    cx = w / 2;
    cy = h / 2;

    updateBaseRadius();
  }

  window.addEventListener("resize", resize);
  resize();
  updateBaseRadius();

  for (let i = 0; i < DOTS; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);

    dots.push({
      x: Math.sin(phi) * Math.cos(theta),
      y: Math.sin(phi) * Math.sin(theta),
      z: Math.cos(phi),
      hue: pickColor(),
      bright: Math.random() < BRIGHT_RATIO,
      offset: 0,
      maxOffset: Math.random() < 0.25 ? 22 : 0
    });
  }

  let angle = 0;

  function draw() {
    ctx.clearRect(0, 0, w, h);
    angle += ROTATION_SPEED;

    const sin = Math.sin(angle);
    const cos = Math.cos(angle);

    for (const p of dots) {
      p.offset += ((hover ? p.maxOffset : 0) - p.offset) * 0.06;

      const x = p.x * cos - p.z * sin;
      const z = p.x * sin + p.z * cos;
      const depth = (z + 1) / 2;
      const scale = 0.65 + depth * 0.35;
      const r = BASE_RADIUS + p.offset;

      const px = cx + x * r;
      const py = cy + p.y * r;

      const coreSize = (p.bright ? 3.2 : 2.2) * scale;
      const lightness = p.bright ? 65 : 55;

      if (p.bright) {
        const glowRadius = coreSize * 4;
        const g = ctx.createRadialGradient(
          px, py, coreSize * 0.5,
          px, py, glowRadius
        );
        g.addColorStop(0, `hsla(${p.hue},100%,60%,0.25)`);
        g.addColorStop(1, `hsla(${p.hue},100%,60%,0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(px, py, glowRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(px, py, coreSize, 0, Math.PI * 2);
      ctx.fillStyle = `hsl(${p.hue},100%,${lightness}%)`;
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  draw();
}

/* =========================
   SKILLS RADAR (Chart.js)
========================= */
const radarCanvas = document.getElementById("skillsRadar");

if (radarCanvas && window.Chart) {
  const mqMobile = window.matchMedia("(max-width: 600px)");
  const mqTablet = window.matchMedia("(max-width: 900px)");

  const getConfig = () => {
    const isMobile = mqMobile.matches;
    const isTablet = mqTablet.matches;

    return {
      labels: isMobile
        ? ["Backend", "Web\nDev", "Python", "DB", "Cloud", "ML"]
        : [
          "Backend / Java",
          "Web Development",
          "Python",
          "Databases",
          "Cloud & Tools",
          "Machine Learning"
        ],
      layoutPadding: isMobile ? 10 : isTablet ? 16 : 20,
      fontSize: isMobile ? 10 : isTablet ? 14 : 16,
      borderWidth: isMobile ? 2 : 3,
      pointRadius: isMobile ? 3 : 4,
      hoverRadius: isMobile ? 4 : 6
    };
  };

  const cfg = getConfig();

  const chart = new Chart(radarCanvas, {
    type: "radar",
    data: {
      labels: cfg.labels,
      datasets: [{
        data: [85, 80, 75, 70, 70, 60],
        backgroundColor: "rgba(33,150,243,0.18)",
        borderColor: "rgba(33,150,243,0.9)",
        borderWidth: cfg.borderWidth,
        pointRadius: cfg.pointRadius,
        pointHoverRadius: cfg.hoverRadius,
        pointBackgroundColor: "#001831"
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: { padding: cfg.layoutPadding },
      plugins: { legend: { display: false } },
      scales: {
        r: {
          min: 50,
          max: 90,
          ticks: { display: false },
          grid: { color: "rgba(0,0,0,0.2)" },
          angleLines: { color: "rgba(0,0,0,0.1)" },
          pointLabels: {
            color: "#001831",
            padding: cfg.fontSize < 12 ? 6 : 10,
            font: { size: cfg.fontSize, weight: "500" }
          }
        }
      }
    }
  });

  const updateChart = () => {
    const cfg = getConfig();
    chart.data.labels = cfg.labels;
    chart.options.layout.padding = cfg.layoutPadding;
    chart.options.scales.r.pointLabels.font.size = cfg.fontSize;
    chart.data.datasets[0].borderWidth = cfg.borderWidth;
    chart.data.datasets[0].pointRadius = cfg.pointRadius;
    chart.data.datasets[0].pointHoverRadius = cfg.hoverRadius;
    chart.update();
  };

  mqMobile.addEventListener("change", updateChart);
  mqTablet.addEventListener("change", updateChart);
}
