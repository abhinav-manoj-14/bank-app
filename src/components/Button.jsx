// eslint-disable-next-line react/prop-types
const Button = ({ styles }) => {
   return (
      <button
         type="button"
         className={`px-5 py-5 bg-blue-gradient font-poppins font-medium text-[18px] rounded-[10px] text-primary outline-none ${styles}`}
      >
         Get Started
      </button>
   );
};

export default Button;
