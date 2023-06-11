import React, { useState } from "react";

const Inputs = [
  { id: 1, label: "First Name", type: "text" },
  { id: 2, label: "Last Name", type: "text" },
  { id: 3, label: "Student ID", type: "text" },
  { id: 4, label: "Email ID", type: "text" },
  { id: 4, label: "Phone Number", type: "text" },
  { id: 4, label: "Department", type: "text" },
];

const Inputs2 = [
  { id: 1, label: "Father's Name / Guardian Name", type: "text" },
  { id: 2, label: "Mother's Name", type: "text" },
  { id: 3, label: "lorem ipsum", type: "Number" },
  { id: 4, label: "any", type: "text" },
];

const options = [
  { id: 1, label: "course", option: "Select a Course" },
  { id: 1, label: "Batch", option: "Select Batch" },
  { id: 1, label: "Semester", option: "Select Semester" },
  { id: 1, label: "Section", option: "Select Section" },
];
function GeneralInformation() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="grid grid-cols-12 gap-4 my-10">
      {/* General Information */}
      <div className="col-span-9">
        <div className="w-[840px] p-4 md:w-full h-full bg-white rounded-lg  border-2 border-[]">
          <h2>General Information</h2>

          <div className="grid grid-cols-2 my-4 gap-4 ">
            {Inputs.map(({ id, type, label }) => (
              <div key={id} className="w-full  ">
                <div>
                  <label
                    for="example1"
                    className="mb-1 capitalize block text-[15px] font-semibold text-black"
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    className="block w-full rounded-md bg-[#F9F9FC] border-gray-300 shadow-sm focus:border-primary-400  focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                    placeholder={label}
                  />
                </div>
              </div>
            ))}
          </div>

          <div>
            <label className="mb-1 capitalize block text-[15px] font-semibold text-black">
              Address
            </label>
            <textarea
              className="block w-full rounded-md bg-[#F9F9FC] border-gray-300 shadow-sm focus:border-primary-400  focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="Enter Student Address Here..."
              cols="30"
              rows="6"
            ></textarea>
          </div>
        </div>
      </div>

      {/* Selection */}
      <div className="col-span-3">
        <div className="rounded-lg bg-white border border-[] w-full max-h-fit p-6 gap-[14px]">
          Class
          {options.map(({ label, option }) => (
            <div className="flex flex-col my-4">
              <label
                className="text-[15px]  capitalize text-black font-semibold"
                htmlFor=""
              >
                {label}
              </label>
              <select className="bg-gray-100 rounded-lg  border-2 border-[#E0E2E7]">
                <option value={option}>{option}</option>
                <img src="/ArrowDown.svg" alt="" />

                <option value="optionA">Option A</option>
                <option value="optionB">Option B</option>
                <option value="optionC">Option C</option>
              </select>
            </div>
          ))}
        </div>

        {/* Fee Status */}

        <div className="w-full my-8 bg-white h-[164px] p-6 rounded-lg border-2 border-[]">
          <div className="flex justify-between">
            <h2 className="">Fee </h2>

            <p className="py-2 px-3 text-[15px] leading-5   rounded-full bg-[#F0F1F3] capitalize font-semibold  text-center">
              Draft
            </p>
          </div>

          <div className="flex flex-col my-2">
            <label
              className="text-[15px]  capitalize text-black font-semibold"
              htmlFor=""
            >
              Fee
            </label>
            <select className="bg-gray-100 rounded-lg  border-2 border-[#E0E2E7]">
              <option value="">Select</option>
              <img src="/ArrowDown.svg" alt="" />

              <option value="optionA">Option A</option>
              <option value="optionB">Option B</option>
              <option value="optionC">Option C</option>
            </select>
          </div>
        </div>

        {/* fee status 2 */}

        <div className="w-full my-8 bg-white h-[164px] p-6 rounded-lg border-2 border-[]">
          <div className="flex justify-between">
            <h2 className="">Fee </h2>

            <p className="py-2 px-3 text-[15px] leading-5   rounded-full text-[#0D894F] bg-[#E7F4EE] capitalize font-semibold  text-center">
              Paid
            </p>
          </div>

          <div className="flex flex-col my-2">
            <label
              className="text-[15px]  capitalize text-black font-semibold"
              htmlFor=""
            >
              Fee
            </label>
            <select className="bg-gray-100 rounded-lg  border-2 border-[#E0E2E7]">
              <option value="">Select</option>
              <img src="/ArrowDown.svg" alt="" />

              <option value="optionA">Option A</option>
              <option value="optionB">Option B</option>
              <option value="optionC">Option C</option>
            </select>
          </div>
        </div>
      </div>

      {/* Parent Information */}
      <div className="col-span-9">
        <div className="w-[840px] my-8 p-4 md:w-full h-full bg-white rounded-lg  border-2 border-[]">
          <h2>Parents/Guardian's Information</h2>
          <div className="grid grid-cols-2 my-4 gap-4 ">
            {Inputs2.map(({ id, type, label }) => (
              <div key={id} className="w-full  ">
                <div>
                  <label
                    for="example1"
                    className="mb-1 capitalize block text-[15px] font-semibold text-black"
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    className="block w-full rounded-md bg-[#F9F9FC] border-gray-300 shadow-sm focus:border-primary-400  focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                    placeholder={label}
                  />
                </div>
              </div>
            ))}
          </div>
          <div>
            <label className="mb-1 capitalize block text-[15px] font-semibold text-black">
              Lorem Ipsum
            </label>
            <textarea
              className="block w-full rounded-md bg-[#F9F9FC] border-gray-300 shadow-sm focus:border-primary-400  focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="Enter Lorem ipsum..."
              cols="30"
              rows="6"
            ></textarea>
          </div>
        </div>
      </div>

      {/* Media */}
      <div className="col-span-9">
        <div className="w-full h-full my-8 p-6 gap-3 bg-white rounded-lg border-2 border-[]">
          <h2>Media</h2>

          <div className="mx-auto w-full">
            <label
              htmlFor="example5"
              className="mb-1 block text-lg my-2 font-semibold text-black"
            >
              Upload file
            </label>
            <label className="flex w-full cursor-pointer appearance-none items-center justify-center rounded-md border-2 border-dashed border-gray-200 p-6 transition-all hover:border-primary-300">
              <div className="space-y-1 text-center">
                {imageUrl ? (
                  <img src={imageUrl} alt="Uploaded" className="mx-auto h-40" />
                ) : (
                  <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6 text-gray-500"
                    >
                      {/* SVG path here */}
                    </svg>
                  </div>
                )}
                <div className="text-gray-600">
                  <a
                    href="#"
                    className="font-medium text-primary-500 hover:text-primary-700"
                  >
                    Click to upload
                  </a>{" "}
                  or drag and drop
                </div>
                <p className="text-sm text-gray-500">
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </p>
              </div>
              <input
                id="example5"
                type="file"
                className="sr-only"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>
      </div>

      {/* Others */}
      <div className="col-span-9">
        <div className="w-full gap-4 my-8 p-6 h-full border-[] border rounded-lg bg-white">
          <h2> Others </h2>

          <textarea
            className="block my-2 w-full rounded-md bg-[#F9F9FC] border-gray-300 shadow-sm focus:border-primary-400  focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
            placeholder="Any note"
            cols="30"
            rows="4"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default GeneralInformation;
