// import React, { useState } from "react";
// import { useRecaptcha } from "react-recaptcha";

// const Recaptcha = () => {
//   const [recaptchaToken, setRecaptchaToken] = useState("");

//   const { execute, render } = useRecaptcha();

//   return (
//     <div>
//       <script src="https://www.google.com/recaptcha/api.js" async defer></script>
//       <div ref={render} />
//       <button
//         type="button"
//         onClick={() => {
//           setRecaptchaToken(execute());
//         }}
//       >
//         Verificar
//       </button>
//     </div>
//   );
// };

// export default Recaptcha;