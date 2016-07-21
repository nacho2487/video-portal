import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import Video from './Video';
import mockApi from '../../mocks/apiMock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

// Test async action
const middleware = [thunk.withExtraArgument(mockApi)];
const mockStore =  configureMockStore(middleware);

describe ('Video Single component', () => {
    it('see one video complete', () => {
        const props = {
            onClickStar: () => { return Promise.resolve(); },
            video: {_id: '1', name: 'video1', ratings: [1,2,3], description: 'test description'}
        };

        const wrapper = shallow(<Video {...props}/>, { context: { store: mockStore() } });
        expect(wrapper.find('.video').length).toEqual(1);
        expect(wrapper.find('.title').text()).toBe('video1');
        expect(wrapper.find('.description').text()).toBe('test description');
    });
});
