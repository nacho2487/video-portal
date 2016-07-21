import expect from 'expect';
import user from './userReducer';
import * as actions from '../actions/userActions';

describe('User Reducer', () => {
    it('should get username with SIGN_IN', () => {
        const initialState = {username: ''};

        const username = 'ali';

        const action = actions.signInSuccess(username);

        const newState = user(initialState, action);

        expect(newState.username).toEqual('ali');
        expect(newState.isSignedIn).toBeTruthy();

    });

    it('should get initial state on SIGN_OUT', () => {
        const initialState = {username: ''};

        const action = actions.signOutSuccess();

        const newState = user(initialState, action);

        expect(newState.username).toEqual('');
        expect(newState.isSignedIn).toBeFalsy();
    });

    it('should show error on SIGIN_IN_FAILED', () => {
        const initialState = {username: 'ali', isSignedIn: true};

        const error = 'Username or password is incorrect';

        const action = actions.signInFailed(error);

        const newState = user(initialState, action);

        expect(newState.username).toEqual('ali');
        expect(newState.isSignedIn).toBeFalsy();
        expect(newState.signInFailed).toBeTruthy();
        expect(newState.error).toEqual('Username or password is incorrect');
    });

    it('should change credentials on CHANGE_CREDENTIAL', () => {
        const initialState = {username: 'ali', password: 'test', isSignedIn: true};

        const delta = {username: 'john', password: 'test1'};

        const action = actions.changeCredential(delta);

        const newState = user(initialState, action);

        expect(newState.username).toEqual('john');
        expect(newState.password).toEqual('test1');
        expect(newState.isSignedIn).toBeFalsy();
        expect(newState.signInFailed).toBeFalsy();
        expect(newState.error).toEqual('');
    });

});
