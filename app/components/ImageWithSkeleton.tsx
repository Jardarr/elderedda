"use client";

import { useState } from "react";
import Image from "next/image";

interface SkeletonProps {
    src: string;
    alt: string;
    width: number | string;
    height: number | string;
}

export default function ImageWithSkeleton({ width, height, src = "", alt = "" }: SkeletonProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const widthClass = typeof width === 'number' ? `w-[${width}px]` : width;
    const heightClass = typeof height === 'number' ? `h-[${height}px]` : height;
    
    return (
        <div className={`relative ${widthClass} ${heightClass}`}>
            {!isLoaded && (
                <div className={`absolute inset-0 ${widthClass} ${heightClass} animate-pulse rounded-2xl border bg-neutral-800`} />
            )}
            <Image
                src={src}
                alt={alt}
                width={typeof width === 'number' ? width : undefined}
                height={typeof height === 'number' ? height : undefined}
                className={`${widthClass} ${heightClass} rounded-2xl border ${
                    isLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoadingComplete={() => setIsLoaded(true)}
            />
        </div>
    );
}
