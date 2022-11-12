import { Client } from "../axios";
import { endpoints } from "../endpoints";
import { GetImageResponse } from "./attribute";


const getImage=async(id: string)=>
   {
    const endpoint = `${endpoints.image}/${id}`;

    const imageResponse = await Client.get<GetImageResponse>(endpoint);
    return imageResponse.data;
  }

export default getImage;
