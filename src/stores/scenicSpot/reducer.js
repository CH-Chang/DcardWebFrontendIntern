import { fromJS } from "immutable";

import { actionTypes } from "./index";

const defaultState = fromJS({
    filterFormData: {
        city: [
            {"label":"全部", "value":"all"},
            {"label":"臺北市","value":"Taipei"},
            {"label":"新北市","value":"NewTaipei"},
            {"label":"桃園市","value":"Taoyuan"},
            {"label":"臺中市","value":"Taichung"},
            {"label":"臺南市","value":"Tainan"},
            {"label":"高雄市","value":"Kaohsiung"},
            {"label":"基隆市","value":"Keelung"},
            {"label":"新竹市","value":"Hsinchu"},
            {"label":"新竹縣","value":"HsinchuCounty"},
            {"label":"苗栗縣","value":"MiaoliCounty"},
            {"label":"彰化縣","value":"ChanghuaCounty"},
            {"label":"南投縣","value":"NantouCounty"},
            {"label":"雲林縣","value":"YunlinCounty"},
            {"label":"嘉義縣","value":"ChiayiCounty"},
            {"label":"嘉義市","value":"Chiayi"},
            {"label":"屏東縣","value":"PingtungCounty"},
            {"label":"宜蘭縣","value":"YilanCounty"},
            {"label":"花蓮縣","value":"HualienCounty"},
            {"label":"臺東縣","value":"TaitungCounty"},
            {"label":"金門縣","value":"KinmenCounty"},
            {"label":"澎湖縣","value":"PenghuCounty"},
            {"label":"連江縣","value":"LienchiangCounty"},
        ]
    },
    currentSkip: 0,
    scenicSpots: []
});

export default (state=defaultState, action) => {
    switch(action.type){
        case actionTypes.GET_SCENICSPOT_SPOT:
            if(action.value.newSkip===30){
                return state.set("currentSkip", action.value.newSkip).set("scenicSpots", action.value.data);
            }
            return state.set("currentSkip", action.value.newSkip).set("scenicSpots", state.get("scenicSpots").merge(action.value.data));
        default:
            return state;
    }
}