import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25
    }
]
// all routes in here strt from 
router.get('/', (req, res) => {
    console.log(users)
    res.send(users);
});

router.post('/', (req, res) => {
    console.log("post route reached")
    const user = req.body;
    const userId = uuidv4();
    const userWithId = { ...user, id: userId }
    res.send("Post route reached")
    console.log(user)
    users.push(userWithId)
    console.log(users)
})

export default router;