// question: how can you make sure that the href prop of Button
// have the links that you declared in main.tsx
// answer: 
// import


export function FormInput(props: {
  type: string
  name: string
  id: string
  placeholder: string
}) {
  return <input
    className={`border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2
                focus:ring-blue-500`}
    {...props}
  />
}

export function Navbar() {
  return <nav className="bg-black">
  </nav>
}
