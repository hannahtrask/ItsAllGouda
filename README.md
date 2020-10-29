# UNIT3-backend
# It's All Gouda

## Project links

 - [Github project link](https://github.com/hannahtrask/UNIT3-backend)
 - [Github frontend link](https://github.com/hannahtrask/UNIT3-frontend)
 - [Live project link](live project link on heroku)

## Project Description

The idea behind these models is based on the user story that you can open our app, enter or choose your mood, and the screen will populate with a bunch of food and drink items that match that mood. From that selection (a GET route) you'll be able to add that item to your plate (an UPDATE route). You can also create your own plate or food (a PUT route), and remove a food or plate you've created (a DELETE route).

A couple of features we are hoping to have that involve the routes outline below: a My Mood Foods section where the user can maintain a list of foods for themselves. A homepage where the user chooses a mood from a dropdown menu to populate foods that match that mood. A create a food page where the user enters fields that match the keys outlined below, which can then be searched later in the user experience.

## Backend

#### Model

```javascript
const foodSchema = new Schema ({
  name: { type: String, required: true },
  author: String,
  course: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true }
})
```

#### Related Model

```javascript
const moodSchema = new Schema ({
  _name: { type: String, required: true }, 
  foods: [
    {
      ref: 'Food',
      type: mongoose.Schema.Types.ObjectId
    }
  ]_
})
```

#### Related Model — post MVP

```javascript
const plateSchema = new Schema ({
  name: { type: String, required: true },
  author: String,
  mood-foods: [
    {
      ref: 'Food',
      type: mongoose.Schema.Types.ObjectId
    }
  ]
})
```

## Routing Table

### Model

| URL | HTTP Verb | Action | Description   |
| --- | :---: |  :---:  | :---: |
| /foods       | GET       | index  | get all       |
| /foods       | POST      | create | create new    |
| /foods/:id   | GET       | show   | get one by id |
| /foods/:id   | PUT       | update | update single |
| /foods/:id   | DELETE    | delete | delete single |

## Related Model

| URL                         | HTTP Verb | Action | Description   |
| ---                         | :---:     |  :---: | :---:         |
| /moods                      | GET       | index  | get all       |
| /moods                      | POST      | create | create new    |
| /:foodId/addFoods/:moodsId  | PUT       | update | add food to mood w/ :id |
| /moods/:id                  | GET       | show   | get single mood w/ :id  |
| /moods/:id                  | DELETE    | delete | delete single |

 
 ## MVP/Post MVP
 ##### Unless otherwise noted, time is listed in hours.

 ### MVP
 
   * Express Server Setup
   * Install dependencies
   * Connect Mongoose/MongoDB
   * Seed data/route
   * Full CRUD Model #1
   * Full CRUD Related Model
   * deploy on Heroku
 
### Time Estimates

| Task | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---:  | :---: |
| express server setup      | h | 2  | x   |
| install dependencies      | h | 2  | x   |
| connect mongoose/mongoDB  | h | 2  | x   |
| seed data/route           | h | 2  | x   |
| full CRUD model 1         | h | 2  | x   |
| full CRUD related model   | h | 3  | x   |
| deploy on Heroku          | h | 2  | x   |
| Total                     | h | 15 | x   |
    
 ### Post MVP

  * add another model
  * full CRUD on another model
  * multiple moods associated with one food

  ### Time Estimates
  
| Task | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| add another model      | l | 4  | x |
| full CRUD on new model | l | 5  | x |
| Total                  | h | 9  | x |

## Additional Resources/Libraries

 - [MongoDB Cloud](https://cloud.mongodb.com/)
 - [Heroku](https://dashboard.heroku.com/)

## Code Snippet

This is a code snippet that allow us to access foods by choosing a mood first.

```javascript
router.put('/moods/:name', async (req, res) => {
	const specificMood = await Mood.findOne({ name: req.params.name });
	const newFood = await Food.create(req.body);
	res.json(specificMood.foods.push(newFood));
	specificMood.save();
});
```
