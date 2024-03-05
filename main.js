const form = document.querySelector("#languageForm");
const options = document.querySelectorAll('input[type="radio"]');
const storage = "languageSelection";

localStorage.setItem(storage, "ro-RO");
let allStorage = { ...localStorage };
console.log(allStorage);
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let selectedLanguage;
  options.forEach((radio) => {
    if (radio.checked) {
      selectedLanguage = radio.value;
    }
  });
  localStorage.setItem(storage, selectedLanguage);
  let allStorage = { ...localStorage };
  console.log(allStorage);
});
