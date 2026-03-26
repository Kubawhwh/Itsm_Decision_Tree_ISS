// New node-based option tree implementation supporting 14 editable nodes.
const row2 = document.getElementById("row2");
const row3 = document.getElementById("row3");
const logEl = document.getElementById("log");
const resetBtn = document.getElementById("reset");

const topNodes = Array.from(document.querySelectorAll("#row1 .node"));
const secondNodes = Array.from(document.querySelectorAll("#row2 .node-2"));
const thirdNodes = Array.from(document.querySelectorAll("#row3 .node-3"));

function show(el) {
  el.classList.remove("hidden");
}
function hide(el) {
  el.classList.add("hidden");
}

function writeLog(...parts) {
  logEl.textContent = parts.filter(Boolean).join(" > ");
}

topNodes.forEach((n) => {
  n.addEventListener("click", () => {
    const key = n.dataset.key;
    // show second-level nodes that belong to this branch
    secondNodes.forEach((s) => {
      if (s.dataset.branch === key) show(s);
      else hide(s);
    });
    // hide all third-level until a second is chosen
    thirdNodes.forEach((t) => hide(t));
    show(row2);
    hide(row3);
    // mark pressed
    topNodes.forEach((x) => x.removeAttribute("aria-pressed"));
    n.setAttribute("aria-pressed", "true");
    writeLog(key);
  });
});

secondNodes.forEach((s) => {
  s.addEventListener("click", () => {
    const val = s.dataset.value; // x,y,z,v
    if (!val) return;
    thirdNodes.forEach((t) => {
      if (t.dataset.parent === val) show(t);
      else hide(t);
    });
    show(row3);
    // find top selection
    const topKey =
      (topNodes.find((t) => t.getAttribute("aria-pressed") === "true") || {})
        .dataset?.key || "";
    writeLog(topKey, val);
  });
});

thirdNodes.forEach((t) => {
  t.addEventListener("click", () => {
    const final = t.dataset.value;
    if (!final) return;
    const topKey =
      (topNodes.find((n) => n.getAttribute("aria-pressed") === "true") || {})
        .dataset?.key || "";
    const second =
      (
        secondNodes.find(
          (s) => !s.classList.contains("hidden") && s.dataset.value,
        ) || {}
      ).dataset?.value || "";
    writeLog(topKey, second, final);
  });
});

resetBtn.addEventListener("click", () => {
  // hide second + third level nodes
  secondNodes.forEach((n) => hide(n));
  thirdNodes.forEach((n) => hide(n));
  hide(row2);
  hide(row3);
  // clear pressed state on top
  topNodes.forEach((n) => n.removeAttribute("aria-pressed"));
  logEl.textContent = "";
});
