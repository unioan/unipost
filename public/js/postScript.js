document.addEventListener('DOMContentLoaded', () => {
 const toggleButton = document.getElementById('toggleAddPostButton');
 const addPostContainer = document.getElementById('addPostContainer');

 if (toggleButton && addPostContainer) {
  let isAddPostShown = localStorage.getItem('isAddPostShown') === 'true';

  // Set initial state
  addPostContainer.style.display = isAddPostShown ? 'block' : 'none';
  toggleButton.textContent = isAddPostShown ? 'cancel' : 'create';

  toggleClasses('post_section__create_post_button', 'post_section__cancel_post_button', isAddPostShown, toggleButton)

  toggleButton.addEventListener('click', () => {
   isAddPostShown = !isAddPostShown;
   addPostContainer.style.display = isAddPostShown ? 'block' : 'none';
   toggleButton.textContent = isAddPostShown ? 'cancel' : 'create';

   toggleClasses('post_section__create_post_button', 'post_section__cancel_post_button', isAddPostShown, toggleButton)

   //Save state to localStorage
   localStorage.setItem('isAddPostShown', isAddPostShown);
  });
 }
});

function toggleClasses(trueClass, falseClass, condition, uiElement) {
 if (condition) {
  uiElement.classList = ''
  uiElement.classList.add(falseClass)
 } else {
  uiElement.classList = ''
  uiElement.classList.add(trueClass)
 }
}