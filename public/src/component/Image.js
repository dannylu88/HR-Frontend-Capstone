import React, {Component} from 'react'
import ImageZoom from './ImageZoom'
import style from '../style/Image.css'


export default class Image extends Component {
  constructor(props){
    super(props)
    console.log('Image Props', this.props)
    this.state = {
      imageZoom: '',
      backgroundPosition: '30% 30%'
    }
  
    this.handleHoverZoom = this.handleHoverZoom.bind(this);
    this.handleHoverZoomEnd = this.handleHoverZoomEnd.bind(this);
  }
  
  handleHoverZoom(imageZoom){
    console.log('hover zoom', imageZoom);
    this.setState({
      imageZoom:imageZoom
    });
  } 
  
  handleHoverZoomEnd(imageZoom){
    console.log('hover zoom end', imageZoom)
    this.setState({
      imageZoom: ''
    });
  }

  // handleMouseMove = e => {
  //   const { left, top, width, height } = e.target.getBoundingClientRect()
  //   const x = (e.pageX - left) / width * 100
  //   const y = (e.pageY - top) / height * 100
  //   this.setState({ backgroundPosition: `${x}% ${y}%` })
  // }
  render(){
    return(
    <div className={style.imageContainer}>
      <span>
        <img className = {style.image} src = {this.props.image} 
             onMouseOver = {() => this.handleHoverZoom(this.props.image)} onMouseLeave = {() => this.handleHoverZoomEnd()}/>
      </span>
      <ImageZoom zoomedImage = {this.state.imageZoom} backgroundPosition = {this.state.backgroundPosition}/>
    </div>
      );
  }
}

