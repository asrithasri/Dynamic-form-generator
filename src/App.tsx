import React,{useState} from 'react';
import Editor from "./Components/Editor";
import FormPreview from "./Components/FormPreview";
import './App.css';

const App: React.FC = () => {
  const [jsonSchema, setJsonSchema] = useState<string>("");

  const handleSchemaChange = (updatedSchema: string) => {
    setJsonSchema(updatedSchema);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 p-4 bg-gray-100">
        <Editor schema={jsonSchema} onSchemaChange={handleSchemaChange} />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <FormPreview schema={jsonSchema} />
      </div>
    </div>
  );
};

export default App;
