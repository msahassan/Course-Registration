import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Headers from "./Components/Header/Headers";

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [totalTime,setTotalTime] = useState([])
  const [timeLeft,setTimeLeft] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)


  const handleAddBookmark = (blog) => {
   
    const isExist = bookmarks.find((item) => item.id === blog.id);

    const coursePrice = parseInt(blog.price, 10);

    let count = parseInt(blog.credit);
    if (isExist) {
      return alert("This Course is already selected");
    } else {
      bookmarks.forEach((item) => {
        count = count + parseInt(item.credit);
      });

      const remainingTime = 20 - count;
      if (count > 20) {
        return alert("You can watch only 20hr");
      } else {
        setTotalTime(count);
        setTimeLeft(remainingTime);
        setBookmarks([...bookmarks, blog]);
        setTotalPrice(totalPrice + coursePrice);
        
      }       
    }
   
  };

  return (
    <>
      <Headers></Headers>
      <div className="flex mt-12">
        <Blogs handleAddBookmark={handleAddBookmark} 
        
        ></Blogs>
        <Bookmarks 
        bookmarks={bookmarks} 
        
         totalPrice = {totalPrice}
        totalTime={totalTime} 
        timeLeft ={timeLeft}
        ></Bookmarks>
      </div>
    </>
  );
}

export default App;
