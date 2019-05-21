import React from "react";



export default class Image extends React.Component {
    render() {
        const imgStyle = {
            height: '200px',
            width: '200px',
            
        };        
        if(Boolean(this.props.isRounded)) {
            imgStyle["borderRadius"] = '50%';
        }
        return (
            <img src = {this.props.url} style = {imgStyle}/>
        );
    }
}
