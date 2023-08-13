import Image from "next/image"
export default function Navbar (){
    return (
        <nav className="p-4  dark:bg-black dark:text-gray-100 py-5">
        <div className="container flex justify-between h-12 mx-auto px-5">
		<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
			<Image src="/logo3.svg" alt="logo" width={350} height={45} />
		</a>
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-purple-400 ">About</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-purple-400">Projects</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-purple-400">Link</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-purple-400">Link</a>
			</li>
		</ul>
		
	</div>

        </nav>
    )
}