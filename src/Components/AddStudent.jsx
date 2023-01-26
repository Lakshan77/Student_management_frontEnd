import React, { Component } from 'react'
import StudentService from '../Services/StudentService';

export default class AddStudent extends Component {
    constructor(props){
        super(props)

        this.state ={
            name: '',
            email: '',
            grade: ''
        }
        this.ChangeNameHandler = this.ChangeNameHandler.bind(this);
        this.ChangeEmailHandler = this.ChangeEmailHandler.bind(this);
        this.ChangeGradeHandler = this.ChangeGradeHandler.bind(this);
        this.saveStudent = this.saveStudent.bind(this);
    }

    saveStudent = (e)=>{
        e.preventDefault();
        let student = {name: this.state.name, email: this.state.email, grade: this.state.grade};

        StudentService.createStudent(student).then(res=>{
            this.props.history.push('/students');
        });
    }

    ChangeNameHandler=(event)=>{
        this.setState({name: event.target.value});
    } 

    ChangeEmailHandler=(event)=>{
        this.setState({email: event.target.value});
    }
    ChangeGradeHandler=(event)=>{
        this.setState({grade: event.target.value});
    }

    cancel(){
        this.props.history.push('/students');
    }

  render() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3" style={{marginTop:"20px"}}>
                        <h3 className="text-center">Add Student</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Student Name: </label>
                                    <input placeholder="Name" name="name" className="form-control" 
                                    value={this.state.name} onChange={this.ChangeNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Student Email: </label>
                                    <input placeholder="Email" name="email" className="form-control" 
                                    value={this.state.email} onChange={this.ChangeEmailHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Grade: </label>
                                    <input placeholder="grade" name="grade" className="form-control" 
                                    value={this.state.grade} onChange={this.ChangeGradeHandler}/>
                                </div>
                                <button className="btn btn-success" onClick={this.saveStudent}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
