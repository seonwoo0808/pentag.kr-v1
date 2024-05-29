import { Transition } from "@headlessui/react";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/20/solid";

export default function NotificatioElement(props: {
  title: string;
  message?: string;
  type: "success" | "info" | "warning" | "error";
  show: boolean;
  setShow: (show: boolean) => void;
}) {
  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-50"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={props.show}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    {notificationIcon[props.type]}
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">
                      {props.title}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {props.message}
                    </p>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => {
                        props.setShow(false);
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}

const notificationIcon = {
  success: (
    <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
  ),
  info: (
    <InformationCircleIcon
      className="h-6 w-6 text-blue-400"
      aria-hidden="true"
    />
  ),
  warning: (
    <InformationCircleIcon
      className="h-6 w-6 text-yellow-400"
      aria-hidden="true"
    />
  ),
  error: (
    <InformationCircleIcon
      className="h-6 w-6 text-red-400"
      aria-hidden="true"
    />
  ),
};
