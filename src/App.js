import { Component } from "react";
import './App.css';


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      task : [],
      dactivetask: false,

     
    }
  }
  clear = ()=>{
    this.taskbox.value=""
    this.prioritybox.value = ""
  }
   currentDateTime= ()=>Date().toLocaleString()
    save = (event)=>{
      var taskname = this.taskbox.value;
      var priority = this.prioritybox.value;
     var currentDateTime=this.currentDateTime()
      var obj ={ taskname , priority , currentDateTime}
      console.log(obj)
      this.setState({ task: [...this.state.task, obj] })
      this.clear()
      event.preventDefault()
    }
   
  render() {
    return (
      <div className="App">
                <h1 className="alert alert-primary text-center">TODO LIST</h1>

        <div className="container">
          <form onSubmit={this.save} >
            <div className="form-group">
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <input type="text" ref={ob => this.taskbox = ob}
                    placeholder="Enter Your Task" className="form-control" required />
                </div>
                <div className="col-lg-4 col-md-4">
                  <select placeholder='choose ' required ref={ob=>this.prioritybox = ob}>
                    <option value=""  >Choose Priority </option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
                <div className="col-lg-4 col-md-4">
                  <button className="btn btn-success" type="submit"> Add </button>
                  <div />
                </div>
              </div>
            </div>
            </form>
            <div className="form-group">
              <div className="row">
               {/*<div className="col-lg-4 col-md-4">
                  <button className="btn btn-success" > Active  Task</button>
                </div>
                <div className="col-lg-4 col-md-4">
                  <button className="btn btn-success" > Deactive Task</button>
    </div> */}
                <div className="col-lg-4 col-md-4">
                  <b className="text-info">Total Task : {this.state.task.length} </b>
                </div>
              </div>
            </div>

          
        </div>
        <table className="table table-striped table-bordered">
          <thead>
            <th>S.NO</th>
            <th>Task</th>
            <th>Priority</th>
            <th>Date and Time</th>
            <th> Action</th>
          </thead>
          <tbody>
          {this.state.task.map((obj, index) => {
            return <tr>
              <td>{index + 1}</td>
              <td>{obj.taskname}</td>
              <td>{obj.priority}</td>
              <td>{obj.currentDateTime}</td>
              <td> <button className="btn btn-success"  > Deactive</button>
              </td>
              </tr>
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

