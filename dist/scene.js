import * as T from "./vendor/three.module.js";
// Original primitive geometry. No third-party models, textures or product CAD assets.
export function mountScenes() {
  mount("hero-scene", false);
  mount("journey-scene", false);
  for (const [id, kind] of [
    ["gear-scene", true],
    ["transition-scene", "reel"],
  ]) {
    const host = document.getElementById(id);
    if (!host) continue;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          mount(id, kind);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    observer.observe(host);
  }
}
function mount(id, isGear) {
  const host = document.getElementById(id);
  let renderer;
  try {
    renderer = new T.WebGLRenderer({
      alpha: true,
      antialias: innerWidth > 767,
      powerPreference: "low-power",
    });
  } catch {
    return;
  }
  renderer.setPixelRatio(
    Math.min(devicePixelRatio, innerWidth < 768 ? 1 : 1.6),
  );
  renderer.setClearColor(0x000000, 0);
  host.appendChild(renderer.domElement);
  renderer.domElement.setAttribute("aria-hidden", "true");
  const scene = new T.Scene(),
    camera = new T.PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 0, isGear ? 8 : 9);
  scene.add(new T.AmbientLight(0x9c83c9, 2));
  const key = new T.DirectionalLight(0xe8dcff, 6);
  key.position.set(-3, 4, 5);
  scene.add(key);
  const rim = new T.PointLight(0x7733ff, 35, 15);
  rim.position.set(3, -1, 2);
  scene.add(rim);
  const fill = new T.PointLight(0xc2a2ff, 20, 15);
  fill.position.set(-3, -2, -1);
  scene.add(fill);
  const group = new T.Group();
  scene.add(group);
  const lavender = new T.MeshStandardMaterial({
    color: 0x9873d4,
    metalness: 0.7,
    roughness: 0.25,
  });
  const dark = new T.MeshStandardMaterial({
    color: 0x24212c,
    metalness: 0.65,
    roughness: 0.3,
  });
  const trim = new T.MeshStandardMaterial({
    color: 0xb49ad8,
    metalness: 0.8,
    roughness: 0.2,
  });
  function mesh(geometry, material, x = 0, y = 0, z = 0) {
    const m = new T.Mesh(geometry, material);
    m.position.set(x, y, z);
    group.add(m);
    return m;
  }
  if (isGear === "reel") {
    const rim = mesh(new T.TorusGeometry(1.45, 0.12, 12, 72), lavender);
    mesh(new T.CylinderGeometry(0.3, 0.3, 0.22, 32), trim).rotation.x =
      Math.PI / 2;
    for (let i = 0; i < 6; i++) {
      const a = (i * Math.PI) / 3;
      const spoke = mesh(
        new T.BoxGeometry(0.13, 1.35, 0.12),
        lavender,
        Math.sin(a) * 0.75,
        Math.cos(a) * 0.75,
        0,
      );
      spoke.rotation.z = -a;
      mesh(
        new T.TorusGeometry(0.33, 0.055, 8, 28),
        trim,
        Math.sin(a) * 0.89,
        Math.cos(a) * 0.89,
        0.08,
      );
    }
    const film = mesh(
      new T.TorusGeometry(1.8, 0.025, 6, 70, Math.PI * 1.6),
      trim,
    );
    film.rotation.z = -1;
    group.rotation.y = 0.4;
  } else if (!isGear) {
    const knot = mesh(
      new T.TorusKnotGeometry(
        1.05,
        0.27,
        innerWidth < 768 ? 80 : 160,
        12,
        2,
        3,
      ),
      lavender,
    );
    knot.rotation.set(0.5, 0.1, 0.4);
    const core = mesh(
      new T.IcosahedronGeometry(0.7, 1),
      new T.MeshStandardMaterial({
        color: 0x604398,
        metalness: 0.55,
        roughness: 0.3,
        flatShading: true,
      }),
    );
    core.rotation.z = 0.5;
    const orbit = mesh(new T.TorusGeometry(1.95, 0.012, 6, 100), trim);
    orbit.rotation.set(1.2, 0.4, 0.4);
    const orbit2 = mesh(new T.TorusGeometry(2.25, 0.009, 6, 100), lavender);
    orbit2.rotation.set(0.6, 0.7, -0.5);
    for (let i = 0; i < 14; i++) {
      const a = (i / 14) * Math.PI * 2;
      mesh(
        new T.SphereGeometry(i % 3 === 0 ? 0.055 : 0.025, 8, 8),
        trim,
        Math.cos(a) * 2.1,
        Math.sin(a) * 1.8,
        Math.sin(a * 3) * 0.8,
      );
    }
  } else {
    mesh(new T.BoxGeometry(2, 1.2, 0.75), dark, 0, 0.35, 0);
    mesh(new T.BoxGeometry(0.6, 0.3, 0.5), dark, 0, 1.08, 0);
    mesh(new T.BoxGeometry(0.4, 1.25, 0.85), dark, 0.9, 0.3, 0.1);
    const lens = mesh(
      new T.CylinderGeometry(0.55, 0.58, 1, 48),
      dark,
      -0.1,
      0.35,
      0.85,
    );
    lens.rotation.x = Math.PI / 2;
    for (let z of [0.52, 0.68, 1.02, 1.28]) {
      const ring = mesh(
        new T.TorusGeometry(0.55, 0.035, 8, 48),
        trim,
        -0.1,
        0.35,
        z,
      );
    }
    const glass = mesh(
      new T.CylinderGeometry(0.47, 0.47, 0.025, 48),
      new T.MeshStandardMaterial({
        color: 0x392469,
        metalness: 0.95,
        roughness: 0.08,
      }),
      -0.1,
      0.35,
      1.36,
    );
    glass.rotation.x = Math.PI / 2;
    mesh(new T.BoxGeometry(2.6, 0.12, 0.2), dark, 0, -0.55, 0);
    mesh(new T.BoxGeometry(0.14, 1.7, 0.2), dark, -1.25, 0.2, 0);
    mesh(new T.BoxGeometry(0.18, 1.3, 0.2), dark, 0.3, -1.12, 0);
    mesh(new T.CylinderGeometry(0.16, 0.2, 0.9, 16), dark, 0.3, -1.65, 0);
    mesh(new T.SphereGeometry(0.23, 16, 12), trim, -1.25, -0.55, 0);
    mesh(new T.SphereGeometry(0.2, 16, 12), lavender, 0.3, -0.6, 0);
    group.rotation.set(0.12, -0.5, -0.08);
    group.position.y = 0.35;
  }
  let visible = true,
    frame = 0,
    progress = 0,
    step = 0;
  const resize = () => {
    const w = host.clientWidth,
      h = host.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  new ResizeObserver(resize).observe(host);
  resize();
  const visibility = new IntersectionObserver((entries) => {
    visible = entries[0].isIntersecting;
  });
  visibility.observe(host);
  window.addEventListener("portfolio-scroll", (e) => {
    progress = e.detail.progress;
    step = e.detail.step;
  });
  renderer.domElement.addEventListener("webglcontextlost", (e) => {
    e.preventDefault();
    host.classList.remove("scene-ready");
    cancelAnimationFrame(frame);
  });
  const clock = new T.Clock();
  function draw() {
    frame = requestAnimationFrame(draw);
    if (!visible || document.hidden) return;
    const time = clock.getElapsedTime();
    if (isGear === "reel") {
      group.rotation.z = time * 0.12 + progress * 5;
      group.rotation.y = 0.35 + Math.sin(time * 0.3) * 0.2;
      group.position.y = Math.sin(time * 0.5) * 0.08;
    } else if (!isGear) {
      group.rotation.y = time * 0.11 + progress * 3;
      group.rotation.z = Math.sin(time * 0.25) * 0.12 + step * 0.045;
      group.position.y = Math.sin(time * 0.6) * 0.08;
    } else {
      group.rotation.y = -0.5 + Math.sin(time * 0.35) * 0.22;
      group.position.y = 0.35 + Math.sin(time * 0.6) * 0.05;
    }
    renderer.render(scene, camera);
    host.classList.add("scene-ready");
  }
  draw();
  window.addEventListener(
    "pagehide",
    () => {
      cancelAnimationFrame(frame);
      renderer.dispose();
      scene.traverse((o) => {
        o.geometry?.dispose();
        if (o.material) o.material.dispose();
      });
    },
    { once: true },
  );
}
