import { useContext, useRef } from "react";
import { FormInput } from "./components";
import icon from '/src/assets/icon.png'
import { login, signup } from "./requests";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { context } from "./main";
import { saveKey } from "./key";


export function LoginPage() {

  const navigate = useNavigate();

  const formRef = useRef<HTMLFormElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const cnt = useContext(context);

  const submit = () => {
    buttonRef.current!.setAttribute('disabled', '');

    const fd = new FormData(formRef.current!)
    localStorage.setItem('mail', fd.get("email")!.toString())
    const promise: Promise<Response> = login({
      email: fd.get("email")!.toString(),
      password: fd.get("password")!.toString()
    })
    // const fd = new FormData(formRef.current!);
    // } else {
    // if (fd.get('password') !== fd.get('c-password'))
    //   return
    // promise = signup({
    //   email: fd.get('email')!.toString(),
    //   name: fd.get('name')!.toString(),
    //   password: fd.get('name')!.toString()
    // });

    toast.promise(promise, {
      loading: "Hang in There",
    })
    return promise.then(res => {
      // for login & signup in both
      // cases return code for
      // success in 201
      return res.json()
    }
    ).then((json) => {
      if (json.error) {
        throw json.message;
      } else {
        toast.success("Welcome!")
        // if (active === 'signup') {
        // toast('Now, Login Please')
        // navigate('/login');
        // } else {
        cnt.key = json.key
        saveKey(json.key)
        navigate('/dashboard')
        // }
      }
    }).catch(json => {
      console.log(json)
      toast.error(json)
    }).finally(() => buttonRef.current!.removeAttribute('disabled'))

  }

  return <>
    <div className="h-screen flex flex-col items-center gap-5">
      <img src={icon} className='size-40 rounded-lg my-5' alt="Icon" />
      <h1 className="text-4xl m-7 font-bold"> Login </h1>
      {// active === 'login' ?
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
        // :
        // <form ref={formRef} className="flex flex-col gap-4 w-96">
        //   <FormInput
        //     type="text"
        //     name="name"
        //     placeholder="Name"
        //     id="name-ip"
        //   />
        //   <FormInput
        //     type="email"
        //     name="email"
        //     placeholder="Email"
        //     id="email-ip"
        //   />
        //   <FormInput
        //     type="password"
        //     name="password"
        //     placeholder="Password"
        //     id="password-ip"
        //   />
        //   <FormInput
        //     type="password"
        //     name="c-password"
        //     placeholder="Confirm Password"
        //     id="c-password-ip"
        //   />
        // </form>
      }
      <div className="grid place-items-center">
        <button
          ref={buttonRef}
          type="button"
          className={`rounded disabled:bg-gray-400 disabled:cursor-not-allowed text-white transition-all ease-in-out hover:bg-green-500 duration-200 bg-blue-600 px-2 py-2`}
          onClick={submit}>Login</button>
      </div>

    </div >
  </>
}

export function RegisterPage() {
  const navigate = useNavigate();

  const formRef = useRef<HTMLFormElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const submit = () => {
    const fd = new FormData(formRef.current!);
    if (fd.get('password') !== fd.get('c-password'))
      return

    buttonRef.current!.setAttribute('disabled', '');
    const promise = signup({
      email: fd.get('email')!.toString(),
      name: fd.get('name')!.toString(),
      password: fd.get('name')!.toString()
    });

    toast.promise(promise, {
      loading: "Hang in There",
    })
    return promise.then(res => {
      return res.json()
    }
    ).then((json) => {
      if (json.error) {
        throw json.message;
      } else {
        toast.success("Sign UP Complete!")
        toast('Now, Login Please')
        navigate('/login');
      }
    }).catch(json => {
      console.log(json)
      toast.error(json)
    }).finally(() => buttonRef.current!.removeAttribute('disabled'))
  }

  return <>
    <div className="h-screen flex flex-col items-center gap-5">
      <img src={icon} className='size-40 rounded-lg my-5' alt="Icon" />
      <h1 className="text-4xl m-7 font-bold"> Signup </h1>
      <form ref={formRef} className="flex flex-col gap-4 w-96">
        <FormInput
          type="text"
          name="name"
          placeholder="Name"
          id="name-ip"
        />
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
        <FormInput
          type="password"
          name="c-password"
          placeholder="Confirm Password"
          id="c-password-ip"
        />
      </form>
      <div className="grid place-items-center">
        <button
          ref={buttonRef}
          type="button"
          className={`rounded disabled:bg-gray-400 disabled:cursor-not-allowed text-white transition-all ease-in-out hover:bg-green-500 duration-200 bg-blue-600 px-2 py-2`}
          onClick={submit}>Signup</button>
      </div>

    </div >
  </>
}
