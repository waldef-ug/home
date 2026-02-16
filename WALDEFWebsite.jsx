import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Heart, Users, TrendingUp, Leaf } from "lucide-react";

export default function WALDEFWebsite() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Welcome to WALDEF 👋 How can we assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input) return;
    setMessages([
      ...messages,
      { from: "user", text: input },
      { from: "bot", text: "Thank you for connecting with WALDEF 💜 Our team will respond shortly." },
    ]);
    setInput("");
  };

  return (
    <div className="relative min-h-screen bg-[#0B0B0F] text-white overflow-hidden">

      {/* AURORA BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(34,197,94,0.2),transparent_40%)] blur-3xl" />

      {/* NAVBAR */}
      <div className="fixed top-0 w-full backdrop-blur-xl bg-black/30 border-b border-white/10 z-50 flex justify-between items-center px-8 py-4">
        <div className="text-lg md:text-xl font-bold tracking-wide">
          WALDEF <span className="text-purple-400">Uganda</span>
        </div>
        <Button className="rounded-full bg-gradient-to-r from-purple-600 to-emerald-500">
          Donate
        </Button>
      </div>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent"
        >
          WOMEN'S ADVANCEMENT AND LIVELIHOOD DEVELOPMENT FOUNDATION (WALDEF) LIMITED
        </motion.h1>

        <p className="mt-8 max-w-4xl text-lg text-gray-300">
          A Uganda-registered limited liability foundation dedicated to improving the lives of single mothers, refugee women, host-community women and vulnerable girls through climate-smart agriculture, livelihood skills development, entrepreneurship support, advocacy and community-based empowerment programs.
        </p>

        <div className="flex gap-6 mt-10">
          <Button className="rounded-full px-8 py-4 bg-gradient-to-r from-purple-600 to-emerald-500">
            Join WALDEF
          </Button>
          <Button
            variant="outline"
            className="rounded-full px-8 py-4 border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Support Our Work
          </Button>
        </div>
      </section>

      {/* CORE PROGRAM AREAS */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-16">
          Our Core Focus Areas
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[Heart, Users, Leaf, TrendingUp].map((Icon, i) => (
            <Card key={i} className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl hover:-translate-y-2 transition">
              <CardContent className="p-8">
                <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-white/10 border border-white/20">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  {[
                    "Women & Girls Protection",
                    "Livelihood Skills",
                    "Climate-Smart Agriculture",
                    "Entrepreneurship & Financial Literacy"
                  ][i]}
                </h3>
                <p className="text-gray-400 text-sm">
                  Sustainable, community-driven initiatives across Uganda.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* OFFICIAL OBJECTS */}
      <section className="py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Official Objects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            "Improve lives of single mothers, refugee women and host-community women and girls.",
            "Empower women and girls with practical skills and income opportunities.",
            "Promote modern and climate-smart agriculture.",
            "Develop income-generating skills: tailoring, crafts, poultry, agribusiness.",
            "Support entrepreneurship, financial literacy and cooperative development.",
            "Strengthen food security and household resilience.",
            "Advocate for women's rights, dignity and equal opportunities.",
            "Enable vulnerable girls to produce reusable sanitary pads.",
            "Mitigate school dropout, early marriages and violence against children.",
            "Undertake activities incidental to the above."
          ].map((item, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
              <CardContent className="p-6 text-gray-300 text-sm">
                {index + 1}. {item}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* LEGAL STATUS */}
      <section className="py-24 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-bold mb-8">
          Legal Status & Liability
        </h2>

        <div className="max-w-4xl mx-auto text-gray-400 space-y-6">
          <p>
            The registered office of WALDEF is situated in Uganda.
          </p>
          <p>
            The liability of members is limited.
          </p>
          <p>
            Every member undertakes to contribute to the assets of the company in the event of winding up, for payment of debts and liabilities contracted before ceasing membership and associated costs, such amount as may be required not exceeding UGX 2,000,000.
          </p>
        </div>
      </section>

      {/* VOLUNTEER FORM */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">
          Partner With WALDEF
        </h2>

        <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-2xl border border-white/10 p-12 rounded-3xl">
          <Input placeholder="Full Name" className="mb-6 bg-white/10 border-none" />
          <Input placeholder="Email Address" className="mb-6 bg-white/10 border-none" />
          <Textarea placeholder="How would you like to support WALDEF?" className="mb-6 bg-white/10 border-none" />
          <Button className="w-full rounded-full py-4 bg-gradient-to-r from-purple-600 to-emerald-500">
            Submit
          </Button>
        </div>
      </section>

      {/* CHATBOT */}
      <div className="fixed bottom-6 right-6">
        {chatOpen && (
          <div className="w-80 h-96 bg-black/70 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl flex flex-col p-4 mb-4">
            <div className="flex-1 overflow-y-auto space-y-2">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-2xl text-sm ${
                    msg.from === "bot"
                      ? "bg-purple-600/80"
                      : "bg-white/10 text-right"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
              <div className="flex gap-2 mt-2">
                <Input value={input} onChange={(e) => setInput(e.target.value)} className="bg-white/10 border-none" />
                <Button onClick={sendMessage}>OK</Button>
              </div>
          </div>
        )}
        <Button
          onClick={() => setChatOpen(!chatOpen)}
          className="rounded-full p-5 bg-gradient-to-r from-purple-600 to-emerald-500 shadow-lg hover:scale-110 transition"
        >
          <MessageCircle />
        </Button>
      </div>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500 border-t border-white/10">
        © 2026 WOMEN'S ADVANCEMENT AND LIVELIHOOD DEVELOPMENT FOUNDATION (WALDEF) LIMITED | Registered in Uganda | Liability Limited by Guarantee
      </footer>

    </div>
  );
}