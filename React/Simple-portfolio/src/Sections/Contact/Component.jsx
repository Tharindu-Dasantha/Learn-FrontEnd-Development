import React from "react";
import profilepic from '../../assets/PersonPlaceholder.png'

function Component({width, height}) {
  return (
    <div>
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-[500px] h-[300px] bg-black"></div>
        <div className="z-10 relative right-[300px]">
          <img
            width={width}
            height={height}
            src={profilepic}
            alt="Profile Picture of the Developer "
          />
        </div>
      </div>
    </div>
  );
}

export default Component;
