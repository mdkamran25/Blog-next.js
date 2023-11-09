import { useRouter } from "next/navigation";
export default function Home({params}) {
  const { push } = useRouter();
  console.log(params, "params")
  return (
    <main className="flex min-h-screen bg-white flex-col items-center justify-between p-24">
      <div className="cardContainer grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(10)].map((item, index) => (
          <div
            key={index}
            className="shadow-indigo-500/40 max-w-sm rounded-lg overflow-hidden shadow-lg"
          >
            <img
              className="w-full"
              src="https://img.freepik.com/premium-photo/man-is-screaming-computer-when-something-sputters-around-him_862682-1059.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p
                className="text-gray-700 text-base cursor-pointer"
                onClick={() => push(`/details`)}
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
    </main>
  );
}
