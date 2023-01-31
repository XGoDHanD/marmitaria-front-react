const { getAllByLabelText } = require('@testing-library/react');


const axios = require('axios').default;
const url = 'http://localhost:3001/vendas';


const data = {};

exports.getAll = function (){   
    axios.get(url)
    .then(response =>{
        console.log(response)
    })
    .catch(error => console.log(error))
}



