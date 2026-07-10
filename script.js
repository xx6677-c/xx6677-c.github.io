const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  root.dataset.theme = "dark";
}

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelector(".theme-toggle").addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme === "dark" ? "dark" : "";
  localStorage.setItem("theme", nextTheme);
});
