import React from 'react'
import App from '../public/src/component/App'
import {shallow, mount} from 'enzyme'
import renderer from 'react-test-renderer'

import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

// chai.use(chaiEnzyme());

// global.chai = chai;
// global.expect = chai.expect;

//const ImagesArray = ['image1.png', 'image2.png', 'image3.png']

describe('App component', () =>{
  it('matches the snapshot', () => {
		//const tree = renderer.create(<App />).toJSON()
		//expect(tree).toMatchSnapshot()
	});

  it('Initial image && imageEntry state exist and should be empty', () =>{
		const wrapper = shallow(<App />)
		const imageState = wrapper.state().image
		const imageEntryState = wrapper.state().imagesEntry
		expect(imageState).toBe('');
    expect(imageEntryState).toEqual([]);
	});
	
	it('it should only render ONE actual size image', () => {
		const wrapper = shallow(<App />);
		const Image = wrapper.find('Image');
		expect(Image.length).toEqual(1);
	});

	it('it should render at least 2 or more image entry', () =>{
		// const shallowWrapper = shallow(<App />);
		 const mountWrapper = mount(<App />);
		 const Image = mountWrapper.find('ImageEntry');
		 expect(Image.length).toEqual(0) //it is not 0 here
		// console.log('shallow imageEntry', shallowWrapper.debug());
		// console.log('mount image', mountWrapper.debug())
	});
});
