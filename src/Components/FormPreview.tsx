import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormPreviewProps {
    schema: string;
  }
  
  const FormPreview: React.FC<FormPreviewProps> = ({ schema }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    // Parse the schema and handle errors
    let formSchema;
    try {
      formSchema = JSON.parse(schema);
    } catch {
      return <p className="text-red-500">Invalid JSON Schema</p>;
    }
  
    // Form submission handler
    const onSubmit: SubmitHandler<any> = (data) => {
      console.log("Form Submitted:", data);
      alert("Form submitted successfully!");
      
      
    };
  
    return (
      <div>
        <h2 className="text-xl font-bold mb-2">{formSchema?.formTitle || 'Generated Form'}</h2>
        <p className="mb-4">{formSchema?.formDescription}</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {formSchema?.fields.map((field: any) => (
  <div key={field.id}>
    <label className="block font-bold mb-1">{field.label}</label>
    
    {/* Field type check */}
    {field.type === 'select' && (
      <select
        className="w-full border rounded p-2"
        {...register(field.id, { required: field.required })}
      >
        {field.options.map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    )}

    {field.type === 'radio' && (
      <div className="space-x-4">
        {field.options.map((option: any) => (
          <label key={option.value} className="inline-flex items-center">
            <input
              type="radio"
              value={option.value}
              {...register(field.id, { required: field.required })}
            />
            <span className="ml-2">{option.label}</span>
          </label>
        ))}
      </div>
    )}

    {['text', 'email', 'number', 'password'].includes(field.type) && (
      <input
        type={field.type}
        placeholder={field.placeholder}
        className="w-full border rounded p-2"
        {...register(field.id, {
          required: field.required,
          pattern: field.validation?.pattern && new RegExp(field.validation.pattern),
        })}
      />
    )}

    {errors[field.id] && (
      <p className="text-red-500 text-sm">
        {(errors[field.id] as { message?: string }).message || "Field is required"}
      </p>
    )}
  </div>
))}

          
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    );
  };
  
  export default FormPreview;



