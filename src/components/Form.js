import React from "react";
import InputField from "./InputField"
import Button from "./Button"
import styles from '../index.css';



export default class Form extends React.Component {
    render() {
        const credentials = this.props.credentials;
        const formFields = credentials.map((value, index) => <InputField onChange={this.props.onChange} label={value} key={index} />);

        return (
            <form onSubmit={this.props.onSubmit}>
                <fieldset style={{borderStyle: 'none'}}>
                    {formFields}
                </fieldset>
                <div className={styles.errorSection}>
                    <p style={{color: 'red', fontSize: '15px'}}>{this.props.errorMessage}</p>
                </div>
                <div className={styles.submitButtonContainer}>
                    <Button type="submit" content={this.props.submitContent} />
                </div>
            </form>
        );
    }
}