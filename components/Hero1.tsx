import Image from "next/image";
import MobileMenu from "@/features/Hero/MobileMenu";
import { Navigation } from "@/Models/NavigationModel";

const navigation: Navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

type Hero1Props = {
  theme?: "light" | "dark"; // default "light"
};

export default function Hero1({ theme = "light" }: Hero1Props) {
  const isDark = theme === "dark";

  return (
    <div className={isDark ? "bg-gray-900" : "bg-white"}>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
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
                className="h-8 w-auto"
                width={32}
                height={32}
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
        {/* Hero content */}
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <h1
            className={`text-5xl font-semibold tracking-tight sm:text-7xl ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Data to enrich your online business
          </h1>
          <p
            className={`mt-8 text-lg sm:text-xl/8 ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className={`rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 ${
                isDark
                  ? "bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-500"
                  : "bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600"
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
  );
}
