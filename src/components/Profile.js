import React from "react";
import Button from "./Button"
import Image from "./Image"
import UserBox from "./UserBox"
import styles from '../index.css';
export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFollowed: false,
            followers: 100,
            posts: 100,
            following: 100,
            followStatus: "Follow"
        };
        this.handleFollow = this.handleFollow.bind(this);
    }

    handleFollow() {
        if(this.state.isFollowed) {
            this.setState({
                isFollowed: false,
                followers: this.state.followers - 1,
                followStatus: "Follow"
            });
        }
        else {
            this.setState({
                isFollowed: true,
                followers: this.state.followers + 1,
                followStatus: "Following"
            });
        }
    }
    
    render(){
        const profilePic = this.props.profilePic ? this.props.profilePic : this.props.defaultPic ;
        return (
            <div className = {styles.profileContainer}>
                <div className = {styles.profilePicContainer}>
                    <Image isRounded={true} url={profilePic} />
                </div>
                <div className = {styles.bioContainer}>
                    <div className={styles.rowContainer1}>
                    <UserBox boldContent="" textContent = {"@"+this.props.user} />
                    <Button content={this.state.followStatus} onClick={this.handleFollow} type="button"/>
                    </div>
                    <div className={styles.rowContainer1}>
                        <UserBox boldContent={this.state.posts} textContent="posts" />
                        <UserBox boldContent={this.state.followers} textContent="followers" />
                        <UserBox boldContent={this.state.following} textContent="following" />
                    </div>
                    <div className={styles.rowContainer2}>
                        <p style={{fontSize: '20px',fontWeight: '500'}}>Ayush Jain: competitive programmer, anime lover.<br />“If you use your head, you won’t get fat even if you eat sweets.” – L Lawliet</p>
                    </div>
                </div>
            </div>
        );
    }
}

