import UpdateForm from "./updateForm";
import AddFormData from "./addFormData";

export default function Form() {
  const flag = true;

  return (
    <div className="container mx-auto py-5">
      {flag ? <AddFormData /> : <UpdateForm />}
    </div>
  );
}
