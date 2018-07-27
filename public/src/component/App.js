import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import ImageEntry from './ImageEntry'
import Image from './Image'
import style from '../style/App.css'

class Gallery extends React.Component{
	constructor(props){
		super(props)
		console.log(this.props)
    this.fetchImageEntry();
    this.fetchImage();
		this.state = {
      images: [],
      image:''
		}

	}
   
   fetchImageEntry(){
   	axios.get('/image/5b5a7615c377690e4dd632cf')
   	.then(response =>{
   		//console.log('below is response',response);
   		let images = [];
       console.log('data', response.data)
       let imagesSplit = response.data.imageUrl[0].split(',');
    
      for(let i = 0; i < imagesSplit.length; i++){
        //trim get rid of spaces (my input typo)
        let imageUrl = imagesSplit[i].trim();
        images.push(imageUrl);
      }
      this.setState({
        images: images
      });
		   
   		console.log('imageUrl in Array: ',this.state.images)
   	})
   	.catch(err =>{
      console.log(err);
   	});
   }

   fetchImage(){
     axios.get('image/5b5a7615c377690e4dd632cf')
     .then(response =>{
        let initialImg = response.data.imageUrl[0].split(',')[0];
        console.log('initialimg',initialImg);
        this.setState({image:initialImg});
     })
     .catch(err =>{
       console.log(err);
     });
    //console.log(this.state.image)
   }

   render(){
    return(
      <span className = {style.gallery}>
			  <div className = {style.thumbnail}>
        {this.state.images.map(image => (
          <ImageEntry 
            image = {image}
            //key is unique by URL
            key = {image}
          />
        ))}
        </div> 	
        <Image image={this.state.image}/>	
			</span>
		 );
    }
  }
  
  // Gallery.propTypes = {
    //   imageUrls: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
    // };
    
    export default Gallery;
// renderImage(){
// 	 let images = [];
// 	 for (let i = 0; i < this.props.imageUrls.length; i++){
// 	 	images.push(
//         <div key = {i}>

// 	 		<img src = {this.props.imageUrls[i]} />
// 	 		</div>)
// 	 };
//    return images;
// }
// renderImage(imageUrl){
// 	return (
//          <div>
//          	<img src = {imageUrl} />
//          </div>   
//     )
// }