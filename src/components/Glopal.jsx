export default function Glopal() {
  return (
    <div>
      {/* The Big Image */}
      <div className="relative m-6.5 bg-[url('/timsclothing.png')] bg-center bg-cover h-96  flex flex-col justify-center items-center text-center rounded-3xl">
        <div className="absolute inset-0 bg-black/40 rounded-3xl" />
        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="text-4xl font-semibold">Lorem Ipsum</h1>
          <p className="mt-2 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>
    </div>
  );
}
