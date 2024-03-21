import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
   return (
      <section id="footer" className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
         <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
            <div className={`flex-[1] flex flex-col justify-start mr-10`}>
               <img src={logo} alt="company logo" className="w-[267px] h-[72px] objec-contain" />
               <p className={`${styles.paragraph} mt-[30px] max-w-[312px]`}>A new way to make the payments easy, reliable and secure.</p>
            </div>

            <div className="flex-[1.5] flex flex-row justify-between flex-wrap md:mt-0 mt-10">
               {footerLinks.map((footerlink) => {
                  return (
                     <div key={footerlink.id} className="flex flex-col sm:my-0 my-4 min-w-[150px]">
                        <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">{footerlink.title}</h4>
                        <ul className="mt-3">
                           {footerlink.links.map((link, index) => {
                              return (
                                 <li
                                    key={link.name}
                                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                                       index !== link.length - 1 ? "mb-2" : "mb-0"
                                    }`}
                                 >
                                    {link.name}
                                 </li>
                              );
                           })}
                        </ul>
                     </div>
                  );
               })}
            </div>
         </div>

         <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
            <p className="font-poppins font-normal text-white text-center text-[18px] leading-[27px]">
               Copyright Ⓒ 2022 HooBank. All Rights Reserved.
            </p>

            <div className="flex flex-row justify-between md:mt-0 mt-6">
               {socialMedia.map((app, index) => {
                  return (
                     <div key={app.id}>
                        <img
                           src={app.icon}
                           alt={app.id}
                           className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`}
                        />
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default Footer;
