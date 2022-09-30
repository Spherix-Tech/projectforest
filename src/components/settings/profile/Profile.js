import { useRef, useState } from 'react';
import ImageComponent from "../../shared/ImageComponent";
import Select from "../Select";
import TextField from "../TextField";

const Profile = () => {
  const picker = useRef();
  const [imgUrl, setImgUrl] = useState("/assets/logo.webp");

  const pickImage = (event) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImgUrl(fileReader.result);
    };
    fileReader.readAsDataURL(event.target.files[0]);
  };

  return (
    <>
      <h1 className="text-[18px] md:text-2xl font-medium my-4 md:my-0">Profile</h1>
      <div className="flex md:flex-row flex-col mt-8">
        <div className="relative w-40 h-40 mb-7 self-center md:self-start">
          <ImageComponent
            src={imgUrl}
            className="w-full h-full rounded-full object-cover"
          />
          <span
            className="absolute top-auto left-auto right-3 bottom-2 cursor-pointer"
            onClick={() => picker.current.click()}
          >
            <ImageComponent
              src="/assets/settings/edit-profile-pic-icon.svg"
              className="w-8 h-8"
            />
            <input
              className="hidden"
              onChange={pickImage}
              ref={picker}
              type="file"
              accept=".jpg,.png,.jpeg"
            />
          </span>
        </div>
        <div className="md:pl-8 md:w-[80%] w-full flex flex-col">
          <h1 className=" text-base md:text-xl font-medium">
            Personal Information
          </h1>
          <TextField placeholder="Enter Name" label="Nickname" />
          <div className="flex md:flex-row md:gap-10 flex-col">
            <TextField placeholder="Enter Country" label="Country" />
            <TextField placeholder="Enter City" label="City" />
            {/* <Select label='Area' options={[ 'UAE', 'China', 'Pakistan',  'USA' ]} />
            <Select label='City' options={['Dubai', 'Abu Dhabi', 'Sharjah']} /> */}
          </div>
          <div className="flex md:flex-row md:gap-10 flex-col">
            <Select label="Gender" options={["Male", "Female"]} />
            <TextField label="Age" type="date" />
          </div>
          <button className="py-4 px-10 bg-[#C7CB91] max-w-fit rounded-lg font-semibold self-center md:self-start my-4 mb-7 md:my-0 hover:bg-[#ACADAD]  hover:bg-opacity-50">
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
