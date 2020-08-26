import axios from 'axios';

const api = axios.create({ baseURL: "http://localhost:8000" });

export function formatError(error){
  const { request, response } = error;

  // A response was received but it indicates failure of some kind (status is not 2XX)
  if (response)
    return response.data;
  
  // The request was sent but the server didn't respond
  if (request)
    return "Unable to reach API. Maybe you forgot to start the API server?";

  // Request setup wasn't successful (no request was sent in the first place)
  return "Unable to send request to API";
}

export default api;