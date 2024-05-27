export default function ContactSuccessPage() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">
            한 번만 확인해주세요
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            NOTICE
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            이메일 도용 방지를 위해 해당 이메일로 사본과 함께 인증 메일을
            발송했습니다. 메일함을 확인해주세요.
          </p>
          <p className="mt-6 text-base font-semibold leading-7 text-gray-600">
            이메일 인증이 완료되면 문의가 접수됩니다.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              메인 페이지로
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
