import axios from 'axios';
import { useState, useEffect } from 'react';

const api = axios.create({ baseURL: "http://localhost:8000" });

export function useAPI(method, url, params){
  
  // console.log(`useAPI('${method}', '${url}', ${JSON.stringify(params)})`);

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const config = { url, method };

  if (method === "GET")
    config.params = params;
  else
    config.data = params;
  
  useEffect(() => {

    if (data != null) return;

    api.request(config)
      .then(res => res.data)
      .then(setData)
      .catch(error => {

        const { request, response } = error;

        // A response was received but it indicates failure of some kind (status is not 2XX)
        if (response)
          return setError(response.data);
        
        // The request was sent but the server didn't respond
        if (request)
          return setError("Unable to reach API. Maybe you forgot to start the API server?");

        // Request setup wasn't successful (no request was sent in the first place)
        setError("Unable to send request to API");

      });

  }, [config, data]);

  
  return [data, data == null && error == null, error];
    
}