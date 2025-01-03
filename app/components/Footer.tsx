"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col lg:justify-between lg:flex-row md:text-xs text-gray-500 text-xs">
      <div className="flex justify-center flex-col">
        <div className="flex justify-center items-center flex-wrap">
          <Link translate="no" className="px-2 hover:text-gray-300" href="/poems/about-gods">
            Goðakvæði
          </Link>
          <Link translate="no" className="px-2 hover:text-gray-300" href="/poems/about-heroes">
            Hetjukvæði
          </Link>
          <Link translate="no" className="px-2 hover:text-gray-300" href="/poems/edda-songs">
            Eddukvæði
          </Link>
          <Link translate="no" className="px-2 hover:text-gray-300" href="/poems/edda-app">
            Viðbætir
          </Link>
          <Link translate="no" className="px-2 hover:text-gray-300" href="/poems/poetry">
            Ljóð
          </Link>
          <Link translate="no" className="px-2 hover:text-gray-300" href="/poems/stora-edda">
            Stóra Edda
          </Link>
          <Link translate="no" className="px-2 hover:text-gray-300" href="/poems/on-dictionary">
            Orðabók
          </Link>
        </div>
        <div className="w-full flex justify-center lg:justify-start px-2">
          <span translate="no">&copy; {currentYear} Designed by Jardarr</span>
        </div>
      </div>
      <div className="flex justify-center items-center lg:justify-end w-full text-center lg:w-1/3">
        <Link href="https://t.me/jardarr">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            width="30"
            viewBox="-36 -60 312 360"
          >
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                y2="180"
                y1="40.008"
                x2="100.01"
                x1="160.01"
                id="a"
              >
                <stop offset="0" stop-color="#424d58" />
                <stop offset="1" stop-color="#272a2f" />
              </linearGradient>
            </defs>
            <circle cx="120" cy="120" r="120" fill="url(#a)" />
            <path
              fill="#fff"
              d="M49.942 118.96l80.81-33.295c7.977-3.468 35.03-14.566 35.03-14.566s12.486-4.855 11.445 6.936c-.347 4.855-3.12 21.85-5.896 40.23l-8.67 54.45s-.694 7.977-6.6 9.364c-5.906 1.387-15.607-4.855-17.34-6.243-1.387-1.04-26.012-16.647-35.03-24.277-2.428-2.08-5.202-6.243.347-11.098 12.486-11.445 27.4-25.665 36.416-34.682 4.162-4.162 8.324-13.873-9.017-2.08l-48.902 32.948s-5.55 3.468-15.954.347-22.543-7.283-22.543-7.283-8.324-5.202 5.896-10.75z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
