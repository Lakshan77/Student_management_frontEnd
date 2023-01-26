import React, {Component} from "react";
import StudentService from '../Services/StudentService';

export default class ManageStudents extends Component {
    
    constructor (props){
        super(props)

        this.state = {
            students: []
        }
    }

    componentDidMount() {
        StudentService.getStudents().then((res) =>{
            this.setState({students: res.data});
        });
            
    }

    render() {
        return (
            <div>
                <h2 className="text-center" style={{marginTop:20}}>Manage Student</h2>

                <div className='table-responsive-sm'>
                    <table className='table align-middle table-striped table-borderd ' style={{marginTop:30}}>
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Email Address</th>
                                <th>Grade</th>
                            </tr>
                        </thead> 
                        <tbody>
                            {
                                this.state.students.map(
                                    student =>
                                    <tr key={student.id}>
                                        <td>{student.name}</td>
                                        <td>{student.email}</td>
                                        <td>{student.grade}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}