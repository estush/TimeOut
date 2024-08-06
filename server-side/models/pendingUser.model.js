import mongoose, {Schema} from 'mongoose';

const PendingUsersSchema = new mongoose.Schema({
    userID: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
    email: { type: String, required: true }
});

export default mongoose.model('PendingUsers', PendingUsersSchema);
