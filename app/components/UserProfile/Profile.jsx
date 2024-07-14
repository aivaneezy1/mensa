import Link from "next/link";
import CardOneDisplay from "../CardDisplay/CardOneDisplay";
import UserCardOne from "../UserCardDisplay/UserCardOne";
import UserCardTwo from "../UserCardDisplay/UserCardTwo";
import UserCardThree from "../UserCardDisplay/UserCardThree";
const UserProfile = () => {
  return (
    <div className="flex justify-center items-center mt-10  0 gap-5 h-sm ml-5 mr-5 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <div className="">
          <UserCardOne />
        </div>

        <div className="lg:mb-10">
          {" "}
          <UserCardTwo />
        </div>

        <div className="mb-10">
        <UserCardThree/>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
