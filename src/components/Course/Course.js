import React from 'react';
import './Course.css';

const Course = (props) => {
    console.log(props);
    const {title, img, price, instructor} = props.course;
    return (
        <div className="course">
            <div>
            <img src={img} alt=""/>
            </div>
            <div>
            <h3> Course Title: {title}</h3>
            <br/>
            <p className = "text-muted">Instructor: {instructor}</p>
    
            <h5 className = "text-primary">Price: ${price}</h5>
            <button onClick = {() => props.addCourse(props.course)} type="button" class="btn btn-warning">Enroll Now</button>
            </div>
            
        </div>
    );
};

export default Course;