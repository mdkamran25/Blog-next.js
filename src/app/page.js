import { categoryBlog } from "@/apiUrl/apiUrl";
import Card from "@/components/Card";
import Skeleton from "@/components/Skeleton";

export default async function Home() {
  const res = await fetch(`${categoryBlog}/science`);
  const resData = await res.json();

  return (
    <>
      <main className="flex min-h-screen bg-white flex-col items-center justify-between p-24">
        <div className="cardContainer grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {resData
            ? resData.result?.map((item, index) => (
                <Card data={item} key={index} />
              ))
            : [...Array(10)].map(() => <Skeleton key={Math.random()} />)}
        </div>
      </main>
    </>
  );
}
