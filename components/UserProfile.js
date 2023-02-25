import { SignOutButton } from "@/pages/enter";
import { UserContext } from "@/lib/context";
import { useContext } from "react";
// UI component for user profile
export default function UserProfile({ user }) {
  const {username} = useContext(UserContext)
  return (
    <div>
      <div className="box-center">
        <img src={user.photoURL || '/hacker.png'} className="card-img-center" />
        <p>
          <i>@{user.username}</i>
        </p>
        <h1>{user.displayName || 'Anonymous User'}</h1>
        {user.username==username && <SignOutButton/>}
      </div>
    </div>
  );
}