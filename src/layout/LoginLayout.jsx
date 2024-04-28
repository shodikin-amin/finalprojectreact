import React from "react";

function LoginLayout() {
  return (
    <div className="bg-login-bg bg-cover bg-fixed bg-center bg-no-repeat h-screen">
      <div className="flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8 min-h-screen">
        <div className="border-2 bg-white shadow-custom rounded-xl sm:mx-auto sm:w-full sm:max-w-sm px-6 py-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
            <img className="mx-auto w-[8em]" src="./src/assets/img/logo/asqolanlogo.png" alt="SMP ISLAM ASQOLAN BOARDING SCHOOL" />
            <h1 className="mt-10 text-center text-3xl font-bold text-green-primer">SMP ISLAM ASQOLAN</h1>
            <h1 className="text-center text-3xl font-bold  text-green-primer">BOARDING SCHOOL</h1>
            <h2 className="text-center text-2xl font-bold pt-4">Login</h2>
            <p className="text-sm font-medium text-center">Silakan masukan Email dan Password Anda</p>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="" method="">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-lg">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Example@example.com"
                    required
                    className="w-full outline-0 rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-900 text-lg">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="********"
                    required
                    className="w-full outline-0 rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="text-sm text-end">
                <a href="#" className="font-semibold text-blue-600 hover:text-md hover:font-bold">
                  Lupa password?
                </a>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-green-primer px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-2 text-center text-sm text-gray-500">
              Belum Punya Akun?{" "}
              <a href="#" className="font-semibold text-blue-600 hover:text-md hover:font-bold">
                Daftar
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginLayout;
