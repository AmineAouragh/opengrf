import Image from "next/image"
import Head from 'next/head'
import Link from 'next/link'

import { RiArticleFill } from "react-icons/ri"
import { AiFillSound } from "react-icons/ai"
import { TiShoppingCart } from "react-icons/ti"
import { TfiLayoutCtaBtnLeft } from "react-icons/tfi"

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Cairo:wght@200..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <title>Opengrf – Instantly Create Custom OG Images for Social Media</title>
      </Head>
      <div className="absolute w-full h-full flex flex-col justify-center items-center">
       <div className="flex flex-col mx-auto w-1/2">
        <h1 className="text-4xl text-center font-bold font-Poppins">Choose a OG image template category</h1>
        <p className="text-slate-700 text-xl mt-4">Select a category that best fits your content, and start creating stunning OG images tailored for your needs.</p>
        <div className="mt-10 w-full mx-auto grid grid-cols-3 grid-rows-2 gap-4">
          <div tabIndex={0} id="blog-posts-categ" className="cursor-pointer p-6 flex flex-col justify-center items-center rounded-xl border border-gray-300">
            <RiArticleFill className="text-slate-700" size={24} />
            <h3 className="text-2xl text-slate-700 mt-4 text-center font-bold font-Poppins">Blog Posts</h3>
            <p className="mt-4 text-center text-slate-700">Best for content creators looking to enhance blog post previews and drive traffic.</p>
          </div>
          <div tabIndex={0} id="landing-pages-categ" className="cursor-pointer p-6 flex flex-col justify-center items-center rounded-xl border border-gray-300">
            <TfiLayoutCtaBtnLeft className="text-slate-700" size={24} />
            <h3 className="text-2xl mt-4 text-slate-700 text-center font-bold font-Poppins">Landing Pages</h3>
            <p className="mt-4 text-center text-slate-700">Best for optimizing landing pages, lead generation, and product announcements.</p>
          </div>
          <div tabIndex={0} id="ecom-categ" className="cursor-pointer p-6 flex flex-col justify-center items-center rounded-xl border border-gray-300">
            <TiShoppingCart className="text-slate-700" size={24} />
            <h3 className="text-2xl mt-4 text-slate-700 text-center font-bold font-Poppins">E-commerce</h3>
            <p className="mt-4 text-center text-slate-700">Best for product promotions, store launches, and creating engaging product visuals.</p>
          </div>
          <div tabIndex={0} id="marketing-categ" className="cursor-pointer p-6 flex flex-col justify-center items-center rounded-xl border border-gray-300">
            <AiFillSound className="text-slate-700" size={24} />
            <h3 className="text-2xl mt-4 text-slate-700 text-center font-bold font-Poppins">Marketing & Campaigns</h3>
            <p className="mt-4 text-center text-slate-700">Best for eye-catching marketing campaigns, ads, and conversion-focused visuals.</p>
          </div>
        </div>
       </div>
      </div>
    </>
  );
}
