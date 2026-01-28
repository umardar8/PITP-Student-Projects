  /* service  */

  
const buttons = document.querySelectorAll(".tab-btn");
const workouts = document.querySelectorAll(".workout");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    workouts.forEach(w => w.classList.remove("active"));
    btn.classList.add("active");
    const target = document.getElementById(btn.dataset.target);
    target.classList.add("active");
  });
});