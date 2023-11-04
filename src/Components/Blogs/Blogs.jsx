import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddBookmark}) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`course.json`)
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="w-2/3">
      
      <div className="grid grid-cols-3 gap-4">
        {courses.map((blog) => (
          <Blog 
          key={blog.id} 
          blog={blog} 
          handleAddBookmark={handleAddBookmark}
          // handleAddCredit = {handleAddCredit}
          // handleAddPrice = {handleAddPrice}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

Blogs.propTypes ={
    courses: PropTypes.object,
    handleAddBookmark: PropTypes.func,
    // handleAddCredit : PropTypes.func,
    // handleAddPrice : PropTypes.func
}

export default Blogs;
