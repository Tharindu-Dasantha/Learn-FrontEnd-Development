import React from "react";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import BrushIcon from "@mui/icons-material/Brush";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

function Services() {
  return (
    <div className="w-screen py-20 bg-[#DEE2E6]">
      <div className="h-full flex flex-col items-center justify-center">
        <h2 className="font-extrabold text-6xl mb-4">Services</h2>
        <p className="w-[60vw] text-lg text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          explicabo voluptate asperiores ut dolorem nulla laborum, quia dolor
          corrupti quidem modi pariatur quo nam natus officia laudantium,
          blanditiis tempora commodi vel quos! Aut ullam ratione natus deserunt
          ex, iste nemo.
        </p>
        <div className="flex gap-[50px] mt-6">
          <div className="bg-black text-white py-4 px-2 text-center w-[250px] rounded-lg">
            <DeveloperModeIcon className="mb-4 mt-3" />
            <h3 className="text-xl font-bold">Web Development</h3>
            <p className="text-sm mt-3 mb-4 w-[70%] m-auto">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum, commodi nulla perspiciatis odio totam.
            </p>
          </div>
          <div className="bg-black text-white py-4 px-2 text-center w-[250px] rounded-lg">
            <BrushIcon className="mb-4 mt-3" />
            <h3 className="text-xl font-bold">Web Design</h3>
            <p className="text-sm mt-3 mb-4 w-[70%] m-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem,
              quibusdam neque dolore placeat velit non?
            </p>
          </div>
          <div className="bg-black text-white py-4 px-2 text-center w-[250px] rounded-lg">
            <PhoneIphoneIcon className="mb-4 mt-3" />
            <h3 className="text-xl font-bold">App Design</h3>
            <p className="text-sm mt-3 mb-4 w-[70%] m-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
              optio quibusdam voluptatibus dicta ut ducimus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
