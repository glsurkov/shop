import axios from "axios";

export class itemApi {

    static async fetchItems() {
        try {
            const response = await axios.get('/products')
            console.log(response)
            return response
        } catch (err) {
            console.log(err)
            return err
        }
    }

    static async fetchItem() {
        try {

        } catch (err) {
            console.log(err)
        }
    }

    static async fetchCategories(){
        try {
            const response = await axios.get('/products/categories')
            console.log(response)
            return response
        } catch (err){
            console.log(err)
            return err
        }
    }
}
