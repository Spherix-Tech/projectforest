import TextField from '../TextField';

const ChangePassword = () => {
  return (
    <>
      <h1 className='text-2xl font-semibold'>Change Password</h1>
      <TextField label='Old Password' type='password' />
      <TextField label='New Password' type='password' />
      <TextField label='Confirm New Password' type='password' />
      <button className='py-4 px-10 bg-[#C7CB91] max-w-fit rounded-lg font-semibold'>
        Save
      </button>
    </>
  );
};

export default ChangePassword;