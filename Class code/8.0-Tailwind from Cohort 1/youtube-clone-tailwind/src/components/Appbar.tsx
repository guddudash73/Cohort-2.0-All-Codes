export function Topbar() {
  return (
    <div className="flex justify-between items-center px-5">
      <div>YouTube</div>
      <div>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
          <input
            type="search"
            id="default-search"
            className="block w-48 sm:w-96 p-2 ps-5 text-sm text-gray-900 focus:outline-none rounded-lg bg-gray-700 "
            placeholder="Search ..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-0 bottom-0 bg-transparent hover:bg-blue-800 font-medium rounded-r-lg text-sm p-3"
          >
            <svg
              className="w-3 h-3 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>Login</div>
    </div>
  );
}
