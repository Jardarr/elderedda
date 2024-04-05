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

interface eddaHrefs {
  text: string;
  title: string;
  link: string;
}

export const SONGOFGODS = [
  {
    text: "Völuspá",
    title: "Прорицание вельвы",
    link: "/about-gods/volvas-prophecy",
  },
  {
    text: "Hávamál",
    title: "Речи Высокого",
    link: "/about-gods/highs-speeches",
  },
  {
    text: "Vafþrúðnismál",
    title: "Речи Вафтруднира",
    link: "/about-gods/vafthrudnirs-speeches",
  },
  {
    text: "Grímnismál",
    title: "Речи Гримнира",
    link: "/about-gods/grimnirs-speeches",
  },
  {
    text: "Skírnismál",
    title: "Поездка Скирнира",
    link: "/about-gods/skirnirs-trip",
  },
  {
    text: "Hárbarðsljóð",
    title: "Песнь о Харбарде",
    link: "/about-gods/song-of-harbard",
  },
  {
    text: "Hymiskviða",
    title: "Песнь о Хюмире",
    link: "/about-gods/song-of-hymir",
  },
  {
    text: "Lokasenna",
    title: "Перебранка Локи",
    link: "/about-gods/loki-altercation",
  },
  {
    text: "Þrymskviða",
    title: "Песнь о Трюме",
    link: "/about-gods/song-of-thryme",
  },
  {
    text: "Alvíssmál",
    title: "Речи Альвиса",
    link: "/about-gods/alviss-speeches",
  },
];
export const SONGOFHEROES = [
  {
    text: "Völundarkviða",
    title: "Песнь о Вёлунде",
    link: "/about-heroes/song-of-volunda",
  },
  {
    text: "Helgakviða Hjörvarðssonar",
    title: "Песнь о Хельги, сыне Хьёрварда",
    link: "/about-heroes/song-of-helga-son-of-hjorvard",
  },
  {
    text: "Helgakviða Hundingsbana in fyrri",
    title: "Первая Песнь о Хельги, убийце Хундинга",
    link: "/about-heroes/the-first-song-of-helga-the-slayer-of-hunding",
  },
  {
    text: "Helgakviða Hundingsbana önnur",
    title: "Вторая Песнь о Хельги, убийце Хундинга",
    link: "/about-heroes/second-song-of-helga-the-slayer-of-hunding",
  },
  {
    text: "Frá dauða Sinfjötla",
    title: "О смерти Синфьётли",
    link: "/about-heroes/about-the-death-of-sinfjotli",
  },
  {
    text: "Grípisspá",
    title: "Пророчество Грипира",
    link: "/about-heroes/gripirs-prophecy",
  },
  {
    text: "Reginsmál",
    title: "Речи Регина",
    link: "/about-heroes/regins-speeches",
  },
  {
    text: "Fáfnismál",
    title: "Речи Фафнира",
    link: "/about-heroes/fafnirs-speeches",
  },
  {
    text: "Sigrdrífumál",
    title: "Речи Сигдривы",
    link: "/about-heroes/sigdrivas-speeches",
  },
  {
    text: "Sigurðarkviða in meiri",
    title: "Отрывок Песни о Сигурде",
    link: "/about-heroes/excerpt-from-a-song-about-sigurd",
  },
  {
    text: "Guðrúnarkviða in fyrsta",
    title: "Первая Песнь о Гудрун",
    link: "/about-heroes/first-song-of-gudrun",
  },
  {
    text: "Sigurðarkviða in skamma",
    title: "Краткая Песнь о Сигурде",
    link: "/about-heroes/a-short-song-about-sigurd",
  },
  {
    text: "Helreið Brynhildar",
    title: "Поездка Брюнхильд в Хель",
    link: "/about-heroes/brynhilds-journey-to-hel",
  },
  {
    text: "Dráp Niflunga",
    title: "Убийство Нифлунгов",
    link: "/about-heroes/killing-the-niflungs",
  },
  {
    text: "Guðrúnarkviða in forna",
    title: "Вторая Песнь о Гудрун",
    link: "/about-heroes/second-song-of-gudrun",
  },
  {
    text: "Guðrúnarkviða in þriðja",
    title: "Третья Песнь о Гудрун",
    link: "/about-heroes/third-song-of-gudrun",
  },
  {
    text: "Oddrúnarkviða",
    title: "Плачь Оддрун",
    link: "/about-heroes/oddruns-crying",
  },
  {
    text: "Atlakviða in grœnlenzka",
    title: "Гренландская песнь об Атли",
    link: "/about-heroes/greenlandic-song-of-atli",
  },
  {
    text: "Atlamál in grœnlenzku",
    title: "Гренландские речи Атли",
    link: "/about-heroes/greenlandic-speeches-of-atli",
  },
  {
    text: "Guðrúnarhvöt",
    title: " Подстрекательство Гудрун",
    link: "/about-heroes/incitement-of-gudrun",
  },
  {
    text: "Hamðismál",
    title: "Речи Хамдира",
    link: "/about-heroes/hamdirs-speeches",
  },
];
export const EDDASONGS = [
  {
    text: "Baldrs draumar",
    title: "Сны Бальдра или Песнь о Вегтаме",
    link: "/edda-songs/baldrs-dreams",
  },
  {
    text: "Rígsþula",
    title: "Песнь о Риге",
    link: "/edda-songs/song-about-rig",
  },
  {
    text: "Hyndluljóð",
    title: "Песнь о Хюндле",
    link: "/edda-songs/song-of-hyndla",
  },
  {
    text: "Völuspá in skamma",
    title: "Краткое прорицание вёльвы",
    link: "/edda-songs/short-prophecy-of-volva",
  },
  {
    text: "Gróttasöngr",
    title: "Песнь о Гротти",
    link: "/edda-songs/song-about-grotti",
  },
  {
    text: "Grógaldr",
    title: "Заклинание Гроа",
    link: "/edda-songs/groas-spell",
  },
  {
    text: "Fjölsvinnsmál",
    title: "Речи Многомудрого",
    link: "/edda-songs/speeches-of-the-many-wise",
  },
  {
    text: "Hjálmarskviða",
    title: "Песнь о Хьальмаре",
    link: "/edda-songs/song-of-hjalmar",
  },
  {
    text: "Hervararkviða",
    title: "Песнь о Хервёр",
    link: "/edda-songs/song-of-herver",
  },
  {
    text: "Hlöðskviða",
    title: "Песнь о Хлёде",
    link: "/edda-songs/song-of-hlod",
  },
  {
    text: "Hálfsrekkaljóð",
    title: "Песнь о воинах Хальва",
    link: "/edda-songs/song-of-the-warriors-halva",
  },
  {
    text: "Heiðreksgátur",
    title: "Загадки Хейдрека",
    link: "/edda-songs/heidreks-riddles",
  },
  {
    text: "Darraðarljóð",
    title: "Песнь валькирий",
    link: "/edda-songs/song-of-the-valkyries",
  },
  {
    text: "Bjarkamál in fornu",
    title: "Древние Речи Бьярки",
    link: "/edda-songs/ancient-speeches-of-bjarki",
  },
];
export const EDDAAPP = [
  {
    text: "Sólarljóð",
    title: "Песнь о Солнце",
    link: "/edda-app/song-about-sun",
  },
  {
    text: "Hrafnagaldr Óðins",
    title: "Вороново заклинание Одина",
    link: "/edda-app/odins-raven-spell",
  },
  {
    text: "Gunnarsslagr",
    title: "Напев Гуннара",
    link: "/edda-app/gunnars-chant",
  },
];
export default function Navbar() {
  return (
    <div className="flex w-full justify-between py-4">
      <Link href="/">
        <h1 className="text-2xl font-bold">
          Jardarr<span className="text-teal-800">Edda</span>
        </h1>
      </Link>
      <div className="hidden sm:flex">
        <>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Goðakvæði</NavigationMenuTrigger>
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
                <NavigationMenuTrigger>Hetjukvæði</NavigationMenuTrigger>
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
                <NavigationMenuTrigger>Eddukvæði</NavigationMenuTrigger>
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
                <NavigationMenuTrigger>Viðbætir</NavigationMenuTrigger>
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
      <div className="sm:hidden">
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
              <Accordion type="single" collapsible className="pt-4">
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
