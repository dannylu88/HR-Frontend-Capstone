import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Gallery extends React.Component{
	constructor(props){
		super(props)
		console.log(this.props)
		
	}
   
   renderImage(){
   	 let images = [];
   	 for (let i = 0; i < this.props.imageUrls.length; i++){
   	 	images.push(
           <div key = {i}>
 
   	 		<img src = {this.props.imageUrls[i]} />
   	 		</div>)
   	 };
      return images;
   }
	// renderImage(imageUrl){
	// 	return (
 //          <div>
 //          	<img src = {imageUrl} />
 //          </div>   
	//     )
	// }
	render(){
		return(

			<div className = 'gallery'>
			  <div className = 'images'>
                {this.renderImage()}
			  </div>
		     		
			</div>
		 );
	}
}

// Gallery.propTypes = {
//   imageUrls: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
// };

export default Gallery;