import React, { useState } from 'react';
import './MAinCourse.css';
import AllCourses from '../fakeData/AllCourses';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';

const MainCourse = () => {
    const first15 = AllCourses.slice(0, 15);
    const [courses, setCourses] = useState(first15);
    const [cart, setCart] = useState([]);
    const addCourse = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
        console.log('clicked');
    }
    return (
        <div className = "main-container">
          <div className ="course-container">
                {
                    courses.map(course => <Course addCourse = {addCourse} course = {course}></Course>)
                }
            
          </div>
          <div className = "cart-container">
                <Cart cart = {cart}></Cart>
          </div>
            
        </div>
    );
};

export default MainCourse;