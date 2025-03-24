import Image from "next/image"
import Head from 'next/head'
import Link from 'next/link'

import { useState } from 'react'

import { TfiLayoutMediaLeft } from "react-icons/tfi"

export default function NewProjectPage(){
    return (
        <>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Cairo:wght@200..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            <title>OpenGRF – Instantly Create Custom OG Images for Social Media</title>
          </Head>
          <div className="absolute bg-[#F0F3FF] w-full h-full flex flex-col justify-center items-between">

          </div>
        </>
    )
}