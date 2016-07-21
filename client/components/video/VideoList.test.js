import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import VideoList from './VideoList';
import Video from './Video';
import mockApi from '../../mocks/apiMock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

// Test async action
const middleware = [thunk.withExtraArgument(mockApi)];
const mockStore =  configureMockStore(middleware);

describe ('Video List component', () => {
  it('see at least one video', () => {
    const props = {
      actions: { clickStar: () => { return Promise.resolve(); }},
      videos: [{_id: '1', name: 'video1', ratings: [1,2,3]}]
    };

    const wrapper = shallow(<VideoList {...props}/>, { context: { store: mockStore() } });
    expect(wrapper.find(Video).length).toEqual(1);
  });
});
