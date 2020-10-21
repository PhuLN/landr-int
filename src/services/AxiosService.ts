import Axios from "axios";
import { baseApiUrl } from "../configs/ApiEndpoints";

export const axios = Axios.create({
  baseURL: baseApiUrl,
});
