import * as vendas from '../services/getVendas'

//const GetAllVendas = require('../services/getVendas')

const dados = vendas.vendas();

console.log(dados)


function VendasList(){  
  return (      
      <div>
        <p></p>
      </div>     
   )
}

export default VendasList;


