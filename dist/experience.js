const sides = [
  {
    id: "events",
    label: "Events",
    project: "ITIHA College Fest",
    role: "Media Head, Core Videographer & Editor",
    copy: "I led a six-person media team for ITIHA, from planning coverage and filming concerts to editing, colour grading and delivery. I also built websites for the fest’s events.",
    handled: [
      "Six-person team leadership",
      "Coverage planning",
      "Concert shoots",
      "Editing & colour grading",
      "Event websites",
      "Final delivery",
    ],
    tools: ["Sony A7 IV", "Premiere Pro", "After Effects"],
    proof: "",
  },
  {
    id: "brand",
    label: "Brand & Social",
    project: "XDrive",
    role: "Freelance SMMA & Content Creator",
    copy: "I handled social media marketing and content for XDrive, including content planning, dialogue scripting and car videography. I edited reels, designed posters and managed scheduling and publishing through Meta Business Suite.",
    handled: [
      "SMMA & content planning",
      "Dialogue scripting",
      "Car videography",
      "Reels & posters",
      "Meta Business Suite",
      "Scheduling & publishing",
    ],
    tools: [
      "Sony A7 IV",
      "Premiere Pro",
      "After Effects",
      "Photoshop",
      "Lightroom",
      "Canva",
      "Meta Business Suite",
    ],
    proof: "",
  },
  {
    id: "mentoring",
    label: "Mentoring",
    project: "Tharun Speaks Academy",
    role: "Mentor",
    copy: "I taught video editing in Premiere Pro and After Effects. I gave feedback on students’ projects and helped them build portfolios.",
    handled: [
      "Premiere Pro",
      "After Effects",
      "Project feedback",
      "Portfolio guidance",
    ],
    tools: ["Premiere Pro", "After Effects"],
    proof: "60+ students mentored",
  },
  {
    id: "weddings",
    label: "Weddings",
    project: "Wedding films",
    role: "Wedding Videographer & Editor",
    copy: "I take on wedding videography and editing. I focus on people, emotion and the moments that make each film personal.",
    handled: ["Wedding videography", "Wedding film editing"],
    tools: ["Sony A7 IV", "Premiere Pro", "After Effects"],
    proof: "",
  },
];

