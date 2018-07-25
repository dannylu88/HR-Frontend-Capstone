import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Gallery extends React.Component{
	constructor(props){
		super(props)
	}

	renderImage(imageUrl){
		return (
          <div>
          	<img src = {imageUrl} />
          </div>   
	    )
	}
	render(){
		return(

			<div className = 'gallery'>
			  <div className = 'images'>
			    {this.props.imageUrls.map((imageUrl, index) => (
			    	this.renderImage(imageUrl)))}
			  </div>
		     		
			</div>
		 );
	}
}

// Gallery.propTypes = {
//   imageUrls: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
// };

export default Gallery;