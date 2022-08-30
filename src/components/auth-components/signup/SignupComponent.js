import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';

import ImageComponent from '../../shared/ImageComponent';
import WalletList from '../wallet-connectivity/WalletList';
import WalletConnectionStatus from '../wallet-connectivity/WalletConnectionStatus';
import StatusCard from '../../shared/StatusCard';

function SignupComponent() {
  let validationSchema = Yup.object({
    otpSent: Yup.boolean(),
    email: Yup.string().when('otpSent', {
      is: false,
      then: Yup.string().email().required('Email is required'),
      otherwise: Yup.string(),
    }),
    password: Yup.string('').when('otpSent', {
      is: false,
      then: Yup.string().required('Password is required'),
      otherwise: Yup.string(),
    }),
    verificationCode: Yup.string('').when('otpSent', {
      is: true,
      then: Yup.string().required('verificationCode is required'),
      otherwise: Yup.string(),
    }),
  });

  const router = useRouter();

  // Display wallet list card if true
  const [showWallets, setShowWallets] = useState(false);
  // Displays the wallet connection card when a wallet is selected from list
  const [walletConnected, setWalletConnected] = useState(null);
  // Shows success or failure on WalletConnectionStatus component
  const [walletConnectionStatus, setWalletConnectionStatus] = useState(false);
  // Shows Registration Successful card when true
  const [showSuccess, setShowSuccess] = useState(false);
  // Shows success or failure on the Registration Successful card
  const [success, setSuccess] = useState(true);

  // OTP confirmation section
  let nextStep = (
    <>
      <div className='font-semibold text-[12px] md:text-[17px] text-center'>
        Registration
      </div>
      <div>
        <div className='flex my-6 justify-between items-center'>
          <div className='w-[77%]'>
            <Field
              type='text'
              placeholder='Enter Verification Code'
              name='verificationCode'
              className='p-4 text-xs w-full rounded-lg'
            />
          </div>
          <div className='w-[20%]'>
            <button className='btnPrimary flex items-center justify-center rounded-[10px] w-full h-[45px] md:h-[47px] text-[10px] md:text-[10px] lg:text-[12px]'>
              Resend
            </button>
          </div>
        </div>
        <ErrorMessage name='verificationCode' component='div' />
      </div>
    </>
  );

  // Wallet seciton shown after OTP is confirmed. When showWallet is set to true
  if (showWallets) nextStep = <WalletList setValue={setWalletConnected} />;

  // Wallet connection status shown after Wallet is selected when showWallet & walletConnected is true
  if (showWallets && walletConnected)
    nextStep = (
      <WalletConnectionStatus
        value={walletConnected}
        status={walletConnectionStatus}
      />
    );

  // Shows Registration Successfull Card when showWallet & walletConnected & showSuccess is true
  if (showWallets && walletConnected && showSuccess)
    nextStep = <StatusCard success={success} />;

  return (
    <div className='w-[70%]'>
      <div className='flex flex-col justify-center items-center gap-[1rem] lg:gap-[1.5rem]'>
        <div className='w-full text-[9px] md:text-[14px]'>
          <Formik
            initialValues={{
              email: '',
              password: '',
              verificationCode: '',
              otpSent: false,
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              // if API response if true then

              // When True showWallet is set to True and WalletList card is shown
              if (values.otpSent) setShowWallets(true);
              // The WalletConnectionStatus card is shown when a wallet is selected from WalletList and it is set to true in that component.
              // When True Registration Success card is shown
              if (values.otpSent && showWallets && walletConnected)
                setShowSuccess(true);
              console.log(values);
              values.otpSent = true;
            }}
          >
            {({ values, isSubmitting }) => (
              <Form>
                {!values.otpSent ? (
                  <>
                    <div className='font-semibold text-[12px] md:text-[17px] text-center'>
                      Registration
                    </div>
                    <div>
                      <div className='flex my-4'>
                        <Field
                          type='email'
                          placeholder='Enter Email'
                          name='email'
                          className='p-4 text-xs w-full rounded-lg'
                        />
                      </div>
                      <ErrorMessage name='email' component='div' />
                      <div className='flex my-4'>
                        <Field
                          type='password'
                          placeholder='Enter Password'
                          name='password'
                          className='p-4 text-xs w-full rounded-lg'
                        />
                      </div>
                      <ErrorMessage name='password' component='div' />
                    </div>
                  </>
                ) : (
                  // This part is shown after otp is sent
                  nextStep
                )}
                <div className=' my-4 md:my-[1rem] w-full'>
                  {showWallets && walletConnected && showSuccess ? (
                    <button
                      className={
                        'btnPrimary  w-full flex items-center justify-center rounded-[10px] h-[45px] md:h-[52px] text-[0.8rem] md:text-[1rem] '
                      }
                      onClick={() => router.push('/')}
                    >
                      Back To Home
                    </button>
                  ) : (
                    <button
                      type='submit'
                      className={
                        'btnPrimary  w-full flex items-center justify-center rounded-[10px] h-[45px] md:h-[52px] text-[0.8rem] md:text-[1rem] ' +
                        (isSubmitting ? 'disabled' : '')
                      }
                      disabled={isSubmitting}
                    >
                      Next
                    </button>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default SignupComponent;
