import axios from "axios";
import React, { useState } from "react";



function GeneralInformation() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const [studentAdd, setStudentAdd] = useState({
    firstname: "",
    lastname: "",
    rollnumber: "",
    email: "",
    phone: "",
    department: "",
    fathername: "",
    mothername: "",
    fathernumber: "",
    section: "",
    address: "",
    batch: "",
    gender: "",
    course: "",
    semester: "",
    Fee: "",
    note: ""
  });

  const Onchagetesdetail = (e) => {
    setStudentAdd({ ...studentAdd, [e.target.name]: e.target.value });
  };


  console.log(studentAdd);
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

  const options = [
    { id: 1, label: "course", option: "Select a Course" },
    // { id: 1, label: "Batch", option: "Select Batch" },
    { id: 1, label: "Semester", option: "Select Semester" },
    { id: 1, label: "Section", option: "Select Section" },
  ];

  const SubmitForm = async () => {
    try {
      let formData = new FormData();
      formData.append("batch", studentAdd.batch);
      formData.append("fathernumber", Number(studentAdd.fathernumber));
      formData.append("section", studentAdd.section);
      formData.append("firstname", studentAdd.firstname);
      formData.append("lastname", studentAdd.lastname);
      formData.append("year", Number(studentAdd.year));
      formData.append("department", studentAdd.department);
      formData.append("gender", studentAdd.gender);
      formData.append("mothername", studentAdd.mothername);
      formData.append("fathername", studentAdd.fathername);
      formData.append("dob", studentAdd.dob);
      formData.append("phone", Number(studentAdd.phone));
      formData.append("address", studentAdd.address);
      formData.append("rollnumber", studentAdd.rollnumber);
      formData.append("course", studentAdd.course);
      formData.append("semester", studentAdd.semester);
      formData.append("Fee", studentAdd.Fee);
      formData.append("note", studentAdd.note);
      formData.append("avatar", selectedFile)

      const Data = await axios.post(`${process.env.REACT_APP_URL}/api/admin/Student_Add`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      if(Data.success){
        alert(Data.message)
      }
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  }

  return (
    <div className="grid grid-cols-12 my-10 gap-4 ">
      <div className="col-span-9">
        {/* General Information */}
        <div className="w-[840px] p-4 md:w-full max-h-fit bg-white rounded-lg  border-2 border-[]">
          <h2>General Information</h2>

          <div className="grid grid-cols-2 my-4 gap-4 ">
            {Inputs.map(({ id, type, label, name }) => (
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
                    name={name}
                    onChange={Onchagetesdetail}
                  />
                </div>
              </div>
            ))}

            <div className="flex flex-col my-4">
              <label
                className="text-[15px]  capitalize text-black font-semibold"
                htmlFor=""
              >
                Gender
              </label>
              <select className="bg-gray-100 rounded-lg  border-2 border-[#E0E2E7]" name="gender" onChange={Onchagetesdetail}>
                <option value="">Select</option>
                <option value="optionA">Male</option>
                <option value="optionB">Female</option>
                <option value="optionC">Other</option>
              </select>
            </div>

            <div className="flex flex-col my-4">
              <label
                className="text-[15px]  capitalize text-black font-semibold"
                htmlFor=""
              >
                DOB
              </label>
              <input
                type="Date"
                className="block w-full rounded-md bg-[#F9F9FC] border-gray-300 shadow-sm focus:border-primary-400  focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                placeholder="DOB"
                name="dob"
                onChange={Onchagetesdetail}
              />
            </div>


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
              name="address"
              onChange={Onchagetesdetail}
            ></textarea>
          </div>
        </div>

        {/* Guardian Information */}
        <div className="w-[840px] my-8 p-4 md:w-full max-h-fit bg-white rounded-lg  border-2 border-[]">
          <h2>Parents/Guardian's Information</h2>
          <div className="grid grid-cols-2 my-4 gap-4 ">
            {Inputs2.map(({ id, type, label, name }) => (
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
                    name={name}
                    onChange={Onchagetesdetail}
                  />
                </div>
              </div>
            ))}

          </div>
          {/* <div>
            <label className="mb-1 capitalize block text-[15px] font-semibold text-black">
              Lorem Ipsum
            </label>
            <textarea
              className="block w-full rounded-md bg-[#F9F9FC] border-gray-300 shadow-sm focus:border-primary-400  focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="Enter Lorem ipsum..."
              cols="30"
              rows="6"
            ></textarea>
          </div> */}
        </div>

        {/* Media */}
        <div className="w-full max-h-fit my-8 p-6 gap-3 bg-white rounded-lg border-2 border-[]">
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
                accept="image/png,image/jpeg,image/jpg"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>

        {/* others */}
        <div className="w-full gap-4 my-8 p-6 max-h-fit border-[] border rounded-lg bg-white">
          <h2> Others </h2>

          <textarea
            className="block my-2 w-full rounded-md bg-[#F9F9FC] border-gray-300 shadow-sm focus:border-primary-400  focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
            placeholder="Any note"
            cols="30"
            rows="4"
            name="note"
            onChange={Onchagetesdetail}
          ></textarea>
        </div>
      </div>

      <div className="col-span-3">
        {/* Selection */}
        <div className="rounded-lg bg-white border border-[] w-full max-h-fit p-6 gap-[14px]">
          Class
          <div className="flex flex-col my-4">
            <label
              className="text-[15px]  capitalize text-black font-semibold"
              htmlFor=""
            >
              Course
            </label>
            <select className="bg-gray-100 rounded-lg  border-2 border-[#E0E2E7]" name="course" onChange={Onchagetesdetail}>
              <option value="">Select Course</option>

              <img src="/ArrowDown.svg" alt="" />

              <option value="BCA">BCA</option>
              <option value="BBA">BBA</option>
              <option value="BCOM">BCOM</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label
              className="text-[15px]  capitalize text-black font-semibold"
              htmlFor=""
            >
              Semester
            </label>
            <select className="bg-gray-100 rounded-lg  border-2 border-[#E0E2E7]" name="semester" onChange={Onchagetesdetail}>
              <option value="">Select Semester</option>

              <img src="/ArrowDown.svg" alt="" />

              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label
              className="text-[15px]  capitalize text-black font-semibold"
              htmlFor=""
            >
              Section
            </label>
            <select className="bg-gray-100 rounded-lg  border-2 border-[#E0E2E7]" name="section" onChange={Onchagetesdetail}>
              <option value="">Select Section</option>

              <img src="/ArrowDown.svg" alt="" />

              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </div>
          <div className="w-full  ">
            <div>
              <label
                for="example1"
                className="mb-1 capitalize block text-[15px] font-semibold text-black"
              >
                {/* {label} */}
                Batch
              </label>
              <input
                type="text"
                name="batch"
                className="block w-full rounded-md bg-[#F9F9FC] border-gray-300 shadow-sm focus:border-primary-400  focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                placeholder="Enter Batch"
                onChange={Onchagetesdetail}
              />
            </div>
          </div>
        </div>


        {/* fee Status */}

        <div className="w-full bg-white my-8 h-[164px] p-6 rounded-lg border-2 border-[]">
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
            <select className="bg-gray-100 rounded-lg  border-2 border-[#E0E2E7]" name="Fee" onChange={Onchagetesdetail}>
              <option value="">Select</option>
              <img src="/ArrowDown.svg" alt="" />

              <option value="Paid">Paid</option>
              <option value="Unpaid">Unpaid</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* fee status 2 */}

        {/* <div className="w-full bg-white h-[164px] p-6 rounded-lg border-2 border-[]">
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
        </div> */}
      </div>
    </div>
  );
}

export default GeneralInformation;