import Card from "@/components/Card";
export default function Home() {
  return (
    <main className="flex min-h-screen bg-white flex-col items-center justify-between p-24">
      <div className="cardContainer grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(10)].map((item, index) => (
          <Card key={index} />
        ))}
      </div>
    </main>
  );
}
