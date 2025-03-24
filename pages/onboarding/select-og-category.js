import Image from "next/image"
import Head from 'next/head'
import Link from 'next/link'

import { useState } from 'react'
import { useRouter } from 'next/router'

import { RiArticleFill } from "react-icons/ri"
import { AiFillSound } from "react-icons/ai"
import { TiShoppingCart } from "react-icons/ti"
import { TfiLayoutCtaBtnLeft } from "react-icons/tfi"
import { TfiLayoutMediaLeft } from "react-icons/tfi"
import { RxAvatar } from "react-icons/rx"
import { CiImageOn } from "react-icons/ci"
import { FaArrowRightLong } from "react-icons/fa6"
import { CgWebsite } from "react-icons/cg"

export default function CategorySelectionPage() {

  const router = useRouter()

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
      <div className="flex flex-row items-center mb-4 justify-start mx-auto w-3/4">
            <TfiLayoutMediaLeft size={32} className="font-bold" />
            <h4 className="text-xl ml-2 font-bold font-Poppins">Opengrf</h4>
      </div>
      <div className="flex flex-row items-center mx-auto justify-between mt-6 w-3/4">
       <div className="flex flex-col w-1/2 mr-12">
        <h1 className="text-3xl font-bold font-Poppins">Choose an Open Graph template category</h1>
        <p className="text-slate-700 text-md mt-3">We will suggest templates that help you make the best og images tailored for your needs.</p>
        <div className="mt-6 w-full mx-auto grid grid-cols-3 gap-4">
          <div tabIndex={0} onClick={() => handleSelection("Blog Posts")} id="blog-posts-categ" className={`group ${selectedCategory == "Blog Posts" ? "border-blue-600 shadow-blue-600 shadow-sm" : "border-gray-400"} cursor-pointer bg-white p-4 flex flex-col justify-center items-center rounded-xl border`}>
            <RiArticleFill className={`${selectedCategory == "Blog Posts" ? "text-blue-600" : "text-slate-700"} group-hover:text-blue-600`} size={24} />
            <h3 className={`text-xl ${selectedCategory == "Blog Posts" ? "text-blue-600" : "text-slate-700"} group-hover:text-blue-600 mt-4 text-center font-bold font-Poppins`}>Blog Posts</h3>
            <p className="mt-4 text-center text-slate-700">Best for content creators looking to enhance blog post previews and drive traffic.</p>
          </div> 
          <div tabIndex={0} onClick={() => handleSelection("Landing Pages")} id="landing-pages-categ" className={`${selectedCategory == "Landing Pages" ? "border-teal-500 shadow-teal-500 shadow-sm" : "border-gray-400"} group cursor-pointer bg-white p-4 flex flex-col justify-center items-center rounded-xl border`}>
            <CgWebsite className={`${selectedCategory == "Landing Pages" ? "text-teal-500" : "text-slate-700"} group-hover:text-teal-500`} size={24} />
            <h3 className={`text-xl mt-4 ${selectedCategory == "Landing Pages" ? "text-teal-500" : "text-slate-700"} text-center font-bold font-Poppins group-hover:text-teal-500`}>Landing Pages</h3>
            <p className="mt-4 text-center text-slate-700">Best for optimizing landing pages, lead generation, and product announcements.</p>
          </div>
          
          <div tabIndex={0} onClick={() => handleSelection("Marketing")} id="marketing-categ" className={`${selectedCategory == "Marketing" ? "border-pink-600 shadow-pink-600 shadow-sm" : "border-gray-400"} group cursor-pointer bg-white p-4 flex flex-col justify-center items-center rounded-xl border`}>
            <AiFillSound className={`${selectedCategory == "Marketing" ? "text-pink-600" : "text-slate-700"} group-hover:text-pink-600`} size={24} />
            <h3 className={`text-xl ${selectedCategory == "Marketing" ? "text-pink-600" : "text-slate-700"} mt-4 group-hover:text-pink-600 text-center font-bold font-Poppins`}>Marketing</h3>
            <p className="mt-4 text-center text-slate-700">Best for eye-catching marketing campaigns, ads, and conversion-focused visuals.</p>
          </div>
        </div>
        <button 
          type="button" 
          onClick={
            () => router.push(
                { 
                    pathname: '/onboarding/select-og-template', 
                    query: { category: selectedCategory }
                }
            )
          } 
          className={`rounded-md flex flex-row items-center justify-center shadow-md ${selectedCategory == "Blog Posts" && "bg-blue-600 hover:bg-blue-700"} ${selectedCategory == "Landing Pages" && "bg-teal-600 hover:bg-teal-700"} ${selectedCategory == "Marketing" && "bg-pink-600 hover:bg-pink-700"} ${selectedCategory == "" && "hidden"} px-8 py-4 font-bold font-Poppins text-white mt-6`}
        >
          <span>Next: Choose an OG image template</span>
          <FaArrowRightLong className="ml-2" />
        </button>
       </div>
       <div className={`flex flex-col ${selectedCategory == "Blog Posts" && "shadow-blue-400 border-blue-500"} ${selectedCategory == "Landing Pages" && "shadow-teal-400 border-teal-500"} ${selectedCategory == "Marketing" && "shadow-pink-400 border-pink-600"} ${selectedCategory == "" && "border-[#6161ff] shadow-[#6161ff]"} shadow-2xl pr-6 w-1/2 rounded-xl border`}>
       <div className={`flex ${selected ? "" : "blur-sm"} flex-row items-stretch justify-between`}>
        <div className="bg-white py-3 mt-14 w-[8%] rounded-tr-xl rounded-bl-xl"></div>
        <div className="pt-3 w-[90%]">
          <div className="flex flex-row items-center mb-4 justify-start">
            <TfiLayoutMediaLeft size={24} className="text-slate-700 font-bold" />
            <h4 className="text-lg ml-2 text-slate-700 font-bold font-Poppins">Opengrf</h4>
          </div>
          <div className={`${selectedCategory == "" && "bg-white"} ${selectedCategory == "Blog Posts" && "bg-blue-600"} ${selectedCategory == "Marketing" && "bg-pink-600"} ${selectedCategory == "Landing Pages" && "bg-teal-700"} px-6 pt-6 rounded-tr-xl rounded-tl-xl`}>
            <h3 className={`${selectedCategory == "" ? "" : "text-white"} text-2xl font-Poppins font-bold mb-4`}>OG Image templates for {selectedCategory.toLowerCase()}</h3>
            <div className={`${selectedCategory == "" ? "text-slate-700 border-slate-700" : "text-slate-100 border-white"} border-b-2 w-fit font-semibold font-Poppins`}>Templates</div>
          </div>
          <div className={`${selectedCategory == "Blog Posts" && "border-r border-l border-blue-600"} ${selectedCategory == "Landing Pages" && "border-r border-l border-teal-500"} ${selectedCategory == "Marketing" && "border-r border-l border-pink-600"} bg-gray-100 grid grid-cols-3 grid-rows-2 gap-4 p-6`}>
            {
              (selectedCategory == "Blog Posts" || selectedCategory == "")
              &&
              <>
                {/* Template 1 */}
                <div className="p-6 bg-slate-900 shadow-md rounded-xl">
                    <div className="bg-white rounded-md h-1 w-6"></div>
                    <div className="mt-3 flex flex-row items-start justify-between">
                      <div className="flex flex-col items-center">
                        <RxAvatar className="text-white" size={28} />
                        <div className="bg-white w-6 h-2 rounded-md mt-2"></div>
                      </div>
                      <div className="w-2/3">
                        <div className="h-1 w-full rounded-xl bg-white"></div>
                        <div className="h-1 mt-1 w-full rounded-xl bg-white"></div>
                        <div className="h-1 mt-1 w-1/3 rounded-xl bg-white"></div>
                        <div className="rounded-sm w-10 mt-2 h-3 bg-white"></div>
                      </div>
                    </div>
                </div>
                {/* Template 2 */}
                <div className="p-6 bg-blue-500 shadow-md flex flex-row items-center justify-between rounded-xl">
                  <div className="bg-white w-1/2 mr-4 rounded-md p-5">
                  </div>
                  <div className="w-1/2">
                    <div className="bg-white rounded-md h-1 w-1/3"></div>
                    <div className="h-1 mt-2 w-full rounded-xl bg-white"></div>
                    <div className="h-1 mt-1 w-1/2 rounded-xl bg-white"></div>
                    <div className="mt-2 h-3 w-10 bg-white rounded-sm"></div>
                  </div>
                </div>
                {/* Template 3 */}
                <div className="p-6 bg-indigo-500 shadow-md flex flex-row items-center justify-between rounded-xl">
                  <div className="w-1/2">
                    <div className="bg-white rounded-md h-1 w-1/3"></div>
                    <div className="h-1 mt-2 w-full rounded-xl bg-white"></div>
                    <div className="h-1 mt-1 w-1/2 rounded-xl bg-white"></div>
                    <div className="mt-2 h-3 w-10 bg-white rounded-sm"></div>
                  </div>
                  <div className="w-1/2 bg-white rounded-md p-5 ml-4">
                  </div>
                </div>
                {/* Template 4 */}
                <div className="p-6 bg-sky-500 shadow-md flex flex-col items-center justify-center rounded-xl">
                  <div className="w-3/4 flex flex-col justify-center items-center">
                    <div className="bg-white rounded-md h-2 w-1/3"></div>
                    <div className="h-1 mt-2 w-full rounded-xl bg-white"></div>
                    <div className="h-1 mt-1 w-2/3 rounded-xl bg-white"></div>
                    <div className="mt-2 h-3 w-10 bg-white rounded-sm"></div>
                  </div>
                </div>
                {/* Template 5 */}
                <div className="bg-red-500 border border-red-500 shadow-md flex flex-row items-center justify-between rounded-xl">
                  <div className="py-6 px-5 w-1/2 mr-2">
                   <div className="">
                    <div className="bg-white rounded-md h-1 w-1/3"></div>
                    <div className="h-1 mt-2 w-full rounded-xl bg-white"></div>
                    <div className="h-1 mt-1 w-1/2 rounded-xl bg-white"></div>
                    <div className="mt-2 h-3 w-10 bg-white rounded-sm"></div>
                   </div>
                  </div>
                  <div className="w-2/5 bg-white h-full rounded-tr-xl rounded-br-xl py-5 px-4">
                  </div>
                </div>
                {/* Template 6 */}
                <div className="bg-slate-100 border border-slate-700 shadow-md flex flex-row items-center justify-between rounded-xl">
                  <div className="bg-slate-700 w-2/5 h-full rounded-tl-xl rounded-bl-xl py-5 px-4">
                  </div>
                  <div className="w-1/2 py-6 px-5">
                    <div className="bg-slate-700 rounded-md h-1 w-1/3"></div>
                    <div className="h-1 mt-2 w-full rounded-xl bg-slate-700"></div>
                    <div className="h-1 mt-1 w-1/2 rounded-xl bg-slate-700"></div>
                    <div className="mt-2 h-3 w-10 bg-slate-700 rounded-sm"></div>
                  </div>
                </div>
              </>
            }
            {
              selectedCategory == "Landing Pages"
              && 
              <>
                <div className="p-6 bg-gray-900 shadow-md rounded-xl">
                  <div className="bg-white rounded-md h-1 w-6"></div>
                  <div className="mt-3 flex flex-row items-stretch justify-between">
                    <div className="w-1/2">
                      <div className="bg-white rounded-md h-1 w-full"></div>
                      <div className="h-1 mt-1 w-full rounded-md bg-white"></div>
                      <div className="h-1 mt-1 w-1/2 rounded-xl bg-white"></div>
                      <div className="mt-2 h-3 w-10 bg-white rounded-sm"></div>
                    </div>
                    <div className="w-1/2 rounded-md flex flex-col justify-center items-center p-5 bg-white ml-4">
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-blue-800 flex flex-col justify-center items-center shadow-md rounded-xl">
                    <div className="bg-white rounded-md h-4 w-2/3"></div>
                    <div className="h-1 mt-2 w-2/3 rounded-md bg-white"></div>
                    <div className="h-1 mt-1 w-1/2 mx-auto rounded-xl bg-white"></div>
                    <div className="mt-2 h-3 w-1/4 bg-white rounded-sm"></div>
                </div>
                <div className="pt-4 bg-[#FFd700] flex flex-col justify-center items-center shadow-md rounded-xl">
                    <div className="bg-slate-900 rounded-md h-4 w-2/3"></div>
                    <div className="h-2 mt-2 w-2/3 rounded-md bg-slate-900"></div>
                    <div className="mt-2 h-4 w-1/4 bg-slate-900 rounded-sm"></div>
                    <div className="mt-2 h-3/4 flex flex-col justify-center items-center w-2/3 bg-slate-900 rounded-tr-md rounded-tl-md">
                    </div>
                </div>
              </>
            }
            
            {
              selectedCategory == "Marketing" &&
              <>
                <div className="p-6 bg-radial bg-white border border-slate-300 flex flex-col justify-center items-center shadow-md rounded-xl">
                    <div className="bg-slate-900 rounded-md h-1 w-1/3"></div>
                    <div className="h-6 mt-2 w-2/3 rounded-md bg-slate-900"></div>
                    <div className="h-1 mt-2 w-1/2 mx-auto rounded-xl bg-slate-900"></div>
                    <div className="mt-2 h-3 w-1/4 bg-slate-900 rounded-sm"></div>
                </div>
                <div className="p-6 bg-green-500 shadow-md flex flex-row items-center justify-between rounded-xl">
                  <div className="bg-white w-1/2 mr-4 rounded-md p-5">
                  </div>
                  <div className="w-1/2">
                    <div className="bg-white rounded-md h-1 w-1/3"></div>
                    <div className="h-1 mt-2 w-full rounded-xl bg-white"></div>
                    <div className="h-1 mt-1 w-1/2 rounded-xl bg-white"></div>
                    <div className="mt-2 h-3 w-10 bg-white rounded-sm"></div>
                  </div>
                </div>
              </>
            }
            <div className="p-4 hidden bg-green-700 shadow-md flex flex-row items-stretch justify-between rounded-xl">
              <div className="w-2/3">
                <div className="bg-white rounded-md h-1 w-1/3"></div>
                <div className="h-2 mt-2 w-full rounded-xl bg-white"></div>
                <div className="h-2 mt-1 w-1/2 rounded-xl bg-white"></div>
                <div className="mt-2 h-4 w-10 bg-white rounded-md"></div>
              </div>
              <div className="bg-white rounded-md px-2 py-4 ml-4">
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
