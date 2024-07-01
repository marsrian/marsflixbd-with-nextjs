import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiTwotoneCalendar } from "react-icons/ai";
// import FirstBlog from "@/components/FirstBlog";
// import OtherBlogs from "@/components/OtherBlogs";

async function fetchBlogs() {
  const res = await fetch("http://localhost:3000/api/blog", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const blogs = await fetchBlogs();

  return (
    <div>
      {blogs?.length > 0 ? (
        <>
          <div className="md:container px-2 md:px-0">
            <h2 className="text-center my-10">
              <span className="text-primaryColor">Trending</span> Blog
            </h2>
            {blogs.length > 0 &&
              blogs.map((blog, index) => (
                <Link
                  key={blog._id}
                  href={`/blog/${blog?._id}`}
                  className="grid grid-cols-1 gap-3 rounded shadow-md p-4"
                >
                  <div className="flex gap-4">
                    <Image
                      src={blog.image.url}
                      width={40}
                      height={40}
                      alt={blog?.image?.url}
                    ></Image>
                    <div>
                      <h3 className="font-semibold mb-2">{blog?.title}</h3>
                      <p className="flex items-center gap-1">
                        <AiTwotoneCalendar />
                        {moment(blog?.createdAt).format("MMMM Do YYYY")}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </>
      ) : (
        <h3>No Blogs...</h3>
      )}
    </div>
  );
};

export default Blog;
