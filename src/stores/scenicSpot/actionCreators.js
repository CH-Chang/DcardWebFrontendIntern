import { fromJS } from "immutable"

import { apiGetScenicSpot } from "../../apis/tourism";

import { actionTypes } from "./index";

export const getScenicSpot = (skip, city) => {
    return (dispatch) => {
        apiGetScenicSpot(skip, city)
            .then((res) => {
                if(res.status===200){
                    if(res.data.length===0){
                        dispatch(getScenicSpotAction({
                            data: res.data,
                            newSkip: -1,
                        }))
                    } else {
                        dispatch(getScenicSpotAction({
                            data: res.data,
                            newSkip: skip+30,
                        }))
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
}


const getScenicSpotAction = (value) => {
    return {
        type: actionTypes.GET_SCENICSPOT_SPOT,
        value: {
            data: fromJS(value.data),
            newSkip: value.newSkip,
        },
    }
}