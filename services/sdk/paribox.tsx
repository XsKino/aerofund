import { useConnection } from "@solana/wallet-adapter-react";
import { FC, useState } from "react";
import {
ParimutuelWeb3,
MarketPairEnum,
getMarketPubkeys,
calculateNetOdd,
} from "@hxronetwork/parimutuelsdk";
import { useEffect } from "react";
import { PariConfig } from "./Config";
