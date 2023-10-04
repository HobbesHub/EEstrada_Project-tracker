# Module 05 Mini-Project: Project Tracker

In this project, you will work with starter code to create a project tracker application using Bootstrap, Google Fonts, jQuery and Day.js. 

## Instructions

This assignment is divided into four tasks. The first three tasks will get you to MVP, so focus on those first! Fourth is extra-credit

### Task 1: HTML Build

1. Create a header/hero area that welcomes users to the application and displays the current time and date using Day.js. The current time and date should be updated every second with `setInterval()`. The data should be formatted with the abbreviated month, day, full year, and time (e.g. `Jun 30, 2022 at 08:37:48 am`).

2. Create a Bootstrap card component explaining the instructions of how to use the app and a button to open a [Bootstrap modal dialog](https://getbootstrap.com/docs/5.1/components/modal/).

3. The modal should contain a form asking users to fill in the following data:

    * The name of the project.

    * The type of project (use a `<select>` drop-down).

    * The date the project is due (use the `date` input type).

    * Optional: Use the jQuery UI datepicker instead of `date` input type.

4. Include a Bootstrap table that the project's information can be printed to with columns for the following data:

    * Project name

    * Project type

    * Due date


### Task 2: Capture Form Data

1. Using jQuery, set up functionality to capture the form's input elements on submit and use that data to create a new table row on the page.

2. Select and save references to every DOM element we will interact with to a variable (i.e., `var projectFormEl = $("#project-form");`) so that we can use these elements later.

3. Attach a submit event listener to the `<form>` element using jQuery.

4. On submission, capture the input values from the form and update localStorage so that the projects that have been added are persistent. Clear the form data so that the user can easily add additional projects.

5. Call the function to print the project data on the page.

6. Ensure the modal closes when the user submits the form.

---

### Task 3: Print Project Data to Page

1. Create a function that will read the saved projects from localStorage.

2. Create a table row (`<tr>`) element and save it to a variable.

3. If the project is past due, give the row a class so that the row for the project will have a light red background. If the project is due today, give the row a class so that the row will have a light yellow background.

4. Create a table detail (`<td>`) element for each of the corresponding project fields in Task 1.

5. Append each `<td>` element to the `<tr>`.

6. Append each `<tr>` to the `<tbody>` element on the page.

7. Don't forget to clear the `<tbody>` before adding all the rows.

8. Add a call to the function when the page loads.

9. Update the function responsible for capturing form data so that it calls the function for printing the data.

---

### Task 4: Delete a Project From the Table (extra-credit)

1. Update the table to accommodate one more column without a name.

2. When generating a new `<tr>` for a project, add one more `<td>` that holds a button for deleting a project from the list.

3. Use jQuery event delegation to attach an event listener to each of those buttons so that when clicked, the parent `<tr>` element will be removed from the page and the project is removed from localStorage. (HINT: How might using a data-* attribute be helpful?)

## Mock-Up

The following animation demonstrates the application functionality:

![Demo](./Assets/images/Project_Tracker.gif)

## Grading Requirements

### Technical Acceptance Criteria

* Satisfies all of the above acceptance criteria. 

### Deployment

* Application deployed at live URL. 

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository contains application code.

### Application Quality

* Application resembles the mock-up functionality provided in the instructions.

### Repository Quality

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality README with description, screenshot, link to deployed application.

## Submission

You are required to submit BOTH of the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository that contains your code. Give the repository a unique name and include a README file that describes the project.



