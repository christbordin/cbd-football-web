// import { NavLink } from 'react-router-dom';
const Login = () => {
  return (
    <div>
      <div className="bg-[url('/public/sports-banner-football.jpg')] w-full h-[250px] bg-cover bg-center bg-no-repeat mb-8 md:h-[350px]"></div>
      <div className="container mx-auto">
        <div className="flex w-5/6 bg-white mx-auto">
          <div className="w-1/2">
            <h1 className="text-3xl mt-4 ml-6">Login</h1>
            <form action="#">
              <div>
                <p className=" mt-6 ml-3">E-MAIL</p>
                <input
                  type="text"
                  placeholder="e-mail"
                  className="rounded-2xl bg-gray-100 mt-1 ml-6 px-3 py-2 w-5/6 drop-shadow-xl"
                />
              </div>
              <div>
                <p className=" mt-6 ml-3">PASSWORD</p>
                <input
                  type="text"
                  placeholder="password"
                  className="rounded-2xl bg-gray-100 mt-1 ml-6 px-3 py-2 w-5/6 drop-shadow-xl"
                />
              </div>
              <div>
                <button className="rounded-2xl bg-gradient-to-r from-sunset to-stawmilk mt-8 ml-6 px-3 py-2 w-5/6 text-white">
                  Login
                </button>
              </div>
              <div className="px-4 mt-5">
                <input type="checkbox" className="" />
                <span className="px-1 text-stawmilk">Remember Me</span>
                <span className=" ml-60">
                  <a href="#">Forgot Password</a>
                </span>
              </div>
            </form>
          </div>
          <div className="w-1/2 bg-gradient-to-br from-sunset to-stawmilk flex flex-col items-center justify-center">
            <h1 className="text-white text-3xl">Welcome to CBD Football</h1>
            <div>
              <p className="text-white text-lg py-5">Don’t have account?</p>
            </div>
            <div>
              <button className="border border-white rounded-2xl text-white px-6 py-2 hover:bg-white hover:text-black">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
