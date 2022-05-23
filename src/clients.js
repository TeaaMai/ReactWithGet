import React from 'react'
import axios from 'axios'

export default function getClientes(){

    const getData = async ()=>{
        const url = "https://apigrupogr.com/grapi/clientes/lista-clientes";

        let results = await axios({
        url,
          method: 'GET',
          dataType: 'json',
          ContentType: 'application/json',
        });
        console.log(results)
    }


    return(

        <div>
            <button onClick={getData}>Consultar</button>
        </div>
    )

}