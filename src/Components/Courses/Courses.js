// built-in
import { useState } from 'react';

// internal
import './Courses.css';
import { endpoint } from '../../Config';
import dataCourses from './DataCourse';

// external
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Nav = () => {
    return (
        <nav class="nav-courses">
            <ul>
                <li>
                    <img src={`${process.env.PUBLIC_URL}/img/logo.png`} />
                </li>
                <li className="profile">
                    <img src={`${process.env.PUBLIC_URL}/img/profile_user.jpg`} className="rounded-circle" width="50" />
                    <div>Halo, Shotaro Osaki</div>
                </li>
            </ul>
        </nav>
    );
}

const CardCourse = (props) => {
    const coverImg = props.coverImg ?? "https://hughculver.com/wp2/wp-content/uploads/11-main3-880x494.jpg";
    const imgTrainer = props.imgTrainer ?? `${process.env.PUBLIC_URL}/img/profile_user.jpg`;

    // history
    const history = useHistory();

    return (
        <div className="card">
            <img src={coverImg} className="card-image"></img>
            <div className="card-body">
                <h2>{props.title}</h2>
                <div className="wrapper-person">
                    <img src={imgTrainer} className="rounded-circle" width="50" />
                    <div className="wrapper-detail-person">
                        <div className="text-person">{props.trainer}</div>
                        <div className="subtext-person">{props.profession}</div>
                    </div>
                </div>
                <br /><br />
            </div>
            <div className="card-footer">
                <button onClick={(e) => history.push(`/detail_course?id_course=${props.courseId}`)} className="btn btn-orange btn-block">Lanjut</button>
            </div>
        </div>
    );
}

const LoadUICourse = () => {
    return dataCourses.map(course => {
        // console.log(course);
        return <CardCourse title={course.course_name} trainer={course.trainer.trainer_name} profession={course.trainer.profession} courseId={course.course_id} />
    })
}

const Courses = () => {
    return (
        <div style={{
            background: '#9ca7a7', height: '100vh', paddingBottom: '50px'
        }}>
            <Nav />
            <div className="wrapper-course">
                <LoadUICourse />
            </div>
        </div >
    );
}

export default Courses;