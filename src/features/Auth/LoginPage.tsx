import { FormLogin } from "./components/FormLogin";

export const LoginPage = () => {
  return (
    <div className="flex w-full h-screen">
      <div id="login-left" className="hidden md:block w-1/2 bg-blue-400">
        <img
          src="https://thenationaltriallawyers.org/wp-content/uploads/KRN9bQUaOmq_e50p21vq2A1XMV07Lb1RZpW6_vtzJRj6wr7fMF0B9j8CbYZLGcKSoLxfcweCMr2PgsE678GDOaQeLCxnXsVTKmR52BTncWtKTgpuY_yOQZQ6jbsaE2zJuizEHPJ3.jpeg"
          alt="Image Login"
          width={"100%"}
          className="h-full object-cover"
        />
      </div>
      <div
        id="login-right"
        className="w-full md:w-1/2 bg-white flex justify-center items-center"
      >
        <div className="w-8/12 flex flex-col justify-center items-center gap-6">
          <img
            width={76}
            src="https://static.vecteezy.com/system/resources/thumbnails/044/812/167/small/sophisticated-law-firm-logo-on-transparent-background-png.png"
            alt=""
          />
          <FormLogin />
        </div>
      </div>
    </div>
  );
};
