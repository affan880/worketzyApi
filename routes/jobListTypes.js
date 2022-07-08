const express = require('express');
const router = express.Router();
const List = require('../models/List');

router.get('/', async (req, res) => { 
    try {
        const lists = await List.find();
        res.json(lists);
    }
    catch (err) { 
        res.status(500).json({ message: err.message });
    }
})

router.post('/', async (req, res) => { 
    const list = new List({
        title: req.body.title,
        id: req.body.id,
        subtitle: req.body.subtitle
    })
    try { 
        const newList = await list.save();
        res.status(201).json(newList);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
// get by id
router.get('/:id', getJobTitle, (req, res) => { 
    try {
        res.send(res.list);
    }
    catch (err) { 
        res.status(500).json({ message: err.message });
    }
 })
// delete 
async function getJobTitle(req, res, next) {
    let list
    try {
        list = await List.findById(req.params.id);
        if (list == null) { 
            return res.status(404).json({ message: 'Cannot find list' });
        }
     }
    catch (err){
        return res.status(500).json({ message: err.message });
    }
    res.list = list
    next()
 }


module.exports = router;