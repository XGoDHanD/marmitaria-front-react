//const axios = require('axios').default;
import axios from 'axios';
const url = 'http://localhost:3001/vendas';





export function getVendas (){       
       
       const dataVendasBd = axios.get(url).then(res => {
                                                res.json();
                                        }).then(data => {
                                                console.log(data.id)
                                        }).catch(error => {console.log(error)});  
                                        
                                        
       
       const dataVendas = [{id: 4, data: "ggg", abc: 55},{id: 1, data: "kkk", abc: 99}]     
       
       console.log(dataVendas);
       console.log(dataVendasBd);
       
       
       return dataVendas;



}










