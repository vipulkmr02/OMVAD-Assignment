import { Link } from "react-router-dom"

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

export function TWButton(props: { title: string, href: string }) {
  return <div className="relative inline-flex group">
    <div
      className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200">
    </div>

    <Link to={props.href} target="_blank" title="" role="button"
      className="relative inline-flex items-center justify-center px-5 py-2 text-base font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-600 rounded">
      {props.title}
    </Link>
  </div>
}
