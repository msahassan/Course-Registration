import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks,totalTime,timeLeft,totalPrice}) => {
  return (
    <div className="w-full lg:w-1/3 mt-10">
        <div className="bg-slate-100  rounded-xl mx-8 p-7 ">
        <h3 className=" text-sm lg:text-lg font-medium text-blue-500 mb-4">Credit Hour Remaining : {timeLeft}hr</h3>
        <hr />   
        <h3 className=" lg:mt-4 text-lg font-medium">Course Name:</h3>
        {bookmarks.map((bookmark, index) => (
        <Bookmark key={index} bookmark={bookmark}></Bookmark>
      ))}
      <hr />
        <h3 className="mt-4 text-lg font-medium">Total Credit : {totalTime} hr</h3>
      <hr />
        { <h3 className="mt-4 text-lg font-medium">
         
          Total Price : {totalPrice} USD
        </h3> }
        </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
    totalTime : PropTypes.array,
    timeLeft : PropTypes .array,
  totalPrice: PropTypes.number
};

export default Bookmarks;
