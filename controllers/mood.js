const Mood = require('../models/mood');
const Food = require('../models/food');
const { Router } = require('express');
const router = Router();
const moodData = require('../db/seedMood.json');
const { STATES } = require('mongoose');

//seed route -- **NOT SURE IF WE NEED THIS?
router.get('/moods/seed', async (req, res) => {
	try {
		await Mood.deleteMany({});
		const mood = await Mood.insertMany(moodData);
		res.json({ status: 200, data: mood });
	} catch (err) {
		res.status(400).json({ err });
	}
});

//index route
router.get('/moods', async (req, res) => {
	res.json(await Mood.find({}).populate('foods'));
});

//get route by name:happy
router.get('/moods/happy', async (req, res) => {
	res.json(await Mood.find({ name: 'Happy' }).populate('foods'));
});

//get route by name:sad
router.get('/moods/sad', async (req, res) => {
	res.json(await Mood.find({ name: 'Sad' }).populate('foods'));
});

//create route
router.post('/moods', async (req, res) => {
	res.json(await Mood.create(req.body));
});

//update route - add food to mood by id - could not get this to work before so i copied the one from fruits/owner to get this
router.put('/:moodsId/addFoods/:foodsId', async (req, res) => {
	const food = await Food.findById(req.params.foodsId);
	const mood = await Mood.findByIdAndUpdate(req.params.moodsId, {
		$push: { foods: food.id },
		new: true,
	});
	res.json({ status: 200, data: mood });
});

//get by id route
router.get('/moods/:id', async (req, res) => {
	res.json(await Mood.findById(req.params.id));
});

//delete route
router.delete('/moods/:id', async (req, res) => {
	res.json(await Mood.findByIdAndRemove(req.params.id));
});

//export router
module.exports = router;
