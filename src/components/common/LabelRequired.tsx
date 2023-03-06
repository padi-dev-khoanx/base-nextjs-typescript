import React from 'react';

const LabelRequired = ({
  name,
  label,
  isRequired,
}: {
  name: string;
  label: string;
  isRequired: boolean;
}) => {
  return (
    <div>
      <span className={isRequired ? 'text-red-400' : 'hidden'}>*</span>
      <label className='font-normal text-sm' htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default LabelRequired;
