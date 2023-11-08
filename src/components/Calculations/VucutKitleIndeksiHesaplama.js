import React, { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import Image from 'next/image';

function VKIHesaplama(props) {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(0);
  const [category, setCategory] = useState('');

  const weightHandleChange = (e) => {
    if (bmi) {
      setBMI(0);
      setCategory('');
    }
    setWeight(e.target.value);
  };

  const heightHandleChange = (e) => {
    if (bmi) {
      setBMI(0);
      setCategory('');
    }
    setHeight(e.target.value);
  };

  const calculateBMI = () => {
    if (!height || !weight) {
      return;
    }

    const parsedHeight = parseFloat(height);
    const parsedWeight = parseFloat(weight);

    if (isNaN(parsedHeight) || isNaN(parsedWeight)) {
      return;
    }

    const heightInMeter = parsedHeight / 100;
    const calculatedBMI = parsedWeight / (heightInMeter * heightInMeter);
    setBMI(calculatedBMI.toFixed(2));
    setCategory(getBMICategory(calculatedBMI));
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) {
      return 'Zayıf';
    } else if (bmi < 25.0) {
      return 'Normal';
    } else if (bmi < 30.0) {
      return 'Fazla Kilolu';
    } else if (bmi < 35.0) {
      return 'Şişman (Obez) - 1. Sınıf';
    } else if (bmi < 45.0) {
      return 'Şişman (Obez) - 2. Sınıf';
    } else {
      return 'Aşırı Şişman (Aşırı Obez) - 3. Sınıf';
    }
  };

  const handleCalculate = () => {
    calculateBMI();
  };

  return (
    <div className="relative my-6 shadow-lg lg:p-8 p-4 rounded-xl bg-white/30 overflow-hidden">
      <div className="absolute w-full h-full left-0 top-0 bg-customPrimary-900/50 -z-10"></div>
      <Image
        src={props.image}
        sizes='(max-width: 768px) 100vw, 50vw'
        fill
        priority={true}
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

      <div className="flex w-full justify-end mb-6 mt-4">
        <button
          onClick={handleCalculate}
          className="flex items-center gap-x-2 px-6 py-3 mt-4 shadow-lg bg-site hover:bg-site/80 text-white font-gemunu text-xl lg:text-2xl tracking-wider min-w-fit rounded-lg transition-all w-full lg:w-fit lg:justify-end justify-center"
        >
          <AiOutlineCheck />
          Hesapla
        </button>
      </div>

      <div className="flex lg:flex-row flex-col items-center flex-wrap gap-4">
        {bmi !== 0 && (
          <div className="text-xl bg-site text-white shadow-lg py-2 px-4 rounded-2xl lg:w-fit w-full lg:text-left text-center">
            Vücut Kitle İndeksi (BMI): {bmi}
          </div>
        )}

        {category !== '' && (
          <div className="text-xl">
            Kategori: {category}
          </div>
        )}
      </div>
    </div>
  );
}

export default VKIHesaplama;
