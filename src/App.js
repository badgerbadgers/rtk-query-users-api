import "./styles.css";
import { useGetUsersQuery } from "./services/users";

export default function App() {
  const { data, error, isLoading, isSuccess, isError } = useGetUsersQuery();

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {isLoading && "Loading..."}
      {isError && error.message}
      {isSuccess &&
        data &&
        data.map((user) => <h1 key={user.id}>{user.name}</h1>)}
    </div>
  );
}
