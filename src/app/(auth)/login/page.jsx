import Image from "next/image"
import facebookIcon from '@/app/(auth)/facebookIcon.svg'
import googleIcon from '@/app/(auth)/googleIcon.svg'
import Link from "next/link"

const Login = () => {
  return (
    <>

<div className="m-auto nav flex flex-col justify-between items-center px-3 lg:px-20 max-w-screen-2xl">
<form action="" className='flex flex-col items-center justify-center w-full gap-y-3 lg:w-2/4'>
  <p className='text-grey text-blue-900 font-bold text-left w-full pt-10 '>MEMBER LOGIN</p>
  <input className='border w-full py-3' type="text" placeholder='Enter your Username or Email' required />
  <input className='border w-full py-3' type="password" placeholder='Enter your Password' required />
  <p className='pt-3 w-full font-semibold text-blue-900'>Forgot Password?</p>
  <button type='submit' className='bg-blue-500 text-white w-full py-3 font-bold '>Login</button>
</form>
<div className=' w-full lg:w-2/4'>
<p className=' pt-3 pb-2 text-left w-full font-semibold text-blue-900'>Or using:</p>
<button type='button' className=' w-full border bg-red-700 text-white mt-1 py-3 font-bold relative'>
<Image 
className=" top-3 left-2 absolute"
  src={googleIcon}
  alt=""
    style={{width:'1.5rem'}}
  />
  Google</button>
<button type='button' className=' w-full border bg-blue-900 text-white mt-3 py-3 font-bold relative'>
<Image 
className="absolute top-3 left-2"
  src={facebookIcon}
  alt=""
    style={{width:'1.5rem'}}
  />
  Facebook
  </button>
<Link href='signup'><p className='text-blue-400 w-full text-center mt-20'>Not a Member yet? sign up!</p></Link>
</div>
</div>
    </>
  )
}

export default Login