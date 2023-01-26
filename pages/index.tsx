import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Form from "../components/Form";

const Home: NextPage = () => {
  const onSubmit = (text: string) => {
    console.log(text);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>GPTHero | Breaking GPTZero one thesarus at a time</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col w-full h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="w-full h-full max-w-3xl px-10 mx-auto my-20 text-center">
          <h1 className="text-6xl font-bold text-emerald-500">GPT HERO</h1>
          <Form onSubmit={onSubmit} />
        </div>
        <footer className="flex items-center justify-center w-full h-24 border-t border-slate-500">
          <p className="text-slate-500">
            Hello, I'm Alex. We should{" "}
            <a
              className="font-bold text-emerald-500"
              href="https://neuralnonsense.beehiiv.com/"
            >
              chat
            </a>
            .
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Home;
