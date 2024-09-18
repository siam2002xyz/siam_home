import React from "react";
import BlogMain from "./BlogMain";

const BlogsItem = () => {
  return (
    <>
      <div className="container m-auto">
        <h1 className="text-6xl font-medium">Blog</h1>
        <p className="mt-2">Thoughts and Upcomings are shared here.</p>
        {/* blog content */}
        <div className=" flex border border-gray-300  overflow-hidden shadow-md my-10">
          <div className="w-[648px]">
            <img src="/blog1.png" alt="Blog" className="w-full h-full " />
          </div>
          <div className="p-4 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">Blog Heading</h2>
              <div className="flex gap-5">
                <p className="text-gray-600 mb-1">Author Name</p>
                <p className="text-gray-500 mb-4">September 19, 2024</p>
              </div>
              <p className="text-gray-700 mb-4">
                This is a short summary of the blog content. It gives an
                overview of the topic discussed in the blog and engages the
                reader's interest.
              </p>
            </div>
            <button className="border font-medium border-[#151515] text-[#151515] w-[150px] bg-transparent py-2 px-4 mx-9 rounded ">
              Read More
            </button>
          </div>
        </div>
        {/* end */}
        <div className=" flex border border-gray-300  overflow-hidden shadow-md my-10">
          <div className="w-[648px]">
            <img src="/blog2.png" alt="Blog" className="w-full h-full " />
          </div>
          <div className="p-4 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">Blog Heading</h2>
              <div className="flex gap-5">
                <p className="text-gray-600 mb-1">Author Name</p>
                <p className="text-gray-500 mb-4">September 19, 2024</p>
              </div>
              <p className="text-gray-700 mb-4">
                This is a short summary of the blog content. It gives an
                overview of the topic discussed in the blog and engages the
                reader's interest.
              </p>
            </div>
            <button className="border font-medium border-[#151515] text-[#151515] w-[150px] bg-transparent py-2 px-4 mx-9 rounded ">
              Read More
            </button>
          </div>
        </div>
        {/* end */}
        <div className=" flex border border-gray-300  overflow-hidden shadow-md my-10">
          <div className="w-[648px]">
            <img src="/blog3.png" alt="Blog" className="w-full h-full " />
          </div>
          <div className="p-4 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">Blog Heading</h2>
              <div className="flex gap-5">
                <p className="text-gray-600 mb-1">Author Name</p>
                <p className="text-gray-500 mb-4">September 19, 2024</p>
              </div>
              <p className="text-gray-700 mb-4">
                This is a short summary of the blog content. It gives an
                overview of the topic discussed in the blog and engages the
                reader's interest.
              </p>
            </div>
            <button className="border font-medium border-[#151515] text-[#151515] w-[150px] bg-transparent py-2 px-4 mx-9 rounded ">
              Read More
            </button>
          </div>
        </div>
        {/* end */}
        <div className=" flex border border-gray-300  overflow-hidden shadow-md my-10">
          <div className="w-[648px]">
            <img src="/blog4.png" alt="Blog" className="w-full h-full " />
          </div>
          <div className="p-4 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">Blog Heading</h2>
              <div className="flex gap-5">
                <p className="text-gray-600 mb-1">Author Name</p>
                <p className="text-gray-500 mb-4">September 19, 2024</p>
              </div>
              <p className="text-gray-700 mb-4">
                This is a short summary of the blog content. It gives an
                overview of the topic discussed in the blog and engages the
                reader's interest.
              </p>
            </div>
            <button className="border font-medium border-[#151515] text-[#151515] w-[150px] bg-transparent py-2 px-4 mx-9 rounded ">
              Read More
            </button>
          </div>
        </div>
        {/* end */}
      </div>
    </>
  );
};

export default BlogsItem;
