import Image from 'next/image' 
import Head from 'next/head' 
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

import { TfiLayoutMediaLeft } from "react-icons/tfi"
import { RxAvatar } from "react-icons/rx"
import { FiUpload } from "react-icons/fi"
import { CiRedo } from "react-icons/ci"


export default function OGEditingPage(){

    const router = useRouter()

    const { category, template } = router.query 
    const [ brand, setBrand ] = useState('')
    const [ authorName, setAuthorName ] = useState('')
    const [ postTitle, setPostTitle ] = useState('')
    const [ ctaText, setCtaText ] = useState('')
    const [ ctaColor, setCtaColor ] = useState('')
    const [ img, setImg ] = useState(null) 
    const [ imgUrl, setImgUrl ] = useState('')
    const [ bgColor, setBgColor ] = useState('')

    function handleImageUpload(e){
        const image = e.target.files[0] 
        const url = URL.createObjectURL(image)
        setImgUrl(url) 
        setImg(image) 
    }

    return (
        <>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Cairo:wght@200..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            <title>OpenGRF – Instantly Create Custom OG Images for Social Media</title>
          </Head>
          <div className='absolute bg-[#f0f3ff] w-full h-full flex flex-col justify-center items-center'>
            <div className='w-2/3 mx-auto flex flex-col justify-center items-center'>
              <div className="flex flex-row items-center justify-center mx-auto w-3/4">
                <TfiLayoutMediaLeft size={36} className="font-bold" />
                <h3 className="text-xl ml-2 font-bold font-Poppins">Opengrf</h3>
              </div>
              <h1 className='font-Poppins text-2xl mt-3 font-semibold'>Edit & Customize your {category.toLowerCase()} OG image</h1>
              <div className='flex flex-row items-start justify-around w-full mt-16'>
                    <form className='flex flex-col w-1/3 rounded-xl'>
                      <div className='flex flex-col mb-4'>
                        <label htmlFor='brand' className='font-Poppins text-xl mb-2 text-slate-800 font-bold'>Brand:</label>
                        <input type='text' id='brand' name='brand' value={brand} onChange={e => setBrand(e.target.value)} className='font-bold font-Poppins text-slate-800 rounded-full px-4 py-2 outline-none border border-slate-800' />
                      </div>
                      <div className='flex flex-col mb-4'>
                      <label htmlFor='avatar' className='font-Poppins text-xl mb-2 text-slate-800 font-bold'>Avatar</label>
                      {
                        imgUrl 
                        ?
                          <div className='flex flex-row items-center'>
                            <Image
                              src={imgUrl}
                              alt=''
                              height={100}
                              width={120}
                              className='rounded-full border border-slate-400' 
                            />
                            <button type='button' onClick={() => document.getElementById("avatar").click()} className='ml-4 hover:border-slate-500 border border-slate-300 rounded-full p-2'>
                                <CiRedo size={32} />
                            </button>
                          </div>
                        :
                          <div className='flex flex-col mb-4'>
                            <div onClick={() => document.getElementById("avatar").click()} tabIndex={0} type='button' className='cursor-pointer p-8 flex flex-col justify-center items-center rounded-xl rounded-md border border-indigo-300 bg-indigo-100'>
                              <FiUpload className='text-indigo-600' size={42} />
                              <span className='text-indigo-600 mt-2 text-md font-Poppins'>Click to upload an image</span>
                            </div>
                          </div>   
                      }
                      <input id='avatar' onChange={handleImageUpload} type='file' className='hidden' accept='image/*' />
                      </div>
                      <div className='flex flex-col mb-4'>
                        <label htmlFor='author_name' className='font-Poppins text-xl mb-2 text-slate-800 font-bold'>Author name:</label>
                        <input type='text' id='author_name' name='author_name' value={authorName} onChange={e => setAuthorName(e.target.value)} className='font-bold font-Poppins text-slate-800 rounded-full px-4 py-2 outline-none border border-slate-800' />
                      </div>
                      <div className='flex flex-col mb-4'>
                        <label htmlFor='post_title' className='font-Poppins text-xl mb-2 text-slate-800 font-bold'>Article title:</label>
                        <input type='text' id='post_title' name='post_title' value={postTitle} onChange={e => setPostTitle(e.target.value)} className='font-bold font-Poppins text-slate-800 rounded-full px-4 py-2 outline-none border border-slate-800' />
                      </div>
                      <div className='flex flex-col mb-4'>
                        <label htmlFor='cta_text' className='font-Poppins text-xl mb-2 text-slate-800 font-bold'>Call-to-action:</label>
                        <input type='text' id='cta_text' name='cta_text' value={ctaText} onChange={e => setCtaText(e.target.value)} className='font-bold font-Poppins text-slate-800 rounded-full px-4 py-2 outline-none border border-slate-800' />
                      </div>
                      <div className='flex flex-col mb-4'>
                        <label htmlFor='cta_color' className='font-Poppins text-xl mb-2 text-slate-800 font-bold'>Call-to-action color:</label>
                        <div className='flex flex-row items-center'>
                            <button type='button' onClick={() => setCtaColor("bg-green-500")} className='p-4 rounded-full rounded-md bg-green-600 mr-2'></button>
                            <button type='button' onClick={() => setCtaColor("bg-teal-500")} className='p-4 rounded-full rounded-md bg-teal-600 mr-2'></button>
                            <button type='button' onClick={() => setCtaColor("bg-red-500")} className='p-4 rounded-full rounded-md bg-red-600 mr-2'></button>
                            <button type='button' onClick={() => setCtaColor("bg-yellow-500")} className='p-4 rounded-full rounded-md bg-yellow-600 mr-2'></button>
                            <button type='button' onClick={() => setCtaColor("bg-pink-500")} className='p-4 rounded-full rounded-md bg-pink-600 mr-2'></button>
                            <button type='button' onClick={() => setCtaColor("bg-blue-500")} className='p-4 rounded-full rounded-md bg-blue-600'></button>
                        </div>
                      </div>
                    </form>
                    <div className="px-2 py-16 w-2/5 bg-slate-900 shadow-md rounded-xl">
                        <div className="flex flex-row items-center justify-center">
                          <div className="flex w-1/3 flex-col items-center mr-12">
                            <div id='logo' className={`${brand.length > 0 ? "text-white" : "h-6 w-16 bg-white"} font-bold text-sm font-Poppins rounded-md mb-4`}>{brand}</div>
                            {
                                img 
                                ?
                                <Image 
                                  src={imgUrl}
                                  alt=''
                                  height={80}
                                  width={80}
                                  className='rounded-full border border-white-400' 
                                />
                                :
                                <RxAvatar className="text-white" size={72} />
                            }
                            {
                                authorName.length > 0
                                ?
                                  <span className='text-sm flex flex-wrap font-bold mt-2 font-Poppins text-white'>{authorName}</span>
                                :
                                  <div id='author_name' className="bg-white w-24 h-4 rounded-md mt-2"></div>
                            }
                          </div>
                          <div className="w-1/2">
                            {
                                postTitle.length > 0
                                ?
                                  <p className='font-Poppins text-white font-bold text-lg'>{postTitle}</p>
                                :
                                <>
                                  <div className="h-4 w-full rounded-xl bg-white"></div>
                                  <div className="h-4 mt-4 w-full rounded-xl bg-white"></div>
                                  <div className="h-4 mt-4 w-1/3 rounded-xl bg-white"></div>
                                </>
                            }
                            {
                                ctaText.length > 0 
                                ?
                                  <div className={`${ctaColor.length > 0 ? `${ctaColor}` : "bg-white"} mt-4 w-fit font-Poppins font-bold rounded-md text-white px-6 py-2`}>{ctaText}</div>
                                :
                                  <div className="rounded-sm w-24 mt-8 h-8 bg-white"></div>
                            }
                          </div>
                        </div>
                    </div>
                
              </div>
              
            </div>
          </div>
        </>
    )
}