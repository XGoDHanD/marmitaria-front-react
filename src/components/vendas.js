import * as getVendas from '../services/getVendas'


function VendasList(){
  const vendas = getVendas.getVendas();
  
  return (      
      <div>
        {vendas?.map(venda => (
          <p key={venda.id}>{venda.data}{venda.abc}</p>
        ))}
      </div>     
   )
}

export default VendasList;


