import { Schema, models, model } from "mongoose";

const FormSchema = new Schema({
  name: String,
  questions: [
    {
      question: String
      //   type: string,
      //   options: [string]
    }
  ]
});

const Forms = models.Form || model("Form", FormSchema);

export default Forms;
