
import { readTime } from "../../utils/readTime";
import Link from "next/link";

const Card = ({ data, key }) => {
  // console.log(data)
  return (
    <Link
      key={key}
      className="hover:shadow-indigo-500/40 max-w-sm rounded-lg overflow-hidden shadow-lg cursor-pointer"
      href={`/details/${data._id}`}
    >
      <img
        className="w-full h-[200px]"
        src="https://img.freepik.com/premium-photo/man-is-screaming-computer-when-something-sputters-around-him_862682-1059.jpg"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-gray-700 text-xl mb-0">
          {`${data?.title.length > 20 ? data?.title.slice(0, 20) : data?.title}...`}
        </div>
        <div className="font-semibold text-gray-700 text-xs mb-0">
          Publisher: {`${data?.publisher}`}
        </div>
        <div className="font-bold text-gray-700 text-xs mb-2">
          {`Date: ${data?.updatedAt.slice(0, 10) || data?.createdAt.slice(0, 10)} | ${readTime(data?.description, 100)} min read`}
        </div>
        <p className="text-gray-700 text-base ">
          {`${data?.description.length > 50 ? data?.description.slice(0, 50) : data?.description}...`}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {`#${data.category}`}
        </span>
      </div>
    </Link>
  );
};

export default Card;
