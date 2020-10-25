const Food = require("../models/food")
const { Router } = require("express")
const router = Router()
// const foodData = require('../db/seedFood.json')

// //seed route -- **NOT SURE IF WE NEED THIS?
// router.get('/seed', async (req, res) => {
//     try {
//         await Food.deleteMany({});
//         const food = await Food.insertMany(foodData);
//         res.json({ status: 200, data: songs });
//     } catch (err) {
//         res.status(400).json({ err });
//     }
// });

//index route
router.get("/foods", async (req, res) => {
    res.json(await Food.find({}))
})

//create route
router.post("/foods", async (req, res) => {
    res.json(await Food.create(req.body))
})

//get one by id route
router.get("/foods/:id", async (req, res) => {
    res.json(await Food.findById(req.params.id))
})

//update one by id route
router.put("/foods/:id", async (req, res) => {
    res.json(await Food.findByIdAndUpdate(req.params.id, req.body, { new: true }))
})

//delete one by id route
router.delete("/foods/:id", async (req, res) => {
    res.json(await Food.findByIdAndRemove(req.params.id))
})

//export router
module.exports = router
