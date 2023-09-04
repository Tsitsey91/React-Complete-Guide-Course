import { useState } from "react";

const useHttp = (requestConfig, applyData) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                requestConfig.url,
                {
                    method: requestConfig.method ? requestConfig.method : 'GET',
                    headers: requestConfig.headers ? requestConfig.headers : {},
                    body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
                }
            );

            if (!response.ok) {
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
    };
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