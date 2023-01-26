import axios from "axios";

const CLASS_BASE_URL = 'http://localhost:8080/api/v1/class';

class ClassService {
    getClass(){
        return axios.get(CLASS_BASE_URL);
    }

    // createClass(class){
    //     return axios.post(CLASS_BASE_URL, class);
    // }
}

export default new ClassService();