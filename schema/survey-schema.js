
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
//import autoIncrement from "mongoose-auto-increment";


const SurveySchema = mongoose.Schema(
    {
     
      name: String,
      userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
      questionIds: [
        {
          type: Schema.Types.ObjectId,
          ref: "Question",
        },
      ], 
      isActive: String,
      startDate: {
        type: Date,
        default: Date.now(),
      },
      endDate: Date,
    },
    {
      collection: "surveys",
    }
  );
  
 

 // autoIncrement.initialize(mongoose.connection);
//  SurveySchema.plugin(autoIncrement.plugin, 'survey');
  const SurveyModel = mongoose.model('Survey', SurveySchema);
 export default SurveyModel;
 
 