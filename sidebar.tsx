import { Link, useLocation } from "react-router-dom"; 



const paths = [
    { name: "", path: "", icon: "" },
    { name: "", path: "", icon: "" },
    { name: "", path: "", icon: "" },
    { name: "", path: "", icon: "" },
    { name: "", path: "", icon: "" },
    { name: "", path: "", icon: "" }
];

export default function Sidebar() {


    const location = useLocation(); 



    return (

        <div className="flex h-screen w-16 flex-col border-e bg-black">

            <div className="flex-grow pt-4">
                <ul className="space-y-1 px-2">
                    {paths.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`group relative flex items-center justify-center p-3 rounded-lg transition-all duration-300 ${isActive ? "bg-gray-800 text-white scale-110" : "text-gray-400 hover:bg-gray-700"
                                        }`}
                                >
                                    {item.icon}
                                    <span
                                        className={`absolute start-full top-1/2 ms-4 -translate-y-1/2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 group-hover:scale-110  bg-gray-900 `}
                                    >
                                        {item.name}
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>


        </div>

    );
}
