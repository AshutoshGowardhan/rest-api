import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

const users = [
]
// all routes in here strt from 
router.get('/', (req, res) => {
    console.log(users)
    res.send(users);
});

router.post('/', (req, res) => {
    console.log("post route reached")
    const user = req.body;
    res.send("Post route reached")
    users.push({ ...user, id: uuidv4() })
})

router.get('/:id', (req, res) => {

    const { id } = req.params
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser)
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id)
})

export default router;