"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const { push } = useRouter();

  const handleSubmit = (value: any) => {
    console.log("handle button")
    push(`/prediction`);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-black ">
      <h1 className="text-7xl font-bold block">Blogs</h1>
      <div className="cardContainer grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {[...Array(10)].map((item, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg"
          >
            <img
              className="w-full"
              src="https://i.pinimg.com/236x/9f/7d/c2/9f7dc27e8b243cb0afca81836392bb73.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p
                className="text-gray-700 text-base cursor-pointer"
                onClick<HTMLParagraphElement>={handleSubmit("Kamran")}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
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
          </div>
        ))}
      </div>
    </div>
  );
}
