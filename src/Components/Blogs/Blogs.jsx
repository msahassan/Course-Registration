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
    <div className="w-full lg:w-2/3">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((blog) => (
          <Blog 
          key={blog.id} 
          blog={blog} 
          handleAddBookmark={handleAddBookmark}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

Blogs.propTypes ={
    courses: PropTypes.object,
    handleAddBookmark: PropTypes.func,
    
}

export default Blogs;
