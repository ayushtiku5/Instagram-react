import React from "react";
import styles from '../index.css';


export default class UserBox extends React.Component {
    render() {
        return (
            <div className={styles.UserBox}>
                <p style={{fontSize: '20px',fontWeight: '500'}}><b>{this.props.boldContent}</b> {this.props.textContent}</p>
            </div>
        );
    }
}