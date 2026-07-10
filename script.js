const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  root.dataset.theme = "dark";
}

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelector(".theme-toggle").addEventListener("click", () => {
  const isDark = root.dataset.theme === "dark";
  root.dataset.theme = isDark ? "" : "dark";
  localStorage.setItem("theme", isDark ? "light" : "dark");
});
