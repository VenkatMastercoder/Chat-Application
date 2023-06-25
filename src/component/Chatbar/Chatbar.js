import { useState } from "react";
import Message from "./Message";
import UserList from "./UserList";
import { user_list } from "../../API/MockData";

const Chartbar = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [displayUserList, setDisplayUserList] = useState(false);

  const handleSendMessage = () => {
    const newMessage = messageInput.trim();
    if (newMessage !== "") {
      const randomUser =
        user_list[Math.floor(Math.random() * user_list.length)];
      const newChatMessage = {
        message: newMessage,
        user: randomUser,
        likeCount: 0,
      };
      setChatMessages([...chatMessages, newChatMessage]);
      setMessageInput("");
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;

    setMessageInput(value);

    if (value.endsWith("@")) {
      setDisplayUserList(true);
    } else {
      setDisplayUserList(false);
    }
  };

  const handleUserSelection = (user) => {
    setMessageInput((prevInput) => prevInput.replace(/@$/, `@${user}`));
    setDisplayUserList(false);
  };

  return (
    <>
      <div className="flex flex-col justify-between h-[100vh] p-5 w-[75%] flex-grow-1 bg-[--secondary-color] chart-bar">
        <div className="flex justify-between items-center">
          <div className="">
            <h3>Introduction</h3>

            <p>This is For Company Wide Chatter</p>
          </div>
          <div>
            <p>3 | 100</p>
          </div>
        </div>

        <div className="w-full h-[100%] p-5 overflow-auto">
          {chatMessages.map((message, index) => (
            <Message
              key={index}
              message={message.message}
              user={message.user}
            />
          ))}
        </div>

        {displayUserList && (
          <UserList
            users={user_list}
            handleUserSelection={handleUserSelection}
          />
        )}

        <div className="flex h-10 outline-0">
          <input
            type="text"
            placeholder="Type Message"
            className=" h-[40px] p-5 flex-grow rounded-l-full focus:outline-0 outline-0"
            onChange={handleInputChange}
            value={messageInput}
          />

          <div className="p-2 rounded-r-full bg-white focus:outline-0">
            <button type="submit" onClick={handleSendMessage}>
              {"👉"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chartbar;
