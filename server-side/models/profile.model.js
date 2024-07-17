import mongoose from 'mongoose';

const { Schema } = mongoose;

const profileSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    profileName: { type: String, required: true, minlength: 2, maxlength: 50 },
    statusBlockedSites: { type: String, enum: ['black list', 'white list'], required: true },
    listWebsites: [{
        websiteId: { type: Schema.Types.ObjectId, ref: 'Websites' },
        status: { type: String, enum: ['blocked', 'opened', 'limited'] },
        limitedMinutes: { type: Number, default: () => 60
            , required: true },
    }],
    profileTime: [{
        start: { type: Date, default: new Date() },
        end: { type: Date, default: new Date() }
    }]
});

// Middleware to check the status of listWebsites before saving
profileSchema.pre('save', function (next) {
    const profile = this;

    if (profile.statusBlockedSites === 'white list') {
        profile.listWebsites.forEach(site => {
            if (site.status === 'blocked') {
                return next(new Error('In white list mode, site status cannot be "blocked"'));
            }
        });
    }else if (profile.statusBlockedSites === 'black list') {
        profile.listWebsites.forEach(site => {
            if (site.status === 'opened') {
                return next(new Error('In white list mode, site status cannot be "opened"'));
            }
        });
    }
    
    next();
});

export default mongoose.model("Profiles", profileSchema);
