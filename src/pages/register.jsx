import { Link } from 'react-router-dom';
import { BiChevronDown } from 'react-icons/bi';
import { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
const Register = () => {
  const [genderSelected, setGenderSelected] = useState('');
  const [openGender, setOpenGender] = useState(false);
  const [daySelected, setdaySelected] = useState('');
  const [openDay, setOpenDay] = useState(false);
  const [monthSelected, setmonthSelected] = useState('');
  const [openMonth, setOpenMonth] = useState(false);
  const [yearSelected, setYearSelected] = useState('');
  const [openYear, setOpenYear] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();

  const genderList = ['male', 'female', 'other'];
  let dayList = [];
  for (var day = 1; day <= 31; day++) {
    var dayString = day < 10 ? '0' + day : day.toString();
    dayList.push(dayString);
  }
  const mountList = [
    { id: '01', name: 'January' },
    { id: '02', name: 'February' },
    { id: '03', name: 'March' },
    { id: '04', name: 'April' },
    { id: '05', name: 'May' },
    { id: '06', name: 'June' },
    { id: '07', name: 'July' },
    { id: '08', name: 'August' },
    { id: '06', name: 'September' },
    { id: '10', name: 'October' },
    { id: '11', name: 'November' },
    { id: '12', name: 'December' }
  ];
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let yearsAgo = currentYear - 60;
  let yearList = [];
  for (var year = yearsAgo; year <= currentYear; year++) {
    yearList.push(year.toString());
  }
  return (
    <div className="h-screen bg-bggray">
      <div className="bg-[url('/public/sports-banner-football.jpg')] w-full h-[250px] bg-cover bg-center bg-no-repeat md:h-[300px] absolute"></div>
      <div className="2xl:container mx-auto relative top-1/4 w-full">
        <form action="#">
          <div className="flex lg:w-3/5 bg-white mx-auto">
            <div className="w-1/2">
              <h1 className="text-3xl mt-8 ml-6">Register</h1>
              <div>
                <p className="mt-7 ml-3">Firstname</p>
                <input
                  type="text"
                  placeholder="firstname"
                  className="rounded-2xl bg-gray-100 mt-1 ml-6 px-3 py-2 w-5/6 drop-shadow-xl"
                />
              </div>
              <div>
                <p className="mt-8 ml-3">Surname</p>
                <input
                  type="text"
                  placeholder="surname"
                  className="rounded-2xl bg-gray-100 mt-1 ml-6 px-3 py-2 w-5/6 drop-shadow-xl"
                />
              </div>
              <div className="flex mt-5 max-h-16">
                <div className="w-2/3 backdrop-blur-xl">
                  <p className="ml-3">Date of birth</p>
                  <div className="flex ml-6">
                    <div className="w-1/3">
                      <div
                        className={`bg-gray-50 border flex items-center justify-center mt-2 ${
                          !daySelected && 'text-oldgry'
                        }`}
                        onClick={() => {
                          setOpenDay(!openDay);
                          setOpenMonth(false);
                          setOpenYear(false);
                          setOpenGender(false);
                        }}
                      >
                        <div className="w-2/3 ml-1">{daySelected ? daySelected : 'day'}</div>
                        <div className="w-1/3 ml-1">
                          <BiChevronDown size={20} className={`${openDay && 'rotate-180'}`} />
                        </div>
                      </div>
                      <ul
                        className={`bg-bggray border rounded-2xl mt-2 overflow-y-auto ${
                          openDay ? 'max-h-28' : 'max-h-0 border-none'
                        }`}
                      >
                        {dayList.map((day, index) => (
                          <li
                            key={index}
                            className="pl-1 hover:bg-sky-600 hover:text-white"
                            onClick={() => {
                              if (day !== daySelected) {
                                setdaySelected(day);
                              }
                              setOpenDay(false);
                            }}
                          >
                            {day}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-1/3">
                      <div
                        className={`bg-gray-50 border flex items-center justify-center mt-2 ${
                          !monthSelected && 'text-oldgry'
                        }`}
                        onClick={() => {
                          setOpenDay(false);
                          setOpenMonth(!openMonth);
                          setOpenYear(false);
                          setOpenGender(false);
                        }}
                      >
                        <div className="w-2/3 ml-1">{monthSelected ? monthSelected : 'mount'}</div>
                        <div className="w-1/3 ml-1">
                          <BiChevronDown size={20} className={`${openMonth && 'rotate-180'}`} />
                        </div>
                      </div>
                      <ul
                        className={`bg-bggray border rounded-2xl mt-2 w-max overflow-y-auto ${
                          openMonth ? 'max-h-28' : 'max-h-0 border-none'
                        }`}
                      >
                        {mountList.map((mount, index) => (
                          <li
                            key={index}
                            className="pl-1 hover:bg-sky-600 hover:text-white"
                            onClick={() => {
                              if (mount.name !== monthSelected) {
                                setmonthSelected(mount.id);
                              }
                              setOpenMonth(false);
                            }}
                          >
                            {mount.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-1/3">
                      <div
                        className={`bg-gray-50 border flex items-center justify-center mt-2 ${
                          !yearSelected && 'text-oldgry'
                        }`}
                        onClick={() => {
                          setOpenDay(false);
                          setOpenMonth(false);
                          setOpenYear(!openYear);
                          setOpenGender(false);
                        }}
                      >
                        <div className="w-2/3 ml-1">{yearSelected ? yearSelected : 'year'}</div>
                        <div className="w-1/3 ml-1">
                          <BiChevronDown size={20} className={`${openYear && 'rotate-180'}`} />
                        </div>
                      </div>
                      <ul
                        className={`bg-bggray border rounded-2xl mt-2 overflow-y-auto ${
                          openYear ? 'max-h-28' : 'max-h-0 border-none'
                        }`}
                      >
                        {yearList.map((years, index) => (
                          <li
                            key={index}
                            className="pl-1 hover:bg-sky-600 hover:text-white"
                            onClick={() => {
                              if (years !== yearSelected) {
                                setYearSelected(years);
                              }
                              setOpenYear(false);
                            }}
                          >
                            {years}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-1/3">
                  <div className="w-24 ml-9 h-40">
                    <p className="pl-6">Gender</p>
                    <div
                      className={`bg-gray-50 border flex items-center justify-center mt-2 ${
                        !genderSelected && 'text-oldgry'
                      }`}
                      onClick={() => {
                        setOpenDay(false);
                        setOpenMonth(false);
                        setOpenYear(false);
                        setOpenGender(!openGender);
                      }}
                    >
                      <div className="w-2/3 ml-1">{genderSelected ? genderSelected : 'select'}</div>
                      <div className="w-1/3 ml-1">
                        <BiChevronDown size={20} className={`${openGender && 'rotate-180'}`} />
                      </div>
                    </div>
                    <ul
                      className={`bg-bggray border rounded-2xl mt-2 overflow-y-auto ${
                        openGender ? 'max-h-28' : 'max-h-0 border-none'
                      }`}
                    >
                      {genderList.map((gender, index) => (
                        <li
                          key={index}
                          className="p-1 hover:bg-sky-600 hover:text-white"
                          onClick={() => {
                            if (gender !== genderSelected) {
                              setGenderSelected(gender);
                            }
                            setOpenGender(false);
                          }}
                        >
                          {gender}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <p className="ml-3 mt-3">Phone number</p>
                <PhoneInput
                  className="p-1 ml-6 mt-2 w-2/3 border"
                  international
                  placeholder="enter phone number"
                  countryCallingCodeEditable={false}
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                />
              </div>
            </div>
            <div className="w-1/2 bg-gradient-to-br from-sunset to-stawmilk">
              <div>
                <p className="mt-24 ml-3">E-mail</p>
                <input
                  type="text"
                  placeholder="e-mail"
                  className="rounded-2xl bg-gray-200 mt-1 ml-6 px-3 py-2 w-5/6 drop-shadow-xl"
                />
              </div>
              <div>
                <p className="mt-8 ml-3">Password</p>
                <input
                  type="password"
                  placeholder="password"
                  className="rounded-2xl bg-gray-200 mt-1 ml-6 px-3 py-2 w-5/6 drop-shadow-xl"
                />
              </div>
              <div>
                <p className="mt-8 ml-3">Confirm Password</p>
                <input
                  type="password"
                  placeholder="password"
                  className="rounded-2xl bg-gray-200 mt-1 ml-6 px-3 py-2 w-5/6 drop-shadow-xl"
                />
              </div>
              <div className="py-8 flex items-center justify-center">
                <div className="px-6">
                  <button
                    type="submit"
                    className="border border-white rounded-2xl text-white h-10 w-28 hover:bg-white hover:text-black"
                  >
                    Register
                  </button>
                </div>
                <div className="px-8">
                  <Link to="/">
                    <button className="border border-white rounded-2xl text-white h-10 w-28 hover:bg-white hover:text-black">
                      Cancle
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
