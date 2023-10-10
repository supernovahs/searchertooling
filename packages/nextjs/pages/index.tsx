import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";
import Image from 'next/image'
import {useState} from "react";
import Recover from "~~/components/Recover";
const Home: NextPage = () => {

  const [FromAddress, SetFromAddress] = useState<String>();
  const [ToAddress,SetToAddress] = useState<String>();
  const [Code,SetCode] = useState<String>();
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">  
          <h1 className="text-center mb-8">
          <Image
              src = "/assets/naruto.png"
              width = {2_00}
              height = {1_00}
              alt = "NineTails"
            />
            <span className="block text-2xl mb-2">FlashBots Bundler</span>
            <span className="block text-4xl font-bold">Generator</span>
          </h1>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row ">
          <input
          placeholder="Enter from address"
          type = "text"
          className= "text-black w-120"
          onChange= {e => SetFromAddress(e.target.value)}
          />
          <input
          placeholder="Enter to address"
          type = "text"
          className= "text-black w-120"
          onChange= {e => SetToAddress(e.target.value)}
          />
          <button
            onClick= {async () =>{
                let result = await Recover(FromAddress!,ToAddress!);
                SetCode(result.bundle);
                console.log("bundle",result.bundle);
            }}
          >
            Get Bundles
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

