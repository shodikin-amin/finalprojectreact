import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  return (
    <div className="bg-login-bg bg-cover bg-fixed bg-center bg-no-repeat min-h-screen">
      <div className="flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8 min-h-screen">
        <div className="border-2 bg-white shadow-custom rounded-xl sm:mx-auto sm:w-full sm:max-w-sm px-6 py-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
            <img className="mx-auto w-[8em]" src="./src/assets/img/logo/asqolanlogo.png" alt="SMP ISLAM ASQOLAN BOARDING SCHOOL" />
            <h1 className="mt-10 text-center text-3xl font-bold text-green-primer">SMP ISLAM ASQOLAN</h1>
            <h1 className="text-center text-3xl font-bold  text-green-primer">BOARDING SCHOOL</h1>
            <h2 className="text-center text-2xl font-bold pt-4">{props.title}</h2>
            <p className="text-sm font-medium text-center mb-4 mt-2">Silakan masukan akun detail anda</p>
            {props.children}
            {navLinks(props)}
            <p className="mt-2 text-center text-sm text-gray-500">
              atau ke halaman{" "}
              <Link to="/" className="font-semibold text-blue-600 hover:text-md hover:font-bold">
                Home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const navLinks = ({ type }) => {
  if (type === "login") {
    return (
      <p className="mt-2 text-center text-sm text-gray-500">
        Belum Punya Akun?{" "}
        <Link to={"/register"} className="font-semibold text-blue-600 hover:text-md hover:font-bold">
          Daftar
        </Link>
      </p>
    );
  } else if (type === "register") {
    return (
      <p className="mt-2 text-center text-sm text-gray-500">
        Sudah Punya Akun?{" "}
        <Link to={"/login"} className="font-semibold text-blue-600 hover:text-md hover:font-bold">
          Login
        </Link>
      </p>
    );
  } else {
    return (
      <p className="mt-2 text-center text-sm text-gray-500">
        Ingat Akun Anda?{" "}
        <Link to={"/login"} className="font-semibold text-blue-600 hover:text-md hover:font-bold">
          Login
        </Link>
      </p>
    );
  }
};
export default AuthLayout;
