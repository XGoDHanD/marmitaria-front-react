import axios from 'axios';




export default function vendasList(){

    axios.get('http://localhost:3001/vendas')
    .then((resp) => resp.json())
    .then((data) => {
      return data;
    })
  }