import React from 'react'
import ImageEntry from '../public/src/component/ImageEntry'
import {shallow, mount} from 'enzyme'
import renderer from 'react-test-renderer'

describe('ImageEntry Component', () => {
  it('should render at least 2 images in entry lists', () => {
    const shallowWrapper = shallow(<ImageEntry />);
    //const ImageList = mountWrapper.find()
    console.log('mount ImageEntry', shallowWrapper.debug())
  });
});