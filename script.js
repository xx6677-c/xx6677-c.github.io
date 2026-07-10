const root = document.documentElement;

const getSavedTheme = () => {
  try {
    const item = JSON.parse(localStorage.getItem("theme") || "null");
    return item && Date.now() < item.expiry ? item.value : "light";
  } catch {
    return "light";
  }
};

const saveTheme = (value) => {
  localStorage.setItem(
    "theme",
    JSON.stringify({ value, expiry: Date.now() + 365 * 86400000 }),
  );
};

const applyTheme = (value) => {
  root.dataset.theme = value === "dark" ? "dark" : "light";
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute("content", value === "dark" ? "#17120f" : "#f4dfbf");
  }
};

applyTheme(getSavedTheme());

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelector(".theme-toggle").addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  saveTheme(nextTheme);
  root.animate(
    [
      { filter: "brightness(1)" },
      { filter: "brightness(1.035)" },
      { filter: "brightness(1)" },
    ],
    { duration: 420, easing: "ease-out" },
  );
});
