"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import { EDDAAPP, EDDASONGS, SONGOFGODS, SONGOFHEROES } from "./NavbarItemList";
import Image from "next/image";

interface eddaHrefs {
  text: string;
  title: string;
  link: string;
}
export default function Navbar() {
  return (
    <div className="flex w-full justify-between">
      <Link href="/">
        {/* <h1 className="text-2xl font-bold">
          Jardarr<span className="text-teal-800">Edda</span>
        </h1> */}
        <Image
          className="w-20 p-2"
          src="/J-logo.png"
          width={150}
          height={30}
          alt="logo"
        />
      </Link>
      <div className="hidden sm:flex">
        <>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Link href="/poems/about-gods">Goðakvæði</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {SONGOFGODS.map((item: eddaHrefs) => (
                    <Link
                      key={item.text}
                      href={item.link}
                      title={item.title}
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {item.text}
                      </NavigationMenuLink>
                    </Link>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Link href="/poems/about-heroes">Hetjukvæði</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {SONGOFHEROES.map((item) => (
                    <Link
                      key={item.text}
                      href={item.link}
                      title={item.title}
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {item.text}
                      </NavigationMenuLink>
                    </Link>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Link href="/poems/edda-songs">Eddukvæði</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {EDDASONGS.map((item: eddaHrefs) => (
                    <Link
                      key={item.text}
                      href={item.link}
                      title={item.title}
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {item.text}
                      </NavigationMenuLink>
                    </Link>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Link href="/poems/edda-app">Viðbætir</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {EDDAAPP.map((item: eddaHrefs) => (
                    <Link
                      key={item.text}
                      href={item.link}
                      title={item.title}
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {item.text}
                      </NavigationMenuLink>
                    </Link>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </>
      </div>
      <div className="flex items-center sm:hidden">
        <Sheet>
          <SheetTrigger className="align-middle w-6 h-6 rounded-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <Accordion type="single" collapsible className="pt-4 mt-6">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Goðakvæði</AccordionTrigger>
                  <AccordionContent>
                    {SONGOFGODS.map((item: eddaHrefs) => (
                      <div key={item.text}>
                        <Link
                          href={item.link}
                          title={item.title}
                          legacyBehavior
                          passHref
                        >
                          {item.text}
                        </Link>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Hetjukvæði</AccordionTrigger>
                  <AccordionContent>
                    {SONGOFHEROES.map((item: eddaHrefs) => (
                      <div key={item.text}>
                        <Link
                          href={item.link}
                          title={item.title}
                          legacyBehavior
                          passHref
                        >
                          {item.text}
                        </Link>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Eddukvæði</AccordionTrigger>
                  <AccordionContent>
                    {EDDASONGS.map((item: eddaHrefs) => (
                      <div key={item.text}>
                        <Link
                          href={item.link}
                          title={item.title}
                          legacyBehavior
                          passHref
                        >
                          {item.text}
                        </Link>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Viðbætir</AccordionTrigger>
                  <AccordionContent>
                    {EDDAAPP.map((item: eddaHrefs) => (
                      <div key={item.text}>
                        <Link
                          href={item.link}
                          title={item.title}
                          legacyBehavior
                          passHref
                        >
                          {item.text}
                        </Link>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
