import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { connect } from 'react-redux';
class Point extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: this.props.location ? this.props.location : {}
        }
    }
    componentWillMount() {
        console.log('componentWillMount')
    }
    componentDidMount() {
        //this.delayedShowMarker()
    }
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps")
        console.log("nextProps", nextProps)
        if (nextProps !== this.props) {
            this.setState({
                location: nextProps.location
            })
        }
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
        console.log('point run')
        return (
            <Marker position={this.state.location} />
        );
    }
};
const mapStateToProps = state => {
    return {
        location: state.Locations.location
    }
}
export default connect(mapStateToProps)(Point);