import { UserInfo } from "../pages/Login";

const ManagerNavbar : React.FC<{userInfo: UserInfo}> = ({userInfo}) => {
  function changeLang() {
    console.log("language change");
  }

  return (
    <nav className="text-black pb-2 shadow-sm border-hidden rounded px-3">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center">
          <div className="square-black border-black border-[2px] rounded">
            <img src="./logo.png" alt="Logo" className="block" />
          </div>
          <span className="font-bold text-4xl ml-2 font-ptserif">
            Welcome {userInfo.given_name}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:items-end">
        {/* Profile Button */}
        <button
          onClick={() => {}}
          className="flex items-center border-[1px] border-black bg-white hover:bg-black hover:text-white px-4 py-2 ml-2 rounded-md text-lg font-medium font-ptserif"
        >
          <img
            src={userInfo.picture} 
            alt="Profile"
            className="w-6 h-6 mr-2"
          />
          {userInfo.name}
        </button>

        </div>
      </div>
      <div className="mt-4 flex flex-wrap justify-start">
          <button className="border-[1px] border-black bg-white hover:bg-black hover:text-white px-4 py-2 m-2 rounded-md text-lg font-medium font-ptserif">
              <a href="/admin/order" className="hover:text-white">
                  create order
              </a>
          </button>
          <button className="border-[1px] border-black bg-white hover:bg-black hover:text-white px-4 py-2 m-2 rounded-md text-lg font-medium font-ptserif">
              <a href="/orderhistory" className="hover:text-white">
                  order history
              </a>
          </button>
          <button className="border-[1px] border-black bg-white hover:bg-black hover:text-white px-4 py-2 m-2 rounded-md text-lg font-medium font-ptserif">
              <a href="/manager" className="hover:text-white">
                  update items
              </a>
          </button>
          <button className="border-[1px] border-black bg-white hover:bg-black hover:text-white px-4 py-2 m-2 rounded-md text-lg font-medium font-ptserif">
              <a href="/salestrends" className="hover:text-white">
                  reports
              </a>
          </button>
          <button className="border-[1px] border-black bg-white hover:bg-black hover:text-white px-4 py-2 m-2 rounded-md text-lg font-medium font-ptserif">
              <a href="/inventory" className="hover:text-white">
                  inventory
              </a>
          </button>
          <button className="border-[1px] border-black bg-white hover:bg-black hover:text-white px-4 py-2 m-2 rounded-md text-lg font-medium font-ptserif">
              <a href="/editmenu" className="hover:text-white">
                  menu
              </a>
          </button>
      </div>
    </nav>
  );
}
  
export default ManagerNavbar;