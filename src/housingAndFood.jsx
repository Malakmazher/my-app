import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const HousingAndFoodUI = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [housingName, setHousingName] = useState('');
  const [housingAmount, setHousingAmount] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  const navIcons = {
    Welcome: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="#777">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="#009DE0">
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
    if (!housingName.trim() || !housingAmount.trim()) {
      setError("Please fill in all fields before proceeding");
      return;
    }
    setError("");
    navigate("/transportation");
  };

  return (
    <div className={`flex w-full max-w-full box-border justify-start items-stretch ${isMobile ? 'flex-col' : 'flex-row'} h-screen`}>
      <div className={`bg-sky-500 text-white box-border flex items-center justify-center ${isMobile ? 'basis-full py-7 px-5' : 'basis-2/5 py-10 px-10'}`}>
        <div className="p-0 max-w-[410px]">
          <div className="text-[34px] font-semibold mb-5 leading-[1.3]">
            Let's setup your operating agreement.
          </div>
          <div className="text-base text-gray-300 leading-[1.4]">
            All-in-one solution for your business in the state. <br />
            Form a new company from scratch or onboard your existing Company.
          </div>
        </div>
      </div>
      <div className={`bg-gray-200 flex flex-col box-border ${isMobile ? 'basis-full py-6 px-5' : 'basis-3/5 py-8 px-10'}`}>
        <div className={`flex justify-center mb-7 gap-15 ${isMobile ? 'flex-wrap' : 'flex-nowrap'}`}>
          <Link to="/welcome" className="text-decoration-none">
            <div className="p-0 mr-[15px] cursor-pointer text-gray-500 text-sm flex flex-col items-center">
              <div className="bg-white rounded-full w-[30px] h-[30px] flex justify-center items-center mb-2">
                {navIcons.Welcome}
              </div>
              <span className="text-gray-500 text-xs text-center">Welcome</span>
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
            <div className="p-0 mr-[15px] text-black flex flex-col items-center">
              <div className="bg-gray-200 rounded-full w-[30px] h-[30px] flex justify-center items-center mb-2">
                {navIcons.Housing}
              </div>
              <span className="text-black text-xs text-center">Housing</span>
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
        <div className="flex justify-between items-center mb-5">
          <div className="text-[42px] font-bold text-gray-800">Housing & Food</div>
          <button onClick={() => navigate("/empty")} className="bg-sky-500 text-white py-2 px-5 border-none rounded-md cursor-pointer text-sm mt-0">
            Add
          </button>
        </div>
        <div className="h-[1px] bg-white mb-5"></div>
        <div className="mb-8">
          <div className="flex gap-[18px]">
            <div className="mb-0 flex flex-col flex-1 min-w-0">
              <label className="text-sm mb-[7px] text-gray-600">Housing Name</label>
              <input
                type="text"
                value={housingName}
                onChange={(e) => setHousingName(e.target.value)}
                className="py-2 px-2.5 border-none rounded-lg text-sm text-black bg-white w-full box-border"
                placeholder="Type an Answer"
              />
            </div>
            <div className="mb-0 flex flex-col flex-1 min-w-0">
              <label className="text-sm mb-[7px] text-gray-600">Amount</label>
              <div className="flex items-center border border-gray-300 rounded-md w-full box-border">
                <input
                  type="text"
                  value={housingAmount}
                  onChange={(e) => setHousingAmount(e.target.value)}
                  className="py-2 px-2.5 border-none rounded-lg text-sm text-black bg-white flex-grow w-full box-border"
                  placeholder="0.00"
                />
              </div>
            </div>
          </div>
          {error && <div className="text-red-500 mt-2">{error}</div>}
        </div>
        <div className="mb-[35px]">
          <div className="text-2xl font-bold mb-[18px] text-gray-800">List</div>
          <div className="bg-white py-3.5 px-5 rounded-md mb-2.5 flex justify-between items-center border border-gray-300">
            <div className="text-xl text-gray-800 font-bold">Income</div>
            <div className="flex items-center gap-1">
              <div className="text-xl font-bold text-gray-800">$20,000.00</div>
              <button className="bg-transparent border-none cursor-pointer p-1.5 ml-4">
                <img 
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAAEAWj7AAAAACXBIWXMAAAsTAAALEwEAmpwYAAAApElEQVRImWNgGEhgYMhgAAA8IAgGBwYFBAUBjQwEDg8GAcRgYBBjYAgZggKGwGBj0GBgYGRoYJgcDAyMTA0h8GA8gJTAwMGkGYyBgsAgMTAzBkcDAyBQQCQAe/RgYWBiA4Wwg4GBicggwMKEAw0BgbCwM0jgcgYFxgmBgYHBg0DA4jIwMCzicDAwMLC4EwhxAaKzBAgwAP6ofm+MlSxoAAAAASUVORK5CYII=" 
                  alt="delete" 
                  className="w-3 h-3 opacity-60" 
                />
              </button>
            </div>
          </div>
          <div className="bg-white py-3.5 px-5 rounded-md flex justify-between items-center border border-gray-300">
            <div className="text-xl text-gray-800 font-bold">Sara Salary</div>
            <div className="flex items-center gap-1">
              <div className="text-xl font-bold text-gray-800">$20,000.00</div>
              <button className="bg-transparent border-none cursor-pointer p-1.5 ml-4">
                <img 
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAAEAWj7AAAAACXBIWXMAAAsTAAALEwEAmpwYAAAApElEQVRImWNgGEhgYMhgAAA8IAgGBwYFBAUBjQwEDg8GAcRgYBBjYAgZggKGwGBj0GBgYGRoYJgcDAyMTA0h8GA8gJTAwMGkGYyBgsAgMTAzBkcDAyBQQCQAe/RgYWBiA4Wwg4GBicggwMKEAw0BgbCwM0jgcgYFxgmBgYHBg0DA4jIwMCzicDAwMLC4EwhxAaKzBAgwAP6ofm+MlSxoAAAAASUVORK5CYII=" 
                  alt="delete" 
                  className="w-3 h-3 opacity-60" 
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <Link to="/transportation" className="text-decoration-none">
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

export default HousingAndFoodUI;