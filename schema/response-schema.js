// import mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create a schema for collection
const ResponseSchema = new Schema(
    { 
        responseValue: String,
        questionId: {
          type: Schema.Types.ObjectId,
          ref: "Question",
        },
        optionId: {
          type: Schema.Types.ObjectId,
          ref: "Option",
        },
        surveyId: {
          type: Schema.Types.ObjectId,
          ref: "Survey",
        }
       
      },
      {
        collection: "responses",
      }
        

);

const ResponseModel = mongoose.model('Response', ResponseSchema);
export default ResponseModel;