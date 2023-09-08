import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
// Use Link not 'a' tag for links in react-apps
// because the 'a' tag under the hood sends an http request to the server
// and reloads the whole react-app and javascript. This is not good in
// terms of performance and also you lose the current state that your
// react-app is because of the reloading
function HomePage() {

    // imperative routing. We do not provide link to navigate the user but 
    // instead we do it programmatically. This could be used because a form
    // was submitted or a timer expired etc. Here we use it on a button which
    // is not what we would do in a real app. The general default way is 
    // to use Links
    const navigate = useNavigate()
    const navigateToProducts = () => {
        navigate('products')
    }

    return (
        <div>
            <h1>My HomePage</h1>
            <p>Go to the
                <Link to='products'>products</Link>
                route/page
            </p>
            <p>
                <button onClick={navigateToProducts}>show products</button>
            </p>
        </div>
    )
}

export default HomePage