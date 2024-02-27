import ButtonSwipe from "@/components/ButtonSwipe";
import { GrSend } from "react-icons/gr";
import { IoCall, IoMailOpen } from "react-icons/io5";

function contactSect() {
  return (
    <section className="lg:flex">
      <div className="max-w-[550px] mx-auto lg:w-1/3 lg:py-12">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          DO NOT HESITATE!
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-3">
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas or opportunities to be part of your visions.
        </p>
        <div>
          <div className="mail flex gap-5 my-3">
            <IoMailOpen size={25} color="#FFB400" />
            <div>
              <p>MAIL ME</p>
              <p className="font-bold tracking-wide">asad@asaddev.com</p>
            </div>
          </div>
          <div className="call flex gap-5">
            <IoCall size={25} color="#FFB400" />
            <div>
              <p>CALL ME</p>
              <p className="font-bold tracking-wide">+92 3435701060</p>
            </div>
          </div>
        </div>
      </div>
      <div className="l">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto w-full max-w-[550px]">
            <form action="/" method="POST">
              <div className="md:flex gap-2">
                <div className="mb-5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="YOUR NAME"
                    className="w-full rounded-full border bg-gray-600/50 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#FFB400] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="YOUR EMAIL"
                    className="w-full rounded-full border bg-gray-600/50 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#FFB400] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="YOUR SUBJECT"
                    className="w-full rounded-full border bg-gray-600/50 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#FFB400] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="mb-5">
                <textarea
                  rows={4}
                  name="message"
                  id="message"
                  placeholder="Type your message"
                  className="w-full resize-none rounded-3xl border bg-gray-600/50 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#FFB400] focus:shadow-md"
                ></textarea>
              </div>
              <div>
                <ButtonSwipe text="SEND MESSAGE">
                  <GrSend size={25} />
                </ButtonSwipe>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default contactSect;
