import "./Sidebar.css";
import { community_list } from "../../API/MockData";
import { Link } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";
import { useState } from "react";

const Sidebar = () => {

  const [communityList, setCommunityList] = useState(community_list);

  const handleCommunityClick = (index) => {
    const updatedList = community_list.map((item, i) => {
      if (i === index) {
        return { ...item, isActive: true };
      } else {
        return { ...item, isActive: false };
      }
    });
    setCommunityList(updatedList);
  };

  return (
    <>
      <div className="w-[25%] bg-[--primary-color] flex-shrink-0 sidebar">
        <div className="flex gap-2 items-center py-5">
          <span className="rounded-[40px] w-[40px] h-[40px] text-center flex justify-center flex-col ml-5 bg-red-500">
            RR
          </span>
          <div className="flex-grow px-2 flex-shrink-0">
            <h3>Rolande Raimondi</h3>
            <p>Research Nurse</p>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="flex justify-between items-center p-5">
            <p>Coversation</p>
            <BsPlusCircle />
          </div>

          {communityList.map((community, index) => {
            const { name, router, isActive } = community;
            const sidebarClass = isActive ? "sidebar-bg-Active" : "sidebar-bg";
            return (
              <>
                <div
                  className={sidebarClass}
                  key={index}
                  onClick={() => handleCommunityClick(index)}>
                  <Link
                    to={router}
                    className="flex justify-start items-center gap-4">
                    <p className="w-[50px] h-[50px] rounded-2xl bg-slate-500 flex justify-center items-center flex-shrink-0">
                      #
                    </p>
                    <p>{name}</p>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
