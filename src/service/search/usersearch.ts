import { Client } from "../axios";
import { endpoints } from "../endpoints";
import { SearchQS, UpUser } from "./userattr";


    const getUsers=async (
      querySettings : SearchQS={
          startIndex:0,
          maxResults:15,
      }):Promise<UpUser[]>=>{

          let endpoint=endpoints.search;


          Object.entries(querySettings).forEach(([key,value])=>(endpoint += (key == "startIndex" || (key && value)) ? `&${key}=${value}` : ''))

          const resp=await Client.get<UpUser[]>(endpoint)
          console.log(resp.data)
          return resp.data

    }

export default getUsers

