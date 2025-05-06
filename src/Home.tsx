// home page todos:
// TODO: Add a title to the page
// TODO: Add a description to the page
// TODO: Add two buttons for Login & Sign Up


import { Link, redirect } from 'react-router-dom'
import icon from './assets/icon.png'
import { context } from './main'
import { useContext } from 'react'
import { getKey } from './key';
import { checkKey } from './requests';
import toast from 'react-hot-toast';

function Home() {
  const cnt = useContext(context);
  cnt.key = getKey();
  cnt.email = localStorage.getItem('email');

  if (cnt.key !== null) {
    checkKey({ email: localStorage.getItem('email')!, key: cnt.key! }).then(
    ).then(
      valid => {
        if (!valid) {
          toast.error("Session Expired")
          redirect('/login');
        } else redirect('/dashboard');
      }
    )
  }

  return <div className="h-screen flex flex-col items-center gap-5">
    <img src={icon} className='size-40 rounded-lg my-5' alt="Icon" />
    <h1 className="text-4xl font-bold">
      Link Saver + Summary Generator
    </h1>
    <h4 className="w-2xl text-center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
      fugiat aliquam architecto fugit pariatur tempora vitae modi sed explicabo
      quas distinctio dolore aliquid hic consequatur error, similique incidunt
      non molestiae!
    </h4>
    <div className="flex gap-4">
      <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Login
      </Link>
      <Link to="/signup" className="bg-green-500 text-white px-4 py-2 rounded-lg">
        Sign Up
      </Link>
    </div>
  </div>
}

export default Home
