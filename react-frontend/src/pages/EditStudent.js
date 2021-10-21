import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

export default class EditStudent extends Component {
  state = {
    name: "",
    course: "",
    email: "",
    phone: "",
    error_list: [],
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    // console.log(id);
    const res = await axios.get(`http://localhost:8000/api/edit-student/${id}`);

    if (res.data.status === 200) {
      this.setState({
        name: res.data.student.name,
        course: res.data.student.course,
        email: res.data.student.email,
        phone: res.data.student.phone,
      });
    } else if (res.data.status === 404) {
      swal({
        title: "Warning",
        text: res.data.message,
        icon: "warning",
        button: "OK!",
      });
      this.props.history.push("/");
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    // document.getElementById("btn-update").disabled = true;
    document.getElementById("btn-update").innerText = "Updating";
    const id = this.props.match.params.id;
    const res = await axios.put(
      `http://127.0.0.1:8000/api/update-student/${id}`,
      this.state
    );

    if (res.data.status === 200) {
      // console.log(res.data.message);

      swal({
        title: "Updated!",
        text: res.data.message,
        icon: "success",
        button: "OK!",
      });

      // document.getElementById("btn-update").disabled = false;
      document.getElementById("btn-update").innerText = "Update Student";
      this.props.history.push("/");
    } else if (res.data.status === 404) {
      swal({
        title: "Warning",
        text: res.data.message,
        icon: "warning",
        button: "OK!",
      });
      this.props.history.push("/");
    } else {
      // console.log(res.data.validate_err);
      this.setState({
        error_list: res.data.validate_err,
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4>
                  Edit Student
                  <Link to={"/"} className="btn btn-primary btn-sm float-end">
                    BACK
                  </Link>
                </h4>
              </div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group mb-3">
                    <label>Student Name</label>
                    <input
                      type="text"
                      name="name"
                      value={this.state.name}
                      className="form-control"
                      onChange={this.handleInputChange}
                    />
                    <span className="text-danger">
                      {this.state.error_list?.name}
                    </span>
                  </div>
                  <div className="form-group mb-3">
                    <label>Student Course</label>
                    <input
                      type="text"
                      name="course"
                      value={this.state.course}
                      className="form-control"
                      onChange={this.handleInputChange}
                    />
                    <span className="text-danger">
                      {this.state.error_list?.course}
                    </span>
                  </div>
                  <div className="form-group mb-3">
                    <label>Student Email</label>
                    <input
                      type="text"
                      name="email"
                      value={this.state.email}
                      className="form-control"
                      onChange={this.handleInputChange}
                    />
                    <span className="text-danger">
                      {this.state.error_list?.email}
                    </span>
                  </div>
                  <div className="form-group mb-3">
                    <label>Student Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={this.state.phone}
                      className="form-control"
                      onChange={this.handleInputChange}
                    />
                    <span className="text-danger">
                      {this.state.error_list?.phone}
                    </span>
                  </div>
                  <div className="form-group mb-3">
                    <button
                      type="submit"
                      id="btn-update"
                      className="btn btn-primary"
                    >
                      Update Student
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}