import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const { course_title, course_img } = blog;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure className="px-5 pt-5">
      <img src={course_img} alt="" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{course_title}</h2>
      <p></p>
      <div className="card-actions">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
};
export default Blog;