const esc = (value) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
export async function initExperience(root) {
  if (!root) return;
  let items;
  try {
    const res = await fetch("./experience.json");
    if (!res.ok) throw Error();
    items = await res.json();
  } catch {
    root.innerHTML =
      "<p>Films are temporarily unavailable. Please refresh.</p>";
    return;
  }
  const films = items.filter((x) => x.type === "video"),
    posters = items.filter((x) => x.type === "poster");
  let filtered = films,
    selected = films[0],
    opener;
  root.innerHTML = `<div class="archive-heading"><div><p class="eyebrow">THE ZEEKA ARCHIVE / 2023 — NOW</p><h3 id="experience-title">A different frame.<br><em>The same vision.</em></h3></div><p>${films.length} films. ${posters.length} designs.<br>Concerts, cars and everything in between.</p></div>
 <div class="archive-filters" role="group" aria-label="Filter films">${[
   ["all", "All films"],
   ["events", "ITIHA"],
   ["brand", "XDrive"],
   ["personal", "Personal cuts"],
 ]
   .map(
     ([id, label]) =>
       `<button data-filter="${id}" aria-pressed="${id === "all"}">${label}</button>`,
   )
   .join("")}</div>
 <div class="archive-feature"><div class="archive-screen"></div><aside class="archive-notes"><p class="eyebrow">NOW SHOWING <span data-number></span></p><h4 data-title></h4><p data-description></p><p class="archive-credit" data-role></p><button class="archive-play" data-play>Play film <span>↗</span></button><div class="archive-arrows"><button data-film-prev aria-label="Previous work">←</button><button data-film-next aria-label="Next work">→</button><small>Pick a frame below</small></div></aside></div>
 <div class="archive-strip" role="group" aria-label="Choose a film or photo"></div>
 <div class="archive-roles"><p class="eyebrow">EXPERIENCE / FOUR SIDES OF MY WORK</p>${sides.map((x, i) => `<details ${i === 0 ? "open" : ""}><summary><span>0${i + 1} / ${x.label}</span><strong>${x.project}</strong><b aria-hidden="true">+</b></summary><div class="archive-role-body"><h4>${x.role}</h4><div><p>${x.copy}</p><ul>${x.handled.map((v) => `<li>${v}</li>`).join("")}</ul><small>${x.tools.join(" · ")}</small>${x.proof ? `<p class="archive-proof">${x.proof}</p>` : ""}</div></div></details>`).join("")}</div>
 <dialog class="archive-dialog" aria-label="Media viewer"><div class="archive-dialog-bar"><span data-modal-title></span><button data-close aria-label="Close media viewer">Close ×</button></div><div class="archive-modal-stage"></div><div class="archive-dialog-bar"><button data-modal-prev aria-label="Previous media">← Previous</button><span data-modal-count></span><button data-modal-next aria-label="Next media">Next →</button></div></dialog>`;
  const q = (s) => root.querySelector(s),
    dialog = q("dialog"),
    stage = q(".archive-modal-stage");
  let group = [],
    current = 0,
    touch = null;
  function showFeature(item) {
    selected = item;
    const isPoster = item.type === "poster";
    q("[data-play]").innerHTML = isPoster
      ? "View photo <span>↗</span>"
      : "Play film <span>↗</span>";
    q(".archive-screen").innerHTML =
      `<button data-play aria-label="${isPoster ? "View photo" : "Play"} ${esc(item.title)}"><img src="${esc(item.poster)}" alt="${esc(item.title)}" width="${item.aspect === "16:9" ? 853 : 480}" height="${item.aspect === "16:9" ? 480 : 853}"><span class="archive-play-disc" aria-hidden="true">${isPoster ? "＋" : "▶"}</span><span class="archive-screen-label">${esc(item.label)} / ${esc(item.duration || "Photo")}</span></button>`;
    q("[data-title]").textContent = item.title;
    q("[data-number]").textContent = String(
      filtered.indexOf(item) + 1,
    ).padStart(2, "0");
    q("[data-description]").textContent = item.description;
    q("[data-role]").textContent = item.role;
    q(".archive-strip").innerHTML = filtered
      .map(
        (x) =>
          `<button data-select="${x.id}" aria-pressed="${x === selected}" aria-label="Select ${esc(x.title)}"><img src="${esc(x.poster)}" alt="" loading="lazy" width="120" height="160"><span><small>${String(filtered.indexOf(x) + 1).padStart(2, "0")} / ${esc(x.label)}</small><strong>${esc(x.title)}</strong></span></button>`,
      )
      .join("");
  }
  function render() {
    stage.replaceChildren();
    stage.classList.remove("zoomed");
    const item = group[current];
    if (item.type === "video") {
      const video = document.createElement("video");
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.poster = item.poster;
      video.src = item.src;
      video.setAttribute("aria-label", item.title);
      stage.append(video);
    } else {
      const image = document.createElement("img");
      image.src = item.src;
      image.alt = item.title;
      image.tabIndex = 0;
      image.setAttribute("role", "button");
      image.setAttribute("aria-label", "Zoom poster");
      image.setAttribute("aria-pressed", "false");
      const zoom = () => {
        image.setAttribute(
          "aria-pressed",
          String(stage.classList.toggle("zoomed")),
        );
      };
      image.onclick = zoom;
      image.onkeydown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          zoom();
        }
      };
      stage.append(image);
    }
    q("[data-modal-title]").textContent = item.title;
    q("[data-modal-count]").textContent = `${current + 1} / ${group.length}`;
  }
  function open(item, button) {
    opener = button;
    group = items.filter((x) => x.side === item.side);
    current = group.indexOf(item);
    render();
    dialog.showModal();
    document.body.style.overflow = "hidden";
    q("[data-close]").focus();
  }
  function move(n) {
    current = (current + n + group.length) % group.length;
    render();
  }
  root.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    if (b.dataset.filter) {
      filtered =
        b.dataset.filter === "all"
          ? films
          : items.filter((x) => x.side === b.dataset.filter);
      root
        .querySelectorAll("[data-filter]")
        .forEach((t) => t.setAttribute("aria-pressed", String(t === b)));
      showFeature(filtered[0]);
    } else if (b.dataset.select)
      showFeature(items.find((x) => x.id === b.dataset.select));
    else if (b.hasAttribute("data-play")) open(selected, b);
    else if (b.hasAttribute("data-poster"))
      open(posters[Number(b.dataset.poster)], b);
    else if (
      b.hasAttribute("data-film-prev") ||
      b.hasAttribute("data-film-next")
    )
      showFeature(
        filtered[
          (filtered.indexOf(selected) +
            (b.hasAttribute("data-film-prev") ? -1 : 1) +
            filtered.length) %
            filtered.length
        ],
      );
    else if (b.hasAttribute("data-close")) dialog.close();
    else if (b.hasAttribute("data-modal-prev")) move(-1);
    else if (b.hasAttribute("data-modal-next")) move(1);
  });
  dialog.addEventListener("close", () => {
    stage.replaceChildren();
    document.body.style.overflow = "";
    opener?.focus();
  });
  dialog.addEventListener("keydown", (e) => {
    if (e.target.tagName === "VIDEO") return;
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
      move(e.key === "ArrowLeft" ? -1 : 1);
    }
  });
  dialog.addEventListener(
    "touchstart",
    (e) => {
      if (e.target.closest("video,button")) return;
      touch = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
    },
    { passive: true },
  );
  dialog.addEventListener(
    "touchend",
    (e) => {
      if (!touch) return;
      const dx = e.changedTouches[0].clientX - touch[0],
        dy = e.changedTouches[0].clientY - touch[1];
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5)
        move(dx < 0 ? 1 : -1);
      touch = null;
    },
    { passive: true },
  );
  showFeature(selected);
}
