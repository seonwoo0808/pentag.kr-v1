import NavbarElement from "../components/Navbar";
import MockupImage from "../assets/landing-mockup.jpeg";

export default function LandingPage() {
  return (
    <>
      <div className="bg-white">
        <NavbarElement />
        <div className="relative isolate pt-14">
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
            />
          </svg>
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-30">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                ｢Live for the Future｣
              </h1>
              <div className="mx-2 sm:ml-6 mt-6">
                <div className="flex gap-x-4 justify-between w-full sm:w-max">
                  <div className="sm:flex sm:gap-x-2">
                    <h3 className="text-2xl font-semibold text-gray-600 tracking-wide">
                      펜타곤{" "}
                    </h3>
                    <p className="text-lg font-medium text-gray-400 place-self-end">
                      {" "}
                      PENTAGON
                    </p>
                  </div>
                  <div className="sm:flex sm:gap-x-2">
                    <h3 className="text-2xl font-semibold text-gray-600 tracking-wide">
                      정선우
                    </h3>
                    <p className="text-lg font-medium text-gray-400 place-self-end">
                      {" "}
                      Seonwoo Jeong
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-lg text-gray-500">
                  안녕하세요! 펜타곤이라는 활동명으로 활동하고 있는 개발자
                  정선우입니다.
                </p>
                <p className="mt-4 text-lg text-gray-500">
                  딥러닝, 백엔드, DevOps 관련 분야에 관심이 많으며 다양한
                  프로젝트를 진행하고 있습니다.
                </p>

                <div className="mt-11 flex items-center gap-x-8">
                  <a
                    href="/about"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition ease-in-out hover:scale-110 duration-300"
                  >
                    About me
                  </a>
                  <a
                    href="/contact"
                    className="text-sm font-semibold leading-6 text-gray-900 transition ease-in-out hover:scale-110 duration-300 hover:text-gray-700 hover:font-bold  hover:scale-110"
                  >
                    Contact me <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow ">
              <svg
                viewBox="0 0 366 729"
                role="img"
                className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl"
              >
                <defs>
                  <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                    <rect width={316} height={684} rx={36} />
                  </clipPath>
                </defs>
                <path
                  fill="#4B5563"
                  d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                />
                <path
                  fill="#343E4E"
                  d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                />
                <foreignObject
                  width={316}
                  height={684}
                  transform="translate(24 24)"
                  clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                >
                  <img src={MockupImage} alt="" />
                </foreignObject>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
