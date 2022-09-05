import ImageComponent from '../../shared/ImageComponent';
import Select from '../Select';
import TextField from '../TextField';

const Profile = () => {
  return (
    <>
      <h1 className='text-2xl font-medium'>Profile</h1>
      <div className='flex md:flex-row flex-col mt-8'>
        <div className='relative w-40 h-40 mb-7'>
          <ImageComponent src='/assets/logo.png' className='w-full h-full' />
          <span className='absolute top-auto left-auto right-3 bottom-2 cursor-pointer'>
            <ImageComponent
              src='/assets/settings/edit-profile-pic-icon.svg'
              className='w-8 h-8'
            />
          </span>
        </div>
        <div className='md:pl-8 w-[80%] flex flex-col'>
          <h1 className='text-xl font-medium'>Personal Information</h1>
          <TextField label='Nickname' />
          <div className='flex md:flex-row md:gap-10 flex-col'>
            <Select label='Area' options={['UAE', 'USA', 'Pakistan', 'Arab']} />
            <Select label='City' options={['UAE', 'USA', 'Pakistan', 'Arab']} />
          </div>
          <div className='flex md:flex-row md:gap-10 flex-col'>
            <Select label='Gender' options={['Male', 'Female']} />
            <TextField label='Age' type='date' />
          </div>
          <button className='py-4 px-10 bg-[#C7CB91] max-w-fit rounded-lg font-semibold'>
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;