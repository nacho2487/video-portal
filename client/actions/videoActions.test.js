import expect from 'expect';
import * as videoActions from './videoActions';
import types from './actionTypes';
import mockApi from '../mocks/apiMock';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';


describe('Videos actions', () => {

  // Test async action
  const middleware = [thunk.withExtraArgument(mockApi)];
  const mockStore =  configureMockStore(middleware);


  it('should create LOAD_VIDEOS_SUCCESS when loading videos', (done) => {

    const expectedActions = {
      type: types.LOAD_VIDEOS_SUCCESS,
      videos: [{_id: '1', name: 'video1', ratings: [1,2,3]}]
    };

    const store = mockStore({videos: []}, [expectedActions], done);
    store.dispatch(videoActions.loadVideos({skip: 5, limit: 5})).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.LOAD_VIDEOS_SUCCESS);
      expect(actions[0].videos.length).toEqual(1);
      expect(actions[0].videos[0].name).toEqual('video1');
      done();
    });
  });

  it('should create VIDEO_SUCCESS when loading single video', (done) => {

    const expectedActions = {
      type: types.VIDEO_SUCCESS,
      video: {_id: '1', name: 'video1'}
    };

    const store = mockStore({videos: []}, [expectedActions], done);
    store.dispatch(videoActions.getVideo(1)).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.VIDEO_SUCCESS);
      expect(actions[0].video.name).toEqual('video1');
      done();
    });
  });

  it('should create RATING_SUCCESS when rate a video', (done) => {

    const expectedActions = {
      type: types.RATING_SUCCESS,
      video: {_id: '1', name: 'video1', ratings: [1,2,3]}
    };

    const store = mockStore({videos: []}, [expectedActions], done);
    store.dispatch(videoActions.clickStar(1, 3)).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.RATING_SUCCESS);
      expect(actions[0].video.name).toEqual('video1');
      expect(actions[0].video.ratings.length).toEqual(3);
      done();
    });
  });
});
