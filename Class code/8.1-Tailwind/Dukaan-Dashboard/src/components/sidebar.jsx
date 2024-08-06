import { useRecoilState } from "recoil";
import logo from "./nishyan.png";
import { SidebarAtom } from "../atom";
import orders from "/src/assets/icons/orders.png";
import home from "/src/assets/icons/home.png";
import products from "/src/assets/icons/products.png";
import delivery from "/src/assets/icons/delivery.png";
import marketing from "/src/assets/icons/marketing.png";
import analytics from "/src/assets/icons/analytics.png";
import payouts from "/src/assets/icons/payouts.png";
import discounts from "/src/assets/icons/discounts.png";
import audience from "/src/assets/icons/audience.png";
import appearence from "/src/assets/icons/appearence.png";
import plugins from "/src/assets/icons/plugins.png";
import wallet from "/src/assets/icons/wallet.svg";

export function Sidebar() {
  const [isSideBarOpen, setIsSideBarOpen] = useRecoilState(SidebarAtom);

  const menuLists = [
    {
      icon: home,
      name: "Home",
    },
    {
      icon: orders,
      name: "Orders",
    },
    {
      icon: products,
      name: "Products",
    },
    {
      icon: delivery,
      name: "Delivery",
    },
    {
      icon: marketing,
      name: "Marketing",
    },
    {
      icon: analytics,
      name: "Analytics",
    },
    {
      icon: payouts,
      name: "Payouts",
    },
    {
      icon: discounts,
      name: "Discounts",
    },
    {
      icon: audience,
      name: "Audience",
    },
    {
      icon: appearence,
      name: "Appearence",
    },
    {
      icon: plugins,
      name: "Plugins",
    },
  ];

  function sidebarOpen() {
    setIsSideBarOpen(!isSideBarOpen);
  }

  return (
    <aside
      className={`fixed overflow-hidden z-10 h-[100dvh] w-full left-0 top-0 xl:sticky xl:max-w-[224px] ${
        isSideBarOpen
          ? "opacity-100 pointer-events-all"
          : "opacity-0 pointer-events-none xl:opacity-100 xl:pointer-events-auto"
      }`}
    >
      <div className="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
      <button
        className={`${
          isSideBarOpen ? "fixed" : "hidden"
        } top-5 right-4 xl:hidden text-[#FFFFFF]`}
        onClick={sidebarOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
      <div
        className={`relative max-w-[224px] h-[100dvh] bg-[#1E2640] flex felx-col mr-auto transition-transform duration-300 ease-in-out px-2 py-4 gap-4 justify-between ${
          isSideBarOpen ? "translate-x-0" : "-translate-x-full xl:translate-x-0"
        }`}
      >
        <div className="w-full flex flex-col gap-6 items-center">
          <div className="flex gap-3 text-[#FFFFFF] items-center w-fit mx-auto">
            <img
              className="rounded-[4px] w-[39px] h-full"
              src={logo}
              alt="Nishyan Logo"
            />
            <div className="flex flex-col gap-1 w-[108px] justify center">
              <h3 className="font-medium text-[15px] leading-[22px]">
                Nishyan
              </h3>
              <a
                href={"#"}
                className="underline leading-[16px] text-[13px] font-extralight w-fit text-[#D2D4D9]"
              >
                {" "}
                Visit Store
              </a>
            </div>
            <div>
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
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>

          <div className="w-full flex-col gap-4">
            {menuLists.map((item) => (
              <a
                href={"#"}
                key={item.name}
                className={`${
                  item.name === "Payouts" ? "bg-[#FFFFFF]/10" : ""
                } px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10`}
              >
                <div className="relative w-[18px] h-[18px]">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="object-contain object-center"
                  />
                </div>
                <p className="text-[14px] font-medium">{item.name}</p>
              </a>
            ))}
          </div>
          <div className="py-[6px] px-3 bg-[#353C53] mx-2 rounded w-full">
            <div className="flex gap-3 items-center">
              <div className="w-9 h-9 bg-[#FFFFFF]/10 rounded p-[6px] flex justify-center items-center">
                <img
                  src={wallet}
                  alt="wallet_icon"
                  width={23.65}
                  height={19.6}
                />
              </div>
              <div className="flex flex-col text-white gap-[2px]">
                <h3 className="text-[13px] text-[#FFFFFF] font-light">
                  Available Credits
                </h3>
                <h6 className="text-base font-medium">224.10</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
