# Dynamic-form-generator

src/
├── components/
│   ├── Editor.tsx
│   ├── FormPreview.tsx
│   ├── FormGenerator.tsx
├── utils/
│   └── validation.ts
├── App.tsx
├── index.css
└── main.tsx

# Key Components
Editor: This component will handle the input of JSON schema and validate it.
FormPreview: This component will render the dynamic form based on the schema.

App Component
This component will manage the state for the JSON schema and pass it to both the Editor and FormPreview.

Editor Component
This component will allow users to type and validate JSON dynamically. The onSchemaChange will notify App of changes.

FormPreview Component
This component takes the JSON schema as a string, parses it, and dynamically generates form fields.
# Testing & Validation
You can test this in your development environment to ensure real-time updates. Modify the JSON schema on the left side, and the form preview will update dynamically on the right.

{
  "formTitle": "Project Requirements Survey",
  "formDescription": "Please fill out this survey about your project needs",
  "fields": [
    {
      "id": "name",
      "type": "text",
      "label": "Full Name",
      "required": true,
      "placeholder": "Enter your full name"
    },
    {
      "id": "email",
      "type": "email",
      "label": "Email Address",
      "required": true,
      "placeholder": "you@example.com",
      "validation": {
        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        "message": "Please enter a valid email address"
      }
    },
    {
      "id": "companySize",
      "type": "select",
      "label": "Company Size",
      "required": true,
      "options": [
        { "value": "1-50", "label": "1-50 employees" },
        { "value": "51-200", "label": "51-200 employees" },
        { "value": "201-1000", "label": "201-1000 employees" },
        { "value": "1000+", "label": "1000+ employees" }
      ]
    },
    {
      "id": "industry",
      "type": "radio",
      "label": "Industry",
      "required": true,
      "options": [
        { "value": "tech", "label": "Technology" },
        { "value": "healthcare", "label": "Healthcare" },
        { "value": "finance", "label": "Finance" },
        { "value": "retail", "label": "Retail" },
        { "value": "other", "label": "Other" }
      ]
    }
  ]
}
