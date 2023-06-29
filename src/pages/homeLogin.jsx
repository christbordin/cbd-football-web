// import { NavLink } from 'react-router-dom';
const Login = () => {
  return (
    <div className="h-screen bg-bggray">
      <div className="bg-[url('/public/sports-banner-football.jpg')] w-full h-[250px] bg-cover bg-center bg-no-repeat md:h-[300px] absolute"></div>
      <div className="2xl:container mx-auto relative flex items-center top-1/3 w-full">
        <div className="flex lg:w-3/5 bg-white mx-auto">
          <div className="w-1/2">
            <h1 className="text-3xl mt-8 ml-6">Login</h1>
            <form action="#">
              <div>
                <p className=" mt-8 ml-3">E-MAIL</p>
                <input
                  type="text"
                  placeholder="e-mail"
                  className="rounded-2xl bg-gray-100 mt-1 ml-6 px-3 py-2 w-5/6 drop-shadow-xl"
                />
              </div>
              <div>
                <p className="mt-8 ml-3">PASSWORD</p>
                <input
                  type="text"
                  placeholder="password"
                  className="rounded-2xl bg-gray-100 mt-1 ml-6 px-3 py-2 w-5/6 drop-shadow-xl"
                />
              </div>
              <div>
                <button className="text-white bg-gradient-to-br from-sunset to-stawmilk opacity-100 rounded-2xl shadow-xl mt-10 ml-6 px-3 py-2 w-5/6 hover:animate-one-pulse">
                  Login
                </button>
              </div>
              <div className="px-4 py-6">
                <input
                  type="checkbox"
                  className="peer-[
                  relative appearance-none w-4 h-4 border rounded-sm focus:outline-none checked:bg-stawmilk hover:ring-gray-300
                   after:content-[''] after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-no-repeat after:bg-center after:bg-[length:40px] after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')]
                ]:"
                />
                <span className="px-1 text-stawmilk">Remember Me</span>
                <span className=" ml-24">
                  <a href="#" className="text-forgotgray">
                    Forgot Password
                  </a>
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
