import MobileMenu from "@/features/Hero/MobileMenu";
import Image from "next/image";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

type Hero1Props = {
  theme?: "light" | "dark";
};

export default function Hero1({ theme = "light" }: Hero1Props) {
  const isDark = theme === "dark";

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-900" : "bg-white"}`}>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt=""
                src={
                  isDark
                    ? "https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                    : "https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                }
                width={32}
                height={32}
                className="h-8 w-auto"
              />
            </a>
          </div>
          <MobileMenu isDark={isDark} navigation={navigation} />
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm/6 font-semibold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className={`text-sm/6 font-semibold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div
              className={`relative rounded-full px-3 py-1 text-sm/6 ring-1 ${
                isDark
                  ? "text-gray-400 ring-white/10 hover:ring-white/20"
                  : "text-gray-600 ring-gray-900/10 hover:ring-gray-900/20"
              }`}
            >
              Announcing our next round of funding.{" "}
              <a
                href="#"
                className={`font-semibold ${
                  isDark ? "text-indigo-400" : "text-indigo-600"
                }`}
              >
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1
              className={`text-5xl font-semibold tracking-tight text-balance sm:text-7xl ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Data to enrich your online business
            </h1>
            <p
              className={`mt-8 text-lg font-medium text-pretty sm:text-xl/8 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className={`rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  isDark
                    ? "bg-indigo-500 hover:bg-indigo-400 focus-visible:outline-indigo-500"
                    : "bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600"
                }`}
              >
                Get started
              </a>
              <a
                href="#"
                className={`text-sm/6 font-semibold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
