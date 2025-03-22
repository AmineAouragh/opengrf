import Image from "next/image"
import Head from 'next/head'
import Link from 'next/link'

import { useState } from 'react'

import { RiArticleFill } from "react-icons/ri"
import { AiFillSound } from "react-icons/ai"
import { TiShoppingCart } from "react-icons/ti"
import { TfiLayoutCtaBtnLeft } from "react-icons/tfi"
import { TfiLayoutMediaLeft } from "react-icons/tfi"
import { RxAvatar } from "react-icons/rx"
import { CiImageOn } from "react-icons/ci"

export default function Home() {

  const [ selectedCategory, setSelectedCategory ] = useState('')
  const [ selected, setSelected ] = useState(false)

  function handleSelection(categ){
    setSelectedCategory(categ)
    setSelected(true)
  }

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Cairo:wght@200..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <title>OpenGRF – Instantly Create Custom OG Images for Social Media</title>
      </Head>
      <div className="absolute bg-[#F0F3FF] w-full h-full flex flex-col justify-center items-between">
      <div className="flex flex-row items-center mx-auto justify-between w-3/4">
       <div className="flex flex-col w-1/2 mr-12">
        <h1 className="text-3xl font-bold font-Poppins">Choose a OG image template category</h1>
        <p className="text-slate-700 text-xl mt-4">Select a category that best fits your content, and start creating stunning OG images tailored for your needs.</p>
        <div className="mt-6 w-full mx-auto grid grid-cols-3 grid-rows-2 gap-4">
          <div tabIndex={0} onClick={() => handleSelection("Blog Posts")} id="blog-posts-categ" className="group hover:border-blue-600 hover:shadow-blue-600 hover:shadow-sm cursor-pointer bg-white p-4 flex flex-col justify-center items-center rounded-xl border border-gray-300">
            <RiArticleFill className="text-slate-700 group-hover:text-blue-600" size={24} />
            <h3 className="text-xl group-hover:text-blue-600 text-slate-700 mt-4 text-center font-bold font-Poppins">Blog Posts</h3>
            <p className="mt-4 text-center text-slate-700">Best for content creators looking to enhance blog post previews and drive traffic.</p>
          </div>
          <div tabIndex={0} onClick={() => handleSelection("Landing Pages")} id="landing-pages-categ" className="group hover:border-teal-500 hover:shadow-teal-500 hover:shadow-sm cursor-pointer bg-white p-4 flex flex-col justify-center items-center rounded-xl border border-gray-300">
            <TfiLayoutCtaBtnLeft className="text-slate-700 group-hover:text-teal-500" size={24} />
            <h3 className="text-xl mt-4 text-slate-700 text-center font-bold font-Poppins group-hover:text-teal-500">Landing Pages</h3>
            <p className="mt-4 text-center text-slate-700">Best for optimizing landing pages, lead generation, and product announcements.</p>
          </div>
          <div tabIndex={0} onClick={() => handleSelection("E-commerce")} id="ecom-categ" className="group hover:border-green-600 hover:shadow-green-600 hover:shadow-sm cursor-pointer bg-white p-4 flex flex-col justify-center items-center rounded-xl border border-gray-300">
            <TiShoppingCart className="text-slate-700 group-hover:text-green-600" size={24} />
            <h3 className="text-xl mt-4 text-slate-700 group-hover:text-green-600 text-center font-bold font-Poppins">E-commerce</h3>
            <p className="mt-4 text-center text-slate-700">Best for product promotions, store launches, and creating engaging product visuals.</p>
          </div>
          <div tabIndex={0} onClick={() => handleSelection("Marketing & Campaigns")} id="marketing-categ" className="group hover:border-pink-600 hover:shadow-pink-600 hover:shadow-sm cursor-pointer bg-white p-4 flex flex-col justify-center items-center rounded-xl border border-gray-300">
            <AiFillSound className="text-slate-700 group-hover:text-pink-600" size={24} />
            <h3 className="text-xl mt-4 text-slate-700 group-hover:text-pink-600 text-center font-bold font-Poppins">Marketing & Campaigns</h3>
            <p className="mt-4 text-center text-slate-700">Best for eye-catching marketing campaigns, ads, and conversion-focused visuals.</p>
          </div>
        </div>
       </div>
       <div className={`flex ${selected ? "" : "blur-sm"} flex-col shadow-2xl pr-6 w-1/2 rounded-xl border border-gray-300`}>
       <div className="flex flex-row items-stretch justify-between">
        <div className="bg-white py-3 mt-14 w-[8%] rounded-tr-xl rounded-bl-xl"></div>
        <div className="pt-3 w-[90%]">
          <div className="flex flex-row items-center mb-4 justify-start">
            <TfiLayoutMediaLeft size={24} className="text-slate-700 font-bold" />
            <h4 className="text-lg ml-2 text-slate-700 font-bold font-Poppins">Opengrf</h4>
          </div>
          <div className="px-6 pt-6 bg-white rounded-tr-xl rounded-tl-xl">
            <h3 className="text-2xl font-Poppins font-bold mb-4">OG Image templates for {selectedCategory.toLowerCase()}</h3>
            <div className="border-b-2 border-slate-700 w-fit font-semibold font-Poppins text-slate-700">Templates</div>
          </div>
          <div className="bg-gray-100 grid grid-cols-3 grid-rows-2 gap-4 rounded-br-xl rounded-bl-xl p-6">
            {
              selectedCategory == "Blog Posts" || selectedCategory == ""
              &&
              <>
                {/* Template 1 */}
                  <div className="p-4 bg-slate-900 shadow-md rounded-xl">
                    <div className="bg-white rounded-md h-1 w-6"></div>
                    <div className="mt-4 flex flex-row items-start justify-between">
                      <div className="flex flex-col items-center">
                        <RxAvatar className="text-white" size={28} />
                        <div className="bg-white w-6 h-2 rounded-md mt-2"></div>
                      </div>
                      <div className="w-2/3">
                        <div className="h-2 w-full rounded-xl bg-white"></div>
                        <div className="h-2 mt-1 w-full rounded-xl bg-white"></div>
                        <div className="h-2 mt-1 w-1/3 rounded-xl bg-white"></div>
                        <div className="rounded-md w-10 mt-2 h-4 bg-white"></div>
                      </div>
                    </div>
                  </div>
                  {/* Template 2 */}
            <div className="p-4 bg-blue-500 shadow-md flex flex-row items-center justify-center rounded-xl">
              <div className="bg-white rounded-md px-2 py-4 mr-4">
                <CiImageOn size={36} className="text-slate-700" />
              </div>
              <div className="w-2/3">
                <div className="bg-white rounded-md h-1 w-1/3"></div>
                <div className="h-2 mt-2 w-full rounded-xl bg-white"></div>
                <div className="h-2 mt-1 w-1/2 rounded-xl bg-white"></div>
                <div className="mt-2 h-4 w-10 bg-white rounded-md"></div>
              </div>
            </div>
            {/* Template 3 */}
            <div className="p-4 bg-indigo-500 shadow-md flex flex-row items-center justify-center rounded-xl">
              <div className="w-2/3">
                <div className="bg-white rounded-md h-1 w-1/3"></div>
                <div className="h-2 mt-2 w-full rounded-xl bg-white"></div>
                <div className="h-2 mt-1 w-1/2 rounded-xl bg-white"></div>
                <div className="mt-2 h-4 w-10 bg-white rounded-md"></div>
              </div>
              <div className="bg-white rounded-md px-2 py-4 ml-4">
                <CiImageOn size={36} className="text-slate-700" />
              </div>
            </div>
              </>
            }
            {
              selectedCategory == "Landing Pages"
              && 
              <>
                <div className="p-4 bg-gray-900 shadow-md rounded-xl">
                <div className="bg-white rounded-md h-1 w-6"></div>
                <div className="mt-4 flex flex-row items-center justify-between">
                  <div className="w-1/2">
                    <div className="bg-white rounded-md h-2 w-full"></div>
                    <div className="h-2 mt-1 w-full rounded-md bg-white"></div>
                    <div className="h-2 mt-1 w-1/2 rounded-xl bg-white"></div>
                    <div className="mt-2 h-4 w-10 bg-white rounded-md"></div>
                  </div>
                  <div className="w-1/2 rounded-md flex flex-col justify-center items-center p-4 bg-white ml-4">
                    <CiImageOn size={36} className="text-slate-700" />
                  </div>
                </div>
              </div>
              <div className="p-4 bg-blue-800 flex flex-col justify-center items-center shadow-md rounded-xl">
                    <div className="bg-white rounded-md h-4 w-2/3"></div>
                    <div className="h-2 mt-2 w-2/3 rounded-md bg-white"></div>
                    <div className="h-2 mt-1 w-1/2 mx-auto rounded-xl bg-white"></div>
                    <div className="mt-2 h-4 w-1/4 bg-white rounded-md"></div>
              </div>
              <div className="pt-4 bg-[#FFd700] flex flex-col justify-center items-center shadow-md rounded-xl">
                    <div className="bg-slate-900 rounded-md h-4 w-2/3"></div>
                    <div className="h-2 mt-2 w-2/3 rounded-md bg-slate-900"></div>
                    <div className="h-2 mt-1 w-1/2 mx-auto rounded-xl bg-slate-900"></div>
                    <div className="mt-2 h-4 w-1/4 bg-slate-900 rounded-md"></div>
                    <div className="mt-2 h-2/3 flex flex-col justify-center items-center w-2/3 bg-slate-900 rounded-tr-md rounded-tl-md">
                      <CiImageOn size={24} className="text-white" />
                    </div>
              </div>
              </>
            }
            <div className="p-4 hidden bg-green-700 shadow-md flex flex-row items-center justify-center rounded-xl">
              <div className="w-2/3">
                <div className="bg-white rounded-md h-1 w-1/3"></div>
                <div className="h-2 mt-2 w-full rounded-xl bg-white"></div>
                <div className="h-2 mt-1 w-1/2 rounded-xl bg-white"></div>
                <div className="mt-2 h-4 w-10 bg-white rounded-md"></div>
              </div>
              <div className="bg-white rounded-md px-2 py-4 ml-4">
                <CiImageOn size={36} className="text-slate-700" />
              </div>
            </div>
          </div>
        </div>
       </div>
       </div>
      </div>
      </div>
    </>
  );
}
