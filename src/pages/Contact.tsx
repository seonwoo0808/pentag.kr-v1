import { BuildingOffice2Icon, EnvelopeIcon } from "@heroicons/react/24/solid";

import DiscordIcon from "../assets/discord-outline.svg?react";
import LinkedinIcon from "../assets/linkedin-rounded.svg?react";
import NavbarElement from "../components/Navbar";
import DropdownSelectElement from "../components/form/DropdownSelect";
import { useRef, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import axios from "axios";

export default function ContactPage() {
  const [captchaOpen, setCaptchaOpen] = useState(false);
  const [category, setCategory] = useState(0);
  const [captchaSuccess, setCaptchaSuccess] = useState(false);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = () => {
    // check is value is empty
    if (
      firstNameRef.current?.value == "" ||
      lastNameRef.current?.value == "" ||
      emailRef.current?.value == "" ||
      phoneRef.current?.value == "" ||
      messageRef.current?.value == ""
    ) {
      alert("Please fill in all the fields");
      return;
    }
    setCaptchaOpen(true);
  };

  const submitForm = async (token: string) => {
    // send form data to server
    try {
      const resp = await axios.post(import.meta.env.VITE_API_URL + "/contact", {
        firstName: firstNameRef.current?.value,
        lastName: lastNameRef.current?.value,
        email: emailRef.current?.value,
        phone: phoneRef.current?.value,
        category: category,
        message: messageRef.current?.value,
        token: token,
      });
      if (resp.status == 200) {
        window.location.href = "/contact/success";
        return;
      }
      throw new Error(resp.statusText);
    } catch (e) {
      setCaptchaSuccess(false);
      setCaptchaOpen(false);
      alert(
        "메시지를 전송하던 중 에러가 발생했습니다. 잠시뒤 다시 시도해주세요"
      );
    }
  };

  return (
    <div className="relative isolate bg-white h-full">
      <NavbarElement />
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                />
              </svg>
            </div>
            <h1 className="text-5xl font-bold tracking-wide text-gray-900">
              Contact
            </h1>
            <p className="my-3 text-lg leading-8 text-gray-600">
              언제나 연락을 기다리고 있어요 :{")"}
            </p>
            <dl className="mt-12 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  경기 안산시 단원구 사세충열로 94
                  <br />
                  한국디지털미디어고등학교
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <EnvelopeIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900 underline hover:no-underline underline-offset-4"
                    href="mailto:seonwoo0808@pentag.kr"
                  >
                    seonwoo0808@pentag.kr
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <DiscordIcon
                    className="h-7 w-6 fill-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>seonwoo0808</dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <LinkedinIcon
                    className="p-0.5 h-7 w-6 fill-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900 underline hover:no-underline underline-offset-4"
                    href="https://www.linkedin.com/in/seonwoo0808/"
                  >
                    Seonwoo Jeong
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          action="#"
          method="POST"
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:pt-24 lg:pb-1 xl:pt-48"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  이름 (First name)
                </label>
                <div className="mt-2.5">
                  <input
                    ref={firstNameRef}
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  성 (Last name)
                </label>
                <div className="mt-2.5">
                  <input
                    ref={lastNameRef}
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  이메일 (Email)
                </label>
                <div className="mt-2.5">
                  <input
                    placeholder="해당 이메일로 사본이 발송됩니다"
                    ref={emailRef}
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  전화번호 (Phone number)
                </label>
                <div className="mt-2.5">
                  <input
                    ref={phoneRef}
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="category"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  문의 유형 (Category)
                </label>
                <DropdownSelectElement
                  name="category"
                  stateHandler={setCategory}
                  selection={[
                    { id: 0, name: "협업 관련(Collaboration)" },
                    { id: 1, name: "채용 관련(Hiring)" },
                    { id: 2, name: "기타 문의(Etc)" },
                  ]}
                  defaultSelection={0}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  메세지 (Message)
                </label>
                <div className="mt-2.5">
                  <textarea
                    ref={messageRef}
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-32 sm:h-48"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end lg:mt-4">
              <button
                type="button"
                onClick={() => handleSubmit()}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
      <Transition show={captchaOpen}>
        <Dialog
          className="relative z-10"
          onClose={() => {
            if (!captchaSuccess) {
              setCaptchaOpen(false);
            }
          }}
        >
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </TransitionChild>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <MagnifyingGlassIcon
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <DialogTitle
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Are you a robot?
                      </DialogTitle>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          다음의 자동화 방지를 위한 검증을 완료해주세요
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="my-5 sm:my-6 grid place-items-center">
                    <HCaptcha
                      sitekey={import.meta.env.VITE_HCAPTCHA_SITEKEY}
                      onVerify={(token) => {
                        setCaptchaSuccess(true);
                        submitForm(token);
                      }}
                    />
                  </div>

                  {captchaSuccess ? (
                    // spinner animation
                    <button
                      type="button"
                      className="bg-indigo-500 flex justify-center w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm"
                      disabled
                    >
                      <svg
                        className="animate-spin h-5 w-5 mr-3 ..."
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-1.647z"
                        />
                      </svg>
                      처리중...
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={() => setCaptchaOpen(false)}
                    >
                      Cancle
                    </button>
                  )}
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
