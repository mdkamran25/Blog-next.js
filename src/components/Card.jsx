"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Card = ({ key }) => {
  const router = useRouter();

  const pageMove = () => {
    console.log("run");
    return router.push("/details");
  };
  return (
    <Link
      href="details"
      key={key}
      className="shadow-indigo-500/40 max-w-sm rounded-lg overflow-hidden shadow-lg cursor-pointer"
      onClick={pageMove}
    >
      {/* <Link
      key={key}
      className="hover:shadow-indigo-500/40 max-w-sm rounded-lg overflow-hidden shadow-lg cursor-pointer"
      onClick={() => pageMove}
    > */}
      <img
        className="w-full"
        src="https://img.freepik.com/premium-photo/man-is-screaming-computer-when-something-sputters-around-him_862682-1059.jpg"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-gray-700 text-xl mb-2">
          The Coldest Sunset
        </div>
        <p className="text-gray-700 text-base ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </Link>
  );
};

export default Card;
