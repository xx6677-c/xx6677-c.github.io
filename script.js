const root = document.documentElement;

root.removeAttribute("data-theme");
localStorage.removeItem("theme");

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelector(".theme-toggle").addEventListener("click", () => {
  root.animate(
    [
      { filter: "brightness(1)" },
      { filter: "brightness(1.035)" },
      { filter: "brightness(1)" },
    ],
    { duration: 420, easing: "ease-out" },
  );
});
