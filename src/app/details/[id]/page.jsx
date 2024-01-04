"use client";
import { blogDetails } from "@/apiUrl/apiUrl";
import { readTime } from "@/utils/readTime";
import axios from "axios";
import { useEffect, useState } from "react";

const Details = ({ params }) => {
  const [data, setData] = useState(null);
  const { id } = params;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${blogDetails}/${id}`);
        console.log(res.data.result);
        setData(res.data.result);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="h-[100vh] mx-auto dark:bg-gray-800 dark:text-gray-100">
      <div className="mt-6 md:mt-[6rem] lg:mt-4 flex flex-col max-w-5xl mx-auto overflow-hidden rounded">
        <img
          src={data?.img}
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
              {data?.title}
            </a>
            <div>
              <p className="text-xs dark:text-gray-400">
                Publisher: {data?.publisher} | {`Date: ${data?.updatedAt.slice(0,10) || data?.createdAt.slice(0,10)} `}
              </p>
            </div>
            <div>
              <p className="text-xs dark:text-gray-400">
                Written by: {data?.writerName} {`|  ${data?.description && readTime(data?.description, 100)} min read`}
              </p>
            </div>
          </div>
          <div className="dark:text-gray-100">
            <p>{data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
