import { arrowUp } from "../assets";
import styles from "../style";

const GetStarted = () => {
   return (
      <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full p-[2px] bg-blue-gradient cursor-pointer`}>
         <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
            <div className={`${styles.flexStart} flex-row`}>
               {/* For Get*/}
               <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
                  <span className="text-gradient">Get</span>
               </p>
               {/* For Arrow */}
               <img src={arrowUp} alt="arrow up" className={`w-[23px] h-[23px] object-contain`} />
            </div>
            {/* For Started */}
            <p className="font-poppins font-medium text-[18px] leading-[23px]">
               <span className="text-gradient">Started</span>
            </p>
         </div>
      </div>
   );
};

export default GetStarted;
