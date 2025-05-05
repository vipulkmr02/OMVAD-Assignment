// home page todos:
// TODO: Add a title to the page
// TODO: Add a description to the page
// TODO: Add two buttons for Login & Sign Up


import icon from './assets/icon.png'

function Home() {
  return <div className="h-screen flex flex-col items-center gap-5">
    <img src={icon} className='w-56 rounded-lg my-10' alt="Icon" />
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
      <a href="/login" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Login
      </a>
      <a href="/signup" className="bg-green-500 text-white px-4 py-2 rounded-lg">
        Sign Up
      </a>
    </div>
  </div>
}

export default Home
