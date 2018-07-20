const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Image = require('../model/image');

router.get('/', (request, response, next) =>{
  Image.find()
  .exec()
  .then(images =>{
  	response.status(200).json(images);
  })
  .catch(err =>{
  	console.log(err);
  	response.status(500).json({
  		error:err
  	});
  });
});

router.get(':imageId', (request, response, next) =>{
  const id = request.params.imageId;
  Image.findById(id).exec().then( image =>{
  	console.log('single image', image);
  	if(image) response.status(200).json(image)
    else{
    	response.status(400).json({
    		message:'not valid image id / cannot find image'
    	});
    }
  })
  .catch( err=>{
  	console.log(err);
  	response.status(500).json({
  		error:err
  	});
  });
});

module.exports = router;