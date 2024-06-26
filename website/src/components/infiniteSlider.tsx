import React from "react";
import Image from "next/image";
import Link from "next/link";

interface InfiniteSliderProps {
    time?: number;
    direction?: number;
    companies: {
        company_website: string;
        company_name: string;
        company_logo: string;
    }[];
}

export default function InfiniteSlider({
    time = 30,
    direction = 1,
    companies,
}: InfiniteSliderProps) {
    const durationTime = { "--duration-time": `${time}s` };
    const animationStyle =
        direction === 1
            ? "animate-infinite-scroll-left"
            : "animate-infinite-scroll-right";

    return (
        <div className="relative lg:max-w-[900px] max-w-[1000px] md:max-w-[650px] overflow-hidden h-[110px] mx-auto flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul
                style={durationTime as React.CSSProperties}
                className={`flex items-center [&_img]:max-w-none ${animationStyle}`}>
                {companies.map((item, index) => (
                    <li key={index} className="inline-block p-6 lg:p-8">
                        <Link href={item.company_website}>
                            <Image
                                src={item.company_logo}
                                alt={`logo-${item.company_name.toLowerCase()}`}
                                width={130}
                                height={130}
                                className="lg:hover:scale-[115%] transition-all duration-300 ease-in-out"
                            />
                        </Link>
                    </li>
                ))}
            </ul>

            <ul
                style={durationTime as React.CSSProperties}
                className={`flex items-center [&_img]:max-w-none ${animationStyle}`}>
                {companies.map((item, index) => (
                    <li key={index} className="inline-block p-6 lg:p-8">
                        <Link href={item.company_website}>
                            <Image
                                src={item.company_logo}
                                alt={`logo-${item.company_name.toLowerCase()}`}
                                width={130}
                                height={130}
                                className="lg:hover:scale-[115%] transition-all duration-300 ease-in-out"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
