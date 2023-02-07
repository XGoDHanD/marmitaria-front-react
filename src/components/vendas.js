//import vendasList from "../services/services";
const vendasData = require('../services/services')


function vendas(){
    const dados = vendasData.default();  
    console.log(dados);
    
}

export default vendas;