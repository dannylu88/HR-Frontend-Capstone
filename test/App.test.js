import React from 'react'
import App from '../public/src/component/App'
import {shallow} from 'enzyme'

//const ImagesArray = ['image1.png', 'image2.png', 'image3.png']

describe('App component', () =>{
  it('state exist', () =>{
		const wrapper = shallow(<App />)
		const ImageState = wrapper.state().image
		expect(ImageState).toBe('')
		
	})
});
