// JavaScript code can be added here to handle dynamic behavior on your pages.
// For example, you can use JavaScript to validate the login form, show/hide elements, etc.
// Below is a simple example of showing an alert on the Home page.

const homePage = document.querySelector('title').textContent === 'Home';

if (homePage) {
    alert('Warning: This Website Can Harm Your Device Do you Proceed > ; Please Leave!!!');
}
