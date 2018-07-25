import React from 'react'
import ReactDOM from 'react-dom'
import Gallery from './component/App'

// const app = document.getElementById('root')

const app = document.getElementById('root');

let imageUrls = [
	".../Img/amazon-phone-1.png",
	".../Img/amazon-phone-2.png",
	".../Img/amazon-phone-3.png"
];

ReactDOM.render(<Gallery imageUrls = {imageUrls} />, app);