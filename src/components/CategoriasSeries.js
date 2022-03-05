import { useState, useEffect } from "react";

const CategoriasSeries = ({url}) =>{
    const [series, setSeries] = useState([]);

    useEffect(() => {
      fetch( url )
        .then((res) => res.json())
        .then((data) => setSeries(data.results));
    }, []);

    console.log(series)
  
    return(
        <div>
            <h3>titulo</h3>
            <div>Series</div>
        </div>
    )
}

export default CategoriasSeries;