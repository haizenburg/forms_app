import React, { useState } from "react";
import Table from "../../components/formTable";
import Form from "../../components/form";
function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formContent, setFormContent] = useState([]);
  const [onEdit, setOnEdit] = useState(false);
  const addquestion = () => {
    const field = {
      name: `question_${formContent.length}`,
      label: "Untitled question",
      question_type: "short_answer",
      List: []
    };
    setFormContent([...formContent, field]);
  };

  const editField = (fieldName, fieldLable) => {
    const formFields = [...formContent];
    const fieldIndex = formFields.findIndex((f) => f.name === fieldName);
    if (fieldIndex > -1) {
      formFields[fieldIndex].label = fieldLable;
      setFormContent(formFields);
    }
  };
  return (
    <div className="container mx-auto px-4 h-screen">
      <div className="flex flex-col  space-y-2 my-4">
        <h1 className="text-2xl font-bold">Form Maker</h1>
      </div>
      <button className="flex bg-indigo-300 text-white px-4 py-2 border rounded-md hover:bg-neutral-300">
        Add form
      </button>

      {/* collapsable form */}
      <div className="container mx-auto py-5">
        <Form></Form>
      </div>

      {/* table */}
      <div className="container mx-auto">
        <Table></Table>
      </div>
      {/* <div className="bg-whote shadow-lg rounded-md p-5 my-10">
        {formContent.map((field) => {
          return (
            <>
              <div>
                <div className="flex justify-between items-center space-y-2">
                  <div
                    key={field.name}
                    className="block text-sm font-medium text-gray-700 capitalize"
                  >
                    {onEdit ? (
                      <input
                        type="text"
                        value={field.label}
                        onChange={(e) => editField(field.name, e.target.value)}
                        onBlur={() => setOnEdit(false)}
                      />
                    ) : (
                      <label onClick={() => setOnEdit(true)}>
                        {field.label}
                      </label>
                    )}
                  </div>
                  <div>
                    <select>
                      <option value="short_answer">Short Answer</option>
                      <option value="paragrapgh">Paragrapgh</option>
                      <option value="multichoice">Multichoice</option>
                    </select>
                  </div>
                </div>
                <div className="my-4">
                  {field.question_type === "short_answer" && (
                    <input
                      type="text"
                      className="px-5 shadow-sm h-10 rounded-md block w-full"
                      placeholder={field.label}
                    />
                  )}

                  {field.question_type === "paragrapgh" && (
                    <textarea
                      rows={4}
                      className="px-5 shadow-sm h-10 rounded-md block w-full"
                      placeholder={field.label}
                    />
                  )}

                  {field.question_type === "multichoice" && (
                    <select className="px-5 shadow-sm h-10 rounded-md block w-full">
                      {field.List.map(() => (
                        <option key={item} value={item}></option>
                      ))}
                    </select>
                  )}
                </div>
              </div>
            </>
          );
        })}
        <div className="relative w-ful p-5">
          <div className="absolute inset-x-0 bottom-0 h-12 flex justify-center">
            <button
              onClick={() => addquestion()}
              className="inline-flex bg-gray-800 hover:bg-gray-700 items-center p-3 text-sm text-white rounded-md"
            >
              Add Question
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default index;
