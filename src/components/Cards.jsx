import React from "react";

function Cards() {
  return (
    <div className="flex justify-between">
      <div className="border-[#E74EE] rounded-lg p-4">
        <img
          className="h-10 w-10 rounded-lg object-cover"
          src="image1.png"
          alt="Image 1"
        />
        <h3 className="text-lg font-bold mt-2">Heading 1</h3>
        <p className="text-sm text-gray-500 mt-1">Subheading 1</p>
      </div>
      <div className="border-[#E74EE] rounded-lg p-4">
        <img
          className="h-10 w-10 rounded-lg object-cover"
          src="image2.png"
          alt="Image 2"
        />
        <h3 className="text-lg font-bold mt-2">Heading 2</h3>
        <p className="text-sm text-gray-500 mt-1">Subheading 2</p>
      </div>
      <div className="border-[#E74EE] rounded-lg p-4">
        <img
          className="h-10 w-10 rounded-lg object-cover"
          src="image3.png"
          alt="Image 3"
        />
        <h3 className="text-lg font-bold mt-2">Heading 3</h3>
        <p className="text-sm text-gray-500 mt-1">Subheading 3</p>
      </div>
    </div>
  );
}

export default Cards;
