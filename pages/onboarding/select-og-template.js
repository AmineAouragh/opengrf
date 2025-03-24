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

export default function OGTemplateSelectionPage(){

    const router = useRouter()
    const [ selectedTemplate, setSelectedTemplate ] = useState('')

    return (
        <>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Cairo:wght@200..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            <title>OpenGRF – Instantly Create Custom OG Images for Social Media</title>
          </Head>
          <div className="absolute bg-[#F0F3FF] w-full h-full flex flex-col justify-center items-between">
            <div className="flex flex-col justify-center items-center w-3/4 mx-auto">
              <div className="flex flex-row items-center mb-4 justify-center mx-auto w-3/4">
                <TfiLayoutMediaLeft size={32} className="font-bold" />
                <h4 className="text-xl ml-2 font-bold font-Poppins">Opengrf</h4>
              </div>
            </div>
          </div>
        </>
    )
}