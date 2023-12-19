import axios from "axios"

const API_URL = 'https://api.adviceslip.com/advice'

class AdviceService {
    get() {
        return axios.get(API_URL)
    }
}

export default new AdviceService()