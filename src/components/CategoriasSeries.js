import { useState, useEffect } from "react";
import Carousel from "../components/Carousel"

const CategoriasSeries = ({url}) =>{
    const [series, setSeries] = useState([]);

    useEffect(() => {
      fetch( url )
        .then((res) => res.json())
        .then((data) => setSeries(data.results));
    }, []);

    console.log(series)
  
    return(
      <Carousel  data={series}/>
    )
}

export default CategoriasSeries;