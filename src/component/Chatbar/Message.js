import "./Chart.css";
import { useState } from "react";

const Message = (props) => {
  let { message, user } = props;
  
  let firstName = user[0];
  let lastName = user[user.length - 1];
  let username = firstName + lastName;
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <>
      <div className="flex gap-1 my-5 h-35">
        <div className="flex flex-col justify-start">
          <p className="bg-green-200 w-[40px] h-[40px] rounded-[40px] flex flex-col justify-center items-center">
            {username}
          </p>
        </div>
        <div className="flex flex-col justify-center pt-2 h-[100%]">
          <h1 className="font-semibold text-lg">{user}</h1>
          <div className="max-w-[300px] p-4 bg-white rounded-tr-lg rounded-b-lg break-words">
            {message}
          </div>
          <button
            onClick={handleLike}
            className="min-h-[10px] rounded-lg p-3 btn-like">
            Like 👍[{likeCount}]
          </button>
        </div>
      </div>
    </>
  );
};

export default Message;
