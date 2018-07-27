import React, {Component} from 'react'
import style from '../style/Image.css'

export default class Image extends Component {
  
  render(){
    return(
    <span>
      <img className = {style.image} src = {this.props.image} />
    </span>
      );
    
  }
}

