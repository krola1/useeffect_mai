import { useEffect } from "react";
import { useState } from "react";

export default function User() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
      );

      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, []);

  if (!user) return <h1>loading.....</h1>;

  return (
    <div style={{ border: "solid white" }}>
      <p>Hei {user.name}!</p>
    </div>
  );
}
