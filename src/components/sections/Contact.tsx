"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function Contact() {
  return (
    <section id="contact" className="pt-8">
      <div className="w-full px-4 md:px-8">
        <div className="bg-[#242426] rounded-2xl md:rounded-xl p-8 md:p-16 lg:p-20 text-white flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Text Content */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Let&apos;s discuss <br className="hidden md:block" /> cooperation!
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-md">
              If you have questions or offers - leave us your data. We will contact you shortly.
            </p>
          </div>

          {/* Form */}
          <div className="lg:w-1/2 flex flex-col gap-4">
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <Input type="text" placeholder="Name" />
              <Input type="tel" placeholder="Phone" />
              <Input type="email" placeholder="Email" />
              
              <div className="mt-4 flex flex-col gap-4">
                <Button variant="whiteDarkText" size="lg" className="w-full">
                  Submit request
                </Button>
                <p className="text-xs text-center text-gray-500">
                  By clicking the button you agree to the privacy policy
                </p>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
