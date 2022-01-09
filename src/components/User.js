import { useEffect, useState } from "react";
import SkeletonProfile from "../skeleton/SkeletonProfile";

const User = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await resp.json();
      setUsers(data);
    }, 5000);
  });

  return (
    <div>
      <h2>User Profile</h2>

      {users && (
        <div className="users">
          <h3>{users.name}</h3>
          <p>{users.email}</p>
          <a href={users.website}>{users.website}</a>
        </div>
      )}

      {!users && <SkeletonProfile theme="dark" />}
    </div>
  );
};

export default User;
