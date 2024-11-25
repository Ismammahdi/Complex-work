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

const Brave = () => {
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

  const headings = [{ name: "প্রসঙ্গসমূহ »", path: "/buttons" }];
  const current = [{ name: "সাম্প্রতিক সংখ্যা »", path: "/more" }];
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
                  জুমাদাল উলা ১৪৪৬ || অক্টোবর ২০২৪
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
              <div className="absolute top-0 right-0 h-[890px] border-r-2 border-gray-200"></div>

              <p className="mt-6   text-3xl font-bold border-b-2 pb-3 border-gray-300">
                <div>
                  <span className="">মডার্নিজম ॥</span>
                </div>

                <span>
                  {" "}
                  দ্বীন ও শরীয়তের আধুনিকীকরণের আড়ালে বিকৃতিসাধন : ইতিহাস,
                  প্রেক্ষাপট ও মৌলিক বিচ্যুতি
                </span>
                <div>
                  {" "}
                  <span className="text-sm text-gray-600">
                    হযরত মাওলানা মুফতি তকী উছমানী
                  </span>
                </div>
              </p>

              <p className="pt-4">
                <p className=" text-xl   leading-relaxed text-justify">
                  বিগত শতাব্দীতে ইসলামী বিশ্ব নানা ফেতনা ও অস্থিরতার শিকার
                  হয়েছে। তন্মধ্যে মুসলিমদের জন্য সবচে বিপজ্জনক ও কঠিন পরীক্ষা
                  ছিল মডার্নিজম বা ইসলামের নবরূপায়ণের ফেতনা। এই ফেতনা বিস্তার ও
                  ভয়াবহ রূপ লাভ করার কারণ হল, তা মানবীয় জযবা ও ঝোঁক-প্রবণতাকে
                  প্রবল আকর্ষণ করতে সমর্থ হয়েছিল। নতুবা এই ফেতনার ধ্বজাধারীদের
                  কাছে তেমন কোনো যৌক্তিক দলীল বা দার্শনিক ভিত্তি ছিল না। <br />
                  <br />
                  মডার্নিজমের যথার্থ বিশ্লেষণ করলে এই বাস্তবতা স্পষ্ট হয়ে আসে
                  যে, এর পেছনেÑ (كُلُّ جَدِيْدٍ لَذِيْذٌ) Ñনতুন মানেই মজাদারÑ এই
                  শিশুসুলভ আকর্ষণ কাজ করেছে। নতুন জিনিসের প্রতি সহজেই ঝুঁকে
                  যাওয়ার মানসিকতা যুবকদের মাঝে এর প্রতি বহুমাত্রিক আকর্ষণ তৈরি
                  করেছে। <br />
                  <br />
                  সামনের আলোচনায় আমরা মডার্নিজমের ইতিহাস নিয়ে পর্যালোচনা করব;
                  যাতে আপনি বুঝতে পারবেনÑ এই ইজম কোন্ পরিস্থিতির ভেতর দিয়ে,
                  কীভাবে সৃষ্টি হল? কীভাবে তা ফুলে -ফেঁপে উঠল? কী কী কারণ ও
                  উপাদান (Factors) একে ব্যাপক প্রসার দান করল? এর পেছনে কোন্
                  ধরনের চিন্তা কাজ করেছে? সেই চিন্তাগুলোর বিবর্তনের (Evolution)
                  ফলে এই ইজম কতটি পর্ব পার করেছে? বর্তমানে কোন্ পর্যায়ে আছে?{" "}
                  <br /> <br />
                  এই আলোচনার পর আমরা মডার্নিজমের চিন্তাগুলো খণ্ডন করার মধ্য দিয়ে
                  এর মৌলিক বিচ্যুতিগুলো স্পষ্ট করব। আল্লাহ তাআলাই তাওফীক দেওয়ার
                  মালিক, তিনিই প্রকৃত সাহায্যকারী। তাজাদ্দুদ বা মডার্নিজম বলতে
                  কী বোঝায়? এই আলোচনার পর আমরা মডার্নিজমের চিন্তাগুলো খণ্ডন করার
                  মধ্য দিয়ে এর মৌলিক বিচ্যুতিগুলো স্পষ্ট করব। আল্লাহ তাআলাই
                  তাওফীক দেওয়ার মালিক, তিনিই প্রকৃত সাহায্যকারী। তাজাদ্দুদ বা
                  মডার্নিজম বলতে কী বোঝায়?
                  <br /> <br />
                  সবার আগে তাজাদ্দুদ বা মডার্নিজমের সঠিক অর্থ জেনে নেওয়া উচিত।
                  বহিরাগত কোনো প্রতিক্রিয়া গ্রহণ করে নতুন হয়ে যাওয়াকে আরবী ভাষায়
                  (تجدد) ‘তাজাদ্দুদ’ বলে। শব্দটি মূলত ইংরেজি শব্দ (Modernism)-এর
                  অনুবাদ। উনিশ শতকের সূচনা থেকে প্রাচ্যবিদরা শব্দটি ব্যবহার করে
                  আসছে। এর পারিভাষিক সংজ্ঞা জর্জ টায়ার্ল (George Tyrrel) এভাবে
                  করেছেন, ‘নতুন পরিস্থিতিতে ইতিহাসকেন্দ্রিক যাচাই-বাছাই ও
                  অনুসন্ধানের মাধ্যমে কোনো ধর্মের নতুন বিশ্লেষণের আকাক্সক্ষা বা
                  প্রচেষ্টার নাম তাজাদ্দুদ।’ (Encyclopedia Britannica, Volume
                  15, page 638)
                  <br /> <br />
                  এই সংজ্ঞাকে সংক্ষেপে এভাবে বলা যায়Ñ ‘উদ্ভূত নতুন পরিস্থিতি
                  দ্বারা প্রভাবিত ও পরাভূত হয়ে দ্বীনের মাঝে পরিবর্তন আনার
                  চেষ্টাকে তাজাদ্দুদ বলে।’
                  <br /> <br />
                </p>
                <p className="text-center text-[#E98121] font-bold text-xl">
                  । দুই।
                </p>
                <br />

                <p className="text-xl   leading-relaxed text-justify">
                  মধ্যযুগ থেকে মডার্নিজম নানা রূপে নতুন নতুন পোশাকে হাজির হয়েছে।
                  যখনই নতুন কোনো ‘ফালসাফা’ বা দর্শন কিংবা নতুন কোনো ‘তাহযীব’ বা
                  সভ্যতা জ্ঞান ও গবেষণার পোশাকে দ্বীনের বিপরীতে দাঁড়ায়, তখন
                  অপরিপক্ব চিন্তা ও ভাসাভাসা জ্ঞান রাখেÑ এমন লোকেরা অধিকাংশ সময়
                  সেই পোশাক দেখে মুগ্ধ ও প্রভাবিত হয়ে যায়। কারণ উচ্চকণ্ঠে তোলা
                  নতুন দাবিগুলো দলীলের পরশপাথরে যাচাই করা, এর গভীরে পৌঁছে
                  ভালো-মন্দ খতিয়ে দেখার যোগ্যতা তাদের নেই। তাদের দৃষ্টি
                  মডার্নিটি বা আধুনিকতার আপেক্ষিক জমকালো আয়োজন ও উপস্থাপনে
                  হারিয়ে যায়। <br /> <br />
                  তাদের মধ্যে কেউ তো আধুনিকতার আকর্ষণে পরাভূত হয়ে প্রকাশ্যে অতীত
                  বিশ্বাস ত্যাগ করে। আবার কেউ পুরোনো বিশ্বাসের প্রতি টান থাকার
                  কারণে কিংবা অন্য কোনো সুবিধা বিবেচনায় সরাসরি বিশ্বাস ত্যাগ
                  করার সিদ্ধান্ত নিতে পারে না, কিন্তু নব্য চিন্তা আপন করে নেওয়ার
                  জন্য তার মন ছটফট করতে থাকে। <br /> <br />
                  এই পর্যায়ে তার চিন্তায় একটি দ্বন্দ্ব শুরু হয়। একদিকে তার
                  পুরোনো বিশ্বাসের সাথে স্বভাবজাত একটি সম্পর্ক তাকে এই বিশ্বাসের
                  সাথে যুক্ত থাকতে বাধ্য করে, অপরদিকে নয়া সভ্যতার জৌলুস বা নতুন
                  জীবনদর্শনের চমক তাকে অস্থির করে রাখে। এই সংকট সমাধানে এই ধরনের
                  লোকেরা অতীত বিশ্বাস ও নতুন চিন্তার মাঝে সমঝোতা তৈরির চেষ্টা
                  চালায়। এখান থেকেই জন্ম নেয় ‘মডার্নিজম’।
                  <br /> <br />
                  খেয়াল করুন, আমরা শুরুতে দুটো শব্দ ব্যবহার করেছি। একটি হচ্ছে
                  ‘ফালসাফাÑদর্শন’, আরেকটি হল ‘তাহযীবÑসভ্যতা’। ‘ফালসাফা’ হল
                  আকীদা-বিশ্বাস তথা চিন্তা-ফিকির, আর ‘তাহযীব’ জীবনযাপনের পদ্ধতি
                  তথা আমল ও কর্ম। ইসলামের আকীদা-বিশ্বাসের নিজস্ব গণ্ডি আছে,
                  জীবনযাপনের স্বতন্ত্র কর্মকাঠামো আছে। তাই নতুন কোনো দর্শন যখন
                  ইসলামী দর্শন ও বিশ্বাসের সাথে সাংঘর্ষিক হয় কিংবা কোনো সংস্কৃতি
                  ইসলামী তাহযীবের মুখোমুখি দাঁড়ায়; উভয় ক্ষেত্রেই মডার্নিজম তথা
                  ইসলামী আকীদা ও তাহযীবের বিকৃত কাঠামো দাঁড় করানো কিংবা একে
                  ইসলামবিরুদ্ধ দর্শন ও সংস্কৃতির কাছাকাছি করার চিন্তা জন্ম
                  নেওয়ার আশঙ্কা তৈরি হয়।
                  <br />
                  ইতিহাস বলে, ইসলামকে নব্য চিন্তা ও দর্শন বা বিশ্বাসের সাথে
                  দুইবার এবং বহিরাগত নব্য সংস্কৃতির সাথে তিনবার মোকাবেলা করতে
                  হয়েছে।
                </p>
                <br />
                <p className=" text-center text-[#E98121] font-bold text-xl">
                  । তিন।
                </p>
                <br />
                <div className="text-lg leading-relaxed text-justify">
                  ইসলামকে প্রথমবার নতুন সভ্যতার মোকাবেলা করতে হয়েছিল, যখন
                  ইসলামের বিজয় কেতন রোম ও পারস্যে পৌঁছে যায় এবং সেখানকার
                  অধিবাসীদের সাথে সম্পর্ক স্থাপিত হয়। রোম ও পারস্য উভয় সভ্যতাই
                  সেসময়ের পৃথিবীতে জ্ঞান-বিজ্ঞান, শিল্প-সাহিত্য ও সমাজ-সংস্কৃতির
                  উন্নত ব্যবস্থাপনায় সমৃদ্ধ ছিল। পূর্ব-পশ্চিম সবখানে তাদের
                  সভ্যতার রাজত্ব ছিল। <br /> <br />
                  কিন্তু ইসলামী সভ্যতার সাথে যখন সংঘাত হল, তখন মুসলিমরা ছিল
                  অমিততেজা, বলবান, জীবনের উদ্যম ও কর্মচাঞ্চল্যে ভরপুর। উন্নয়ন ও
                  অগ্রগতির নানাবিধ গুণাবলি তাদের মাঝে ছিল পূর্ণ মাত্রায়।
                  মুসলিমদের হৃদয়ে গোটা পৃথিবী জয় করার আকাক্সক্ষা ছিল প্রবল। তারা
                  দৃঢ়ভাবে বিশ্বাস করতেন, যদি পৃথিবীতে কোনো সঠিক আদর্শ থাকে, তবে
                  তা ইসলাম। যদি কোনো পরিশীলিত, উন্নত ও শ্রেষ্ঠ সভ্যতা থাকে, তাও
                  ইসলাম। ইসলামের সভ্যতার সামনে অন্য কোনো সভ্যতা টিকতে পারে না,
                  ইসলামের আদর্শের সামনে অন্য কোনো মতবাদ টিকে থাকতে পারে না।{" "}
                  <br /> <br />
                  এই গভীর আস্থা ও দৃঢ় বিশ্বাস তাদের মন থেকে সব ধরনের
                  হীনম্মন্যতার অনুভূতি দূর করে দিয়েছিল। তারা পৃথিবীতে একটি
                  উদীয়মান বিজয়ী জাতি হিসেবে নিজেদের প্রতিষ্ঠিত করেছিলেন আর তাদের
                  প্রতিদ্বন্দ্বী সব জাতি ছিল পরাজিত ও অধীন। মুসলিমরা আত্মবিশ্বাস
                  এবং সঠিক আত্মপরিচয় নিয়ে প্রতিদ্বন্দ্বী সভ্যতার মোকাবেলা
                  করেছিলেন। তারা মানসিক দাসত্ব কিংবা হীনম্মন্যতায় ভোগেননি।
                  <br /> <br />
                  হাঁ, প্রয়োজন ও পরিস্থিতির দাবিতে তারা ভিন্ন সভ্যতা থেকে বৈধ
                  সীমারেখায় উপকৃত হয়েছিলেন। যা তারা প্রয়োজনীয় মনে করেছিলেন,
                  প্রথমে সেটাকে ইসলামী ছাঁচে ঢেলে উপযুক্ত পরিবর্তন করেছেন, তারপর
                  যথাযথ ব্যবহার করেছেন। তবে তারা স্বাধীন ও শক্তিশালী ছিলেন বলে
                  এই গ্রহণ ও ব্যবহার মুসলিম সমাজের আত্মিক ও নৈতিক আদর্শে কোনো
                  প্রভাব ফেলতে পারেনি। উদাহরণস্বরূপ, তারা প্রতিদ্বন্দ্বী সভ্যতা
                  থেকে যুদ্ধের কৌশল শিখেছিলেন, শিল্প ও বাণিজ্যে তাদের কার্যকর
                  উপায়গুলো গ্রহণ করেছিলেন, কিন্তু সেগুলোকে নিরেট ইসলামী আদর্শ
                  অনুযায়ী রূপান্তরিত করে বৈধ উদ্দেশ্যে ব্যবহার করেছিলেন। তারা
                  কোনো বিষয়কে ইসলামের সর্বজনস্বীকৃত বাস্তবতা পরিপন্থী মনে করলে
                  তা পরিবর্তন করে দিয়েছিলেন, কিন্তু ইসলামী শিক্ষায় কোনো পরিবর্তন
                  আনতে রাজি হননি। এই কারণেই সভ্যতার সংঘাতের এই পর্বে ‘তাজাদ্দুদ’
                  বা দ্বীন ও শরীয়তে পরিবর্তন এনে নব্যরূপ দাঁড় করানোর কোনো
                  অপচেষ্টা লক্ষ করা যায়নি।
                  <br /> <br />
                  ইসলাম সভ্যতার সংঘাতের দ্বিতীয় অভিজ্ঞতা লাভ করে যখন সপ্তম
                  শতাব্দীতে তাতারিরা ইসলামী বিশ্বের কেন্দ্রগুলো দখল করে নেয় এবং
                  মুসলিমরা রাজনৈতিকভাবে তাদের অধীন হয়ে পড়ে। সেই সময়ে মুসলিমরা
                  বিজয়ী না থেকে পরাজিত এবং শাসক না হয়ে শাসিত হয়ে পড়লেও,
                  সৌভাগ্যক্রমে এই পরাজয় ছিল কেবলমাত্র রাজনৈতিক। তাদের সেই সময় যে
                  বিজয়ী শক্তির মুখোমুখি হতে হয়েছিল, তারা ছিল জ্ঞান-বিজ্ঞানে
                  দীন-হীন। তাদের কাছে না কোনো দর্শন ছিল, না কোনো সভ্যতা। তারা
                  ছিল মরুচারী যুদ্ধবাজ এক জাতি, যারা কখনো সভ্যতার ছোঁয়া পায়নি।
                  তাই এখানে বিজিত জাতি বিজয়ীদের প্রভাব গ্রহণ করার বদলে বিজয়ীরাই
                  বিজিতদের প্রভাব গ্রহণ করেছিল। তাতারিরা রাজনৈতিকভাবে বিজয়ী
                  হলেও, কিছু সময়ের মধ্যেই তারা পুরোপুরি ইসলামের ছায়াতলে আসে।
                  এমনকি তারা ইসলামের শক্তিশালী ধারক-বাহক হয়ে ওঠে।
                  <br />
                </div>
                <p className="text-lg text-center py-3">
                  پاسبا ں مل گئےكعبے كو صنم خانےسے <br />
                  <br />
                  (মূর্তিঘর থেকেই কা‘বার রক্ষক উঠে দাঁড়াল)
                </p>
                <br />
                <div className="text-lg leading-relaxed text-justify">
                  ফলে সভ্যতার এই দ্বিতীয় সংঘাতও ইসলামের সুন্দর কাঠামোর কোনো
                  ক্ষতি করতে পারেনি এবং দ্বীন সংস্কার ও মেরামত করার চিন্তা তৈরি
                  হয়নি। <br />
                  এখন আমরা সভ্যতার সংঘাতের তৃতীয় পর্ব পার করছি। পুরো বিশ্বে
                  পশ্চিমা নতুন সভ্যতা ইসলামী জীবনযাত্রার সঙ্গে সংঘাতে লিপ্ত। তবে
                  আমাদের বদ আমলের কারণে এই তৃতীয় অভিজ্ঞতা আগের দুটি অভিজ্ঞতা
                  থেকে সম্পূর্ণ আলাদা। <br />
                  <br />
                  এখন আমাদের প্রতিপক্ষ রাজনৈতিকভাবে আমাদের চেয়ে এগিয়ে তো বটেই,
                  তাদের কাছে চমকপ্রদ ও আকর্ষণীয় এক সভ্যতাও রয়েছে। সেই সভ্যতার
                  পেছনে Ñসঠিক হোক বা ভুলÑ একটি দর্শনও আছে। অন্যদিকে আমাদের মধ্যে
                  সেই আত্মবিশ্বাস, সেই ঈমান ও ইয়াকীন নেই, যা আমাদের
                  পূর্বপুরুষদের ছিল। আমাদের মধ্যে নেই সেই কর্মস্পৃহা, যা আমাদের
                  পূর্বপুরুষদের প্রেরণা জোগাত। আমাদের নেই সেই শক্তিশালী তলোয়ার,
                  যার ঝনঝনানি একসময় কায়সার ও কিসরার মসনদ কাঁপিয়ে দিয়েছিল এবং
                  তাওহীদের ধ্বনিতে পৃথিবী মুখরিত করেছিল।
                  <br />
                  <br />
                  ফলস্বরূপ পশ্চিমা সভ্যতার সঙ্গে লড়াইয়ে আমাদের যুবসমাজ
                  মানসিকভাবে বিপর্যস্ত। তাদের সাহস নিম্নগামী, মনোবল ভেঙে গেছে,
                  উদ্দীপনা নিস্তেজ হয়ে গেছে। মন ও মস্তিষ্ক এমন হীনম্মন্যতায়
                  ভুগছে, যা কোনো জাতির পতনের সর্বশেষ আলামত বিবেচিত হয়।
                  <br />
                  <br />
                  হীনম্মন্যতার এই অনুভূতি প্রায় এক শতাব্দী আগে দ্বীন ও শরীয়তের
                  নবরূপ দাঁড় করানোর চিন্তা জন্ম দিয়েছিল, যা সময়ের সঙ্গে সঙ্গে
                  গোটা মুসলিম বিশ্বে ছেয়ে গেছে। এই প্রবন্ধে আমরা সেই নব্য চিন্তা
                  সম্পর্কে আলোকপাত করতে চাই।
                  <br />
                  <p className=" text-center text-[#E98121] pt-3 font-bold text-xl">
                    । চার।
                  </p>
                </div>
                <br />
                <p className=" text-lg leading-relaxed ">
                  আমরা আগেই বলেছি, দুটি দর্শনের সংঘাত হলে মডার্নিজম জন্ম নেওয়ার
                  শঙ্কা তৈরি হয়। বৈশ্বিকভাবে ইসলাম দুইবার এই ধরনের সংঘাতের
                  মুখোমুখি হয়। প্রথমবার যখন আব্বাসী আমলে গ্রিক দর্শন আরবী ভাষায়
                  অনুবাদ করা হয় এবং তা বুদ্ধিজীবী শ্রেণির আগ্রহের বিষয়ে পরিণত
                  হয়। <br />
                  <br />
                  এই দর্শন যুক্তির মোড়কে ইসলামের মুখোমুখি অবস্থান নেয়। এর সত্তা
                  ও মনোভাব ছিল ইসলামের সম্পূর্ণ বিপরীত। যারা ইসলামের মূল শিক্ষা
                  ও দর্শনকে গভীরভাবে বুঝতে পারেননি, তারা গ্রিক দর্শনের প্রতি
                  আকৃষ্ট হন। কেউ কেউ এই নতুন দর্শনের প্রতি অতিমাত্রায় মোহাবিষ্ট
                  হয়ে সরাসরি ইসলাম ত্যাগ করেন।
                  <br />
                  <br />
                  কিছু লোকের ইসলাম ত্যাগ করার দুঃসাহস হয়নি বটে; কিন্তু তারা
                  মানসিক দোলাচলে ভুগতে শুরু করেন। এই মানসিক দ্বন্দ্ব থেকে বেরিয়ে
                  আসতে তারা যে পথ বেছে নেন, তা-ই ‘তাজাদ্দুদ’ বা মডার্নিজমের
                  উদ্ভব ঘটায়। তখন গ্রিক দর্শন এবং ইসলামের মধ্যে সমঝোতা তৈরির
                  চেষ্টা শুরু হয়। গ্রিক দর্শনের আলোকে ইসলামের বিরুদ্ধে যেসব
                  অভিযোগ আরোপিত হয়, তা থেকে বাঁচতে অনেকেই গ্রিক দর্শনের উন্মুক্ত
                  সমালোচনার পরিবর্তে স্বয়ং ইসলামী দর্শন ও বিশ্বাস মেরামত ও
                  সংস্কার করা শুরু করেন। ফলে মুতাযিলা, জাবরিয়া, কাদরিয়ার মতো
                  বিভিন্ন ‘কালামী’ বা ধর্মতাত্ত্বিক গোষ্ঠীর সৃষ্টি হয়।
                  <br />
                  <br />
                  তবে আল্লাহর মনোনীত চিরস্থায়ী দ্বীন এই সাময়িক হাঙ্গামায় বিকৃত
                  হওয়ার মতো ছিল না। সেই সময়ের উলামায়ে কেরাম ছিলেন অত্যন্ত ধীমান,
                  দৃঢ়সংকল্প এবং উঁচু মানসিকতার অধিকারী। তারা পূর্ণ আত্মবিশ্বাস
                  নিয়ে গ্রিক দর্শনকে সমালোচনার দৃষ্টিতে পরীক্ষা করেন, এর
                  নীতিমালা ও মনস্তত্ত্ব গভীরভাবে বোঝেন এবং একে একে এর সকল
                  ভ্রান্ত ধারণা খণ্ডন করেন। তাঁদের এই প্রচেষ্টার সুফল আজও আমাদের
                  সামনে ‘ইলমুল কালাম’ হিসেবে উপস্থিত আছে। ইমাম রাযী
                  রাহিমাহুল্লাহর ‘তাফসীরে কাবীর’, ইমাম গাযালী রাহিমাহুল্লাহ
                  লিখিত ‘তাহাফুতুল ফালাসিফাহ’ সেই অমূল্য কাজগুলোর অন্যতম, যা
                  গ্রিক দর্শনের ভিতে কাঁপন ধরিয়ে দিয়েছিল।
                  <br />
                  <br />
                  কিছুদিন পর্যন্ত এই দর্শন রাজনৈতিক ক্ষমতা ও প্রভাবের জোরে টিকে
                  ছিল, কিন্তু ক্ষমতার পৃষ্ঠপোষকতা হারালে এর সব যুক্তির মোহ ভেঙে
                  যায়। এই দর্শন যে গোষ্ঠীগুলোকে জন্ম দিয়েছিল, তারা আপনা আপনি
                  বিলুপ্ত হয়ে যায়। আজ ‘মুতাযিলা’, ‘জাবরিয়া’, ‘কাদরিয়া’ এবং
                  ‘জাহমিয়া’র নাম ও তাদের কর্মকাণ্ড ‘কিতাবুল মিলাল ওয়ান নিহাল’
                  (বিভিন্ন ধর্ম ও মতবাদ নিয়ে লিখিত বইয়ে) পাওয়া যায়, তবে বাস্তবে
                  তাদের কোনো অস্তিত্ব নেই।
                  <br />
                  <br />
                  এটি ছিল ইসলামী দর্শনের সঙ্গে ভিন্ন কোনো দর্শনের প্রথম লড়াই,
                  যেখানে আমাদের পূর্বসূরিদের আলোকিত চিন্তা, দূরদৃষ্টি,
                  পরিস্থিতির সঠিক উপলব্ধি ও সময়োচিত পদক্ষেপ গ্রহণ করার কারণে
                  ইসলাম বিজয়ী হয়েছিল। এরপর ইসলামী দুনিয়ার বিভিন্ন স্থানে
                  আঞ্চলিকভাবে মডার্নিজমের চিন্তা গড়ে ওঠে, কিন্তু সেগুলো বৈশ্বিক
                  রূপ নিতে পারেনি। যেমন ভারতবর্ষে আকবরের সময়ে ‘দ্বীনে ইলাহী’
                  নামে একটি ফেতনার উদ্ভব হয়েছিল। আবুল ফযল ও ফয়যীর মতো লোকেরা
                  ‘দ্বীনে ইলাহী’কে ইসলামসম্মত করার প্রচেষ্টা চালিয়েছিল, কিন্তু
                  হযরত মুজাদ্দিদে আলফে সানী রাহিমাহুল্লাহর কঠোর মেহনতে সেই
                  ফেতনারও অবসান ঘটে। আজ আমরা একই ধরনের আরেকটি বৈশ্বিক
                  চ্যালেঞ্জের মুখোমুখি, যা পশ্চিমা দর্শন ও ইসলামের সংঘাতে সৃষ্টি
                  হয়েছে। আজকের উন্নত পশ্চিমা জাতিগুলোরও দর্শন ও সংস্কৃতি রয়েছে,
                  যা ইসলামী বিশ্বাস ও সভ্যতার সঙ্গে সংঘাতে জড়াচ্ছে।
                  <br />
                  <br />
                  এই সংঘাত থেকে আবারো মডার্নিজম উঠে আসছে। হীনম্মন্যতায় আক্রান্ত
                  মানুষের একটি দল এবারও পশ্চিমা সভ্যতাকে ইসলামী সভ্যতার সঙ্গে
                  এবং পশ্চিমা দর্শনকে ইসলামী দর্শনের সঙ্গে মিলিয়ে ফেলার চেষ্টা
                  করছে। তারা ইসলামের এমন এক সংস্করণ তৈরি করতে চায়, যা পশ্চিমা
                  জীবনযাত্রার সঙ্গে সামঞ্জস্যপূর্ণ হবে, যদিও এই লক্ষ্য পূরণে
                  মুহাম্মাদ সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম আনীত দ্বীন থেকে যত
                  দূরেই যাওয়া হোক না কেন। মডার্নিজমের এই পরিবর্তনের ঢেউ আজ
                  মুসলিম বিশ্বের প্রতিটি প্রান্তে ছড়িয়ে পড়েছে, মুসলিম সমাজের
                  কোনো অঞ্চল এর কুপ্রভাব থেকে মুক্ত নয়।
                  <br />
                  <br />
                  পশ্চিমা দর্শন ও সভ্যতার দাবি অনুযায়ী ইসলামকে কাটছাঁট করা ও
                  বিকৃত করার এই যে নতুন চেষ্টা মডার্নিজম করছে, তা আগের সব
                  অপপ্রয়াসের চেয়ে বেশি বিপজ্জনক; কিন্তু সেটা এই কারণে নয় যে, এর
                  তাত্ত্বিক ভিত্তি ওয়াসিল ইবনে আতা কিংবা জারুল্লাহ যামাখশারির
                  মুতাযিলী মতবাদের চেয়ে শক্তিশালী; বরং এই কারণে যে, আজ আমাদের
                  মধ্যে আবুল হাসান ইসফারাইনী বা ফখরুদ্দীন রাযীর মতো কেউ নেই,
                  যিনি আধুনিক দর্শনের গভীরে প্রবেশ করে এর যুক্তির মোহময় জাল ভেঙে
                  দিতে পারেন, এর ভ্রান্তি ও অসারতা উন্মোচন করতে পারেন, যিনি এই
                  দর্শনের প্রতিটি দিক খুলে খুলে মানুষের সামনে উপস্থাপন করতে
                  পারেন, যাতে সবাই তথাকথিত ‘যুক্তি’ ও ‘যৌক্তিকতা’র পেছনের
                  বাস্তবতা বুঝতে পারে।
                  <br />
                  <br />
                  সন্দেহ নেই, আধুনিক পশ্চিমা সভ্যতা খুবই বিপজ্জনক, কিন্তু সেটা
                  এই কারণে নয় যে, এটি প্রাচীন পারস্য বা রোম সভ্যতার চেয়ে বেশি
                  শক্তিশালী বা হৃদয়গ্রাহী; বরং এটি বিপজ্জনক হওয়ার কারণÑ আজ
                  আমাদের মধ্যে এমন কেউ নেই, যিনি সা‘দ বিন আবি ওয়াক্কাস
                  রাযিয়াল্লাহু আনহুর মতো আত্মবিশ্বাস নিয়ে পশ্চিমা সভ্যতার
                  অলংকারপূর্ণ পর্দা সরিয়ে ভেতরকার দুর্বলতাগুলো প্রকাশ করতে
                  পারেন।
                  <br />
                  <br />
                  এই প্রবন্ধের উদ্দেশ্য মডার্নিজমের আসল চেহারা তুলে ধরা, যাতে
                  আপনি এর প্রকৃত পটভূমি বুঝতে পারেন এবং এর দুর্বলতার জায়গা খুঁজে
                  বের করতে পারেন। আপনাদের মধ্যে কোনো ভাগ্যবান ব্যক্তিকে আল্লাহ
                  তাআলা তাওফীক দিন, যিনি এই ফেতনার বিরুদ্ধে লড়াই করতে সমর্থ
                  হবেন।
                  <br />
                </p>
                <br />
                <p className="text-center text-[#E98121]  font-bold text-xl">
                  রাজনৈতিক প্রেক্ষাপট
                </p>
                <br />
                <div className="text-lg leading-relaxed text-justify">
                  মডার্নিজম কোন্ পরিস্থিতিতে জন্ম নিয়েছে তা ধরতে হলে আজ থেকে
                  প্রায় এক শ বছর আগের সময় কল্পনা করুন। <br /> <br />
                  এটি ছিল এমন যুগ, যখন মুসলিম জাতি শতাব্দীর পর শতাব্দী ধরে
                  পৃথিবীতে গৌরবের সঙ্গে রাজত্ব করার পর পতনের চূড়ান্ত সীমায়
                  পৌঁছে গিয়েছিল। মুসলিম শাসকরা বিলাসিতায় মত্ত হয়ে যাওয়ায় তাদের
                  রাজনৈতিক প্রভাব ম্লান হয়ে যাচ্ছিল। বিশাল বিশাল সাম্রাজ্য
                  মুসলিমদের হাত থেকে ধীরে ধীরে ছিনিয়ে নেওয়া হচ্ছিল।
                  <br /> <br />
                  অন্যদিকে জনসাধারণের আরামপ্রিয়তা ও অলসতার কারণে জ্ঞান অর্জনের
                  সেই তীব্র আগ্রহ হারিয়ে যাচ্ছিল, যা একসময় পৃথিবীকে জীবনধারণ এবং
                  জীবন উৎসর্গ করার তরীকা শিখিয়েছিল। সর্বত্র একটি পতনশীল অবস্থা
                  বিরাজ করছিল। মুসলিমরা ক্রমশ ডুবে যাচ্ছিল। তাদের দেহ, মন ও
                  চিন্তাশক্তি গভীর ক্লান্তিতে ভারী হয়ে ছিল। তারা আর কিছু করতে
                  সক্ষম হচ্ছিল না।
                  <br /> <br />
                  অপরদিকে পশ্চিমা জাতিগুলো, যারা অন্ধকারে ঘুমিয়ে ছিল, হঠাৎ জেগে
                  উঠল। তারা দেখল, মুসলিম শক্তি দুর্বল হয়ে পড়েছে এবং তাদের সামনে
                  পুরো ময়দান খালি পড়ে আছে। তাদের মধ্যে দুনিয়া জয় করার এক অদম্য
                  ইচ্ছা জাগল, মুসলিমদের পতন সেই ইচ্ছাকে আরো তীব্র করে তুলল,
                  তাদের গতিকে আরো বেগবান করল। তারা পূর্ণ শক্তি ও উদ্যম নিয়ে
                  এগিয়ে গেল, আর দ্রুতই গোটা পৃথিবীতে আধিপত্য বিস্তার করল। অল্প
                  সময়ের ব্যবধানে পৃথিবীর মানচিত্রই বদলে গেল। রাজনীতি থেকে শুরু
                  করে শিল্প ও জ্ঞান-বিজ্ঞান সবকিছুতেই তারা প্রভাব বিস্তার করতে
                  লাগল।
                  <br /> <br />
                  এই পর্যায়ে, যখন মুসলিমরা তাদের পতনের চরম সীমায় পৌঁছে গিয়েছিল,
                  তারা একসঙ্গে দুটি ফ্রন্টে পশ্চিমাদের তীব্র আক্রমণের শিকার হল।
                  একদিকে ছিল পশ্চিমের বিজয়ের নেশায় উন্মত্ত তরবারি, যা কৌশল ও
                  ধূর্ততার আড়ালে ক্রমাগত এগিয়ে আসছিল। অন্যদিকে ছিল তাদের কলম, যা
                  নিরন্তর ইসলামী আক্বীদা-আমল ও চিন্তা-চেতনার বিরুদ্ধে বিষ
                  ছড়াচ্ছিল।
                  <br /> <br />
                  যদি মুসলিমদের কাছে প্রথম যুগের ঈমান-ইয়াকীন, সাহস ও কর্মশক্তি
                  থাকত, তাহলে এই দুটি ফ্রন্টে লড়াই করা তাদের জন্য কঠিন হত না।
                  কিন্তু জাতির বড় অংশ বিলাসিতা ও আরামপ্রিয়তায় অভ্যস্ত হওয়ার দরুন
                  পূর্বপুরুষদের সেই মহৎ উত্তরাধিকার হারিয়ে ফেলেছিল। তাদের
                  চিন্তা-চেতনা, দেহ ও আত্মার সেই শক্তি হারিয়ে গিয়েছিল, যা এই
                  চ্যালেঞ্জগুলোর মুখোমুখি দাঁড়াতে পারত। ফলে তারা প্রতিটি
                  ক্ষেত্রেই পরাজিত হতে থাকল।
                  <br /> <br />
                  এই সময়ে নতুন প্রজন্ম যখন চারপাশে শুধু পশ্চিমাদের বিজয়ই দেখতে
                  পেল, পশ্চিমা সংস্কৃতি ও শক্তির ভীতি তাদের গ্রাস করল, পরাজিত
                  মানসিকতা তাদের ছেয়ে ফেলল।
                  <br /> <br />
                  তবে মুসলিমদের হৃদয়ে তখনো আত্মমর্যাদার একটি চাপা স্ফুলিঙ্গ ছিল।
                  মাঝে মাঝে তাদের মনে প্রশ্ন উদয় হত; আমরা কি সেই মহান
                  পূর্বপুরুষদের সন্তান নই? আমাদের আসল স্থান কি এত নিচু, নাকি সেই
                  উচ্চতায়, যা নিজেরাই খুইয়ে ফেলেছি?
                  <br /> <br />
                  যদিও মুসলিমরা অনেক ক্ষেত্রে দ্বীন থেকে দূরে সরে গিয়েছিল, তবুও
                  মনের গহিনে এখনো কিছুটা গর্ব ছিল নিজেদের দ্বীন ও উজ্জ্বল অতীত
                  নিয়ে। মাঝে মাঝে তাদের মধ্যে হারানো সম্মান ফিরে পাওয়ার তীব্র
                  ইচ্ছা জেগে উঠত।
                  <br /> <br />
                  পশ্চিমারা আত্মসম্মানের এই চাপা স্ফুলিঙ্গকেও বিপজ্জনক মনে করত।
                  তারা ভয় পেত যে, একদিন এই স্ফুলিঙ্গ থেকে তৈরি হওয়া অগ্নিশিখা
                  দাবানলে রূপ নিয়ে তাদের শক্তি ও ক্ষমতার মসনদ পুড়িয়ে ছারখার করে
                  দিতে পারে। তাই খুব ধূর্ততার সঙ্গে তারা আরেকটি বড় আঘাত হানল, যা
                  মুসলিমদের অবশিষ্ট শক্তিকে ক্ষয় করার জন্য যথেষ্ট ছিল।
                  <br /> <br />
                  এই আঘাত ছিল নতুন শিক্ষাব্যবস্থা, যা অত্যন্ত সতর্কচিত্তে
                  মুসলিমদের সমব্যথী সেজে তাদের ওপর চাপিয়ে দেওয়া হয়েছিল। এই
                  শিক্ষাব্যবস্থায় বেছে বেছে এমন বিষয়গুলো শেখানো শুরু হল, যা
                  ইসলামের প্রতি ঘৃণা ও বিরক্তি জন্ম দেয়। প্রতিটি ধাপে এমন
                  ব্যবস্থা নেওয়া হয়েছিল, যেন মুসলিমরা নিজস্ব চিন্তা-বিশ্বাস,
                  ইতিহাস ও ঐতিহ্য এবং পূর্বসূরিদের গৌরবময় কীর্তি ও অবদান চর্চা
                  থেকে ক্রমশ দূরে সরে যায়, পশ্চিমা চিন্তাধারা তাদের মনে গভীর
                  প্রভাব বিস্তার করে, পশ্চিমা চিন্তকদের শ্রেষ্ঠত্ব তাদের হৃদয়ে
                  স্থায়ী আসন গেড়ে বসে।
                  <br /> <br />
                  এই কূটকৌশল মুসলিমদের আত্মবিশ্বাসের বাকি অংশটুকুও ভেঙে দিল।
                  আসলে এই পশ্চিমা শিক্ষাব্যবস্থা ছিল একধরনের নীরব
                  ‘প্রজন্ম-হত্যা’ (نسل كشى), যার কেন্দ্র ছিল স্কুল-কলেজ নামের
                  আড়ালে ইসলামী বিশ্বে ছড়িয়ে থাকা প্রতিষ্ঠানগুলো; মুসলিম সন্তানরা
                  সেখানে সানন্দে হৃদয় ও অন্তর অপারেশন করিয়ে নিচ্ছে।
                  <br /> <br />
                  এই শিক্ষাব্যবস্থা থেকে যে তরুণ প্রজন্ম বেরিয়ে এল, তারা একদিকে
                  চোখের সামনে পশ্চিমাদের শ্রেষ্ঠত্ব দেখছিল, অন্যদিকে দীর্ঘ
                  শিক্ষাজীবনে তাদের চিন্তা পশ্চিমা ছাঁচে গড়া হয়েছিল। তারা
                  মনেপ্রাণে বিশ্বাস করতে লাগল যে, পশ্চিমা সভ্যতা শ্রেষ্ঠ আর
                  প্রাচ্যের সভ্যতা নিকৃষ্ট।
                  <br /> <br />
                  তাদের মনে কখনোই উল্টোটা, অর্থাৎ প্রাচ্যের শ্রেষ্ঠত্ব এবং
                  পশ্চিমের নিকৃষ্ট হওয়ার চিন্তা গড়ে ওঠেনি। তা গড়ে উঠবেই বা
                  কীভাবে? শিক্ষকরা তো অসংখ্য পশ্চিমা দার্শনিক, বিজ্ঞানী এবং
                  বিজেতাদের নাম ও অবদান তাদেরকে মুখস্থ করিয়েছিলেন, কিন্তু কোনো
                  মুসলিম দার্শনিক, সংস্কারক বা বিজেতার নাম তাদের জানা হয়নি; যারা
                  তাদেরকে স্মরণ করিয়ে দেবেÑ
                  <br />
                  <p className="text-center text-lg py-4">
                    وہ کیا گردوں تھا تو جس کا ہے اک ٹوٹا ہوا تارا
                  </p>
                  <p className="text-lg leading-relaxed text-justify">
                    ‘আসমানের ঝরে পড়া সে তারাগুলোর তুমিও একটি তারা ছিলে’ <br />{" "}
                    <br />
                    পশ্চিমারা এমন আয়োজন করেছে, যদি মুসলিম শিক্ষার্থীর মনে
                    পূর্বপুরুষদের নাম থেকেও থাকে, তবে তাঁদের কীর্তি যেন
                    বিকৃতভাবে পৌঁছে। আর যারা তাদের সঠিক কৃতিত্ব জানত, তাদের কাছে
                    সেটির কোনো মূল্য ছিল না, কারণ পশ্চিমা জীবনদর্শন ইতিমধ্যেই
                    তাদের মন-মানস বদলে দিয়েছিল।
                    <br /> <br />
                    এর ফল যা হওয়ার ছিল, তা-ই হল। তাদের মনে এই ধারণা বদ্ধমূল হয়ে
                    গেল যে, আমাদের বিপর্যয় ও পতনের মূল কারণ সেই পুরোনো সংস্কৃতি
                    ও সমাজব্যবস্থা, যা আমরা তেরো শতক যাবৎ ধরে রেখেছি। এই পতন
                    থেকে আশু মুক্তি পেতে চাইলে আমাদের বিনা দ্বিধা ও সমালোচনায়
                    পশ্চিমা জীবনধারার সকল রীতিনীতি অবলম্বন করা চাই। উন্নতি
                    এখানেই নিহিত, এটিই সময়ের একমাত্র দাবি।
                    <br /> <br />
                    এই বিপজ্জনক চিন্তা হাজারো মুসলিমকে পশ্চিমা সংস্কৃতির দিকে
                    টেনেছে এবং এক পর্যায়ে অবিশ্বাসী নাস্তিক বানিয়ে ছেড়েছে।
                    কিন্তু যারা ধর্মের প্রতি কোনো মাত্রায় টানের কারণে বা
                    চারপাশের লোকজনের সমালোচনার ভয়ে ইসলামকে প্রকাশ্যে ত্যাগ করতে
                    পারেনি, তারা মানসিক দ্বন্দ্বে আটকা পড়েছে। এই দ্বন্দ্ব
                    পরিস্থিতির অপরিহার্য অংশ ছিল। কারণ একদিকে তাদের মনে নতুন
                    সংস্কৃতির প্রতি আকর্ষণ কাজ করছিল, অন্যদিকে তাদের বসবাস ছিল
                    মুসলিম সমাজে। তাদের চারপাশের মানুষ মুসলিম ছিল। তারা যে দেশে
                    জন্ম নিয়েছে, সেটিও মুসলিমপ্রধান দেশ ছিল। তাই নতুন সংস্কৃতি
                    গ্রহণ করতে গিয়ে তারা এই সমাজ ত্যাগ করতে পারছিল না।
                    <br /> <br />
                    এই দ্বন্দ্ব থেকে মুক্তি পেতে তারা দ্বীন সংস্কার করার নামে
                    দ্বীনকে বদলে দেওয়ার অপচেষ্টা শুরু করল এবং পূর্ণ শক্তি ব্যায়
                    করে প্রমাণ করতে চাইল যে, পশ্চিমা সমাজধারা ইসলাম থেকে খুব
                    একটা ভিন্ন নয়। এই উদ্দেশ্য হাসিলে তাদের সংস্কার চিন্তা চারটি
                    পর্ব অতিক্রম করে, যা বিগত এক শতাব্দীর ইতিহাসে পর্যায়ক্রমে
                    পরিলক্ষিত হতে থাকে।
                    <br /> <br />
                    (চলবে ইনশাআল্লাহ) <br />
                    [হযরত শাইখুল ইসলাম হাফিযাহুল্লাহ লিখিত ‘ইসলাম আওর জিদ্দাত
                    পসন্দী’ রিসালার ২০২২ সনে প্রকাশিত নতুন সংস্করণে যুক্ত]
                  </p>
                  <br />
                  <p className="text-center text-lg py-4">
                    تحريك تجدد كا پس منظر اور اس كى فكرى بنياديں
                  </p>
                  <p className="text-lg leading-relaxed text-justify">
                    শীর্ষক প্রবন্ধের অনুবাদ। <br />
                    <br />
                    হযরত প্রবন্ধটি ২৪শে রবিউল আখির ১৩৮৪ হিজরী মোতাবেক ১৯৬৪ সালের
                    পহেলা সেপ্টেম্বর বৃহস্পতিবার দারুল উলূম করাচিতে
                    ছাত্র-উস্তাযদের একটি মজলিসে পেশ করেছিলেন।
                    <br />
                    <br />
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
                {headings.map((article, i) => (
                  <h2 className="text-2xl hover:text-green-600 text-gray-700 font-bold border-b border-yellow-500 flex-grow mb-2 pb-[10px]">
                    <Link key={i} to={article.path}>
                      {article.name}
                    </Link>
                  </h2>
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
                    <h2 className="text-2xl  hover:text-green-600 text-gray-700 font-bold border-b border-yellow-500 flex-grow mb-2 pb-[10px]">
                      {current.map((article, i) => (
                        <Link key={i} to={article.path}>
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
                        coverOne,
                        coverTwo,
                        coverThree,
                        coverFour,
                        coverFive,
                        coverSix,
                      ].map((cover, index) => (
                        <div key={index} className="relative group ">
                          {/* Image */}
                          <img
                            src={cover}
                            alt={`Cover ${index + 1}`}
                            className="w-full h-auto"
                          />

                          {/* Overlay */}
                          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                        </div>
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

export default Brave;
