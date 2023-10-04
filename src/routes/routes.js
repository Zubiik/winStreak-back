const express = require('express');
const Model = require('../models/model');
const router = express.Router()

router.get('/getAll', async (req, res) => {
  try{
      const data = await Model.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
})
router.post('/post', async (req, res) => {
  const data = new Model({
      user: req.body.user,
      score: req.body.score
  })

  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
})
module.exports = router;