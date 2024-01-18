import axios from "axios";
const baseUrl = "https://themealdb.com/api/json/v1/1";
const urlJson = "http://localhost:3000";
export const callJson = async (endpoint, method, data) => {
    try {
        const response = await axios({
            method,
            url: `${urlJson}${endpoint}`,
            data
        })    
        return response.data
    } catch (error) {
        throw error;
    }
}

export const callAPI = async (
    endpoint,
    method,
    headers = {},
    params = {},
    data = {}
  ) => {
    const options = {
      url: baseUrl + endpoint,
      method,
      headers,
      params,
      data,
    };
  
    return axios(options).then((response) => {
      const responseAPI = response?.data;
      return responseAPI;
    });
  };