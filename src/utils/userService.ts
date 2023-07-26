import axios from "axios";

export class userService{
    // static async fetchUser(id:number){
    //     try {
    //         const response = await axios.get(`/users/${id}`)
    //         console.log(response)
    //         return response
    //     } catch (err) {
    //         console.log(err)
    //         return err
    //     }
    // }

    static async loginUser(username: string, password: string){
        try {
            const response = await axios.post(`/auth/login`, {
                username,
                password
            })
            return response.data
        }catch (err){
            console.log(err)
            return err
        }
    }
}