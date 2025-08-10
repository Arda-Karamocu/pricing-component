import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen font-Montserrat font-bold bg-[hsl(240,78%,98%)] lg:bg-[url('/src/images/bg-top.svg'),_url('/src/images/bg-bottom.svg')] bg-no-repeat lg:bg-[position:top_right,_bottom_left] lg:bg-[length:auto,_auto] p-6 lg:p-0">
        <div className="flex flex-col items-center gap-y-10">
          <span className="text-3xl text-[hsl(233,13%,49%)]">Our Pricing</span>
          <div className="flex flex-row items-center justify-center gap-x-5">
            <span className="text-sm text-[hsl(233,13%,80%)]">Annually</span>
            <label
              htmlFor="check"
              className="w-[56px] h-[32px] rounded-full relative flex items-center p-1 cursor-pointer bg-gradient-to-r from-[hsl(237,73%,79%)] to-[hsl(238,63%,64%)]"
            >
              <input
                type="checkbox"
                id="check"
                className="sr-only peer"
                checked={toggle}
                onChange={() => setToggle(!toggle)}
              />
              <span className="size-6 bg-[hsl(240,78%,98%)] absolute rounded-full peer-checked:ml-6 transition-all duration-200"></span>
            </label>
            <span className="text-sm text-[hsl(233,13%,80%)]">Monthly</span>
          </div>

          <div className="flex lg:flex-row flex-col gap-y-8 items-center mt-5">
            <div className="flex flex-col items-center gap-y-5 p-7 h-[422px] bg-white rounded-xl shadow-md lg:rounded-r-none">
              <span className="text-lg text-[hsl(232,13%,49%)]">Basic</span>
              <span className="text-[40px] text-[hsl(232,13%,33%)] flex flex-row items-center justify-center gap-x-1.5">
                $<span className="text-7xl">{toggle ? "19.99" : "199.99"}</span>
              </span>
              <div className="flex flex-col w-2xs mt-2">
                <span className="border-b text-sm border-t border-[hsl(233,13%,80%)] p-3 text-center text-[hsl(232,13%,49%)]">
                  500 GB Storage
                </span>
                <span className="border-b text-sm border-[hsl(233,13%,80%)] p-3 text-center text-[hsl(232,13%,49%)]">
                  2 Users Allowed
                </span>
                <span className="border-b text-sm border-[hsl(233,13%,80%)] p-3 text-center text-[hsl(232,13%,49%)]">
                  Send up to 3 GB
                </span>
              </div>
              <button className="w-full text-[13px] text-white font-bold bg-gradient-to-r from-[hsl(237,73%,79%)] to-[hsl(238,63%,64%)] py-2.5 rounded-md mt-3 tracking-widest cursor-pointer">
                LEARN MORE
              </button>
            </div>

            <div className="flex flex-col items-center justify-center gap-y-5 p-7 h-[470px] bg-gradient-to-b from-[hsl(237,73%,79%)] to-[hsl(238,63%,64%)] rounded-xl shadow-md text-[hsl(240,78%,98%)]">
              <span className="text-lg">Professional</span>
              <span className="text-[40px] flex flex-row items-center justify-center gap-x-1.5">
                $<span className="text-7xl">{toggle ? "24.99" : "249.99"}</span>
              </span>
              <div className="flex flex-col w-2xs mt-2">
                <span className="border-b text-sm border-t border-[hsl(233,13%,80%)] p-3 text-center">
                  1 TB Storage
                </span>
                <span className="border-b text-sm border-[hsl(233,13%,80%)] p-3 text-center">
                  5 Users Allowed
                </span>
                <span className="border-b text-sm border-[hsl(233,13%,80%)] p-3 text-center">
                  Send up to 10 GB
                </span>
              </div>
              <button className="w-full text-[13px] text-[hsl(238,63%,64%)] font-bold bg-white py-2.5 rounded-md mt-3 tracking-widest cursor-pointer">
                LEARN MORE
              </button>
            </div>

            <div className="flex flex-col items-center gap-y-5 p-7 h-[422px] bg-white lg:rounded-l-none rounded-xl shadow-md">
              <span className="text-lg text-[hsl(232,13%,49%)]">Master</span>
              <span className="text-[40px] text-[hsl(232,13%,33%)] flex flex-row items-center justify-center gap-x-1.5">
                $<span className="text-7xl">{toggle ? "39.99" : "399.99"}</span>
              </span>
              <div className="flex flex-col w-2xs mt-2">
                <span className="border-b text-sm border-t border-[hsl(233,13%,80%)] p-3 text-center text-[hsl(232,13%,49%)]">
                  2 TB Storage
                </span>
                <span className="border-b text-sm border-[hsl(233,13%,80%)] p-3 text-center text-[hsl(232,13%,49%)]">
                  10 Users Allowed
                </span>
                <span className="border-b text-sm border-[hsl(233,13%,80%)] p-3 text-center text-[hsl(232,13%,49%)]">
                  Send up to 20 GB
                </span>
              </div>
              <button className="w-full text-[13px] text-white font-bold bg-gradient-to-r from-[hsl(237,73%,79%)] to-[hsl(238,63%,64%)] py-2.5 rounded-md mt-3 tracking-widest cursor-pointer">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
