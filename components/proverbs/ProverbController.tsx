import { StyleSheet, Text, View } from "react-native";
import React from "react";

import {
  synonymAntonymstartsWithA,
  synonymAntonymstartsWithB,
  synonymAntonymstartsWithC,
  synonymAntonymstartsWithD,
  synonymAntonymstartsWithE,
  synonymAntonymstartsWithF,
  synonymAntonymstartsWithG,
  synonymAntonymstartsWithH,
  synonymAntonymstartsWithI,
  synonymAntonymstartsWithJ,
  synonymAntonymstartsWithK,
  synonymAntonymstartsWithL,
  synonymAntonymstartsWithM,
  synonymAntonymstartsWithN,
  synonymAntonymstartsWithO,
  synonymAntonymstartsWithP,
  synonymAntonymstartsWithQ,
  synonymAntonymstartsWithR,
  synonymAntonymstartsWithS,
  synonymAntonymstartsWithT,
  synonymAntonymstartsWithU,
  synonymAntonymstartsWithV,
  synonymAntonymstartsWithW,
  synonymAntonymstartsWithX,
  synonymAntonymstartsWithY,
  synonymAntonymstartsWithZ,
} from "@/assets/data/synonymsAntonyms/synonymsAntonyms";
import ShowProverbs from "./ShowProverbs";
import { proverbsStartsWithA, proverbsStartsWithB, proverbsStartsWithC, proverbsStartsWithD, proverbsStartsWithE, proverbsStartsWithF, proverbsStartsWithG, proverbsStartsWithH, proverbsStartsWithI, proverbsStartsWithJ, proverbsStartsWithK, proverbsStartsWithL, proverbsStartsWithM, proverbsStartsWithN, proverbsStartsWithO, proverbsStartsWithP, proverbsStartsWithR, proverbsStartsWithS, proverbsStartsWithT, proverbsStartsWithU, proverbsStartsWithV, proverbsStartsWithW, proverbsStartsWithX, proverbsStartsWithY, proverbsStartsWithZ } from "@/assets/data/proverbs/proverbData";
import ShowData from "../common/ShowData";

export default function ProverbController({ topic }: any) {


  switch (topic) {
    case "Start With A":
      return <ShowProverbs dataList={proverbsStartsWithA} />;
      // Your code for A
      console.log("Handling A");
      break;
    case "Start With B":
      return <ShowProverbs dataList={proverbsStartsWithB} />;
      console.log("Handling B");
      break;
    case "Start With C":
      return <ShowProverbs dataList={proverbsStartsWithC} />;
      console.log("Handling C");
      break;
    case "Start With D":
      return <ShowProverbs dataList={proverbsStartsWithD} />;
      console.log("Handling D");
      break;
    case "Start With E":
      return <ShowProverbs dataList={proverbsStartsWithE} />;
      console.log("Handling E");
      break;
    case "Start With F":
      return <ShowProverbs dataList={proverbsStartsWithF} />;
      console.log("Handling F");
      break;
    case "Start With G":
      return <ShowProverbs dataList={proverbsStartsWithG} />;
      console.log("Handling G");
      break;
    case "Start With H":
      return <ShowProverbs dataList={proverbsStartsWithH} />;
      console.log("Handling H");
      break;
    case "Start With I":
      return <ShowProverbs dataList={proverbsStartsWithI} />;
      console.log("Handling I");
      break;
    case "Start With J":
      return <ShowProverbs dataList={proverbsStartsWithJ} />;
      console.log("Handling J");
      break;
    case "Start With K":
      return <ShowProverbs dataList={proverbsStartsWithK} />;
      console.log("Handling K");
      break;
    case "Start With L":
      return <ShowProverbs dataList={proverbsStartsWithL} />;
      console.log("Handling L");
      break;
    case "Start With M":
      return <ShowProverbs dataList={proverbsStartsWithM} />;
      console.log("Handling M");
      break;
    case "Start With N":
      return <ShowProverbs dataList={proverbsStartsWithN} />;
      console.log("Handling N");
      break;
    case "Start With O":
      return <ShowProverbs dataList={proverbsStartsWithO} />;
      console.log("Handling O");
      break;
    case "Start With P":
      return <ShowProverbs dataList={proverbsStartsWithP} />;
      console.log("Handling P");
      break;
    case "Start With Q":
      return <ShowProverbs dataList={proverbsStartsWithR} />;
      console.log("Handling Q");
      break;
    case "Start With R":
      return <ShowProverbs dataList={proverbsStartsWithR} />;
      console.log("Handling R");
      break;
    case "Start With S":
      return <ShowProverbs dataList={proverbsStartsWithS} />;
      console.log("Handling S");
      break;
    case "Start With T":
      return <ShowProverbs dataList={proverbsStartsWithT} />;
      console.log("Handling T");
      break;
    case "Start With U":
      return <ShowProverbs dataList={proverbsStartsWithU} />;
      console.log("Handling U");
      break;
    case "Start With V":
      return <ShowProverbs dataList={proverbsStartsWithV} />;
      console.log("Handling V");
      break;
    case "Start With W":
      return <ShowProverbs dataList={proverbsStartsWithW} />;
      console.log("Handling W");
      break;
    case "Start With X":
      return <ShowProverbs dataList={proverbsStartsWithX} />;
      console.log("Handling X");
      break;
    case "Start With Y":
      return <ShowProverbs dataList={proverbsStartsWithY} />;
      console.log("Handling Y");
      break;
    case "Start With Z":
      return <ShowProverbs dataList={proverbsStartsWithZ} />;
      console.log("Handling Z");
      break;
    default:
      console.log("Title not recognized");
  }
}

const styles = StyleSheet.create({});
