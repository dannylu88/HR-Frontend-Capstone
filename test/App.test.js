import React from 'react'
import App from '../public/src/component/App'
import {shallow} from 'enzyme'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme());

global.chai = chai;
global.expect = chai.expect;

//const ImagesArray = ['image1.png', 'image2.png', 'image3.png']

describe('App component', () =>{
  it('Initial image state exist and equal to empty string', () =>{
		const wrapper = shallow(<App />)
		const ImageState = wrapper.state().image
		expect(ImageState).toBe('');
	});
	
	it('....', () => {
		const wrapper = shallow(<App />)
		expect(wrapper.find('.imageContainer')).to.have.lengthOf(0);
		expect(wrapper.find(Image)).to.have.lengthOf(1);
	});

});
