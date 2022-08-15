// import mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create a schema for collection
const OptionSchema = new Schema(
    {
        
        optionValue: String,
        questionId: {
            type: Schema.Types.ObjectId,
            ref: "Question",
          },
          surveyId: {
            type: Schema.Types.ObjectId,
            ref: "Survey",
          },
          responseIds: [
            {
              type: Schema.Types.ObjectId,
              ref: "Response",
            },
        
          ]
       
      },
      {
        collection: "options",
      }

);

const OptionModel = mongoose.model('Option', OptionSchema);
export default OptionModel;