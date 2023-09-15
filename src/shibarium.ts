import { Chain } from "wagmi";

export const shibarium = {
  id: 109,
  name: "Shibarium",
  network: "Shibarium",
  nativeCurrency: {
    decimals: 18,
    name: "BONE",
    symbol: "BONE",
  },
  rpcUrls: {
    public: { http: ["https://www.shibrpc.com"] },
    default: { http: ["https://www.shibrpc.com"] },
  },
  blockExplorers: {
    etherscan: { name: "SnowTrace", url: "https://www.shibariumscan.io/" },
    default: { name: "SnowTrace", url: "https://www.shibariumscan.io/" },
  },
  contracts: {
    multicall3: {
      address: "0x529D13E921269848f242bb4871C073752D9f540C",
      blockCreated: 11_907_934,
    },
  },
} as const satisfies Chain;
