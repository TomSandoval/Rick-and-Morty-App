const axios = require('axios')

const URL = "https://rickandmortyapi.com/api/character/";


const getCharById = (req,res) =>{
    const {id} = req.params;
    axios.get(`${URL}${id}`)
    .then(response => {
        const {id,name,species,image,gender} = response.data;
        
        const char = {
            id: id,
            name: name,
            species: species,
            image: image,
            gender: gender
        }

        res.status(200).json(char)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
}





module.exports = getCharById, URL