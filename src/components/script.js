import React, {Component} from "react";
import Script from 'react-load-script';

class LoadScript extends Component {

    render() {
        return (
            <Script
                url='https://s3-us-west-2.amazonaws.com/s.cdpn.io/23500/ps-0.9.js'
                onLoad={this.handleScriptLoad.bind(this)}
                onError={this.handleScriptError.bind(this)}
                onCreate={this.handleScriptCreate.bind(this)}
            />
        )
    }

    handleScriptCreate() {
        console.log("Script Created");
    }

    handleScriptError() {
        console.log("Script Error");
    }

    handleScriptLoad() {
        const isMobile = navigator.userAgent &&
            navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
        const isSmall = window.innerWidth < 1000;
        const ps = new window.ParticleSlider({
            ptlGap: isMobile || isSmall ? 3 : 0,
            ptlSize: isMobile || isSmall ? 3 : 1,
            width: 1e9,
            height: 1e9
        }).init(true);
    }
}

export default LoadScript;