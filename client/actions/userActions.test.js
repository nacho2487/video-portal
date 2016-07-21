import expect from 'expect';
import * as userActions from './userActions';
import types from './actionTypes';
import mockApi from '../mocks/apiMock';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';



describe('User actions', () => {

  // Test async action
  const middleware = [thunk.withExtraArgument(mockApi)];
  const mockStore =  configureMockStore(middleware);

  it('should create SIGN_IN when signin', (done) => {

    const expectedActions = {
      type: types.SIGN_IN,
      username: 'ali'
    };

    const store = mockStore({videos: []}, [expectedActions], done);
    store.dispatch(userActions.signIn({username: 'ali', password: '1234'})).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.SIGN_IN);
      expect(actions[0].username).toEqual('ali');
      done();
    });
  });

  it('should create SIGN_OUT when signout', (done) => {

    const expectedActions = {
      type: types.SIGN_OUT
    };

    const store = mockStore({user: {}}, [expectedActions], done);
    store.dispatch(userActions.signOut()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.SIGN_OUT);
      done();
    });
  });

});
