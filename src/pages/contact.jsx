import { useRef, useState } from "react";
import { AnimateDiv } from "../components/AnimateDiv";
import { Loader } from "../components/Loader";

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const onSubmit = async (e) => {
    e.preventDefault();
    if (name.length <= 0) {
      nameRef.current.classList.add("border-red-800");
      nameRef.current.focus();
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailRef.current.classList.add("border-red-800");
      emailRef.current.focus();
      return;
    }
    if (message.length <= 0) {
      messageRef.current.classList.add("border-red-800");
      messageRef.current.focus();
      return;
    }

    messageRef.current.classList.remove("border-red-800");
    emailRef.current.classList.remove("border-red-800");
    nameRef.current.classList.remove("border-red-800");

    setLoading(true);
    await new Promise((res) => setTimeout(res, 2000));
    setLoading(false);
  };

  const handleNameChange = (e) => {
    if (e.target.value.length <= 0) {
      nameRef.current.classList.add("border-red-800");
    } else {
      nameRef.current.classList.remove("border-red-800");
      setName(e.target.value);
    }
  };
  const handleEmailChange = (e) => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
      emailRef.current.classList.remove("border-red-800");
      setEmail(e.target.value);
    } else {
      emailRef.current.classList.add("border-red-800");
    }
  };

  return (
    <AnimateDiv className="flex justify-center items-center w-full gap-8 h-full px-10 lg:px-0 flex-1 ">
      <form
        className=" m-auto flex flex-col gap-8 rounded-lg w-full lg:w-1/2  p-8 bg-[#2E5984] bg-opacity-40 border border-gray-400"
        onSubmit={onSubmit}
      >
        <h1 className="text-2xl font-bold">Contact</h1>
        <div className="flex flex-col gap-4 text-xl">
          <label htmlFor="name">Name</label>
          <input
            ref={nameRef}
            onChange={handleNameChange}
            type="text"
            name="name"
            id="name"
            className="bg-transparent border border-[#528AAE] outline-none rounded-lg py-2 text-xl px-1"
          />
        </div>
        <div className="flex flex-col gap-4 text-xl">
          <label htmlFor="email">Email</label>
          <input
            ref={emailRef}
            onChange={handleEmailChange}
            type="text"
            name="email"
            id="email"
            className="bg-transparent border border-[#528AAE] outline-none  rounded-lg py-2 text-xl px-1"
          />
        </div>
        <div className="flex flex-col gap-4 text-xl">
          <label htmlFor="message">Message</label>
          <textarea
            ref={messageRef}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            name="message"
            id="message"
            cols="20"
            rows="5"
            className="bg-transparent border border-[#528AAE] rounded-lg outline-none  py-2 text-xl px-1"
          ></textarea>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <button className="w-full  py-4 bg-[#73A5C6] rounded-md m-auto">
            Contact
          </button>
        )}
      </form>
    </AnimateDiv>
  );
};
