import React from "react";
import PropTypes from "prop-types";
import CourseCard from "./CourseCard";

const CourseList = ({ courses, onDeleteClick }) => (
  <div className="row">
      {courses.map((course) => {
        return (
          <CourseCard
            key={course.id}
            course={course}
            onDeleteClick={onDeleteClick}
          />
        );
      })}
    </div>
);

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default CourseList;
