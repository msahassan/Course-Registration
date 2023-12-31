import PropTypes from "prop-types";
import { FaBookReader,FaDollarSign } from 'react-icons/fa';

const Blog = ({ blog, handleAddBookmark}) => {
  const { course_title, course_img, details,price,credit } = blog;

  return (
    <div className="card w-68 bg-base-100 shadow-xl justify-center">
    <figure className="px-5 pt-5">
      <img  src={course_img} alt="" className="rounded-xl w-60 h-36" />
    </figure>
    <div className="card-body p-5">
      <h2 className="card-title text-lg">{course_title}</h2>
      <p>{details}</p>
      <div className="flex gap-3">
        <div className="flex gap-1 items-center text-sm font-medium text-blue-600">
          <p><FaDollarSign></FaDollarSign></p>
          <p>Price:${price}</p>
         
        </div>
        <div className="flex items-center gap-1 text-sm font-medium text-blue-600">
          <p><FaBookReader></FaBookReader></p>
          <p>Credit: {credit}hr</p>
        
        </div>
      </div>
      <div className="card-actions">
        <button onClick={() => handleAddBookmark(blog) } className="bg-green-300 mt-8 px-20 py-2 rounded-lg font-bold">Select</button>
      </div>
    </div>
  </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
  handleAddBookmark : PropTypes.func
  
};
export default Blog;
