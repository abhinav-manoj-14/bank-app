import { clients } from "../constants";
import styles from "../style";

const Clients = () => {
   return (
      <section className={`${styles.flexCenter} my-4`}>
         <div className={`${styles.flexCenter} flex-wrap w-full`}>
            {clients.map((client) => {
               return (
                  <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[200px] min-w-[120px] sm:mr-0 mr-3`}>
                     <img src={client.logo} alt={client.id} className="w-[190px] h-[100px] object-contain text-dimWhite" />
                  </div>
               );
            })}
         </div>
      </section>
   );
};

export default Clients;
