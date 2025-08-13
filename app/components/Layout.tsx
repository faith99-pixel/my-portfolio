'use client'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import images from '@/public/images'

type Props = {
    children: ReactNode
}

export default function Layout({ children }: Props) {
    // const toastContext = useContext(ToastContext);

    const [loaderIsVisible, setLoaderIsVisible] = useState(false);

    return (
        <>
            {!loaderIsVisible && (
                <>
                    {children}
                </>
            )}
            {loaderIsVisible && (
                <div className='w-[100vw] h-[100vh] min-h-[100vh] grid place-items-center bg-white'>
                    <div className='w-44 h-40 border-white border'>
                        {/* <Image src={images.logo} alt='logo' className='w-full h-full border-none object-contain' /> */}
                    </div>
                </div>
            )}
        </>
    )
}