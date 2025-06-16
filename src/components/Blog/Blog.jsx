import { FaBeer } from 'react-icons/fa';
import { BsJournalBookmarkFill } from "react-icons/bs";
import PropTypes from 'prop-types';

const Blog = ({blog, handleAddToBookmark}) => {
   const {title, cover,author, img, reading_time,posted_date, hashtags} =blog;
    
    return (
        <div className='text-4xl mb-20'>
            <img className='w-full mb-4' src={cover} alt={`cover of title${title}`} />
            <div className='flex justify-between '>
                <div className='flex '>
                     <img className='w-14' src={img} alt="" />
                          <div className='ml-6'>
                                 <h3 className='text-2xl'>{author}</h3>
                                 <p>{posted_date}</p>
                         </div>
                </div>
                <div>
                                    <span>{reading_time}</span>
                                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-red-600 text-2xl'>   <BsJournalBookmarkFill /> </button>
                </div>
            </div>
            <h2>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired
};
export default Blog;