import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl'

export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                width: '100%',
                height:  '100vh',
                latitude: -1.2544011203660779,
                longitude:  36.74446105957031,
            }
        }
    }

    render() {
        return (
            // <div id="map">
                <ReactMapGL
                    mapboxApiAccessToken= {process.env.REACT_APP_MAPBOX_TOKEN}
                    mapStyle = "mapbox://styles/graceamondi/ck1p6wqfs0vj81cqwbikdv87j"
                    {...this.state.viewport}
                    onViewportChange={(viewport) => this.setState({viewport})}
                ></ReactMapGL>
            // </div>
        )
    }
}
