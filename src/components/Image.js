import React from "react";
import styles from '../index.css';


export default class Image extends React.Component {
    render() {
        
        const style = this.props.isRounded ? styles.imgRounded : styles.imgStyle ;
        return (
            <img src = {this.props.url} className={style}/>
        );
    }
}
