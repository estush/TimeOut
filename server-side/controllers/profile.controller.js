import Profiles from '../models/profile.model.js';

export const getAllProfiles = async (req,res,next) => {
    try {
        const profiles = await Profiles.find().populate('limitedWebsites.websiteId').select('-__v');
        res.json(profiles);
    } catch (err) {
        next({message:err.message})
    }
};

export const createProfile = async (req, res,next) => {
    try {
        const newProfile = new Profiles(req.body);
        await newProfile.save();
        res.status(201).json(newProfile);
    } catch (err) {
        next({message:err.message})
    }
};

export const getProfileById = async (req, res,next) => {
    try {
        const profile = await Profiles.findById(req.params.id).populate('limitedWebsites.websiteId').select('-__v');
        if (!profile) {
          return  next({message:'profile was not found ',status:404});
        }
        res.json(profile);
    } catch (err) {
        next({message:err.message})
    }
};

export const updateProfile = async (req, res,next) => {
    try {
        const updatedProfile = await Profiles.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProfile) {
           return next({message:'profile was not found ',status:404})
        }
        res.json(updatedProfile);
    } catch (err) {
        next({message:err.message})
    }
};

export const deleteProfile = async (req, res,next) => {
    try {
        const deletedProfile = await Profiles.findByIdAndDelete(req.params.id);
        if (!deletedProfile) {
          return next({message:'profile was not found ',status:404});
        }
        res.json({ message: 'Profile deleted successfully'});
    } catch (err) {
        next({message:err.message})
    }
};



