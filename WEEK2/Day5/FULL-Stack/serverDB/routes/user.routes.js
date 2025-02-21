import {Router} from 'express'
import {
    getAllUsers,
    getUserById,
    deleteUser,
    updateUser,
    createUser
} from "../controllers/user.controller.js"

const router =Router();


// router.get("/users",getAllUsers)

router.route('/users')
.get(getAllUsers)
.post(createUser)

router.route('/users/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser)

export default router