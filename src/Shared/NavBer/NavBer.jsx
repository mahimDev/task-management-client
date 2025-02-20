import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
const NavBer = () => {
    const { user, userSignOut } = useAuth()
    const isDark = true;
    const [open, setOpen] = useState(false)

    const nav = <>
        <NavLink to={'/'}> <li>Home</li></NavLink>
        <NavLink to={'allScholarship'}><li>All Scholarship</li></NavLink>
        <NavLink to={'about'}><li>About</li></NavLink>
        {user &&
            <NavLink to={'dashboard'}><li>Blog</li></NavLink>
        }
    </>
    const handleLogout = () => {
        userSignOut()
            .then(() => {
                toast.success('Logout successful', {
                    position: 'top-center',
                    hideProgressBar: true,
                    autoClose: 2000,
                    theme: 'colored',
                })
            })
            .catch(() => {

            })
    }
    console.log(user)
    return (

        <div className={` mx-auto ${isDark ? "bg-black/80 text-white" : "bg-background/20 text-text"}    py-4 `}>
            <div className=" flex justify-between w-11/12 mx-auto items-center  py-2 px-3 ">

                <div className="md:hidden block ">
                    <nav>
                        <div className={`md:hidden text-xl bg-darkGray/30  text-white p-2 rounded-full `
                        }
                            onClick={() => setOpen(!open)}>
                            {
                                open === true ?
                                    <img className="w-10" src="https://img.icons8.com/?size=100&id=26140&format=png&color=10B981" alt="" />
                                    :
                                    <img className="w-10" src="https://img.icons8.com/?size=100&id=26141&format=png&color=10B981" alt="" />

                            }

                        </div>
                        <ul className={`md:flex absolute z-[500] md:static bg-secondary text-white p-3 duration-1000 left-0 rounded-xl  ${open ? `${user ? 'top-[80px]' : ' '} ` : '-top-60'} `}>
                            {
                                nav
                            }
                        </ul>
                    </nav>
                </div>
                <div className="hidden md:block ">
                    <ul className="md:flex border-2 py-2 px-4 rounded-md gap-4 text-xl  font-semibold  backdrop-blur-lg">
                        {nav}
                    </ul>
                </div>

                <div className="flex gap-4 items-center">
                    {/* toggle button */}
                    {/* <button onClick={() => setIsDark((prev) => !prev)} className={`flex h-6 w-14 items-center rounded-full border border-secondary   ${isDark ? 'bg-secondary/50' : null}`}>
                        <div className={`size-5 rounded-full bg-secondary duration-300 ${isDark ? 'translate-x-8' : 'translate-x-1'}`}></div>
                    </button> */}
                    {
                        user ?
                            <div className="group relative">
                                <img
                                    width={500}
                                    height={500}
                                    className="size-12 rounded-full bg-slate-500 object-cover"
                                    src=""
                                    alt="avatar"
                                />
                                <div className={`group-hover:block hidden rounded-xl absolute right-0 top-12 p-5 bg-black/80 backdrop-blur-2xl text-darkGray`}>
                                    <h1 className="mb-2">{user?.displayName}</h1>
                                    <h1 className="my-2">{user?.email}</h1>
                                    <button
                                        onClick={handleLogout}
                                        className={`  border-2 border  
                                 py-1 px-3 font-semibold rounded-md `}
                                    >LogOut</button>
                                </div>
                            </div>
                            :

                            <div className="flex gap-2">
                                <Link to={'/login'}>
                                    <button className={`border-2 border-lightGray  py-1 px-3 font-semibold rounded-md backdrop-blur-lg`}
                                    >Login</button></Link>
                                <Link to={'/register'}>
                                    <button className={`border-2 border-lightGray  py-1 px-3 font-semibold rounded-md  backdrop-blur-lg`}
                                    >Register</button></Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBer;