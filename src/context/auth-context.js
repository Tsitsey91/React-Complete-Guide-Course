import React from "react";


// it creates a 'context object'.
// It takes a default context. The 'context' is just our app or
// component wide State!

// We will use it to solve the 'problem' of passing props through many
// components (e.g. see isLoggedIn in App.js which forwarded to MainHeader
// and Navigation and so on...). Instead of forwarding props and functions
// through so many components, we will just use the Context API to
// achieve the same
// Note: AuthContext is an object that will contain a component
const AuthContext = React.createContext({
    isLoggedIn:false
})

export default AuthContext

/*
to use Context in your app
you need to do two things: Provide it and Consume it ...

You need to PROVIDE it, which basically tells React,
"Hey, here's my Context."
All components that are "wrapped" by it
should have access to it.
And besides providing, you then need to CONSUME it.
You need to hook into it, you need to listen to it,
if you wanna call it like this.
Now, providing is always the first step.
Providing means that you wrap in JSX code
all the components that should be able to tap
into that Context.
So that should be able to listen to that Context.
Any component that's not wrapped will not be able to listen.
*/