import React, { Component } from 'react';
import { loadDB } from '../../lib/db';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { connect } from 'react-redux';
import Point from './Point'
class MyMapComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            isMarkerShown: false,
            location: {}
        }
    }
    componentDidMount() {
        //this.delayedShowMarker()
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 3000)
    }

    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
    }

    render() {
        console.log('ren')
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultZoom={16}
                defaultCenter={{ lat: 10.8641523, lng: 106.7822894 }}
            >
                <Point />
            </GoogleMap>
        ));
        return (
            <div>
                <GoogleMapExample
                    mapElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `900px` }}/>}
                    loadingElement= {<div style={{ height: `100%` }} />}
                />
              
            </div>
        );
    }
};

export default  MyMapComponent;