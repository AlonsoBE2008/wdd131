
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      if (name && email && message) {
        const submission = { name, email, message };
        let submissions = JSON.parse(localStorage.getItem("submissions")) || [];
        submissions.push(submission);
        localStorage.setItem("submissions", JSON.stringify(submissions));

        alert(`Thank you, ${name}! Your message has been saved.`);
        form.reset();
      } else {
        alert("Please fill out all fields.");
      }
    });
  }
});