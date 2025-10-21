window.onload = () => {
  // DOM elements
  const formNameInput = document.getElementById("formName");
  const fieldTypeSelect = document.getElementById("fieldType");
  const fieldLabelInput = document.getElementById("fieldLabel");
  const fieldsDisplay = document.getElementById("fieldsDisplay");
  const addFieldButton = document.getElementById("addField");
  const saveFormButton = document.getElementById("saveForm");
  const formsContainer = document.getElementById("formsContainer");

  const currentFields = [];

  // Populate field type options
  const options = [
    { text: "Text Field", value: "text" },
    { text: "Checkbox", value: "checkbox" },
    { text: "Radio Button", value: "radio" }
  ];

  fieldTypeSelect.innerHTML = options
    .map(opt => `<option value="${opt.value}">${opt.text}</option>`)
    .join("");

  // Add field handler
  addFieldButton.addEventListener("click", () => {
    const label = fieldLabelInput.value.trim();
    const type = fieldTypeSelect.value;

    if (label === "") {
      alert("Please add the field");
      return;
    }

    currentFields.push({ label, type });
    fieldLabelInput.value = "";
    alert("Your field in the form is added successfully");
    renderCurrentFields();
  });

  // Save form handler
  saveFormButton.addEventListener("click", () => {
    if (currentFields.length === 0) {
      alert("Please add at least one field with a label to the form before saving.");
      return;
    }

    let formName = formNameInput.value.trim();
    if (formName === "") formName = "Unnamed Form";

    const form = {
      name: formName,
      fields: [...currentFields]
    };

    renderSavedForm(form);
    currentFields.length = 0;
    formNameInput.value = "";
    renderCurrentFields();
  });

  // Render current fields
  function renderCurrentFields() {
    fieldsDisplay.innerHTML = "";
    currentFields.forEach((field, index) => {
      const div = document.createElement("div");
      div.className = "current-field";
      div.innerHTML = `
        <span>${field.label} (${field.type})</span>
        <button class="remove-field" data-index="${index}">&times;</button>
      `;
      fieldsDisplay.appendChild(div);
    });

    document.querySelectorAll(".remove-field").forEach(btn => {
      btn.addEventListener("click", e => {
        const index = parseInt(e.target.dataset.index);
        currentFields.splice(index, 1);
        renderCurrentFields();
      });
    });
  }

  // Render saved form
  function renderSavedForm(form) {
    const formDiv = document.createElement("div");
    formDiv.className = "saved-form";

    const formFieldsHtml = form.fields
      .map((field, i) => {
        const fieldId = `field-${form.name.replace(/\s+/g, "-").toLowerCase()}-${i}`;
        if (field.type === "text") {
          return `
            <div class="form-field">
              <label for="${fieldId}">${field.label}</label>
              <input type="text" id="${fieldId}" class="preview-input">
            </div>
          `;
        } else if (field.type === "checkbox") {
          return `
            <div class="form-field form-field-checkbox">
              <input type="checkbox" id="${fieldId}" class="preview-input">
              <label for="${fieldId}">${field.label}</label>
            </div>
          `;
        } else if (field.type === "radio") {
          return `
            <div class="form-field form-field-radio">
              <input type="radio" name="radio-group-${form.name}" id="${fieldId}" class="preview-input">
              <label for="${fieldId}">${field.label}</label>
            </div>
          `;
        }
        return "";
      })
      .join("");

    formDiv.innerHTML = `
      <h3 class="saved-form-title">${form.name}</h3>
      <div class="form-fields-preview">
        ${formFieldsHtml}
      </div>
    `;
    formsContainer.prepend(formDiv);
  }
};
