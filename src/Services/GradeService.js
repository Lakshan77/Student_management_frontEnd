import axios from "axios";

const GRADE_BASE_URL = 'http://localhost:8080/api/v1/grades';

class GradeService {
    getGrades(){
        return axios.get(GRADE_BASE_URL);
    }
}

export default new GradeService();