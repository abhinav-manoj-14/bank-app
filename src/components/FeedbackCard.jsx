import { quotes } from "../assets";

// eslint-disable-next-line react/prop-types
const FeedbackCard = ({ content, name, img, title }) => {
   return (
      <div className="flex flex-col justify-between px-10 py-12 max-w-[370px] rounded-[20px] feedback-card md:mr-20 sm:mr-5 mt-10">
         <img src={quotes} alt="double-quotes" className="w-[42px] h-[27px] object-contain" />
         <p className="font-poppins font-normal text-white text-[18px] leading-[32px] mt-[40px]">{content}</p>

         <div className="flex flex-row mt-5">
            <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
            <div className="flex flex-col ml-5">
               <h4 className="font-poppins font-semibold text-[20px] text-white">{name}</h4>
               <p className="font-poppins font-normal text-dimWhite text-[16px]">{title}</p>
            </div>
         </div>
      </div>
   );
};

export default FeedbackCard;
