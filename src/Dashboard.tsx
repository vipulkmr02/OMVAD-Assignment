import { useContext } from 'react';
import { useNavigate } from "react-router-dom"
import { context } from "./main";
import icon from './assets/icon.png';

export const Dashboard = () => {
  const navigate = useNavigate();
  const cnt = useContext(context);

  if (cnt.key === null) navigate('/');

  return <>
    <header className="flex flex-col">
      <img src={icon} alt="" className='size-40' />
      <h1 className='font-bold text-green-500 text-2xl'>Link Saver</h1>
    </header>
  </>
}
