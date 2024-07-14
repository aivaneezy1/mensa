import Link from "next/link";
import CardOneDisplay from "../CardDisplay/CardOneDisplay";
import UserCardOne from "../UserCardDisplay/UserCardOne";
const UserProfile = () => {
  return (
    <div className="flex justify-center items-center mt-10  gap-5 h-sm ml-5 mr-5 h-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-2">
        <div className="flex flex-col items-center justify-center md:px-16 md:py-36 px-4 py-14 border-2 border-dashed border-gray-500 hover:border-blue-500 h-10 cursor-pointer h-20 max-w-sm">
          <div className="border-2 border-dashed border-blue-500 p-4 rounded-full flex items-center justify-center">
            <Link href="create-cv">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-3 h-3"
              >
                <path
                  fill="#3b82f6"
                  d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                />
              </svg>
            </Link>
          </div>
          <div className="mt-3">
            <h2 className="text-blue-500 font-md text-2xl">Nuovo Curriculum</h2>
          </div>
        </div>

        <div className=" flex justify-start items-start">
        <div className="">
        <UserCardOne/>   
        </div>
        </div>

        <div > <UserCardOne/></div>
      </div>
    </div>
  );
};

export default UserProfile;
