import React, {Component} from 'react'

class ImageEntry extends Component{
  constructor(props) {
    super(props)
    console.log(this.props)
  }

  render(){
    return (
      <div>
        <img src = {this.props.image} />
      </div>
    )
  }
}


export default ImageEntry;