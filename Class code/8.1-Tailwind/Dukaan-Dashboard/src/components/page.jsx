import { BlueCards, WhiteCards } from "./cards";
import { data } from "./data";

export function Dashboard() {
  return (
    <main className="min-w-[400px]">
      <section className="px-[30px]">
        <div className="flex justify-between pt-[30px]">
          <div className="font-semibold text-2xl">Overview</div>
          <button className="flex border border-slate-300 rounded px-[15px] py-[6px] gap-[6px]">
            <div className="text-lg text-gray-500">This Month </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 h-full pt-[5px] text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="pt-[30px] grid grid-cols-1 gap-[20px] md:grid-cols-2 lg:grid-cols-3">
          <BlueCards PayoutAmount={"2,312.23"} PayoutOrder={"23"}></BlueCards>
          <WhiteCards
            title={"Amount Pending"}
            Amount={"92,312.20"}
            Order={"13"}
          ></WhiteCards>
          <WhiteCards
            title={"Amount Processed"}
            Amount={"23,92,312.19"}
          ></WhiteCards>
        </div>
      </section>
      <section className="px-[30px]">
        <div className="flex flex-col gap-[25px] my-[30px]">
          <div className="text-[21px]">Transaction | This Month</div>
          <div className="flex gap-[10px]">
            <button className="px-4 py-[6px] bg-[#E6E6E6] rounded-full text-[#808080]">
              Payouts (22)
            </button>
            <button className="px-4 py-[6px] bg-[#146EB4] rounded-full text-[#FFFFFF]">
              Refunds (6)
            </button>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <div className="relative w-[300px]">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full h-[40px] p-4 ps-10 text-sm text-gray-900 rounded border-[1px]"
                placeholder="Order ID or Transaction ID"
                required
              />
            </div>
            <div className="flex gap-[10px]">
              <div className="flex justify-center items-center h-[40px] border px-[10px] rounded cursor-pointer">
                <div>Short </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 pl-[5px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                  />
                </svg>
              </div>
              <button className="h-[40px] border px-[6px] rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="pt-[20px] overflow-x-auto">
            <table className="min-w-full">
              <colgroup>
                <col className="w-1/5" />
                <col className="w-1/5" />
                <col className="w-1/5" />
                <col className="w-1/5" />
                <col className="w-1/5" />
              </colgroup>
              <thead className="rounded bg-gray-100 text-gray-500">
                <tr>
                  <th className="px-3 py-[10px] text-left font-medium">
                    Order ID
                  </th>
                  <th className="px-3 py-[10px] text-left font-medium">
                    Status
                  </th>
                  <th className="px-3 py-[10px] text-left font-medium">
                    Transaction ID
                  </th>
                  <th className="px-3 py-[10px] text-left font-medium">
                    Refund Date
                  </th>
                  <th className="px-3 py-[10px] text-right font-medium">
                    Order Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((data, index) => {
                  return (
                    <tr>
                      <td className="px-3 py-[10px] whitespace-nowrap text-blue-500 font-medium">
                        #{data.orderId}
                      </td>
                      <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-2">
                        <span
                          className={`h-[10px] w-[10px] rounded-full ${
                            data.status === "Successful"
                              ? "bg-green-500"
                              : "bg-[#999999]"
                          }`}
                        ></span>
                        {data.status}
                      </td>
                      <td className="px-3 py-[10px] whitespace-nowrap">
                        {data.transactionId}
                      </td>
                      <td className="px-3 py-[10px] whitespace-nowrap">
                        {data.refundDate}
                      </td>
                      <td className="px-3 py-[10px] whitespace-nowrap text-right">
                        ₹ {data.orderAmount}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
