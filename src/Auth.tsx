import { useRef, useState } from "react";
import { FormInput } from "./components";
import icon from '/src/assets/icon.png'
import { login, signup } from "./requests";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function AuthPage(props: { active?: 'login' | 'signup' }) {
  const navigate = useNavigate();

  const [active] = useState(props.active);
  const formRef = useRef<HTMLFormElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const submit = () => {
    buttonRef.current!.setAttribute('disabled', '');
    let promise: Promise<Response>;
    if (active === 'login') promise = login(new FormData(formRef.current!))
    else promise = signup(new FormData(formRef.current!));
    toast.promise(promise, {
      loading: "Hang in There",
    })
    promise.then(res => {
      if (res.ok) {
        toast.success(`Welcome${active === 'login' ? ' back' : ', New User'}`)
        return navigate('/');
      }
      else toast.error("Login Failed!")
    })
  }

  return <>
    <div className="h-screen flex flex-col items-center gap-5">
      <img src={icon} className='size-40 rounded-lg my-5' alt="Icon" />
      <h1 className="text-4xl m-7 font-bold">
        {active === 'login' ? 'Login' : 'Sign Up'}
      </h1>
      {active === 'login' ?
        <form ref={formRef} className="flex flex-col gap-4 w-96">
          <FormInput
            type="email"
            name="email"
            placeholder="Email"
            id="email-ip"
          />
          <FormInput
            type="password"
            name="password"
            placeholder="Password"
            id="password-ip"
          />
        </form>
        :
        <form ref={formRef} className="flex flex-col gap-4 w-96">
          <FormInput
            type="text"
            name="Name"
            placeholder="Name"
            id="name-ip"
          />
          <FormInput
            type="email"
            name="Email"
            placeholder="Email"
            id="email-ip"
          />
          <FormInput
            type="password"
            name="password"
            placeholder="Password"
            id="password-ip"
          />
          <FormInput
            type="password"
            name="c-password"
            placeholder="Confirm Password"
            id="c-password-ip"
          />
        </form>
      }
      <div className="grid place-items-center">
        <button
          ref={buttonRef}
          type="button"
          className={`rounded disabled:bg-gray-400 disabled:cursor-not-allowed text-white transition-all ease-in-out hover:bg-green-500 duration-200 bg-blue-600 px-2 py-2`}
          onClick={submit}>{active === 'login' ? "Login" : "Sign Up"}</button>
      </div>

    </div >
  </>

}

export default AuthPage;
