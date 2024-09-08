import { motion } from "framer-motion"

//variants
const stairAnimation ={
    initial:{
        top:"0%",
    },
    animate :{
        top:"100%"
    },
    exit :{
        top:["100%","0%"],
    },
};


const Stairs = () => {
  return 
    <>
      

{/*render 6 motion divs , each representing a step of the Stairs .*
each div  will have the same animation defined by the Stair animation object .
 the delay for each div is  calculated sinamically based an it's reserved index, 
 creating a staggered  effect with decreasing delay for each subsequent step. */}
    </>
  
}

export default Stairs
