import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Main = () => {
  const [copied, setCopied] = useState(false);
  const [isPresale, setisPresale] = useState(false);

  const changeCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section className="w-full flex justify-center">
      <div className="max-w-screen-2xl w-full flex flex-col items-center justify-between mt-2 px-5">
        {/* Banner */}
        <div className="relative w-full bg-white rounded-xl h-[220px]">
          <div className="bg-pink-400 absolute -bottom-[15%] outline-offset-[6px] outline outline-3 left-1/2 transform -translate-x-1/2 w-[128px] h-[128px]  rounded-full"></div>
        </div>

        {/* Title */}
        <h2 className="text-4xl mb-4 md:text-[48px] text-center text-white font-medium mt-14">
          Sneed Maker Classic
        </h2>

        {/* Links */}
        <div className="flex mb-10">
          <CopyToClipboard text="0x2147a3c7B8a3D9ff4004B2938F592a6fAF0eba22">
            <button
              onClick={changeCopy}
              className="bg-[#253341] ease-out duration-200 hover:bg-[#1d2c3a] flex items-center gap-2 font-bold text-[#d4d4d4] text-[14px] py-[6px] px-[40px] rounded-[100px]"
            >
              <img
                src="https://www.scatter.art/_next/image?url=%2Fimages%2Feth-purple.png&w=32&q=75"
                alt=""
                className="w-6"
              />{" "}
              {copied ? "Address Copied!" : "0xf99E...87DB"}
            </button>
          </CopyToClipboard>
          <button className="rounded-full"></button>
        </div>

        {/* Info Cards */}
        <ul className="flex flex-wrap gap-2 justify-center">
          <li className="border-2 border-[#253341] rounded-xl w-[160px] flex flex-col items-center justify-center p-4">
            <h3 className="text-white text-lg">Total Minted</h3>
            <h4 className="text-[#707A83] text-sm">#707A83</h4>
          </li>
          <li className="border-2 border-[#253341] rounded-xl w-[160px] flex flex-col items-center justify-center p-4">
            <h3 className="text-white text-lg">Remaining</h3>
            <h4 className="text-[#707A83] text-sm">#707A83</h4>
          </li>
          <li className="border-2 border-[#253341] rounded-xl w-[160px] flex flex-col items-center justify-center p-4">
            <h3 className="text-white text-lg">Price</h3>
            <h4 className="text-[#707A83] text-sm">#707A83</h4>
          </li>
        </ul>

        {/* Mint */}
        <div className="flex gap-4 sm:gap-0 justify-around max-w-4xl w-full flex-wrap mb-10 mt-20">
          {/* inptus */}
          <div className="max-w-md text-white w-full">
            <span>MINT A</span>
            <h2 className="text-4xl pb-10 border-b border-[#c0c0c0]">
              Sneed Maker Classic
            </h2>
            <div className="w-full mt-2 flex px-3 justify-end">
              <span className="text-end">
                Status:{" "}
                {isPresale ? (
                  <span
                    onClick={() => setisPresale((e) => !e)}
                    className="p-1 cursor-pointer rounded-md px-2 bg-[#41b502]"
                  >
                    live
                  </span>
                ) : (
                  <span
                    onClick={() => setisPresale((e) => !e)}
                    className="p-1 cursor-pointer rounded-md px-2 bg-[#b502ac]"
                  >
                    Presale only
                  </span>
                )}
              </span>
            </div>

            {/* Mint section */}
            <div className="mt-10 flex gap-2">
              <input
                className="appearance-none max-w-xs block w-full bg-[#1f3141] border-2 border-[#0d1220] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-[#1e2e3d] focus:border-gray-500"
                id="grid-zip"
                type="number"
                placeholder="1"
                min={0}
              />{" "}
              <button className="w-[120px] rounded-lg bg-[#27417b]">
                Mint
              </button>
            </div>

            {/* Progress Bar */}
            <div className="flex flex-col mt-10 sm:mt-20 p-5 rounded-lg shadow-lg bg-[#192734]">
              <div className="flex justify-between">
                <h3 className="mb-4">Mint Progress</h3>
                <h3 className="mb-4">10/100</h3>
              </div>
              <div className="w-full h-1 bg-white">
                <div className="w-[75%] h-1 bg-[#00BA7C]"></div>
              </div>
            </div>
          </div>

          {/* NFT image */}
          <div className="w-[400px] rounded-xl bg-[white] h-[400px]"></div>
        </div>
      </div>
    </section>
  );
};

export default Main;
