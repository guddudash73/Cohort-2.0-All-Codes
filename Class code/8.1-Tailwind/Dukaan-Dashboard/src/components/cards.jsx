export function BlueCards({ PayoutAmount, PayoutOrder }) {
  return (
    <div className="min-w-[300px]">
      <div className="bg-[#146eb4] text-white p-5 rounded-t-[8px]">
        <div className="flex gap-[8px]">
          <div className="text-gray-100 text-lg">Next Payout</div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between pt-[20px]">
          <div className="font-semibold text-[2.1rem]">₹{PayoutAmount}</div>
          <div className="flex">
            <div className="underline font-semibold flex items-center">
              {PayoutOrder} Orders
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 20"
                strokeWidth={2}
                stroke="currentColor"
                className="size-6 h-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-[#0e4f82] text-white px-5 py-3 rounded-b-[8px] ">
        <div>Next Payment Date:</div>
        <div>Today, 4:00PM</div>
      </div>
    </div>
  );
}

export function WhiteCards({ title, Amount, Order }) {
  return (
    <div className="min-w-[300px]">
      <div className="p-5 rounded-[8px] shadow-md">
        <div className="flex gap-[8px]">
          <div className="text-gray-500 text-lg">{title}</div>
          <div className="flex items-center text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between pt-[20px]">
          <div className="font-semibold text-[2.1rem]">₹{Amount}</div>
          <div className={`flex ${Order ? "show" : "hidden"}`}>
            <div className="underline font-semibold flex items-center text-[#146eb4]">
              {Order} Orders
            </div>
            <div className="text-[#146eb4]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 20"
                strokeWidth={2}
                stroke="currentColor"
                className="size-6 h-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
