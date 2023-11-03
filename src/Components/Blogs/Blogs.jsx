import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`course.json`)
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="w-2/3">
      <h3 className="text-2xl font-medium ">Blogs:{courses.length}</h3>

      <div className="grid grid-cols-3 gap-4">
        {courses.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
