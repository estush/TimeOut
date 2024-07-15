import mongoose from 'mongoose';

const PreferenceSchema= new mongoose.Schema({
    emailFrequency:{type:String,default:'never',enum:['never','daily', 'weekly','monthly','yearly']},
    sendNotificationTime:{type:Number,required:true},
    soundVoice:{type:String,default:'×××ª ××¢× ×¢×©×'}
})
export default mongoose.model('Preference',PreferenceSchema);
<<<<<<< HEAD

=======
>>>>>>> mongoDB-team
