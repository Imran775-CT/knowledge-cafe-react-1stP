import Blogs from './components/Blogs/Blogs';
import { useState } from 'react';
import Bookmarks from './components/Bookmarks/Bookmarks';

function App() {
  const [bookmarked, setBookmarked] = useState([]);

  const handleAddToBookmark = (blog) => {
    // setBookmarked([...bookmarked, blog]);
    console.log('bookmark added');
    
  };

  return (
    <div className='md:flex gap-6 container mx-auto px-4'>
      <Blogs handleAddToBookmark={handleAddToBookmark} />
      <Bookmarks bookmarked={bookmarked} />
    </div>
  );
}

export default App;


