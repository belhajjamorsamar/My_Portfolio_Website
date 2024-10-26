"use client"
import {motion} from "framer-motion";
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';

const page = () => {
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
     <Tabs defaultValue="experience"
      className="flex flex-col xl:flex-row gap-[60px]">
     <TabsList>
       <TabsTrigger>Experience</TabsTrigger>
       <TabsTrigger>Education</TabsTrigger>
       <TabsTrigger>Skills</TabsTrigger>
       <TabsTrigger>About me</TabsTrigger>
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
}

export default page
