import React from "react";
import { logout } from "../auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../auth/firebase";

const Header = () => {
  const [user] = useAuthState(auth);
  

  return (
    <header>
      <nav>
        <ul>
         {!user && (
           <>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
           </>
          )}
          {user && (
            <li><button onClick={logout}>Logout</button></li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;