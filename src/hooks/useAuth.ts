import {useAppSelector} from "../store/hooks";

export const useAuth = () => {
    const state = useAppSelector(state => state.user)
    console.log(state.token)
    return {
        isAuth: !!state.token,
        token: state.token,
    }
}