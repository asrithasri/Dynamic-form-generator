import React, { useState } from "react";



interface EditorProps {
    schema: string;
    onSchemaChange: (updatedSchema: string) => void;
  }
  
  const Editor: React.FC<EditorProps> = ({ schema, onSchemaChange }) => {
    const [error, setError] = useState<string | null>(null);
  
    // Handle change in the JSON schema
    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
  
      try {
        JSON.parse(value); // Validate JSON
        setError(null); // Clear error if valid JSON
        onSchemaChange(value); // Pass updated JSON to parent component
      } catch (e) {
        setError('Invalid JSON format'); // Show error if invalid JSON
      }
    };
  
    return (
      <div>
        <h2 className="text-xl font-bold mb-2">JSON Editor</h2>
        <textarea
          className="w-full h-96 p-2 border rounded focus:outline-none"
          value={schema}
          onChange={handleInputChange}
        />
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    );
  };
  
  export default Editor;
