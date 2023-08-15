import Image from "next/image"
export default function Navbar (){
    return (
        <nav className="p-4  bg-black text-gray-100 py-7">
        <div className="container flex justify-between h-12 mx-auto px-5">
		<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
			<Image src="/alogo.gif" alt="logo" width={300} height={45} />
		</a>
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1  dark:border-transparent hover:text-purple-400 ">About</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1  dark:border-transparent hover:text-purple-400">Projects</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1  dark:border-transparent hover:text-purple-400">Link</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1  dark:border-transparent hover:text-purple-400">Link</a>
			</li>
		</ul>
		
	</div>

        </nav>
    )
}