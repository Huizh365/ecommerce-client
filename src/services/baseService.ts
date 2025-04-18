import { AxiosResponse } from 'axios'

export const BASE_URL = "https://ecommerce-api-mocha.vercel.app/"

export const handleRequest = async<T>(request: Promise<AxiosResponse<T>>): Promise<T> => {
    try{
      const response = await request;
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }