import React from "react";

function Blog() {
  return (
    <div className="flex flex-col justify-center items-center py-20">
      <h2 className="font-extrabold text-6xl mb-10">Blog</h2>
      <div className="flex flex-wrap justify-center items-center w-[60%] gap-5">
        <div className="flex w-[500px] bg-slate-300 rounded-md">
          <div className="w-[50%]">
            {/* <img src="" alt="" /> */}
          </div>
          <div className="w-[50%] py-5">
            <h3 className="font-bold">Learn HTML</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eum
              ipsum error voluptas nisi provident, harum architecto
              reprehenderit necessitatibus voluptatum!
            </p>
          </div>
        </div>
        <div className="flex w-[500px] bg-slate-300 rounded-md">
          <div className="w-[50%] h-2">
            {/* <img src="" alt="" /> */}
          </div>
          <div className="w-[50%] py-5">
            <h3 className="font-bold">Learn HTML</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eum
              ipsum error voluptas nisi provident, harum architecto
              reprehenderit necessitatibus voluptatum!
            </p>
          </div>
        </div>
        <div className="flex w-[500px] bg-slate-300 rounded-md">
          <div className="w-[50%] h-2 ">
            {/* <img src="" alt="" /> */}
          </div>
          <div className="w-[50%] py-5">
            <h3 className="font-bold">Learn HTML</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eum
              ipsum error voluptas nisi provident, harum architecto
              reprehenderit necessitatibus voluptatum!
            </p>
          </div>
        </div>
        <div className="flex w-[500px] bg-slate-300 rounded-md">
          <div className="w-[50%] h-2">
            {/* <img src="" alt="" /> */}
          </div>
          <div className="w-[50%] py-5">
            <h3 className="font-bold">Learn HTML</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eum
              ipsum error voluptas nisi provident, harum architecto
              reprehenderit necessitatibus voluptatum!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
