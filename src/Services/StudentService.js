import axios from 'axios';

const STUDENT_BASE_URL = 'http://localhost:8080/api/v1/student';

class studentService{

    getStudents(){
        return axios.get(STUDENT_BASE_URL);
    }

    getStudentById(studentId){
        return axios.get(STUDENT_BASE_URL + '/' + studentId);
    }

    createStudent(student){
        return axios.post(STUDENT_BASE_URL, student);
    }

}
export default new studentService();
