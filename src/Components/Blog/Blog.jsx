import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const { course_title, course_img, details,price,credit } = blog;

  return (
    <div className="card w-68 bg-base-100 shadow-xl">
    <figure className="px-5 pt-5">
      <img  src={course_img} alt="" className="rounded-xl w-60 h-36" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{course_title}</h2>
      <p>{details}</p>
      <div className="flex">
        <p>Price: {price}</p>
        <p>Credit: {credit}</p>
      </div>
      <div className="card-actions">
        <button className="bg-green-300 mt-8 pr-16 pl-16 p-2  rounded-lg font-bold">Buy Now</button>
      </div>
    </div>
  </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
};
export default Blog;
