

const getVideos = function(skip, limit){
    return Promise.resolve({ data: { status: 'success', data: [{ _id: 1, name: 'video1'}] }});
};

const getVideo = function(videoId){
    return Promise.resolve({ data: { status: 'success', data: { _id: 1, name: 'video1'} }});
};

const rateVideo = function(videoId){
    return Promise.resolve({ data: { status: 'success', data: { _id: 1, name: 'video1', ratings: [1,2,3]} }});
};

const signIn = function(creds){
    return Promise.resolve({ data: { status: 'success', sessionId: '1', username: 'ali'}});
};
const signOut = function(){
    return Promise.resolve({ data: { status: 'success'}});
};


export default {getVideos, getVideo, rateVideo, signIn, signOut};