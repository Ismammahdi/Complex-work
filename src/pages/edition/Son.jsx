import React from "react";
import bannerImage from "../../assets/alkawsar-banner-230px.png"; // Adjust path if needed
import mosque from "../../assets/mosque.svg";
import adStart from "../../assets/adstarts.png";
import coverOne from "../../assets/cover-1.jpg";
import coverTwo from "../../assets/cover-2.jpg";
import coverThree from "../../assets/cover-3.jpg";
import coverFour from "../../assets/cover-4.jpg";
import coverFive from "../../assets/cover-5.jpg";
import coverSix from "../../assets/cover-6.png";
import { Link } from "react-router-dom";

const Son = () => {
  const tags = [
    { name: "ঈমান-আকাইদ", path: "/akaid" },
    { name: "একটি ভুল নাম", path: "/akaid" },
    { name: "শিক্ষা/সিলেবাস", path: "/akaid" },
    { name: "আল-কুদস সংখ্যা", path: "/akaid" },
    { name: "নামাজ-সালাত", path: "/akaid" },
    { name: "তাহারাত", path: "/akaid" },
    { name: "রমযান প্রস্তাব", path: "/akaid" },
    { name: "হজ্জ", path: "/akaid" },
    { name: "যাকাত", path: "/akaid" },
    { name: "মুয়ামালাত-লেনদেন", path: "/akaid" },
    { name: "তাসাউফ-আধ্যাত্মিকতা", path: "/akaid" },
    { name: "ইসলামী অর্থনীতি", path: "/akaid" },
    { name: "দাওয়াত ও তাবলীগ", path: "/akaid" },
    { name: "শেয়ার ব্যবসা", path: "/akaid" },
    { name: "শবে বরাত", path: "/akaid" },
    { name: "শবে মিরাজ", path: "/akaid" },
    { name: "ঈদ", path: "/akaid" },
    { name: "নারী অধিকার", path: "/akaid" },
    { name: "বিদআত", path: "/akaid" },
    { name: "সীরাত", path: "/akaid" },
  ];
  const headings = [{ name: "সাম্প্রতিক সংখ্যা »", path: "/more" }];
  const courrent = [{ name: "প্রসঙ্গসমূহ »", path: "/buttons" }];
  return (
    <div className=" font-bengali ">
      <div
        className="relative  bg-cover bg-top h-60 flex items-center font-bengali "
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="absolute text-white text-center px-2 md:px-8 w-full">
          <div className="p-2 md:p-6">
            <div className="flex flex-col md:flex-row items-center md:space-y-0 justify-between md:space-x-4">
              {/* Left Section with text and border */}

              <div className="w-full md:w-[40%] md:text-left text-center font-bengali">
                <div className="flex items-center">
                  <h2 className="text-xl mt-24 md:text-3xl flex-grow text-white font-bold pb-[10px] border-b border-yellow-500">
                    বর্ষ: ২০,<span className="ml-4"></span> সংখ্যা: ১০
                  </h2>
                  {/* Mosque Icon */}
                  <img
                    src={mosque}
                    alt="mosque"
                    className="w-12 h-auto mt-24 -ml-[44px] hidden md:block"
                  />
                </div>
                {/* Subtitle Text */}
              </div>

              {/* Right Section with institution text */}
              <div className="w-[50%] font-bengali hidden md:block">
                <p className=" text-2xl mt-24 font-semibold text-right">
                  জুমাদাল উলা ১৪৪৬ || নভেম্বর ২০২৪
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container mx-auto p-0 md:p-6 mt-5 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-2 px-4 relative">
              <div className="absolute top-0 right-0 h-[933px] border-r border-gray-200"></div>

              <p className="mt-6 w-full md:w-[570px] text-3xl font-bold border-b-2 pb-3 border-gray-300">
                <span className="]">
                  পাঠ্যপুস্তক সংশোধন ও পাঠ্যক্রম পরিমার্জন প্রসঙ্গ নতুন সরকার
                  আবার সেই ভুলপথে হাঁটবে না তো!
                </span>
                <p className="text-sm py-6 text-gray-500">মাওলানা সায়ীদুল হক</p>
              </p>

              <p className="pt-4">
                <br />

                <div className="text-lg leading-relaxed text-justify">
                  ইতিমধ্যে ইসরাইল তার তথাকথিত বাহাদুরি দেখিয়েছে হামাস প্রধান বীর
                  মুজাহিদ ইয়াহইয়া সিনওয়ারকে হত্যার মাধ্যমে। আমেরিকার বয়োবৃদ্ধ
                  প্রেসিডেন্ট জো বাইডেন খুব খুশি প্রকাশ করেছেন যে, ইয়াহইয়া
                  সিনওয়ারকে হত্যার মাধ্যমে ওই অঞ্চলে শান্তি আসবে। এমন কথা
                  ইসরাইলও বলেছে। এবারই প্রথম না, এর আগেও ইসরাইল যখন বড় কোনো
                  মুজাহিদকে শহীদ করতে পেরেছে, তখনই দাবি করেছে, ওই অঞ্চলে শান্তি
                  চলে আসবে। কিন্তু যতই তারা এমন হিংস্র আচরণ করেছে, ততই তারা
                  অনিরাপদ হয়েছে। তাদের জনগণের নিরাপত্তাহীনতা বেড়েছে। কারণ
                  মুজাহিদরা দমে যায়নি। নতুন করে উজ্জীবিত হয়েছে। এবারও সে ভুল
                  কথাই প্রচার করা হচ্ছে। তারা খুশিতে লাফাচ্ছে।
                </div>
                <br />
                <div className="text-lg leading-relaxed text-justify">
                  আমরা যদি ইয়াহইয়া সিনওয়ারকে দেখি, তাঁর বীরত্বগাথা শুনি, তাহলে
                  বুঝব, যে জাতির এমন নেতা থাকে, সে জাতির উত্তরসূরিদের কিছু লোকও
                  যদি এমন মনোভাবের হয়, তাহলে সে জাতিকে কেউ সমূলে ধ্বংস করতে
                  পারবে না। একসময় না একসময় বিজয় তাদের পদচুম্বন করবেই ইনশাআল্লাহ।
                  ইয়াহইয়া সিনওয়ারের কথাই যদি ধরা হয়, এই বাহাদুর মুজাহিদ ২০ বছর
                  বয়সেই ইসরাইলের জেলে গিয়েছেন। ইসলামের জন্য, দেশের স্বাধীনতার
                  জন্য, মানুষের মুক্তির জন্য তাঁর আত্মত্যাগের ইতিহাস সুদীর্ঘ।
                  ইসরাইল তাকে ৪টি যাবজ্জীবন কারাদণ্ড দিয়েছিল, যার সময়কাল হয় ৪২৬
                  বছর! তিনি জীবনের ২৩ বছর ইসরাইলের জেলেই ছিলেন। কিন্তু তিনি
                  জেলখানাকে ইবাদতখানা ও দরসগাহে পরিণত করেছিলেন। সেখানে থেকেই
                  দ্বীন পড়েছেন। সেখানে থেকেই বই পড়েছেন। সেখানে থেকেই বই লিখেছেন।
                  সেখানে থেকেই ভেতরে ভেতরে হামাসকে সংগঠিত করেছেন। অবগত হয়েছেন
                  ইসরাইলের সামরিক শক্তি ও সামর্থ্য সম্পর্কে। এরপর বন্দি বিনিময়
                  চুক্তির অংশ হিসেবে ২০১১ সালে জেল থেকে বেরিয়ে আসার সুযোগ কাজে
                  লাগান।
                </div>
                <br />
                <p className="text-center text-lg mb-4 text-gray-700">
                  إِذَا قَامَ الْإِمَامُ يَخْطُبُ يَوْمَ الْجُمُعَةِ فَاسْمَعُوا
                  وَأَنْصِتُوا. فَإِنَّ لِلْمُنْصِتِ الَّذِي لاَ يَسْمَعُ مِنَ
                  الْحَظِّ، مِثْلَ مَا لِلْمُنْصِتِ السَّامِعِ.
                </p>

                <div className="text-lg leading-relaxed text-justify">
                  বিশ্বের অন্যান্য নেতা ও তাঁর মধ্যে পার্থক্য কী? পৃথিবীর দলীয়
                  প্রধান ও নেতারা দূর থেকে নেতৃত্ব দেন, সরাসরি যুদ্ধে নামেন না;
                  কিন্তু ইয়াহইয়া সিনওয়ারকে আমরা দেখি, তিনি শুধু সামনে থেকে
                  নেতৃত্ব দেননি; বরং সাধারণ সৈনিকের মতো শেষ মুহূর্ত পর্যন্ত লড়ে
                  গেছেন। অঙ্গহানী ও আহত হওয়া সত্ত্বেও যে বীরত্ব দেখিয়ে গেছেন- তা
                  ইতিহাসের পাতায় স্বর্ণাক্ষরে লেখা থাকবে। এ বীরত্ব যুগে যুগে
                  দেশে দেশে মাজলুমদের টিকে থাকার অনুপ্রেরণা দেবে। নিষ্পেষিত
                  মানুষকে প্রতিরোধ গড়ে তোলার সাহস জোগাবে। <br />
                  <br />
                  <p>
                    প্রার্থিত বস্তু তিনটি হল-
                    <br />
                    <br />
                    ১. নিজের ও পিতামাতার প্রতি আল্লাহপ্রদত্ত নিআমতের শোকরগোযারির
                    তাওফীক।
                    <br />
                    <br />
                    ২. আল্লাহর পছন্দসই নেক কাজের তাওফীক।
                    <br />
                    <br />
                    ৩. সন্তানাদির মধ্যে ‘সালাহ’ ও সৎকর্মপরায়ণতা।
                    <br /> <br />
                    আর প্রতিজ্ঞেয় বিষয়দুটি হচ্ছে- <br />
                    <br />
                    ১. আমি তওবা করেছি এবং আল্লাহ্-অভিমুখী হয়েছি।
                    <br />
                    <br />
                    ২. আমি আল্লাহর আনুগত্যকারী।
                  </p>
                  <br />
                  <p className="text-lg leading-relaxed mb-4">
                    বিশ্বে এখন এই চর্চাও শুরু হয়েছে যে, ৭ অক্টোবর দক্ষিণ
                    ইসরাইলের ওপর আক্রমণের সময় অনেক বেসামরিক, সেনা ও বিদেশিকে
                    হত্যা করে এবং ইসরাইলের সাথে ভবিষ্যতে কড়া দর কষাকষির হাতিয়ার
                    হিসেবে আড়াই শ-এর মতো লোককে বন্দী করে হামাস কি মূলত ইসরাইলকে
                    এক লাখের বেশি ফিলিস্তিনীকে শহীদ ও আহত করা এবং জাতি নিধন ও
                    পশ্চিমা এস্টাবলিশমেন্টকে ‘মজলুম ইসরাইল’-এর নিরঙ্কুশ সমর্থন ও
                    সহযোগিতা দেওয়ার সুযোগ করে দিয়েছে?
                    <br />
                    <br />
                    নাকি হামাস ইসরাইলের সম্ভাব্য প্রতিউত্তরের বিষয়টি অনুমান করার
                    ক্ষেত্রে মারাত্মক ভুলের শিকার হয়ে পুরো গাজা ভূখণ্ডই
                    ধ্বংসস্তুপে পরিণত করে দিয়েছে?
                    <br />
                    <br />
                    আর নাকি হামাস সুপরিকল্পিতভাবেই ইসরাইলকে কোনো ফাঁদে ফাসিয়ে
                    দিয়েছে? যেন গোটা বিশ্ব ইসরাইলের রক্তপিপাসু চেহারাটা দেখতে
                    পারে। যে চেহারাটি ফিলিস্তিনীরা বিগত শতাব্দী ধরেই দেখে
                    অভ্যস্ত।
                    <br />
                    <br />
                    পূর্ববর্তী কলামে বলার চেষ্টা করেছি যে, ইসরাইলের সামরিক
                    গোয়েন্দাদের চোখে ফিলিস্তিনীরা কখনই তাদের অস্তিত্বের জন্য
                    হুমকি ছিল না। তাদের মূল আশঙ্কা ছিল প্রতিবেশী আরব
                    রাষ্ট্রগুলো। বিভিন্ন উপায়ে এদেরকেও তারা নিজেদের অনুগামী
                    বানিয়ে নিয়েছে। ফলে ইসরাইল ফিলিস্তিনীদের সাথে কী করছে, কিংবা
                    জাতি হিসেবে ফিলিস্তিনীরা নিজেদের ভবিষ্যত ও অস্তিত্বকে কতটুকু
                    সচল বা বাঁচিয়ে রাখতে পারবে— এসব বিষয়ে তাদের কোনো ভ্রূক্ষেপই
                    ছিল না।
                    <br />
                    <br />
                    অসলো (Oslo) চুক্তির আড়ালে পিএলওকে এক অনাহূত অতিথির পর্যায়ে
                    নিয়ে আসার পর ইসরাইলের প্রতিরক্ষা অধিদপ্তর নিশ্চিতই হয়ে
                    গিয়েছিল যে, হামাস কিংবা ইসলামিক জিহাদের মতো কোনো গোষ্ঠীর
                    ইসরাইলের মতো অপরাজেয় সামরিক শক্তির সাথে লড়ে আত্মহুতি দেওয়ার
                    চিন্তা করাও সম্ভব নয়। তাই এসব গোষ্ঠী কিংবা এদের পদক্ষেপকে
                    গভীরভাবে দেখা অযথা সময় নষ্ট করার শামিল।
                    <br />
                    <br />
                    শক্তির নেশাই যখন মুখ্য হয় তখন শক্তিমান ভুলেই বসে যে, দাসত্ব
                    বা জুলুমের শেকল ঢিলা করার জন্য দুর্বলও কখনও অত্যন্ত কৌশলী ও
                    মরিয়া হয়ে উঠতে পারে।
                    <br />
                    <br />
                    ৭ অক্টোবর ইসরাইলের এই অহংকার চূর্ণ হয়ে গিয়েছে। সামরিক
                    বিবেচনায় অতি দুর্বল একটি দলের হাতে নিজেদের অপরাজেয় হওয়ার
                    গর্ব ধূলিসাত হতে দেখে ইসরাইল ক্রোধে জ্বলে উঠল। আর পরিণতির
                    তোয়াক্কা না করেই পূর্ণ শক্তি নিয়ে গাজায় ঝাঁপিয়ে পড়ল। লক্ষ্য
                    যেন শুধু প্রতিশোধ নেওয়াই নয়; বরং গোটা ভূ-খণ্ডই জনশূন্য করে
                    ফেলা।
                    <br />
                    <br />
                    কথায় আছে, রাগের শুরু হয় প্রতিশোধ থেকে আর শেষ হয় অনুতাপ দিয়ে।
                    প্রবাদটি মানুষের ক্ষেত্রে যেমন প্রযোজ্য, ঠিক তেমনি রাষ্ট্রের
                    ক্ষেত্রেও। রাগ যেহেতু হুঁশ ও অনুভূতি নষ্ট করে দেয়, তাই অতি
                    রাগের মাথায় নেওয়া সর্বোত্তম পদক্ষেপটিও ক্রোধান্বিত ব্যক্তির
                    গলার কাঁটা হয়ে যেতে পারে। ভিয়েতনাম, ইরান ও আফগানিস্তান তো
                    সম্মুখসারির দৃষ্টান্ত। এগুলো ছিল এমন কিছু ফাঁদ, যার আশঙ্কা
                    একটি পরাশক্তিকে অসহায়ের মতো লেজগুটিয়ে পালাতে কিংবা কোনো
                    উপায়ে প্রাণে বেঁচে ফিরতে বাধ্য করেছিল।
                    <br />
                    <br />
                    ইসরাইল যেহেতু শত্রুকে ধৈর্যের সাথে সুনির্দিষ্টভাবে হত্যা
                    করার পরিবর্তে গোটা জাতিকে সমূলে নিশ্চিহ্ন করার লক্ষ্যে
                    সামরিক অভিযান পরিচালনা করে চলেছে, তাই তার গভীরভাবে ভাবার
                    এতটুকুও ফুরসত হয়নি যে, হামাসকে যদি সে নিশ্চিহ্ন করতে না
                    পারে, তাহলে এই যুদ্ধের শেষ কোথায়? অথবা যুদ্ধ শেষ হওয়ার পরই
                    বা কী হবে?
                    <br />
                    <br />
                    ইসরাইল গাজার অবকাঠামো ধ্বংস করে হামাসকে এই সুযোগ করে দিয়েছে
                    যে, তারা ধ্বংস্তুপের মধ্যে নিজেকে সামলে নিয়ে অলিগলিতে লড়াই
                    করে অনুপ্রবেশকারী ইসরাইলী বাহিনীকে নিজেদের মতো ব্যস্ত রাখতে
                    পারে। সবসময় দৌড়ের ওপর রেখে তাদেরকে মানসিকভাবে দুর্বল করে
                    দিতে পারে।
                    <br />
                    <br />
                    কোনো ভবনকে অবরুদ্ধ করে শত্রুকে খুঁজে বের করে আনা সহজ হয়ে
                    থাকে। কিন্তু ভবনই যদি ধ্বংসস্তুপে পরিণত হয়, তাহলে কোনোভাবেই
                    জানা সম্ভব হয় না যে, কোন স্তুপের নিচে বা আড়ালে শত্রু লুকিয়ে
                    আছে।
                    <br />
                    <br />
                    স্টালিনগ্রাড অবরুদ্ধ করে রাখার পর যখন জার্মানের সেনারা তা
                    ধসিয়ে দিল তখন তারা বুঝতে পারল, এর এক একটি ধ্বংসস্তুপই তাদের
                    শত্রু হয়ে দাঁড়িয়েছে। ধ্বংসপ্রাপ্ত ও সুনশান বিরান বাড়িগুলো
                    তাদের জন্য ফাঁদে পরিণত হয়েছে। দক্ষ গেরিলা যোদ্ধাদের জন্য এর
                    চেয়ে উত্তম যুদ্ধ-পরিবেশ আর হতেই পারে না। রাশিয়ানরা নিজেদের
                    পূর্ণ ইচ্ছাশক্তি দিয়ে আধুনিক অস্ত্রেশস্ত্রে সজ্জিত জার্মানের
                    নাৎসি বাহিনীকে এতটাই সংকীর্ণ করে তুলল যে, তারা সামরিক
                    পদক্ষেপ ভুলে সবসময় নিজেদের অস্তিত্ব টিকিয়ে রাখার মরীচিকায়
                    ফেঁসে গেল। রাশিয়ানদের অকল্পনীয় প্রাণহানি ঘটলেও তারা নিজেদের
                    ঘর ও ভূমির জন্য লড়াই করছিল আর জার্মানরা অপরাজেয় হওয়ার গর্ব
                    নিয়ে লড়ছিল। যার ফলাফল আপনারা দেখেছেন, স্টালিনগ্রাডে
                    জার্মানদের শেষ পরিণতি কী হয়েছিল।
                    <br />
                    <br />
                    মুশকিল হল, খড়কুটার স্তুপের মধ্যে একটা সীমা পর প্রযুক্তিও আর
                    কাজে আসে না।
                    <br />
                    <br />
                    ইসরাইলের নেতৃবৃন্দ সাধারণ জনগণকে এই নিশ্চয়তা প্রদান করে
                    নিজেদের মুশকিলকে আরো বাড়িয়ে তুলেছে যে, তারা এবার হামাসের
                    নামগন্ধও দুনিয়া থেকে মিটিয়ে দেবে। অথচ যুদ্ধের আট মাস পর
                    গাজার অবকাঠামোকে পরিপূর্ণ ধ্বংস করে দেওয়া এবং তেইশ লক্ষ বনী
                    আদমকে গৃহহীন করা সত্ত্বেও ইসরাইলের ঘনিষ্ঠ মিত্র আমেরিকার
                    ইন্টেলিজেন্স এজেন্সি সিআইএ-এর ধারণা, হামাস গাজায় যেসব সুড়ঙ্গ
                    তৈরি করেছিল, তার ৮০ ভাগই এখনও নিরাপদ ও অক্ষত আছে এবং হামাসের
                    ৬৫ ভাগ সেনাশক্তি এখনও আগের মতোই আছে। আর যাঁরা শহীদ হয়েছেন,
                    তাদের স্থান পূরণের জন্য হাজার হাজার লোক প্রস্তুত রয়েছে।
                    <br />
                    <br />
                    এ কারণেই ইসরাইল যখন ঘোষণা দিল, উত্তর গাজা ও গাজা নগরী হামাস
                    থেকে পরিপূর্ণভাবে মুক্ত করা হয়েছে এবং এসব অঞ্চল এখন পরিষ্কার
                    তখনও এসব অঞ্চল থেকে ইসরাইলের ওপর রকেট হামলা চালানো হচ্ছে।
                    হামাস যোদ্ধারা ইসরাইলের পদাতিক ও আর্টিলারি বাহিনীকে গেরিলা
                    আক্রমণের লক্ষ্যবস্তু বানিয়ে চলেছে। ফলে যেসব অঞ্চল পরিষ্কার
                    হওয়ার ঘোষণা দেওয়া হয়েছিল সেসব অঞ্চলেই ইসরাইলকে আরো দুই থেকে
                    তিন বার করে সেনা প্রেরণ করতে হচ্ছে।
                    <br />
                    <br />
                    ইসরাইল কর্তৃক জাবালিয়ার সর্ববৃহৎ আশ্রয়শিবিরটিকে পরিপূর্ণভাবে
                    ধ্বংস করে দেওয়া হয়েছে। এমনকি বোমা হামলা ও গোলার আঘাতে
                    ক্ষতিগ্রস্ত হাসাপাতালগুলোও বারবার অবরুদ্ধ করে রাখা হচ্ছে।
                    কিন্তু এর পরও আক্রমণ বন্ধ করা যাচ্ছে না। হামাস যেন মৌচাকের
                    হুল ফোটানো মৌমাছির মতো উড়ে বেড়াচ্ছে। যারা একবার মানুষের গালে
                    বসে পরক্ষণেই উড়ে যায়। এরপর আবার নাকের ডগায় ঘুরঘুর করতে থাকে।
                    হাত দিয়ে পিটিয়ে মানুষ নিজের চেহারা লাল বানিয়ে ফেললেও মৌমাছি
                    কিন্তু ঘুরঘুর করে উড়তে থাকে।
                    <br />
                    <br />
                    ইসরাইলের রাগ ও উত্তেজনা ক্রমশ বেড়েই চলেছে। এই রাগের বশবর্তী
                    হয়ে ইসরাইল যেসব নিষ্ঠুর ও অমানবিক পদক্ষেপ গ্রহণ করে চলেছে,
                    তার সুবাদে সাধারণ বিশ্ব জনমত প্রথম বারের মতো দেখতে পারছে যে,
                    ইসরাইল ফিলিস্তিনীদের সাথে বিগত ৭৫ বছর ধরে কী করে আসছে।
                    <br />
                    <br />
                    আজ পর্যন্ত ইসরাইল যতগুলো যুদ্ধের মুখোমুখী হয়েছে, সবকটিতেই
                    নিজেকে এক ‘অবরুদ্ধ ও মজলুম রাষ্ট্র’ হিসেবে প্রমাণিত করতে
                    সক্ষম হয়েছে। কিন্তু এবার গাজা যেন তার চেহারার সব পর্দা সরিয়ে
                    দিয়েছে। এর টুকরোগুলো এখন ববিশ্বের বিভিন্ন অঞ্চলের
                    বিক্ষোভকারীদের মাঝে বণ্টিত হচ্ছে। এই যুদ্ধ শুধু প্রথমবারের
                    মতো বিশ্ব জনমতকেই পাল্টে দেয়নি; বরং পশ্চিমা রাষ্ট্রগুলোও
                    ইসরাইলের নিঃশর্ত সহযোগিতা প্রদানের ক্ষেত্রেও বিভক্ত হয়ে
                    পড়েছে।
                    <br />
                    <br />
                    এতদিন পর্যন্ত বিশ্বের বিভিন্ন অঞ্চল থেকে ইহুদীরা ইসরাইলে এসে
                    এই প্রতিশ্রুতির কারণে বসতি স্থাপন করছিল যে, এটি একটি পূর্ণ
                    নিরাপদ ও শেষ দুর্গ। কিন্তু অতি দুর্বল একটি গোষ্ঠী যেভাবে
                    দুর্গটিতে ফাটল ধরিয়ে দিল, তাতে ইসরাইলের প্রায় ২ লক্ষ
                    বাসিন্দা দেশ ছেড়ে চলে গিয়েছে। অথচ এই স্বপ্ন পূরণের লক্ষ্য
                    নিয়েই ইসরাইল রাষ্ট্রের জন্ম হয়েছিল যে, এটি হবে এমন এক নিরাপদ
                    রাষ্ট্র, যেখানে ইহুদীরা সংখ্যাগরিষ্ঠতা লাভ করবে। আর এখানকার
                    আরবরা হয়তো দেশান্তরিত হয়ে যাবে, নতুবা ইহুদী বসতি
                    স্থাপনকারীদের অব্যাহত আগমনধারায় তারা সংখ্যালঘুতে পরিণত হবে।
                    <br />
                    <br />
                    বর্তমান পরিস্থিতি এই পর্যায়ে পৌঁছেছে যে, হামাসের অস্তিত্ব
                    যদি বিলুপ্ত না হয়, তাহলে এটি হামাসের বিজয় বলে বিবেচিত হবে।
                    আর ইসরাইল যদি হামাসকে পরিপূর্ণ নির্মূল করতে না পারে, তাহলে
                    এটি হবে তাদের পরাজয়ের ডংকা। এই কলঙ্ক থেকে মুক্তি পেতে ইসরাইল
                    ততক্ষণ পর্যন্ত ধ্বংসযজ্ঞ চালিয়ে যাবে, যতক্ষণ তাদের আশ্রয়দাতা
                    ও সাহায্যকারীরা টুঁটি চেপে না ধরবে। ইসরাইলভক্তরাও জানে,
                    প্রতিটি যুদ্ধই একদিন না একদিন বন্ধ করতেই হয়। তবে এটি ভিন্ন
                    কথা, আমেরিকার এই অনুভূতিটা হল গাজার ৪০ হাজার প্রাণ ঝরে
                    যাওয়ার পর।
                    <br />
                    <br />
                    যেকোনো প্রতিরোধ আন্দোলন সাময়িকভাবে দমানো যেতে পারে, রূপরেখা
                    ও ধরনে পরিবর্তন আসতে পারে, কিন্তু সামষ্টিক বা আংশিক লক্ষ্য
                    পূরণ হওয়া ছাড়া তা শেষ হয় না। কোনো দর্শন বা মতবাদের স্বভাবজাত
                    মৃত্যু তো হতে পারে, কিন্তু তাকে হত্যা করা যায় না। <br />
                    <br />
                  </p>
                </div>
              </p>
              <div className="flex flex-col md:flex-row mt-5 items-start md:items-center gap-4">
                <div className="text-xl mb-2 md:mb-0">প্রসঙ্গসমূহ:</div>
                <div className="flex flex-wrap gap-3">
                  <p className="px-3 py-1 text-white hover:bg-yellow-700 bg-yellow-600 inline-block text-center ">
                    দ্বীনিয়াত
                  </p>
                  <p className="px-3 py-1 text-white hover:bg-yellow-700 bg-yellow-600 inline-block text-center ">
                    অনৈতিকতা
                  </p>
                  <p className="px-3 py-1 text-white hover:bg-yellow-700 bg-yellow-600 inline-block text-center ">
                    মনীষী/স্মরণ
                  </p>
                  <p className="px-3 py-1 text-white hover:bg-yellow-700 bg-yellow-600 inline-block text-center ">
                    স্মৃতিচারণ/জীবন থেকে
                  </p>
                  <p className="px-3 py-1 text-white hover:bg-yellow-700 bg-yellow-600 inline-block text-center ">
                    নীতি-নৈতিকতা
                  </p>
                </div>
              </div>
              <div className="mt-16">
                <img src={adStart} alt="adStart" className="w-full" />
              </div>
            </div>

            <div className="mt-6 ">
              <div className="flex items-center right ">
                {courrent.map((article, i) => (
                  <Link
                    key={i}
                    to={article.path}
                    className="text-2xl cursor-pointer hover:text-green-600 text-gray-700 font-bold border-b border-yellow-500 flex-grow mb-2 pb-[10px]"
                  >
                    {article.name}
                  </Link>
                ))}
                <img src={mosque} alt="mosque" className="w-8 h-auto -ml-6" />
              </div>
              <div className="abc px-4 py-6">
                <div className="flex flex-wrap gap-3 mb-6 pb-5 border-b border-gray-200">
                  {tags.map((tag, index) => (
                    <Link
                      to={tag.path}
                      key={index}
                      className="px-3 py-1 text-gray-800 hover:bg-gray-500 hover:text-white  bg-gray-200  text-center"
                    >
                      {tag.name}
                    </Link>
                  ))}
                </div>
                <div className="text-center flex justify-start mt-4">
                  <Link to={"/buttons"}>
                    <button className="px-6 py-2 bg-green-600 text-white font-semibold  hover:bg-green-700">
                      আরো »
                    </button>
                  </Link>
                </div>
                <div className="mt-8">
                  <div className="flex items-center right ">
                    <h2 className="text-2xl item-map cursor-pointer   hover:text-green-600 text-gray-700 font-bold border-b border-yellow-500 flex-grow mb-2 pb-[10px]">
                      {headings.map((article, i) => (
                        <Link
                          key={i}
                          to={article.path}
                          className="cursor-pointer"
                        >
                          {article.name}
                        </Link>
                      ))}
                    </h2>
                    <img
                      src={mosque}
                      alt="mosque"
                      className="w-8 h-auto -ml-6"
                    />
                  </div>
                  <div className="">
                    <div className="grid grid-cols-2  lg:grid-cols-3 gap-4 ">
                      {[
                        { path: "/allIssues", img: coverOne },
                        { path: "/allIssues", img: coverTwo },
                        { path: "/allIssues", img: coverThree },
                        { path: "/allIssues", img: coverFour },
                        { path: "/allIssues", img: coverFive },
                        { path: "/allIssues", img: coverSix },
                        ,
                      ].map((cover, index) => (
                        <Link to={cover.path}>
                          <div key={index} className="relative group ">
                            {/* Image */}
                            <img
                              src={cover.img}
                              alt={`Cover ${index + 1}`}
                              className="w-full h-auto"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* right section */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Son;
