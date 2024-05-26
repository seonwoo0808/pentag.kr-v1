import {
  UserCircleIcon,
  CalendarIcon,
  SparklesIcon,
} from "@heroicons/react/20/solid";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import ScreenShotImage from "../assets/profile-image.jpeg";
import axios from "axios";
import NavbarElement from "../components/Navbar";
import { links } from "../constants/links";

const features = [
  {
    key: "Name",
    value: "정선우",
    icon: UserCircleIcon,
  },
  {
    key: "Nickname",
    value: "펜타곤",
    icon: SparklesIcon,
  },
  {
    key: "Birth",
    value: "2006",
    icon: CalendarIcon,
  },
  {
    key: "Academic",
    value: "한국디지털미디어고 21기 웹프로그래밍과 재학",
    icon: AcademicCapIcon,
  },
];
const stats = [
  { id: 1, name: "Total Coding Time", value: "" },
  { id: 2, name: "Daily Average", value: "" },
  { id: 3, name: "Most Language of Month", value: "" },
];

const addtionalLink = [
  { name: "Github", href: links.github },
  { name: "Blog", href: links.blog },
  { name: "Portfolio", href: "/portfolio" },
];

export default function AboutPage() {
  axios
    .get(
      "https://wakatime.com/share/@PENTAGON/814f6085-90b4-4431-9901-1f49d0420024.json"
    )
    .then((Response) => {
      document.getElementById("Total Coding Time")!.innerHTML =
        Response.data.data.grand_total.human_readable_total_including_other_language;
      document.getElementById("Daily Average")!.innerHTML =
        Response.data.data.grand_total.human_readable_daily_average_including_other_language;
    })
    .catch((Error) => {
      console.log(Error);
    });
  axios
    .get(
      "https://wakatime.com/share/@PENTAGON/0e58a7c2-ce6c-4121-8a04-404b4d33def8.json"
    )
    .then((Response) => {
      document.getElementById("Most Language of Month")!.innerHTML =
        Response.data.data[0].name;
    })
    .catch((Error) => {
      console.log(Error);
    });
  return (
    <div className="bg-white">
      <NavbarElement />
      <div className="overflow-hidden bg-white pt-24 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  Hello Universe!
                </h2>
                <h1 className="mt-2 text-6xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  PENTAGON
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  안녕하세요! 펜타곤이라는 활동명으로 활동하고 있는 개발자{" "}
                  <br className="hidden sm:block" />
                  '정선우' 입니다.
                  <br />
                  DevOps, Back-End, MLOps를 연구/개발 하고 있습니다.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.key} className="relative pl-9">
                      <dt className="inline pr-2">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                          aria-hidden="true"
                        />
                        {feature.key}
                      </dt>{" "}
                      <dd className="inline font-semibold text-gray-900">
                        {feature.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-black sm:grid-cols-2 md:flex lg:gap-x-10">
                    {addtionalLink.map((link) => (
                      <a key={link.name} href={link.href}>
                        {link.name} <span aria-hidden="true">&rarr;</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <img
              src={ScreenShotImage}
              alt="Github screenshot"
              className="hidden max-w-none aspect-square object-cover md:-ml-4 lg:-ml-0 lg:block w-full max-w-lg rounded-2xl lg:max-w-none"
              width={3464}
              height={2250}
            />
          </div>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto pb-20 lg:mx-0">
            <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Since <span className="text-indigo-700">DEC 08 2022</span>
            </h1>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-gray-600">
                  {stat.name}
                </dt>
                <dd
                  className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl"
                  id={stat.name}
                >
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
