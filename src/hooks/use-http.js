import { useCallback, useState } from "react";

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfig, applyData) => {
        setIsLoading(true);
        setError(null);
        try {
            console.log('sending request (custom hook)')
            const response = await fetch(
                requestConfig.url,
                {
                    method: requestConfig.method ? requestConfig.method : 'GET',
                    headers: requestConfig.headers ? requestConfig.headers : {},
                    body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
                }
            );

            if (!response.ok) {
                console.log(response)
                throw new Error('Request failed!');
            }

            const data = await response.json();
            applyData(data)// this function will be provided by each component
            // that uses this custom hook in order to manipulate the data
            // accordingly (for example we need different manipulation for 
            // a GET request & a POST request...)

        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, []) // we have no external dependencies list now since applyData is now a parameter of the funtion
    // not an ext dependency

    // we need to return the 2 states and the 'sendRequest' function so 
    // that the component which uses the hook can call the function and also 
    // get access to the 2 states
    return {
        isLoading: isLoading,
        error: error,
        sendRequest: sendRequest
    }
}

export default useHttp