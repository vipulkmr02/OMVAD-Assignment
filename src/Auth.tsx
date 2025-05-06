import { useContext, useRef, useState } from "react";
import { FormInput } from "./components";
import icon from '/src/assets/icon.png'
import { login, signup } from "./requests";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { context } from "./main";
import { saveKey } from "./key";

function AuthPage(props: { active?: 'login' | 'signup' }) {
  const navigate = useNavigate();

  const [active] = useState(props.active);
  const formRef = useRef<HTMLFormElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const cnt = useContext(context);

  const submit = () => {
    buttonRef.current!.setAttribute('disabled', '');
    let promise: Promise<Response>;

    if (active === 'login') {
      const fd = new FormData(formRef.current!)
      promise = login({
        email: fd.get("email")!.toString(),
        password: fd.get("password")!.toString()
      })

      promise.then(res => res.json()).then(
        json => {
          cnt.key = json.key
          saveKey(json.key)
        }
      ).then(() => navigate('/dashboard'))
    } else {
      const fd = new FormData(formRef.current!);
      fd.delete('c-password')
      const body = {
        email: fd.get('email')!.toString(),
        name: fd.get('name')!.toString(),
        password: fd.get('name')!.toString()
      }
      promise = signup(body);
    }
    promise.then(
      res => {
        if (res.status === 201)
          return res.json()
        else {
          throw res.json()
        }
      }
    ).then((json) => {
      toast.success(json.message)
      toast('Now, Login Please')
      navigate('/login');
    }).catch(json => {
      toast.error(json.message)
    })

    toast.promise(promise, {
      loading: "Hang in There",
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
