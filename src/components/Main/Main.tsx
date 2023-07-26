import React, {useState} from 'react';
// @ts-ignore
import logo from "../../assets/shirt-svgrepo-com.svg"
// @ts-ignore
import styles from "./Main.module.scss"
import {Image, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import CenteredModal from "../../UI/CenteredModal/CenteredModal";
import {loginUser} from "../../store/users";
import {useAuth} from "../../hooks/useAuth";

const Main: React.FC = () => {

    const user = useAuth()
    const dispatch = useAppDispatch()
    const [show, setShow] = useState(false)


    function handleLogin(username: string, password: string){
        dispatch(loginUser({username, password}))
    }


    return (
        <main className={styles.container}>
            {
                !user.isAuth
                    ?
                    <>
                        <Button className={styles.login} onClick={() => {
                            setShow(true)
                        }} variant="outline-light">Login</Button>
                        <CenteredModal
                            show={show}
                            onHide={() =>{setShow(false)}}
                            onClick={handleLogin}
                        />
                    </>
                    : null
            }
            <div className={styles.logoContainer}>
                <Image className={styles.logo} src={logo} fluid/>
            </div>
            <Link className={styles.link} to="/store">Go to store!</Link>
        </main>
    );
};

export default Main;