import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "@/lib/context";
//Top navbar
export default function Navbar({}) {
    const {user, username} = useContext(UserContext)
    
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button className="btn-logo">Feed</button>
                    </Link>
                </li>

                {/* user is signed-in and has username */}
                {username && (
                    <>
                    <li className="push-left">
                        <Link href="/admin">
                            <button className="btn-blue">Write Posts</button>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/${username}`}>
                            <img src={user?.photoURL}/>
                        </Link>
                    </li>
                    </>
                )}
                {/* user is NOT signed OR has not created username */}
                {!username && (
                    <Link href="/enter">
                        <button className="btn-blue">Log In</button>
                    </Link>
                )}
            </ul>
        </nav>
    );
}