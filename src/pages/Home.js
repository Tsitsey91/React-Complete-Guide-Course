import React from 'react'
import { Link } from 'react-router-dom'
// Use Link not 'a' tag for links in react-apps
// because the 'a' tag under the hood sends an http request to the server
// and reloads the whole react-app and javascript. This is not good in
// terms of performance and also you lose the current state that your
// react-app is because of the reloading
function HomePage() {
    return (
        <div>
            <h1>My HomePage</h1>
            <p>Go to the
                <Link to='/products'>products</Link>
                route/page
            </p>
        </div>
    )
}

export default HomePage