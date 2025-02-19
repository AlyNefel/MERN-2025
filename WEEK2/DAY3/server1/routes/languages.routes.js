import {Router} from 'express'
//Router is just a feature that allow us to organize our project

import {getAllLanguages,getLanguageById,createLanguage} from '../controllers/languages.controller.js'

const router = Router()

router.route('/languages')
.get(getAllLanguages)
.post(createLanguage)

router.get("/languages/:id",getLanguageById)

export default router