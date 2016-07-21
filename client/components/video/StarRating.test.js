import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import StarRating from './StarRating';
import mockApi from '../../mocks/apiMock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

// Test async action
const middleware = [thunk.withExtraArgument(mockApi)];
const mockStore =  configureMockStore(middleware);

describe ('Star Rating component', () => {
    before(function(){
        window.sessionStorage = {
            getItem: () => {
                return null;
            },
            setItem: () => {
                return '';
            }
        };
    });
    it('show correct number of starts', () => {
        const props = {
            onClickStar: () => { return Promise.resolve(); },
            videoId: '1',
            ratings: [3,3,3]
        };

        const wrapper = shallow(<StarRating {...props}/>, { context: { store: mockStore() } });
        expect(wrapper.find('.glyphicon-star').length).toEqual(3);
        expect(wrapper.find('.glyphicon-star-empty').length).toEqual(2);
    });

    it('correct behaviour on click star starts', () => {
        const props = {
            onClickStar: () => { return Promise.resolve(); },
            videoId: '1',
            ratings: [3,3,3]
        };

        const wrapper = mount(<StarRating {...props}/>, { context: { store: mockStore() } });
        expect(wrapper.find('.glyphicon-star').length).toEqual(3);
        expect(wrapper.find('.glyphicon-star-empty').length).toEqual(2);
        wrapper.find({'data-starPosition': 0}).first().simulate('click', { preventDefault() {} });
        expect(wrapper.find('.glyphicon-star').length).toEqual(1);
        expect(wrapper.find('.glyphicon-star-empty').length).toEqual(4);
    });

    it('correct behaviour on mouseOver star starts', () => {
        const props = {
            onClickStar: () => { return Promise.resolve(); },
            videoId: '1',
            ratings: [3,3,3]
        };

        const wrapper = mount(<StarRating {...props}/>, { context: { store: mockStore() } });
        expect(wrapper.find('.glyphicon-star').length).toEqual(3);
        expect(wrapper.find('.glyphicon-star-empty').length).toEqual(2);
        wrapper.find({'data-starPosition': 0}).first().simulate('mouseOver', { preventDefault() {} });
        expect(wrapper.find('.glyphicon-star').length).toEqual(1);
        expect(wrapper.find('.glyphicon-star-empty').length).toEqual(4);
    });
});
