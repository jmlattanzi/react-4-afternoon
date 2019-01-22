import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class ClassList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            students: [],
        }
    }

    componentDidMount() {
        axios
            .get(
                `http://localhost:3005/students?class=${
                    this.props.match.params.class
                }`
            )
            .then((res) => this.setState({ students: res.data }))
    }

    render() {
        return (
            <div className='box'>
                <h1>{this.props.match.params.class}</h1>
                <h2>ClassList:</h2>
                {this.state.students.map((student, i) => (
                    <Link to={`/student/${student.id}`} key={i}>
                        <h3>
                            {student.first_name} {student.last_name}
                        </h3>
                    </Link>
                ))}
            </div>
        )
    }
}
