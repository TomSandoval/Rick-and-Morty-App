const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharByDetail = (req,res) => {
    const {id} = req.params;

    axios
        .get(`${URL}/${id}`)
        .then(response => {
            const {id,name,origin,species,location,gender,image,status} = response.data;

            let character ={
                id: id,
                image: image,
                name: name,
                gender: gender,
                species: species,
                status: status,
                origin: origin?.name,
                location: location?.name
            };

            res.status(200).json(character);
        })
        .catch(err =>{
            res.status(500).json({error: err.message})
        })
}




module.exports = getCharByDetail