
import axios from 'axios';



export default function vendasList(){

    const dados = axios.get('http://localhost:3001/vendas')
    .then(response =>{
      console.log(response.data)     
    })


   //return (
   //    <container>
   //        <div id='vendas'>              
   //            {dados?.map((dado) => (
   //                <dado
   //                    key={dado.id}
   //                    id={dado.id}
   //                    cliente={cliente.id}
   //                    prato={prato.id}                    
   //                />
   //            ))}  
   //        </div>            
   //    </container>
   //)
}


