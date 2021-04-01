import axios from "axios";
import moment from "moment";

import {HMACSHA1Hash} from "../utils/HMACSHA1Helper";

import PTXConfig from "../configs/PTXConfig";

// axios實例化
const apiTourism = axios.create({
    baseURL: "https://ptx.transportdata.tw/MOTC/v2/Tourism/",
})

// 加入攔截器
apiTourism.interceptors.request.use(
    (config) => {

        // 取得現在時間並格式為接口要求之格式
        const xDate = moment().utc().zone(0).format("ddd, DD MMM YYYY HH:mm:ss [GMT]");
        
        // 取得加密過的Authorization
        const authorization = `hmac username="${PTXConfig.APPID}", algorithm="hmac-sha1", headers="x-date", signature="${HMACSHA1Hash(`x-date: ${xDate}`, PTXConfig.APPKEY)}"`

        // 加入headers
        config.headers["Authorization"] = authorization;
        config.headers["x-date"] = xDate;

        return Promise.resolve(config);
    },
    (err) => {
        console.log(err);
        return Promise.reject(err);
    }
)

// GET
export const apiGetScenicSpot = (skip, city) => apiTourism.get(`/ScenicSpot/${ city ? city : ""}`, {params: {"$top": 30, "$skip": skip, "$format": "JSON"}})