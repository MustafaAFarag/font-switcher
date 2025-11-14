"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import { Navigation } from "@/Models/NavigationModel";

type MobileMenuProps = {
  isDark: boolean;
  navigation: Navigation;
};

export default function MobileMenu({ isDark, navigation }: MobileMenuProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
            isDark ? "text-gray-200" : "text-gray-700"
          }`}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="size-6" />
        </button>
      </div>

      {/* Mobile menu dialog */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel
          className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto p-6 sm:max-w-sm sm:ring-1 ${
            isDark
              ? "bg-gray-900 ring-gray-100/10"
              : "bg-white ring-gray-900/10"
          }`}
        >
          <div className="flex items-center justify-between">
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
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className={`-m-2.5 rounded-md p-2.5 ${
                isDark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold ${
                      isDark
                        ? "text-white hover:bg-gray-800"
                        : "text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className={`-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold ${
                    isDark
                      ? "text-white hover:bg-gray-800"
                      : "text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}
