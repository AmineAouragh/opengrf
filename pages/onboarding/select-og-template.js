import Image from "next/image"
import Head from 'next/head'
import Link from 'next/link'

import { useState } from 'react'
import { useRouter } from 'next/router'


import { TfiLayoutMediaLeft } from "react-icons/tfi"
import { RxAvatar } from "react-icons/rx"

export default function OGTemplateSelectionPage(){

    const router = useRouter()

    const { category } = router.query 

    const [ selectedTemplate, setSelectedTemplate ] = useState('')
    const [ selected, setSelected ] = useState(false)

    function handleSelection(template){
      setSelectedTemplate(template)
      setSelected(true)
    }

    return (
        <>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Cairo:wght@200..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            <title>OpenGRF – Instantly Create Custom OG Images for Social Media</title>
          </Head>
          <div className="absolute bg-[#F0F3FF] w-full h-full flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center w-3/4 mx-auto">
              <div className="flex flex-row items-center mb-4 justify-center mx-auto w-3/4">
                <TfiLayoutMediaLeft size={36} className="font-bold" />
                <h3 className="text-xl ml-2 font-bold font-Poppins">Opengrf</h3>
              </div>
              <h1 className="text-3xl text-center font-bold font-Poppins">Choose an Open Graph template for your {category.toLowerCase()}</h1>
              <div className="flex flex-col w-2/3 mx-auto mt-4">
                <div className="pt-3"> 
                  <div className={`${category == "Blog Posts" && "bg-blue-600"} ${category == "Marketing" && "bg-pink-600"} ${category == "Landing Pages" && "bg-teal-700"} px-6 pt-6 rounded-tr-xl rounded-tl-xl`}>
                    <h3 className={`text-2xl text-white font-Poppins font-bold mb-4`}>OG Image templates for {category.toLowerCase()}</h3>
                    <div className={`border-b-2 text-white w-fit font-semibold font-Poppins`}>Templates</div>
                  </div>
                  <div className={`${category == "Blog Posts" && "border-blue-600 shadow-blue-600 shadow-xl"} ${category == "Landing Pages" && "shadow-lg shadow-teal-600 border-teal-500"} ${category == "Marketing" && "shadow-lg shadow-pink-500 border-pink-600"} w-full rounded-br-xl border rounded-bl-xl bg-gray-100 grid grid-cols-3 gap-4 p-6`}>
                  {
                    (category == "Blog Posts")
                    &&
                      <>
                        {/* Template 1 */}
                        <div onClick={() => handleSelection("Author + Title")} tabIndex={0} className={`hover:border-gray-600 border group p-2 rounded-xl cursor-pointer flex flex-col ${selectedTemplate == "Author + Title" ? "border-gray-400 bg-gray-300" : "border-slate-300"}`}>
                          <div className="px-6 py-12 bg-slate-900 shadow-md rounded-xl">
                            <div className="flex flex-row items-center justify-between">
                              <div className="flex flex-col items-center">
                                <div className="bg-white rounded-md h-3 w-8 mb-4"></div>
                                <RxAvatar className="text-white" size={38} />
                                <div className="bg-white w-10 h-2 rounded-md mt-2"></div>
                              </div>
                              <div className="w-2/3">
                                <div className="h-2 w-full rounded-xl bg-white"></div>
                                <div className="h-2 mt-2 w-full rounded-xl bg-white"></div>
                                <div className="h-2 mt-2 w-1/3 rounded-xl bg-white"></div>
                                <div className="rounded-sm w-10 mt-4 h-4 bg-white"></div>
                              </div>
                            </div>
                          </div>
                          <div className={`${selectedTemplate == "Author + Title" ? "text-slate-800" : "text-slate-700"} mt-2 group-hover:text-slate-600 text-center text-slate-700 font-semibold font-Poppins`}>
                            Author + Title
                          </div>
                        </div>
                        {/* Template 2 */}
                        <div onClick={() => handleSelection("Image on the left")} tabIndex={0} className={`hover:border-blue-600 border group p-2 rounded-xl cursor-pointer flex flex-col ${selectedTemplate == "Image on the left" ? "border-blue-300 bg-blue-100" : "border-slate-300"}`}>
                          <div className="px-6 py-12 bg-blue-500 shadow-md flex flex-row items-center justify-between rounded-xl">
                            <div className="bg-white w-1/2 mr-4 rounded-md px-5 py-10">
                            </div>
                            <div className="w-1/2 flex flex-col justify-center">
                              <div className="bg-white rounded-md h-2 w-1/3"></div>
                              <div className="h-2 mt-3 w-full rounded-xl bg-white"></div>
                              <div className="h-2 mt-2 w-1/2 rounded-xl bg-white"></div>
                              <div className="mt-3 h-4 w-10 bg-white rounded-sm"></div>
                            </div>
                          </div>
                          <div className={`mt-2 ${selectedTemplate == "Image on the left" ? "text-blue-600" : "text-slate-700"} group-hover:text-blue-600 text-center font-semibold font-Poppins`}>
                            Image on the left
                          </div>
                        </div>
                        {/* Template 3 */}
                        <div onClick={() => handleSelection("Image on the right")} className={`hover:border-indigo-600 group cursor-pointer border p-2 rounded-xl flex flex-col ${selectedTemplate == "Image on the right" ? "border-indigo-300 bg-indigo-100" : "border-slate-300"}`} tabIndex={0}>
                          <div className="px-6 py-12 bg-indigo-500 shadow-md flex flex-row items-center justify-between rounded-xl">
                            <div className="w-1/2 flex flex-col justify-center">
                              <div className="bg-white rounded-md h-2 w-1/3"></div>
                              <div className="h-2 mt-3 w-full rounded-xl bg-white"></div>
                              <div className="h-2 mt-2 w-1/2 rounded-xl bg-white"></div>
                              <div className="mt-3 h-4 w-10 bg-white rounded-sm"></div>
                            </div>
                            <div className="w-1/2 bg-white rounded-md px-5 py-10 ml-4">
                            </div>
                          </div>
                          <div className={`${selectedTemplate == "Image on the right" ? "text-indigo-600" : "text-slate-700"} mt-2 group-hover:text-indigo-600 text-center font-semibold font-Poppins`}>
                            Image on the right
                          </div>
                        </div>
                        {/* Template 4 */}
                        <div onClick={() => handleSelection("Minimalist (Text + CTA)")} tabIndex={0} className={`hover:border-sky-600 group border p-2 rounded-xl cursor-pointer flex flex-col ${selectedTemplate == "Minimalist (Text + CTA)" ? "border-sky-300 bg-sky-100" : "border-slate-300"}`}>
                          <div className="px-6 py-12 bg-sky-500 shadow-md flex flex-col items-center justify-center rounded-xl">
                            <div className="w-3/4 flex flex-col justify-center items-center">
                              <div className="bg-white rounded-md h-2 w-1/3"></div>
                              <div className="h-2 mt-3 w-full rounded-xl bg-white"></div>
                              <div className="h-2 mt-2 w-2/3 rounded-xl bg-white"></div>
                              <div className="mt-3 h-4 w-10 bg-white rounded-sm"></div>
                            </div>
                          </div>
                          <div className={`mt-2 group-hover:text-sky-600 text-center font-semibold font-Poppins ${selectedTemplate == "Minimalist (Text + CTA)" ? "text-sky-800" : "text-slate-700"}`}>
                            Minimalist (Text + CTA)
                          </div>
                        </div>
                        {/* Template 5 */}
                        <div onClick={() => handleSelection("50/50 - Text + Image")} className={`group cursor-pointer border hover:border-red-600 p-2 rounded-xl flex flex-col ${selectedTemplate == "50/50 - Text + Image" ? "border-red-300 bg-red-50" : "border-slate-300"}`} tabIndex={0}>
                          <div className="bg-red-500 border border-red-500 shadow-md flex flex-row items-center justify-between rounded-xl">
                            <div className="py-12 flex flex-col px-5 w-1/2 mr-2">
                              <div className="bg-white rounded-md h-2 w-1/3"></div>
                              <div className="h-2 mt-3 w-full rounded-xl bg-white"></div>
                              <div className="h-2 mt-2 w-1/2 rounded-xl bg-white"></div>
                              <div className="mt-3 h-4 w-10 bg-white rounded-sm"></div>
                            </div>
                            <div className="w-1/2 bg-white h-full rounded-tr-xl rounded-br-xl py-5 px-4">
                            </div>
                          </div>
                          <div className={`mt-2 group-hover:text-red-600 text-center font-semibold font-Poppins ${selectedTemplate == "50/50 - Text + Image" ? "text-red-600" : "text-slate-700"}`}>
                            50/50 Split (Text + Image)
                          </div>
                        </div>
                        {/* Template 6 */}
                        <div onClick={() => handleSelection("50/50 - Image + Text")} className={`${selectedTemplate == "50/50 - Image + Text" ? "border-slate-400 bg-slate-200" : "border-slate-300"} group hover:border-slate-600 border cursor-pointer p-2 rounded-xl flex flex-col`} tabIndex={0}>
                            <div className="bg-slate-100 border border-slate-700 shadow-md flex flex-row items-center justify-between rounded-xl">
                              <div className="bg-slate-700 w-1/2 h-full rounded-tl-xl rounded-bl-xl py-5 px-4">
                              </div>
                              <div className="w-1/2 py-12 px-5">
                                <div className="bg-slate-700 rounded-md h-2 w-1/3"></div>
                                <div className="h-2 mt-3 w-full rounded-xl bg-slate-700"></div>
                                <div className="h-2 mt-2 w-1/2 rounded-xl bg-slate-700"></div>
                                <div className="mt-3 h-4 w-10 bg-slate-700 rounded-sm"></div>
                              </div>
                            </div>
                            <div className={`mt-2 text-center font-semibold font-Poppins text-slate-700`}>
                                50/50 Split (Image + Text)
                            </div>
                        </div>
                      </>
                  }
                  {
                        category == "Landing Pages"
                        && 
                        <>
                          {/* Template 1 */}
                          <div onClick={() => handleSelection("50/50")} className={`cursor-pointer ${selectedTemplate == "50/50" ? "border-teal-400 bg-teal-100" : "border-slate-300"} flex flex-col group p-2 border hover:border-teal-400 rounded-xl`} tabIndex={0}>
                            <div className="px-6 pt-8 pb-10 bg-gray-900 shadow-md rounded-xl">
                              <div className="bg-white rounded-md h-2 w-8"></div>
                              <div className="mt-4 flex flex-row items-center justify-between">
                                <div className="w-1/2">
                                  <div className="bg-white rounded-md h-2 w-full"></div>
                                  <div className="h-2 mt-2 w-full rounded-md bg-white"></div>
                                  <div className="h-2 mt-2 w-1/2 rounded-xl bg-white"></div>
                                  <div className="mt-3 h-4 w-10 bg-white rounded-sm"></div>
                                </div>
                                <div className="w-1/2 rounded-md flex flex-col justify-center items-center px-5 py-10 bg-white ml-4">
                                </div>
                              </div>
                            </div>
                            <div className={`mt-2 group-hover:text-teal-600 ${selectedTemplate == "50/50" ? "text-teal-800": "text-slate-700"} text-center font-semibold font-Poppins`}>
                                50/50
                            </div>
                          </div>
                          {/* Template 2 */}
                          <div onClick={() => handleSelection("Text Only")} className={`cursor-pointer flex flex-col group p-2 border ${selectedTemplate == "Text Only" ? "border-teal-400 bg-teal-100" : "border-slate-300"} rounded-xl hover:border-teal-400`} tabIndex={0}>
                            <div className="px-6 py-12 bg-blue-800 flex flex-col justify-center items-center shadow-md rounded-xl">
                              <div className="bg-white rounded-md h-4 w-1/4"></div>
                              <div className="h-2 mt-3 w-2/3 rounded-md bg-white"></div>
                              <div className="h-2 mt-2 w-1/2 mx-auto rounded-xl bg-white"></div>
                              <div className="mt-3 h-4 w-1/4 bg-white rounded-sm"></div>
                            </div>
                            <div className={`mt-2 ${selectedTemplate == "Text Only" ? "text-teal-800" : "text-slate-700"} group-hover:text-teal-600 text-center font-semibold font-Poppins`}>
                              Text Only
                            </div>
                          </div>
                          {/* Template 3 */}
                          <div onClick={() => handleSelection("1 Column")} className={`cursor-pointer ${selectedTemplate == "1 Column" ? "border-teal-400 bg-teal-100" : "border-slate-300"} flex flex-col group p-2 border hover:border-teal-400 rounded-xl`} tabIndex={0}>
                            <div className="h-full bg-[#FFd700] flex flex-col justify-center items-center shadow-md rounded-xl">
                              <div className=" bg-slate-900 rounded-md h-3 w-1/5"></div>
                              <div className="h-3 mt-2 w-1/2 rounded-md bg-slate-900"></div>
                              <div className="my-1 h-3 w-1/6 bg-slate-900 rounded-sm"></div>
                              <div className="h-1/2 flex flex-col justify-center items-center w-2/3 bg-slate-900 rounded-md">
                              </div>
                            </div>
                            <div className={`mt-2 ${selectedTemplate == "1 Column" ? "text-teal-800" : "text-slate-700"} group-hover:text-teal-600 text-center font-semibold font-Poppins`}>
                                1 Column
                            </div>
                          </div>
                      </>
                    }
            
                    {
                      category == "Marketing" &&
                      <>
                        {/* Template 1 */}
                        <div onClick={() => handleSelection("Flash Deal")} className={`group border ${selectedTemplate == "Flash Deal" ? "border-pink-400 bg-pink-100" : 'border-slate-300'} p-2 hover:border-pink-400 rounded-xl cursor-pointer flex flex-col`} tabIndex={0}>
                          <div className="px-6 h-full py-12 bg-radial bg-white border border-slate-300 flex flex-col justify-center items-center shadow-md rounded-xl">
                            <div className="bg-slate-900 rounded-md h-2 w-1/3"></div>
                            <div className="h-4 mt-2 w-1/2 rounded-md bg-slate-900"></div>
                            <div className="h-2 mt-2 w-1/2 mx-auto rounded-xl bg-slate-900"></div>
                            <div className="mt-3 h-4 w-1/4 bg-slate-900 rounded-sm"></div>
                          </div>
                          <div className={`mt-2 group-hover:text-pink-600 ${selectedTemplate == "Flash Deal" ? "text-pink-600" : "text-slate-700"} text-center font-semibold font-Poppins`}>
                            Flash Deal
                          </div>
                        </div>
                        {/* Template 2 */}
                        <div onClick={() => handleSelection("Product Showcase")} tabIndex={0} className={`group border ${selectedTemplate == "Product Showcase" ? "border-pink-400 bg-pink-100" : 'border-slate-300'} p-2 hover:border-pink-400 rounded-xl cursor-pointer flex flex-col`}>
                          <div className="px-6 py-12 bg-green-500 shadow-md flex flex-row items-center justify-between rounded-xl">
                            <div className="bg-white w-1/2 mr-4 rounded-md px-5 py-10">
                            </div>
                            <div className="w-1/2">
                              <div className="bg-white rounded-md h-2 w-1/3"></div>
                              <div className="h-2 mt-3 w-full rounded-xl bg-white"></div>
                              <div className="h-2 mt-2 w-1/2 rounded-xl bg-white"></div>
                              <div className="mt-3 h-4 w-10 bg-white rounded-sm"></div>
                            </div>
                          </div>
                          <div className={`mt-2 group-hover:text-pink-600 ${selectedTemplate == "Product Showcase" ? "text-pink-600" : "text-slate-700"} text-center font-semibold font-Poppins`}>
                            Product Showcase
                          </div>
                        </div>
                      </>
                    }
                  </div>
                </div>
              </div>
              <button 
                type="button" 
                onClick={
                  () => router.push(
                    {
                      pathname: "/onboarding/edit-og-image",
                      query: { category: category, template: selectedTemplate }
                    }
                  )
                }
                className={`${selected ? "": "hidden"} ${category == "Blog Posts" && "bg-blue-600 hover:bg-blue-700"} ${category == "Landing Pages" && "bg-teal-600 hover:bg-teal-700"} ${category == "Marketing" && "bg-pink-600 hover:bg-pink-700"} px-8 py-4 font-bold font-Poppins text-white flex flex-row items-center justify-center rounded-md shadow-md mt-10 w-1/2`}>
                  Next: Customize your OG image
                </button>
            </div>
          </div>
        </>
    )
}