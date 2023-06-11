import React, { useState } from "react";


function GeneralInformation() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const [studentAdd, setStudentAdd] = useState({
    name: "",
    position: "",
    shortNote: "",
    longNote: "",
  });
  const [filedata, setFileData] = useState();

  const Onchagetesdetail = (e) => {
    setStudentAdd({ ...studentAdd, [e.target.name]: e.target.value });
  };

  const Inputs = [
    { id: 1, label: "First Name", type: "text", name: "firstname" },
    { id: 2, label: "Last Name", type: "text", name: "lastname" },
    { id: 3, label: "Student ID", type: "text", name: "rollnumber" },
    { id: 4, label: "Email ID", type: "text", name: "email" },
    { id: 4, label: "Phone Number", type: "text", name: "phone" },
    { id: 4, label: "Department", type: "text", name: "department" },
  ];

  const Inputs2 = [
    { id: 1, label: "Father's Name / Guardian Name", type: "text", name: "fathername" },
    { id: 2, label: "Mother's Name", type: "text", name: "mothername" },
    { id: 3, label: "Mobile Number", type: "text", name: "fathernumber" },
  ];

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
    <div>
      {/* General Information */}
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

      {/* Guardian Information */}
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

      {/* Media */}
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

      {/* others */}
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
  );
}

export default GeneralInformation;
