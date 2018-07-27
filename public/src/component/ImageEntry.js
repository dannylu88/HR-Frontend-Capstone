import React, {Component} from 'react'
import style from '../style/ImageEntry.css'

class ImageEntry extends Component{
  constructor(props) {
    super(props)
    console.log(this.props)
  }
  

  render(){
    return (
      <div>
        <img className = {style.imageEntry} src = {this.props.image} />
      </div>
    )
  }
}


export default ImageEntry;