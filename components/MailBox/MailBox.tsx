import React, { useState } from "react";
import { CheckCheck, ChevronDown, ChevronRightIcon } from "lucide-react";

import { AnimatedShinyText } from "@/components/ui/magic-ui/animated-shiny-text";

import { AnimatedSubscribeButton } from "@/components/ui/magic-ui/animated-subscribe-button";
import { toast } from "sonner";

const MailBox = () => {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSucess] = useState(false);
  const handleSend = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(!email) {
      toast.error("Please enter your email address", {
        position: "top-center",
        style: { marginTop: "100px" }
      });
      setIsSucess(false);
      return;
    }
    
    if(!emailRegex.test(email)) {
      toast.error("Please enter Valid email address", {
        position: "top-center",
        style: { marginTop: "100px" }
      });
      setIsSucess(false);
      return;
    }

    // Only set success if validation passes
    toast.success("Check your inbox!", {
      position: 'top-center',
      style: { marginTop: "100px" }
    });
    setIsSucess(true);
    setEmail(''); // Optional: clear input after success
  }
  return (
    <div className="container flex flex-col  justify-center items-center">
      <div className=" flex gap-2 font-sans  bg-neutral-900 px-4 py-1 rounded-full mb-2">
        <AnimatedShinyText shimmerWidth={100}     > ✨ Contact</AnimatedShinyText>

        <ChevronDown />
      </div>
      <div className=" border-2 flex gap-4  border-neutral-700 rounded-full pl-4 pr-2  py-2   ">
        <input
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          type="email"
          className="w-[230px] bg-transparent outline-none font-sans"
          placeholder="Enter your mail here"
        />
        

        <AnimatedSubscribeButton subscribeStatus={isSuccess} onClick={handleSend} className="border w-24 font-sans   border-white/15 rounded-full bg-white text-black  backdrop-blur px-4  py-2">
          <span className="group inline-flex items-center">
            Send
            <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          
          <span className="group inline-flex  items-center">
            <CheckCheck className="mr-2 size-4" />
            Sent
          </span>
          
        </AnimatedSubscribeButton>
      </div>
    </div>
  );
};

export default MailBox;
