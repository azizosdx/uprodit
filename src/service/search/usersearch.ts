import { Client } from "../axios";
import { endpoints } from "../endpoints";
import { SearchQS, UpUser } from "./userattr";


    const getUsers=async (
      querySettings : SearchQS={
          startIndex:0,
          maxResults:20,
      }):Promise<UpUser[]>=>{

          let endpoint=endpoints.search;

          console.log(Object.entries(querySettings))

          Object.entries(querySettings).forEach(([key,value])=>(endpoint += (key == "startIndex" || (key && value)) ? `&${key}=${value}` : ''))

          const resp=await Client.get<UpUser[]>(endpoint)
          return resp.data

    }

   export default getUsers

