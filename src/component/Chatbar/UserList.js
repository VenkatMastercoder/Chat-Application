const UserList = ({ users, handleUserSelection }) => {
  return (
    <ul className="p-5">
      {users.map((user, index) => (
        <li key={index} className="p-2" onClick={() => handleUserSelection(user)}>
          {user}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
