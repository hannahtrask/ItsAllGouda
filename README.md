# UNIT3-backend
# App

## Project links

 - [Github project link](https://github.com/hannahtrask/UNIT3-backend)
 - [Github frontend link](https://github.com/hannahtrask/UNIT3-frontend)
 - [Live project link](live project link on netlify)

## Project Description

The idea behind these models is based on the user story that you can open our app, enter or choose your mood, and the screen will populate with a bunch of food and drink items that match that mood. From that selection (a GET route) you'll be able to add that item to your plate (an UPDATE route). You can also create your own plate or food (a PUT route), and remove a food or plate you've created (a DELETE route).

A couple of features we are hoping to have that involve the routes outline below: a myPlates section where the user "builds a meal" for themselves. A homepage where the user chooses a mood from a dropdown menu to populate matching foods. A create a food page where the user enters fields that match the keys outlined below, which can then be searched later in the user experience.

## Backend

#### Model

```
const foodSchema = new Schema ({
  name: { type: String, required: true },
  author: String,
  mood: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true }
})
```

#### Related Model

```
const plateSchema = new Schema ({
  name: { type: String, required: true },
  author: String,
  foods: [
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
| /   | GET       | index  | get all       |
| /.. | POST      | create | create new    |
| /.. | PUT       | show   | get single    |
| /.. | GET       | update | update single |
| /.. | DELETE    | delete | delete single |

## Related Model

| URL | HTTP Verb | Action | Description   |
| --- | :---: |  :---:  | :---: |
| /.. | GET       | index  | get all       |
| /.. | POST      | create | create new    |
| /.. | PUT       | show   | get single    |
| /.. | GET       | update | update single |
| /.. | DELETE    | delete | delete single |

 
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
| express server setup      | h | 1  | x   |
| install dependencies      | h | 1  | x   |
| connect mongoose/mongoDB  | h | 1  | x   |
| seed data/route           | h | 1  | x   |
| full CRUD model 1         | h | 1  | x   |
| full CRUD related model   | h | 1  | x   |
| deploy on Heroku          | h | 1  | x   |
| Total                     | h | 7  | x   |
    
 ### Post MVP

  * add another model
  * full CRUD on another model

  ### Time Estimates
  
| Task | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| add another model      | l | 2  | x |
| full CRUD on new model | l | 3  | x |
| Total                  | h | 5  | x |

## Additional Resources

 - [MongoDB Cloud](https://cloud.mongodb.com/)
 - [Heroku](https://dashboard.heroku.com/)

## Code Snippet

here's a code snippet or two we're all really proud of

```
code snippet
```
