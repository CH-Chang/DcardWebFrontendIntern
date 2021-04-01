import React from "react"

import { ListBox } from "./style";

import { connect } from "react-redux";

import Card from "../card/index";

const Index = (props) => {

    const { scenicSpots } = props;
    return (
        <ListBox>
            {
                scenicSpots.map((elem, idx) => {
                    return <Card data={elem}/>
                })
            }
        </ListBox>
    )
}

const mapStateToProps = (state) => {
    return {
        scenicSpots: state.getIn(["scenicSpot", "scenicSpots"]).toJS(),
    }
}

export default connect(mapStateToProps, null)(Index);