import {motion} from "framer-motion"
import {useRef, useEffect, useState} from "react"
export default function Carrousel (props){
    const ref = useRef()
    const [width, setWidth] = useState(0);
    useEffect(()=>{
          setWidth(ref.current.scrollWidth - ref.current.offsetWidth)
      },[])
    return(
        <div className="carousel w-full overflow-hidden cursor-grab rounded-[25px]"
        ref={ref}
        >
            <motion.div
            drag="x"
            dragConstraints={{right:0, left: -width}}
            className="w-full flex rounded-[25px]"
            whileTap={{cursor:"grabbing"}}
            >
               {props.images}
            </motion.div>
        </div>
    )
}