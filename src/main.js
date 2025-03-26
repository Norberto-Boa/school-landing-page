document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-collapse-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-collapse-toggle");
      const target = document.getElementById(targetId);

      console.log("clicked")
      if (target) {
        const isHidden = target.classList.contains("hidden");

        // Toggle visibility
        target.classList.toggle("hidden");

        // Update ARIA attribute
        button.setAttribute("aria-expanded", !isHidden);
      }
    });
  });
});