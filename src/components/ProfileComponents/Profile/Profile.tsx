import React from 'react';
import {Tab, Tabs} from "react-bootstrap";
// @ts-ignore
import styles from "./Profile.module.scss";

interface ProfileProps{
    token: string
}


const Profile:React.FC<ProfileProps> = (user:ProfileProps) => {
    return (
        <main className={styles.info}>
            <Tabs
                defaultActiveKey="info"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab className={styles.tabTitle} eventKey="info" title="Info">
                     token: <span>{user.token}</span>
                </Tab>
                <Tab className={styles.tabTitle} eventKey="orders" title="Orders">
                    Tab content for Profile
                </Tab>
            </Tabs>
        </main>
    );
};

export default Profile;