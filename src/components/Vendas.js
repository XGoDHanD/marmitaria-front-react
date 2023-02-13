import * as vendas from '../services/getVendas'

//const dados = await vendas.vendas().then((res) => {
//  const retornoDados = res.data;
//  return retornoDados;
//});
//
//console.log(dados)


const dados = vendas.vendas();


//console.log(dados)

//const dados = vendas.vendas();


function VendasList(){  
  return (      
      <div>
        {dados.map((dado) => {
          return <p key={dado.id}>{dado.nome}, {dado.idade}, {dado.nacionalidade}</p>
        })}
      </div>     
   )
}

export default VendasList;


