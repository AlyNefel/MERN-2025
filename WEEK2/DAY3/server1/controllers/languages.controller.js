import {languages} from '../configs/languages.js'
// get all languages
const getAllLanguages=(req,res)=>{
    res.json(languages)
}

// get language by id 
const getLanguageById=(req,res)=>{
   
    const {id}=req.params
    const language=languages.find(lang=>lang.id === parseInt(id))
    if(language){
        res.status(201).json(language)
    } else {
        res.status(404).send("stop using the url directly !!!")
    }
}

// post or create language
const createLanguage=(req,res)=>{
   
    const newLanguage=req.body
    languages.push(newLanguage)
    res.status(200).json(languages)

}

export {getAllLanguages,
    getLanguageById,
    createLanguage
}