//Write your javascript code here
const formNameInput = document.getElementById('formName');
const fieldTypeSelect = document.getElementById('fieldType');
const fieldLabelInput = document.getElementById('fieldLabel');
const addFieldBtn = document.getElementById('addField');
const saveFormBtn = document.getElementById('saveForm');
const formsContainer = document.getElementById('formsContainer');

let currentFormFields = [];

// Add Field
addFieldBtn.addEventListener('click', () => {
  const label = fieldLabelInput.value.trim();
  const type = fieldTypeSelect.value;

  if (!label) {
    alert('Please enter a field label');
    return;
  }

  currentFormFields.push({ label, type });
  alert('Your field in the form is added successfully');
  fieldLabelInput.value = '';
});

// Save Form
saveFormBtn.addEventListener('click', () => {
  const formName = formNameInput.value.trim();

  if (!formName) {
    alert('Please enter a form name');
    return;
  }

  // Create new form container
  const formDiv = document.createElement('div');
  formDiv.classList.add('form');

  const formTitle = document.createElement('h3');
  formTitle.textContent = formName;
  formDiv.appendChild(formTitle);

  // Add fields dynamically
  currentFormFields.forEach((field) => {
    const fieldContainer = document.createElement('div');

    const label = document.createElement('label');
    label.textContent = field.label;
    label.style.display = 'block';

    const input = document.createElement('input');
    input.type = field.type;

    fieldContainer.appendChild(label);
    fieldContainer.appendChild(input);
    formDiv.appendChild(fieldContainer);
  });

  // Add to forms container
  formsContainer.appendChild(formDiv);

  // Reset for next form
  formNameInput.value = '';
  currentFormFields = [];
});
