import { blogDetails, categoryBlog } from "@/apiUrl/apiUrl";
import { readTime } from "../../../../utils/readTime";

const Details = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`${blogDetails}${id}`);
  const data = await res.json();

  return (
    <div className="h-[100vh] mx-auto dark:bg-gray-800 dark:text-gray-100">

      <div className="flex flex-col max-w-5xl mx-auto overflow-hidden rounded">
        <img
          src={data?.result?.img}
          alt=""
          className="w-full h-80 md:h-96 dark:bg-gray-500 md:pt-0"
        />
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-auto lg:rounded-md dark:bg-gray-900">
          <div className="space-y-2">
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-block text-2xl font-semibold sm:text-3xl"
            >
              {data?.result?.title}
            </a>
            <div>
              <p className="text-xs dark:text-gray-400">
                Publisher: {data?.result?.publisher} | {`Date: ${data?.result?.updatedAt.slice(0, 10) || data?.result?.createdAt.slice(0, 10)} `}
              </p>
            </div>
            <div>
              <p className="text-xs dark:text-gray-400">
                Written by: {data?.result?.writerName} {`|  ${data?.result?.description && readTime(data?.result?.description, 100)} min read`}
              </p>
            </div>
          </div>
          <div className="dark:text-gray-100">
            <p>{data?.result?.description}</p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Details;

export async function generateStaticParams() {
  const res = await fetch(`${categoryBlog}`);
  const resData = await res.json();
  const allId = resData.result?.map(blog => (
    { id: blog._id }

  ))

  // console.log(allId)

  return allId
}