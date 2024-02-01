import React from "react";
import Image from "next/image";

const Navigation = () => {
  return (
    <nav className="m-2 flex justify-between nav-container p-2">
      <h2 className="font-bold text-2xl sm:text-4xl opacity-85">T.M.D</h2>
      <span>
        <Image
          src="/images/user.jpg"
          className="rounded-full cursor-pointer -mt-3"
          alt=""
          width={50}
          height={50}
          priority
        />
      </span>
    </nav>
  );
};

export default Navigation;
