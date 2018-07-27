import React, {Component} from 'react'
import style from '../style/ImageZoom.css'

export default class ImageZoom extends Component{
    constructor(props){
      super(props)
      console.log('ImageZoom props', this.props)
    }
    
    render(){
        return (
         <span styles = {this.props.backgroundPosition}>
           <img src = {this.props.zoomedImage} />
         </span>
        );
    }
}