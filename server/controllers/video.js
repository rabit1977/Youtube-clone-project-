export const addVideo = async (req, res, next) => {
  const newVideo = new Video({ userId: req.user.id, ...req.body });
  try {
    const savedVideo = await newVideo.save();
    res.status(201).json(newVideo);
  } catch (err) {
    next(err);
  }
};

export const updateVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return next(createError(404, 'Video not found'));
      if(req.user.id === video.userId) {
        const updatedVideo = await Video.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
      res.status(200).json(updatedVideo);
    }
    else {
      return next(createError(403, 'You are not authorized to update this video'));
    }
  } catch(err) {
    next(err);
  }
};

export const deleteVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return next(createError(404, 'Video not found'));
      if(req.user.id === video.userId) {
        const updatedVideo = await Video.findByIdAndDelete(req.params.id, { new: true });
      res.status(200).json("The video has been deleted");
    }
    else {
      return next(createError(403, 'You can not delete this video'));
    }
  } catch(err) {
    next(err);
  }
}

export const getVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return next(createError(404, 'Video not found'));
    }
    res.status(200).json(video);
  } catch(err) {
    next(err);
  }
}

export const addVideo = async (req, res, next) => {
  try {
    await Video.findByIdAndUpdate(req.params.id, { $inc: { views: 1 } });    
    res.status(200).json("The view has been added");
  } catch (err) {
    next(err);
  }
}

export const random = async (req, res, next) => {
  try {
    const videos = await Video.aggregate([ { $sample: { size: 40 } } ]);    
    res.status(200).json(videos);
  } catch(err) {
    next(err);
  }
}

export const trend = async (req, res, next) => {
  try {
    const videos = await Video.find().sort({views: -1});    
    res.status(200).json(videos);
  } catch(err) {
    next(err);
  }
}

export const sub = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id)   
    const subscribedChannels = user.subscribedUsers
    const list = Promise.all(subscribedChannels.map(async (channel) => {
      const video = await Video.find({userId: channel})
      return video
    }
  } catch(err) {
    next(err);
  }
}