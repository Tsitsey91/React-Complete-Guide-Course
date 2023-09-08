
// here we want to know from the dynamic url which product 
// was selected so that we can fetch the corresponding data

import { useParams } from "react-router-dom"

// from our backend
const ProductDetails = () => {
    // useParams returns an object which contains every dynamic path segment
    // we defined in our path definition, as a property
    const params = useParams()

    // params.productID  //see dynamic path in App.js > createBrowserRouter
    // from this we know which product was selected so we can fetch the data


    return <>
        <h1>product details...</h1>
        <p>{params.productID}</p>
    </>
}

export default ProductDetails