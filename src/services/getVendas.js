
import axios from 'axios';
const url = 'http://localhost:3001/vendas';




export function vendas (){   
                const dataVenda =  axios.get(url)
                .then((response) => {
                        const dados = response.data;
                        return dados;
                }).catch((error) => {
                        console.log(error)
                })         
                return dataVenda;    
        
        
}

   

//export function vendas (){  
//        const dados = [{id: 1, nome: 'paulo', idade: 40, nacionalidade: 'fortaleza'}, {id: 2, nome: 'paulo', idade: 40, nacionalidade: 'fortaleza'}]
//        return dados  
//
//}   








