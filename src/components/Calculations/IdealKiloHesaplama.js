import React, { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import Image from 'next/image';

function IdealKiloHesaplama(props) {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [idealWeight, setIdealWeight] = useState('');

  const heightHandleChange = (e) => {
    if (idealWeight) {
      setIdealWeight('');
    }
    setHeight(e.target.value);
  };

  const weightHandleChange = (e) => {
    if (idealWeight) {
      setIdealWeight('');
    }
    setWeight(e.target.value);
  };

  const genderHandleChange = (e) => {
    if (idealWeight) {
      setIdealWeight('');
    }
    setGender(e.target.value);
  };

  const calculateIdealWeight = () => {
    if (!height || !weight || !gender) {
      return;
    }

    const parsedHeight = parseFloat(height);
    const parsedWeight = parseFloat(weight);

    if (isNaN(parsedHeight) || isNaN(parsedWeight)) {
      return;
    }

    let calculatedIdealWeight = 0;

    if (gender === 'male') {
      calculatedIdealWeight = 50 + 2.3 * (parsedHeight * 0.3937 - 60);
    } else if (gender === 'female') {
      calculatedIdealWeight = 45.5 + 2.3 * (parsedHeight * 0.3937 - 60);
    }

    setIdealWeight(calculatedIdealWeight.toFixed(2));
  };

  const handleCalculate = () => {
    calculateIdealWeight();
  };

  return (
    <div className="relative my-6 shadow-lg lg:p-8 p-4 rounded-xl bg-white/30 overflow-hidden">
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
            value={height}
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
            value={weight}
          />
        </div>
      </div>

      <div className="flex flex-col mt-6 lg:w-fit w-full">
        <span className="mb-4 text-xl text-white">Cinsiyetiniz</span>
        <div className="flex gap-4">
          <div
            className={`flex items-center justify-center rounded-lg py-2 px-4 cursor-pointer transition-all w-full shadow-lg hover:bg-blue-600 hover:text-white  ${gender === 'male' ? 'bg-blue-600 text-white' : 'bg-white/70'
              }`}
            onClick={() => {
              if (gender !== 'male') {
                setGender('male');
                setIdealWeight('');
              }
            }}
          >
            <span className="text-xl tracking-wider font-gemunu px-4">Erkek</span>
          </div>
          <div
            className={`flex items-center justify-center rounded-lg py-2 px-4 cursor-pointer transition-all w-full shadow-lg hover:bg-pink-500 hover:text-white ${gender === 'female' ? 'bg-pink-500 text-white' : 'bg-white/70'
              }`}
            onClick={() => {
              if (gender !== 'female') {
                setGender('female');
                setIdealWeight('');
              }
            }}
          >
            <span className="text-xl tracking-wider font-gemunu px-4">Kadın</span>
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

      {idealWeight && (
        <div className="text-xl bg-site text-white shadow-lg py-2 px-4 rounded-2xl lg:w-fit w-full lg:text-left text-center">
          İdeal Kilonuz: {idealWeight} kg
        </div>
      )}
    </div>
  );
}

export default IdealKiloHesaplama;
