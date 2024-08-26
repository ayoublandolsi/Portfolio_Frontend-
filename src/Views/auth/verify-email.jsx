import { useState } from 'react';
import { useStateContext } from '../../Contexts/ContextProvider';

const VerifyEmail = () => {
  const { logout, resendEmailVerification,isloading,user } = useStateContext();

  const [status, setStatus] = useState(null);

  return (
    <div className="max-w-md mx-auto bg-white rounded p-4 shadow">
      <div className="mb-4 text-sm text-gray-600">
        Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.
        {status === 'verification-link-sent' && (  <span className='text-red-500'> If the email you entered <span className="underline text-sm text-gray-600 hover:text-gray-900"
>{user?.email}</span> is incorrect, please create another account to verify your email.</span>)}
      </div>

      {status === 'verification-link-sent' && (
        <div className="mb-4 font-medium text-sm text-green-600">
          A new verification link has been sent to the email address you provided during registration.
        </div>
      )}

      <div className="mt-4 flex items-center justify-between">
        <button
        disabled={isloading}
          onClick={() => resendEmailVerification({ setStatus })}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {isloading ? "Resend..." : "Resend"}
        </button>

        <button
          type="button"
          className="underline text-sm text-gray-600 hover:text-gray-900"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default VerifyEmail;
