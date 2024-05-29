import { useEffect, useState } from "react";

import NavbarElement from "../components/Navbar";
import {
  ArrowUpIcon,
  DocumentCheckIcon,
  RectangleStackIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

import ASDImage from "../assets/projects/ASD.png";
import SurfingImage from "../assets/projects/Surfing.png";
import ClastImage from "../assets/projects/Clast.png";
import ItnunImage from "../assets/projects/Itnun.png";
import KSHostingImage from "../assets/projects/KSHosting.png";

const tabs = ["전체 (All)", "협업 (Collab)", "개인 (Personal)"];

const projects = [
  {
    id: 1,
    title: "당신이 원하는 대로 만드는 클라우드, “Clast Cloud”",
    description:
      "주식회사 플렉스아이티와 함께 프리랜서 계약을 체결하고 제작한, 완벽한 On-Demand 클라우드 서비스입니다.",
    category: ["Golang", "Hypervisor", "React", "TypeScript"],
    date: "2022/05/15 → 유지보수 중",
    collab: false,
    imgURL: ClastImage,
    href: "https://blog.pentag.kr/blog/Portfolios/clast",
  },

  {
    id: 2,
    title: "학교 인트라넷 동아리 플랫폼 “Surfing” 백엔드 개발",
    description:
      "학교 동아리 신청의 실명화와 중앙화를 위해 학교의 학생 종합 정보시스템 API와 연계해 동아리 홍보, 신청 플랫폼을 제작하게 되었습니다",
    category: ["Python", "REST API", "Docker", "CF Zero Trust"],
    date: "2023/03/03 → 2023/03/24",
    collab: true,
    imgURL: SurfingImage,
    href: "/project/asd",
  },
  {
    id: 3,
    title: "오로지 공부에만 집중 할 수 있게, “ASD”",
    description:
      "인공지능 스피커를 이용한 차세대 공부 도우미 앱 서비스 \n SK Planet STA+C 2022 미래산업부문 대상(중소밴처기업부장관상)",
    category: ["AI", "H/W", "Python", "Socket.IO"],
    date: "2022/05/15 → 2022/10/29",
    collab: true,
    imgURL: ASDImage,
    href: "/project/asd",
  },
  {
    id: 4,
    title: "세상을 잇다, “잇는” 개발",
    description:
      "정책, 채용정보, 등 사용자가 원하는 정보와 사용자를 매칭하여 정보를 제공하는 서비스\n 공개SW개발자대회 특별상 수상",
    category: ["Typescript", "Nest.js", "Docker", "REST API"],
    date: "2022/08/02 → 2023/04/04",
    collab: true,
    imgURL: ItnunImage,
    href: "/project/asd",
  },
  {
    id: 5,
    title: "하이퍼바이저 자동화 시스템 개발 프로젝트",
    description:
      "코리아서버와 함께 외주 게약을 체결하고 제작한, '하이퍼바이저 자동화 콘솔 시스템'입니다.",
    category: ["Python", "Flask", "Hypervisor", "HTML/CSS"],
    date: "2012/12/01 → 2022/10/14",
    collab: false,
    imgURL: KSHostingImage,
    href: "/project/asd",
  },
];

const awards = [
  {
    id: 1,
    title: "2022 Smarteen App+ Challenge",
    host: "중소벤처기업부/SK Planet",
    tag: ["앱", "인공지능", "하드웨어"],
    grade: "대상 - 중소벤처기업부 장관상",
    date: "2022.10.29",
  },
  {
    id: 2,
    title: "2022 공개SW개발자대회",
    host: "과학기술정보통신부",
    tag: ["오픈소스", "SW"],
    grade: "특별상 - 공개SW개발자대회 조직위원장상",
    date: "2022.11.29",
  },
  {
    id: 3,
    title: "세종특별자치시 공공데이터 창업경진대회",
    host: "세종특별자치시",
    tag: ["데이터", "창업"],
    grade: "우수상 - 세종특별자치시장상",
    date: "2023.08.01",
  },
  {
    id: 4,
    title: "2023 공개SW개발자대회",
    host: "과학기술정보통신부",
    tag: ["오픈소스", "SW"],
    grade: "특별상 - 공개SW개발자대회 조직위원장상",
    date: "2023.12.01",
  },
  {
    id: 5,
    title: "2023 데이터 크리에이터 캠프",
    host: "과학기술정보통신부/NIA",
    tag: ["데이터", "인공지능"],
    grade: "대상 - 과학기술정보통신부 장관상",
    date: "2023.12.02",
  },
];

const licenses = [
  {
    id: 1,
    title: "리눅스마스터 2급",
    ownedBy: "한국정보통신진흥협회",
    tag: ["공인민간자격", "시스템", "OS"],
    date: "2022.12.30",
  },
  {
    id: 2,
    title: "네트워크관리사 2급",
    ownedBy: "한국정보통신자격협회",
    tag: ["공인민간자격", "네트워크"],
    date: "2023.10.10",
  },
];

const QuickMenuElement = [
  {
    id: 1,
    title: "Projects",
    scrollTo: "projects",
    icon: RectangleStackIcon,
  },
  {
    id: 2,
    title: "Awards",
    scrollTo: "awards",
    icon: TrophyIcon,
  },
  {
    id: 3,
    title: "License",
    scrollTo: "license",
    icon: DocumentCheckIcon,
  },
];

export default function PortfolioPage() {
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [currentMenu, setCurrentMenu] = useState(QuickMenuElement[0].id);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        setCurrentMenu(QuickMenuElement[QuickMenuElement.length - 1].id);
      } else {
        for (let i = 0; i < QuickMenuElement.length; i++) {
          const target = document.getElementById(QuickMenuElement[i].scrollTo);
          if (
            target &&
            window.scrollY + window.innerHeight / 2 >= target.offsetTop
          ) {
            setCurrentMenu(QuickMenuElement[i].id);
          }
        }
      }
    });
  }, []);
  return (
    <>
      <div className="bg-white py-12 sm:py-24 xl:py-32">
        <NavbarElement />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16 sm:mt-3">
          <h1 className="text-5xl font-bold tracking-wide text-gray-900 text-center">
            Portfolio
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
            저의 프로젝트, 수상, 자격증을 소개합니다
          </p>
        </div>
        <div
          className="mx-auto max-w-7xl mt-12 pt-10 pb-24 sm:py-10 px-6 lg:px-8 border border-gray-200 rounded-lg shadow-lg bg-gray-50"
          id="projects"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Projects
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              제가 진행했던 프로젝트들을 소개합니다
            </p>
          </div>
          <div className="hidden sm:block">
            <nav
              className="flex justify-around mt-16 w-full max-w-sm mx-auto"
              aria-label="Tabs"
            >
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setCurrentTab(tab)}
                  className={
                    (currentTab === tab
                      ? "bg-indigo-100 text-indigo-700 border-indigo-500"
                      : "text-gray-500 hover:text-gray-700 border-gray-200") +
                    " rounded-lg px-3 py-2 text-xs font-medium border w-28"
                  }
                  aria-current={currentTab ? "page" : undefined}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-32 lg:mx-0 lg:max-w-none xl:grid-cols-3 lg:grid-cols-2 mb-12 md:mb-36 lg:mb-12">
            {projects.map((post) =>
              post.collab === (currentTab === tabs[1]) ||
              currentTab === tabs[0] ? (
                <article
                  key={post.id}
                  className="flex flex-col items-start justify-between h-[300px] mb-8 sm:mb-32 md:mb-32 xl:mb-20"
                >
                  <div className="relative w-full">
                    <img
                      src={post.imgURL}
                      alt=""
                      className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                      <div className="flex gap-2">
                        {post.category.map((category) => (
                          <span
                            key={category}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        {post.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mt-6">
                      <time dateTime={post.date} className="text-gray-500">
                        {post.date}
                      </time>
                      {post.collab == true ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800">
                          협업
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800">
                          개인
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ) : null
            )}
          </div>
        </div>
        <div
          className="mx-auto max-w-7xl mt-12 pt-10 pb-24 sm:pb-16 px-6 lg:px-8 xl:px-24 border border-gray-200 rounded-lg shadow-lg bg-gray-50"
          id="awards"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Awards
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              저의 수상이력을 소개합니다
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none xl:grid-cols-3 lg:grid-cols-2">
            {awards
              .sort((x1, x2) => {
                if (x1.date > x2.date) return -1;
                if (x1.date < x2.date) return 1;
                return 0;
              })
              .map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col items-start justify-between border border-gray-200 bg-white rounded-lg p-6"
                >
                  <div className="max-w-xl">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={item.date} className="text-gray-500">
                        {item.date}
                      </time>
                      <a
                        href="#"
                        className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600"
                      >
                        {item.host}
                      </a>
                    </div>
                    <div className="group relative">
                      <h3 className="my-3 text-md sm:text-lg font-semibold leading-6 text-gray-900">
                        <span className="absolute inset-0" />
                        {item.title}
                      </h3>
                      <div className="flex gap-2 mt-2">
                        {item.tag.map((category) => (
                          <span
                            key={category}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        {item.grade}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
        <div
          className="mx-auto max-w-7xl mt-12 pt-10 pb-24 sm:py-10 px-6 lg:px-8 xl:px-24 border border-gray-200 rounded-lg shadow-lg bg-gray-50"
          id="license"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              License
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              제가 취득한 자격증들을 소개합니다
            </p>
          </div>
          <div className="overflow-hidden rounded-md border border-gray-300 bg-white mt-8 sm:mt-16">
            <ul role="list" className="divide-y divide-gray-300">
              {licenses.map((item) => (
                // fixed height li
                <li key={item.id} className="px-6 py-4 w-full">
                  <div className="justify-between w-full sm:flex">
                    <div className="flex justify-between sm:justify-start w-full sm:max-w-max h-24 sm:h-auto">
                      <h3 className="text-xl font-bold text-gray-900 tracking-wide inline-flex items-center">
                        {item.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row gap-y-3 gap-x-2 ml-4 text-sm text-gray-500 pt-1">
                        {item.tag.map((category) => (
                          <p
                            key={category}
                            className="sm:inline-flex items-center px-2.5 py-1 sm:py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 text-center"
                          >
                            {category}
                          </p>
                        ))}
                      </div>
                      <p className="text-gray-500 text-xs inline-flex items-center pl-6 py-2 sm:block hidden lg:text-sm">
                        {item.ownedBy} 주관
                      </p>
                    </div>
                    <p className="text-md text-gray-600 inline-flex items-center">
                      취득일자: {item.date}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Sidebar for PC */}
      <div className="relative bg-gray-50 w-screen pattern sm:block hidden">
        <nav className="z-20 flex shrink-0 grow-0 gap-4 border-t border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg fixed top-2/4 -translate-y-2/4 right-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border">
          {QuickMenuElement.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                const target = document.getElementById(item.scrollTo);
                if (target) {
                  window.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth",
                  });
                }
              }}
              className={
                currentMenu === item.id
                  ? "flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50 text-indigo-600 transition ease-in-out duration-300"
                  : "flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 transition ease-in-out duration-300"
              }
            >
              <item.icon className="w-6 h-6 shrink-0" />
              <small className="text-center text-xs font-medium">
                {item.title}
              </small>
            </button>
          ))}

          <hr />

          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="flex h-16 w-16 flex-col items-center justify-center gap-1 text-fuchsia-900"
          >
            <ArrowUpIcon className="w-6 h-6" />

            <small className="text-xs font-medium">Go Top</small>
          </button>
        </nav>
      </div>

      <div className="fixed bottom-0 left-0 z-50 w-full h-16 backdrop-blur-lg bg-white/75 border-t border-gray-200 sm:hidden">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
          {
            // QuickMenu for Mobile
            QuickMenuElement.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  const target = document.getElementById(item.scrollTo);
                  if (target) {
                    window.scrollTo({
                      top: target.offsetTop,
                      behavior: "smooth",
                    });
                  }
                }}
                className={
                  currentMenu === item.id
                    ? "inline-flex flex-col items-center justify-center gap-1 text-indigo-600 active:bg-indigo-50 transition ease-in-out duration-300"
                    : "inline-flex flex-col items-center justify-center gap-1 text-gray-400 active:bg-gray-100 transition ease-in-out duration-300"
                }
              >
                <item.icon className="w-5 h-5 mb-1" />
                <small className="text-sm group-hover">{item.title}</small>
              </button>
            ))
          }
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 group active:bg-gray-100"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <ArrowUpIcon className="w-5 h-5 mb-1 text-gray-500" />
            <small className="text-sm group-hover text-gray-500">Go Top</small>
          </button>
        </div>
      </div>
    </>
  );
}
