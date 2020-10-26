const Food = require("../models/food")
const { Router } = require("express")
const router = Router()
const foodData = require('../db/seedFood.json')

//seed route -- this works.
router.get('/seed', async (req, res) => {
    try {
        await Food.deleteMany({});
        const food = await Food.insertMany(foodData);
        res.json({ status: 200, data: food });
    } catch (err) {
        res.status(400).json({ err });
    }
});

//index route
router.get("/", async (req, res) => {
    const allFoods = await Food.find({})
    res.json( {status: 200, data: allFoods })
})

//get one by id route
router.get("/:id", async (req, res) => {
    const food = await Food.findById(req.params.id)
    res.json( {status: 200, data: food} )
})

//create route
router.post("/", async (req, res) => {
    const food = await Food.create(req.body)
    res.json( {status:200, data: food} )
})

//update one by id route
router.put("/:id", async (req, res) => {
    const food = await Food.findByIdAndUpdate(req.params.id, req.body,{new: true})
    res.json( {status:200, data: food} )
})

//delete one by id route
router.delete("/:id", async (req, res) => {
    res.json(await Food.findByIdAndRemove(req.params.id))
})

//export router
module.exports = router
