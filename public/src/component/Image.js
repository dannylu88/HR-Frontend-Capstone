import React, {Component} from 'react'
import ImageZoom from './ImageZoom'
import style from '../style/Image.css'


export default class Image extends Component {
  constructor(props){
    super(props)
    console.log('Image Props', this.props)
    this.state = {
      imageZoom: '',
      backgroundPosition: '0% 0%'
    }
  
    this.handleHoverZoom = this.handleHoverZoom.bind(this);
    this.handleHoverZoomEnd = this.handleHoverZoomEnd.bind(this);
  }
  
  handleHoverZoom(imageZoom){
    console.log('hover zoom', imageZoom);
    this.setState({
      imageZoom:''
    });
  }
  
  handleHoverZoomEnd(imageZoom){
    console.log('hover zoom end', imageZoom)
    this.setState({
      imageZoom: ''
    });
  }

  hihi(){
     'hihi'
  }

  render(){
    return(
    <div className={style.imageContainer}>
      <span>
        <img className = {style.image} src = {this.props.image} 
             onMouseMove = {() => this.handleHoverZoom(this.props.image)} onMouseLeave = {() => this.handleHoverZoomEnd()}/>
      </span>
      <ImageZoom zoomedImage = {this.state.imageZoom} backgroundPosition = {this.state.backgroundPosition}/>
    </div>
      );
  }
}

