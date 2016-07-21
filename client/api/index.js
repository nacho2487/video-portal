import request from 'axios';
import md5 from 'js-md5';

const getVideos = function(skip, limit){
    return request.get(`/videos?skip=${skip}&limit=${limit}&sessionId=${sessionStorage.getItem('sessionId')}`);
};

const getVideo = function(videoId){
    return request.get(`/video?sessionId=${sessionStorage.getItem('sessionId')}&videoId=${videoId}`);
};

const rateVideo = function(id, rating){
    return request.post(`/video/ratings?sessionId=${sessionStorage.getItem('sessionId')}`,{
            videoId: id,
            rating: rating
        });
};

const signIn = function(creds){
    return request.post('/user/auth', {
        username: creds.username,
        password: md5(creds.password)
    });
};
const signOut = function(){
    return request.get(`/user/logout?sessionId=${sessionStorage.getItem('sessionId')}`);
};


export default {getVideos, getVideo, rateVideo, signIn, signOut};