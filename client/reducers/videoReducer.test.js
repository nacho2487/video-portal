import expect from 'expect';
import {videos, video} from './videoReducer';
import * as actions from '../actions/videoActions';

describe('Video Reducer', () => {
    describe('List of videos Reducer', () => {
        it('should load all videos when LOAD_VIDEOS_SUCCESS', () => {
            const initialState = [
                {name: 'A'},
                {name: 'B'}
            ];

            const newVideos = [{name: 'C'}];

            const action = actions.loadVideosSuccess(newVideos);

            const newState = videos(initialState, action);

            expect(newState.length).toEqual(3);
            expect(newState[0].name).toEqual('A');
            expect(newState[1].name).toEqual('B');
            expect(newState[2].name).toEqual('C');
        });

        it('should clear list videos when CLEAR_VIDEOS', () => {
            const initialState = [
                {name: 'A'},
                {name: 'B'}
            ];

            const newVideos = [{name: 'C'}];

            const action = actions.clearVideosSuccess(newVideos);

            const newState = videos(initialState, action);

            expect(newState.length).toEqual(0);

        });

        it('should update rating when RATING_SUCCESS', () => {
            const initialState = [
                {name: 'A', ratings: [1,2,3], _id: '1'},
                {name: 'B', ratings: [5], _id: '2'}
            ];

            const newVideoRating = {_id: '1',  ratings: [1,2,3,5]};

            const action = actions.ratingSuccess(newVideoRating);

            const newState = videos(initialState, action);

            expect(newState.length).toEqual(2);
            expect(newState[0].name).toEqual('A');
            expect(newState[0].ratings.length).toEqual(4);
            expect(newState[0].ratings[0]).toEqual(1);
            expect(newState[0].ratings[1]).toEqual(2);
            expect(newState[0].ratings[2]).toEqual(3);
            expect(newState[0].ratings[3]).toEqual(5);
            expect(newState[1].name).toEqual('B');
            expect(newState[1].ratings.length).toEqual(1);
        });
    });

    describe('Single video Reducer', () => {
        it('should get a single video when VIDEO_SUCCESS', () => {
            const initialState = {name: 'A'};

            const newVideo = {name: 'C'};

            const action = actions.getVideoSuccess(newVideo);

            const newState = video(initialState, action);

            expect(newState.name).toEqual('C');
        });


        it('should update rating when RATING_SUCCESS', () => {
            const initialState = {name: 'A', ratings: [1,2], _id: '1'};

            const newVideoRating = {_id: '1',  ratings: [1,2,3,5]};

            const action = actions.ratingSuccess(newVideoRating);

            const newState = video(initialState, action);

            expect(newState.ratings.length).toEqual(4);
            expect(newState.ratings[0]).toEqual(1);
            expect(newState.ratings[1]).toEqual(2);
            expect(newState.ratings[2]).toEqual(3);
            expect(newState.ratings[3]).toEqual(5);
        });
    });
});
