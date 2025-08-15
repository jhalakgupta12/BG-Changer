export default function TailwindTest() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div className="shrink-0">
        <img
          className="h-12 w-12"
          src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.2b5e05e3.svg"
          alt="Tailwind Logo"
        />
      </div>
      <div>
        <div className="text-xl font-medium text-black">Tailwind Works!</div>
        <p className="text-gray-500">You are ready to build 🚀</p>
      </div>
    </div>
  );
}
