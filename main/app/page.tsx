import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Kantumruy_Pro, sans_serif } from "next/font/google";

import "./page.css";

export default function Home() {
  return (
    <div className="header">
      <main className="d-flex ">
        <div className="hero ">
          <div className="heroImage">
            <Image
              className="dark:invert topImage"
              src="/headerNoButton.png"
              alt="Next.js logo"
              width={2800}
              height={250}
              priority
            />
          </div>
          <div className="button">
            <a
              className="heroButtons etsy transition-colors text-background hover:bg-[#383838] dark:hover:bg-[#ccc]"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              ETSY
            </a>
          </div>
          <div className="button">
            <a
              className="heroButtons instagram transition-colors text-background hover:bg-[#383838] dark:hover:bg-[#ccc]"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM
            </a>
          </div>
          <div className="button">
            <a
              className="heroButtons aboutMe transition-colors text-background hover:bg-[#383838] dark:hover:bg-[#ccc]"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              ABOUT ME
            </a>
          </div>
          <div className="button">
            <a
              className="heroButtons contact transition-colors text-background hover:bg-[#383838] dark:hover:bg-[#ccc]"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              LET'S CONNECT
            </a>
          </div>
        </div>
      </main>
      <div className="self">
        <div className="selfcontainer">
          <div className="">
            <Image
              className="dark:invert selfImage"
              src="/porkNme.png"
              alt="Next.js logo"
              width={250}
              height={50}
              priority
            />
          </div>
          <div className="traits ">
            <Image
              className="dark:invert"
              src="/traits.jpeg"
              alt="Next.js logo"
              width={350}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
      <div className="revbox">
        <div className="reviews ">
          <Image
            className="dark:invert rv"
            src="/review1.jpeg"
            alt="Next.js logo"
            width={175}
            height={450}
            priority
          />
          <Image
            className="dark:invert rv"
            src="/review2.jpeg"
            alt="Next.js logo"
            width={175}
            height={450}
            priority
          />
          <Image
            className="dark:invert rv"
            src="/review3.jpeg"
            alt="Next.js logo"
            width={175}
            height={450}
            priority
          />
          <Image
            className="dark:invert rv"
            src="/review4.jpeg"
            alt="Next.js logo"
            width={175}
            height={450}
            priority
          />
        </div>
      </div>
      <div className="clowns">
        <div className="textL">
          <div>
            <Image
              className="dark:invert m-auto"
              src="/logo.png"
              alt="logo"
              width={220}
              height={250}
            />
          </div>
          <div className="etsysecton">ON</div>
          <div className="etsysect">
            <Image
              className="dark:invert m-auto"
              src="/etsy.jpeg"
              alt="logo"
              width={175}
              height={250}
            />
          </div>
          <div className="polyclay">
            POLYMER CLAY
            <br />
            MINI FIGURINES
          </div>
        </div>
        <div className="picsR">
          <div className="clownbox m-3">
            <div className="clownpicstop">
              <Image
                className="dark:invert clown1"
                src="/clown1.jpeg"
                alt="logo"
                width={250}
                height={250}
              />
            </div>
            <div className="clownpicslower">
              <Image
                className="dark:invert clown2 "
                src="/clown2.jpeg"
                alt="logo"
                width={200}
                height={250}
              />
              <Image
                className="dark:invert clown3"
                src="/clown3.jpeg"
                alt="logo"
                width={200}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
