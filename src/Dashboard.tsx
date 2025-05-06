import { useEffect, useState } from 'react';
import { TWButton } from './components';
import { fetchAllBookmarks } from './requests';

export const Dashboard = () => {
  const bookmarks = useState<[]>([])

  const updateBookmarks = () => {
    fetchAllBookmarks().then(res => res.json())
      .then(json => { bookmarks[1](json.results) })
  }
  updateBookmarks();

  return <>
    <nav className="flex flex-row border-black-700 border justify-between rounded m-5 p-2 items-center">
      <h1 className='font-bold text-2xl'>
        Link Saver
      </h1>
      <div className="flex gap-5">
        <TWButton title="Logout" href='/logout' />
        <TWButton title="Add" href='/add' />
      </div>
      <div className="flex gap-5">
        <div className="bg-orange-400 text-black text-shadow-black">

        </div>
        <div className="hover:bg-black hover:text-white p-2 rounded text-orange-400 border">
          <a href="https://github.com/vipulkmr02">By: Vipul</a>
        </div>
        <div className="hover:text-black p-2 rounded text-orange-400 border">
          <a href="https://github.com/vipulkmr02/omvad-assignment">Front-end Code</a>
        </div>
        <div className="hover:text-black p-2 rounded text-orange-400 border">
          <a href="https://github.com/vipulkmr02/ls-back-end">Front-end Code</a>
        </div>
      </div>
    </nav>
  </>
}


