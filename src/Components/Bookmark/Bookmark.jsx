

import PropTypes from 'prop-types'; 

const Bookmark = ({bookmark}) => {
const {course_title}= bookmark;

     return (
      <div className='bg-slate-50 rounded-lg mt-3 p-3 text-base font-medium'> 
       
       <li> {course_title}</li>
       
      </div>
    );
 };

 Bookmark.propTypes = {
    bookmark : PropTypes.object,
    
 }

export default Bookmark;