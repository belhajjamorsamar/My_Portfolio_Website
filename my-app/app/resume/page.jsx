"use client"
import {motion} from "framer-motion";
import { Title } from "@radix-ui/react-dialog";
import { FaHtml5, FaCss3, FaJs , FaReact , FaNodeJs , FaPhp, FaPython} from "react-icons/fa";
import {SiTailwindcss, SiNextdotjs ,SiLaravel , SiMaterialdesign , SiNumpy ,SiMatplotlip} from "react-icons/si"


//about data
const about={
  Title: "About me" ,
  description :"Welcome to my Portfolio website !I am currently a second-year Master's student in Data Science research and a freelance backend web developer. I hold a Bachelor's degree in Computer Science, specialized in Big Data and Data Analysis. I am passionate about Data Science, including artificial intelligence and its subfields, as well as data analysis and visualization. My goal is to transform data into valuable insights and provide innovative solutions through Business Intelligence. I am committed to constantly exploring new technologies and contributing to projects that enhance the user experience."
, info:[
  {
    fieldName: "Name", 
    fieldValue: "Samar BELHADJ AMOR"
  },
  {
    fieldName: "Phone", 
    fieldValue: "(+216) 55 114 715 "
  },
  {
    fieldName: "Experience", 
    fieldValue: " +1 years"
  },
  {
    fieldName: "Nationality", 
    fieldValue: "Tunisian"
  },
  {
    fieldName: "Email", 
    fieldValue: "Belhajjamorsamar@gmail.com"
  },
  {
    fieldName: "Freelance", 
    fieldValue: "Available"
  },
  {
    fieldName: "Language", 
    fieldValue: "Arabic, Frensh,English"
  },

]


};

//EXPERIENCE DATA
 const experience={
  icon:"/assets/resume/badge.svg",
  title:"My experience",
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
items:[
  {
    company: "Wenty .",
    Position:" Freelance Web Developer",
    Duration:"2023 - Present"
  },

  {
    company: "ISS4U .",
    Position:"Data scientist & Web Developer",
    Duration:"5 month (Intership)"
  },
  {
    company: "Designet web agency .",
    Position:"laravel Developer",
    Duration:"Summer 2022"
  },
],
 };

//Education DATA
const Education={
  icon:"/assets/resume/cap.svg",
  title:"My Education",
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
items:[
  {
    Institution: "Higher Institute of Computer Science and Multimedia of Sfax .",
    Degree: "Master's Research in Data Science",
    Duration:"2023 - Present"
  },

  {
    Institution: "Higher Institute of Computer Science and Multimedia of Sfax .",
    Degree: "Bachelor's Degree in Computer Science",
    Duration:"2020 - 2023"
  },
  
],
 };


//Skils Data 
 const skills ={
  title : "My skills",
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
 skillslist:[
  {
    icon : <FaHtml5/>,
    name: "Html 5",
  },

  {
    icon : <FaHtml5/>,
    name: "Html 5",
  },
  {
    icon : <FaCss3/>,
    name: "Css 3",
  },
  {
    icon : <FaJs/>,
    name: "javascipt",
  },
  {
    icon : <FaReact/>,
    name: "React.Js",
  },
  {
    icon : <SiTailwindcss/>,
    name: "Tailwind.css ",
  },
  {
    icon : <SiNextdotjs/>,
    name: "Next.js",
  },
  {
    icon : <FaNodeJs/>,
    name: "Node.js",
  },
  {
    icon : <FaPhp/>,
    name: "php",
  },
  {
    icon : <SiLaravel/>,
    name: "laravel 10",
  },
  {
    icon : <SiMaterialdesign/>,
    name: "Matriel Ui",
  },
  {
    icon : <FaPhp/>,
    name: "php",
  },
  {
    icon : <FaPython/>,
    name: "Python",
  },
  {
    icon : <SiNumpy/>,
    name: "Numpy",
  },
  
  
 ] 
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {tooltip,TooltipProvider, TooltipContent,TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";


const Resume = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
    }}
  className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
  >
    <div className="container mx-auto">
     <Tabs 
      defaultValue="experience"
      className="flex flex-col xl:flex-row gap-[60px]"
      >
     <TabsList className="flex flex-col max-w-[380px] mx-auto xl:mx-0 gap-6 ">
       <TabsTrigger value="experience">Experience</TabsTrigger>
       <TabsTrigger value="education">Education</TabsTrigger>
       <TabsTrigger value="skills">Skills</TabsTrigger>
       <TabsTrigger value="about">About me</TabsTrigger>
     </TabsList>

     {/* content*/}
     <div className="min-h[70vh] w-full "></div>
     {/* Experience*/}
     <TabsContent  value ="experience" className=" w-full ">
      experience
     </TabsContent>
     </Tabs>
    </div>
  </motion.div>
);
};

export default Resume
