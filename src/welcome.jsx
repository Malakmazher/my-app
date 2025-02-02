import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const WelcomeUI = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  const navIcons = {
    Welcome: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="#009DE0">
        <path d="M20 7L9 0 2 4v16h20V7zM7.9 18.1h-3V15h3v3.1zm3-4h-3v-3h3v3zm3-4h-3V8h3v3zm3-4h-3V4.9h3V8z"/>
      </svg>
    ),
    Accounts: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="#777">
        <path d="M12 2a5 5 0 100 10 5 5 0 000-10zM4 21v-2a5 5 0 015-5h6a5 5 0 015 5v2H4z"/>
      </svg>
    ),
    Income: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="#777">
        <path d="M2 20h20v-1H2v1zm4-3h12v-1H6v1zM2 10h20V9H2v1zm4-3h12V6H6v1zM2 3v1h20V3H2z"/>
      </svg>
    ),
    Housing: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="#777">
        <path d="M20 7L9 0 2 4v16h20V7z"/>
      </svg>
    ),
    Transportation: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="#777">
        <path d="M19 8l-3.92 0c-.11-.27-.19-.54-.28-.82l1.75-3.84c.07-.15.1-.32.1-.5 0-.55-.45-1-1-1H8.5c-.55 0-1 .45-1 1 0 .18.03.35.1.5l1.75 3.84c-.09.28-.17.55-.28.82L5 8 5 19h14L19 8zM6 18H6V9H5v9H6zm12 0H12V9h6v9H18z"/>
      </svg>
    ),
    Lifestyle: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="#777">
        <path d="M12 21.35l-1.49-1.34C2.85 12.38 0 9.14 0 5.5A5.5 5.5 0 015.5 0C7.35 0 9.11.86 10.38 2.32L12 3.96l1.62-1.64C14.89.86 16.65 0 18.5 0A5.5 5.5 0 0124 5.5c0 3.64-2.85 6.88-10.51 14.51L12 21.35z"/>
      </svg>
    )
  };

  const handleNext = () => {
    if (!firstName.trim() || !lastName.trim()) {
      setError("Please fill in all fields before proceeding");
      return;
    }
    setError("");
    navigate("/housing");
  };

  const handleOptionClick = (id) => {
    if (selectedOptions.includes(id)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== id));
    } else {
      setSelectedOptions([...selectedOptions, id]);
    }
  };

  const choices = [
    {
      id: "payoff_debt",
      label: "Pay off debt",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2 7h20v10H2z" fill="none" />
          <path d="M20 9H4v6h16V9zm-7 2a2 2 0 110 4 2 2 0 010-4z" />
        </svg>
      )
    },
    {
      id: "retirement",
      label: "Save for Retirement",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 10c1.66 0 3-1.34 3-3s-1.34-3-3-3c-1.24 0-2.29.75-2.78 1.83C13.94 5.31 13 5 12 5c-2.21 0-4 1.79-4 4v1H5v4h3v3h4v-3h3v-4h-3V10c0-.55.45-1 1-1s1 .45 1 1z" />
        </svg>
      )
    },
    {
      id: "stop_paycheck",
      label: "Stop Living Paycheck",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l11 6 9-4v7h2V9L12 3z" />
        </svg>
      )
    },
    {
      id: "kids_collage",
      label: "Save for Kids Collage",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L1 7l11 5 9-4.09V13h2V7L12 2z" />
          <path d="M12 22v-8l-8-4v2l6 3-6 3v2l8-4z" />
        </svg>
      )
    },
    {
      id: "save_home",
      label: "Save for Home",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3l8 8h-5v8h-6v-8H4z"/>
        </svg>
      )
    },
    {
      id: "travel",
      label: "Travel",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-1v4l-2 2v1l3-1 3 1v-1l-2-2v-4z"/>
        </svg>
      )
    }
  ];

  return (
    <div className={`flex w-full max-w-full box-border justify-start items-stretch ${isMobile ? 'flex-col' : 'flex-row'} h-screen`}>
      {/* Left Sidebar */}
      <div className={`bg-sky-500 text-white box-border flex items-center justify-center ${isMobile ? 'basis-full py-7 px-5' : 'basis-2/5 py-10 px-10'}`}>
        <div className="p-0 max-w-[410px]">
          <div className="text-[34px] font-semibold mb-5 leading-[1.3]">Let's setup your operating agreement.</div>
          <div className="text-base text-gray-300 leading-[1.4]">
            All-in-one solution to for your business in the state. <br />
            Form new company from scratch or onboard your existing Company
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`bg-gray-200 flex flex-col box-border ${isMobile ? 'basis-full py-6 px-5' : 'basis-3/5 py-8 px-10'}`}>
        {/* Navigation Icons */}
        <div className={`flex justify-center mb-7 gap-15 ${isMobile ? 'flex-wrap' : 'flex-nowrap'}`}>
          <Link to="/welcome" className="text-decoration-none">
            <div className="p-0 mr-[15px] text-black flex flex-col items-center">
              <div className="bg-gray-200 rounded-full w-[30px] h-[30px] flex justify-center items-center mb-2">
                {navIcons.Welcome}
              </div>
              <span className="text-black text-xs text-center">Welcome</span>
            </div>
          </Link>
          <Link to="/accounts" className="text-decoration-none">
            <div className="p-0 mr-[15px] cursor-pointer text-gray-500 text-sm flex flex-col items-center">
              <div className="bg-white rounded-full w-[30px] h-[30px] flex justify-center items-center mb-2">
                {navIcons.Accounts}
              </div>
              <span className="text-gray-500 text-xs text-center">Accounts</span>
            </div>
          </Link>
          <Link to="/income" className="text-decoration-none">
            <div className="p-0 mr-[15px] cursor-pointer text-gray-500 text-sm flex flex-col items-center">
              <div className="bg-white rounded-full w-[30px] h-[30px] flex justify-center items-center mb-2">
                {navIcons.Income}
              </div>
              <span className="text-gray-500 text-xs text-center">Income</span>
            </div>
          </Link>
          <Link to="/housing" className="text-decoration-none">
            <div className="p-0 mr-[15px] cursor-pointer text-gray-500 text-sm flex flex-col items-center">
              <div className="bg-white rounded-full w-[30px] h-[30px] flex justify-center items-center mb-2">
                {navIcons.Housing}
              </div>
              <span className="text-gray-500 text-xs text-center">Housing</span>
            </div>
          </Link>
          <Link to="/transportation" className="text-decoration-none">
            <div className="p-0 mr-[15px] cursor-pointer text-gray-500 text-sm flex flex-col items-center">
              <div className="bg-white rounded-full w-[30px] h-[30px] flex justify-center items-center mb-2">
                {navIcons.Transportation}
              </div>
              <span className="text-gray-500 text-xs text-center">Transportation</span>
            </div>
          </Link>
          <Link to="/lifestyle" className="text-decoration-none">
            <div className="p-0 mr-[15px] cursor-pointer text-gray-500 text-sm flex flex-col items-center">
              <div className="bg-white rounded-full w-[30px] h-[30px] flex justify-center items-center mb-2">
                {navIcons.Lifestyle}
              </div>
              <span className="text-gray-500 text-xs text-center">Lifestyle</span>
            </div>
          </Link>
        </div>

        {/* Header */}
        <div className="flex justify-start items-center mb-5">
          <div className="text-[42px] font-bold text-gray-800">Get Started</div>
        </div>

        <div className="h-[1px] bg-white mb-5"></div>

        {/* Form Section */}
        <div className="mb-8">
          <div className="flex gap-[18px]">
            <div className="mb-0 flex flex-col flex-1 min-w-0">
              <label className="text-sm mb-[7px] text-gray-600">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="py-2 px-2.5 border-none rounded-lg text-sm text-black bg-white w-full box-border"
                placeholder="Type your first name"
              />
            </div>
            <div className="mb-0 flex flex-col flex-1 min-w-0">
              <label className="text-sm mb-[7px] text-gray-600">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="py-2 px-2.5 border-none rounded-lg text-sm text-black bg-white w-full box-border"
                placeholder="Type your last name"
              />
            </div>
          </div>
          {error && <div className="text-red-500 mt-2">{error}</div>}
        </div>

        {/* Choices Section */}
        <div className="mb-[35px]">
          <div className="text-2xl font-bold mb-[18px] text-gray-800">Tell us what is important for you</div>
          <div className="flex flex-wrap gap-4">
            {choices.map((choice) => (
              <button
                key={choice.id}
                type="button"
                onClick={() => handleOptionClick(choice.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl cursor-pointer transition-colors duration-200 shadow-md
                  ${selectedOptions.includes(choice.id)
                    ? 'bg-sky-500 text-white'
                    : 'bg-white text-gray-800'}`}
              >
                {choice.icon}
                <span className="mt-2 text-sm text-center">{choice.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="flex justify-end mt-4">
          <Link to="/housing" className="text-decoration-none">
            <button className="bg-transparent text-sky-500 py-2 px-5 border border-sky-500 rounded-md cursor-pointer text-sm mr-2.5">
              Skip
            </button>
          </Link>
          <button onClick={handleNext} className="bg-sky-500 text-white py-2 px-5 border-none rounded-md cursor-pointer text-sm">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeUI; 