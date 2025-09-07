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

/** 
// add event listener to the "document" node
// callback function invokes when event "fires" on element that listener was
appended to, in this case, when the DOM has loaded fully
*/
document.addEventListener("DOMContentLoaded", () => {
  // store the DOM node referencing an element with class "top-terms__list"
  const termListNode = document.querySelector(".top-terms__list");

  // invoke function passing in DOM node and terms array
  populateTermList(termListNode, terms);
});
