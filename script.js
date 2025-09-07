// array of terms to be displayed on the page
const terms = ["SEO", "Abstraction", "IDE", "OOP", "Runtime"];

const populateEmployees = (listNode, employees) => {
  employees.forEach((dept) => {
    // Create department title
    const deptHeading = document.createElement("h4");
    deptHeading.textContent = dept.department;

    // Create employee list
    const ul = document.createElement("ul");
    dept.names.forEach((name) => {
      const li = document.createElement("li");
      li.textContent = name;
      ul.appendChild(li);
    });

    // Wrap in section
    const section = document.createElement("section");
    section.classList.add("department");
    section.appendChild(deptHeading);
    section.appendChild(ul);

    // Append to container
    listNode.appendChild(section);
  });
};

// Run after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const listNode = document.getElementById("employee-list");
  populateEmployees(listNode, employees);

  // Auto-update year in footer
  const year = new Date().getFullYear();
  document.getElementById(
    "copyright"
  ).textContent = `Copyright Pixell River Financial ${year}`;
});
