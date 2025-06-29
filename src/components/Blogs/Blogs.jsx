import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmark}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    return (
        <div className="md:w-2/3 mx-auto">
            <h1 className="text-4xl font-bold mb-4">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => (
                    <Blog
                        key={blog.id}
                        blog={blog}
                        handleAddToBookmark={handleAddToBookmark}
                    />
                ))
            }
        </div>
    );
};

export default Blogs;
