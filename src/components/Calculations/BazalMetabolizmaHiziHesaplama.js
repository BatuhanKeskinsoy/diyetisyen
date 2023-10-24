import React, { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import Image from 'next/image';

function BMHHesaplama(props) {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('male');
  const [bmr, setBMR] = useState(null);

  const weightHandleChange = (e) => {
    setWeight(Number(e.target.value));
  };

  const heightHandleChange = (e) => {
    setHeight(Number(e.target.value));
  };

  const ageHandleChange = (e) => {
    setAge(Number(e.target.value));
  };

  const genderHandleChange = (e) => {
    setGender(e.target.value);
  };

  const calculateBMR = () => {
    if (!weight || !height || !age || !gender) {
      return; // Gerekli alanlar boşsa işlemi yapma
    }

    const calculatedBMR =
      gender === 'male'
        ? 66.5 + 13.75 * weight + 5.03 * height - 6.75 * age
        : 655.1 + 9.56 * weight + 1.85 * height - 4.68 * age;

    setBMR(Math.round(calculatedBMR));
  };

  const handleCalculate = () => {
    calculateBMR();

    // Input değerlerini sıfırla
    setWeight(0);
    setHeight(0);
    setAge(0);
  };

  return (
    <div className="relative my-6 shadow-lg lg:p-8 p-4 rounded-xl overflow-hidden">
      <div className="absolute w-full h-full left-0 top-0 bg-customPrimary-900/50 -z-10"></div>
      <Image
        src={props.image}
        sizes='(max-width: 768px) 100vw, 50vw'
        fill
        priority
        alt={props.title}
        title={props.title}
        className='object-cover object-center -z-20 blur-sm' />

      <div className="flex lg:flex-row flex-col gap-8">
        <div className="flex flex-col flex-1">
          <label htmlFor="height" className="mb-4 text-xl text-white">
            Boyunuz (cm)
          </label>
          <input
            onChange={heightHandleChange}
            type="number"
            name="height"
            id="height"
            placeholder="Örneğin: 180"
            className="shadow-lg rounded-lg py-2 px-4 outline-none bg-white/70 focus:bg-white focus:shadow-site/30 text-lg transition-all"
            value={height || ''}
          />
        </div>
        <div className="flex flex-col flex-1">
          <label htmlFor="weight" className="mb-4 text-xl text-white">
            Kilonuz (kg)
          </label>
          <input
            onChange={weightHandleChange}
            type="number"
            name="weight"
            id="weight"
            placeholder="Örneğin: 80"
            className="shadow-lg rounded-lg py-2 px-4 outline-none bg-white/70 focus:bg-white focus:shadow-site/30 text-lg transition-all"
            value={weight || ''}
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col gap-8 mt-6">
        <div className="flex flex-col flex-1">
          <label htmlFor="age" className="mb-4 text-xl text-white">
            Yaşınız
          </label>
          <input
            onChange={ageHandleChange}
            type="number"
            name="age"
            id="age"
            placeholder="Örneğin: 30"
            className="shadow-lg rounded-lg py-2 px-4 outline-none bg-white/70 focus:bg-white focus:shadow-site/30 text-lg transition-all"
            value={age || ''}
          />
        </div>

        <div className="flex flex-col flex-1">
          <label className="mb-4 text-xl text-white">Cinsiyetiniz</label>
          <div className="flex gap-4">
            <label
              className={`flex items-center justify-center rounded-lg py-2 px-4 cursor-pointer transition-all w-full shadow-lg hover:bg-blue-600 hover:text-white ${gender === 'male' ? 'bg-blue-600 text-white' : 'bg-white/70'
                }`}
              onClick={() => {
                if (gender !== 'male') {
                  setGender('male');
                  setBMR(null);
                }
              }}
            >
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={genderHandleChange}
                className="hidden"
              />
              <span className="text-xl tracking-wider font-gemunu px-4">Erkek</span>
            </label>
            <label
              className={`flex items-center justify-center rounded-lg py-2 px-4 cursor-pointer transition-all w-full shadow-lg hover:bg-pink-500 hover:text-white ${gender === 'female' ? 'bg-pink-500 text-white' : 'bg-white/70'
                }`}
              onClick={() => {
                if (gender !== 'female') {
                  setGender('female');
                  setBMR(null);
                }
              }}
            >
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={genderHandleChange}
                className="hidden"
              />
              <span className="text-xl tracking-wider font-gemunu px-4">Kadın</span>
            </label>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-end mb-6 mt-4">
        <button
          onClick={handleCalculate}
          className="flex items-center gap-x-2 px-6 py-3 mt-4 shadow-lg bg-site hover:bg-site/80 text-white font-gemunu text-xl lg:text-2xl tracking-wider min-w-fit rounded-lg transition-all w-full lg:w-fit lg:justify-end justify-center"
        >
          <AiOutlineCheck />
          Hesapla
        </button>
      </div>

      {bmr !== null && (
        <div className="text-xl bg-site text-white shadow-lg py-2 px-4 rounded-2xl lg:w-fit w-full lg:text-left text-center">
          Bazal Metabolizma Hızınız (BMR): {bmr.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
        </div>
      )}
    </div>
  );
}

export default BMHHesaplama;
