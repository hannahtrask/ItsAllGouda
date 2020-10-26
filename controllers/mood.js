const Mood = require("../models/mood")
const { Router } = require("express")
const router = Router()
const moodData = require('../db/seedMood.json');
const { db } = require("../models/mood");
const Food = require("../models/food");

//seed route -- **NOT SURE IF WE NEED THIS?
router.get('/seed', async (req, res) => {
    try {
        await Mood.deleteMany({});
        const mood = await Mood.insertMany(moodData);
        res.json({ status: 200, data: mood });
    } catch (err) {
        res.status(400).json({ err });
    }
});

//index route
router.get("/", async (req, res) => {
    const moods = await Mood.find({}).populate('foods')
    res.json({ status: 200, data: moods })
    db.close()
})

//get one mood by id
router.get('/mood/:id', async (req, res) => {
    const mood = await Mood.findById(req.params.id)
    res.json( {status: 200, data: mood })
})

//create route
router.post("/mood", async (req, res) => {
    const mood = await Mood.create(req.body)
    res.json({ status: 200, data: mood })
})

//update route - add food to mood by id
router.put("/mood/:moodsId/addFoods/:foodsId", async (req, res) => {
    const food = await Food.findById(req.params.foodsId)
    const mood = await Mood.findByIdAndUpdate(
        req.params.moodsId,
        { $push: {foods: food.id}, new: true }
        )
        res.json({ status: 200, data: mood })
})


//delete route
router.delete("/:id", async (req, res) => {
    res.json(await Mood.findByIdAndRemove(req.params.id))
})

//export router
module.exports = router
