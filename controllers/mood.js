const Mood = require("../models/mood")
const { Router } = require("express")
const router = Router()
//const moodData = require('../db/seedMood.json')

//seed route -- **NOT SURE IF WE NEED THIS?
// router.get('/seed', async (req, res) => {
//     try {
//         await Mood.deleteMany({});
//         const mood = await Mood.insertMany(moodData);
//         res.json({ status: 200, data: songs });
//     } catch (err) {
//         res.status(400).json({ err });
//     }
// });

//index route
router.get("/moods", async (req, res) => {
    res.json(await Mood.find({}))
})

//create route
router.post("/moods", async (req, res) => {
    res.json(await Mood.create(req.body))
})

//update route - add food to mood by id
router.put("/:moodsId/addFoods/:foodsId", async (req, res) => {
    res.json(await Mood.findByIdAndUpdate(req.params.id, req.food, { new: true }))
})

//get by id route
router.get("/moods/:id", async (req, res) => {
    res.json(await Mood.findById(req.params.id))
})

//delete route
router.delete("/moods/:id", async (req, res) => {
    res.json(await Mood.findByIdAndRemove(req.params.id))
})

//export router
module.exports = router
