import { KeyboardEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import AreaTag from '../components/seller/input/AreaTag';

const HomeView = ({ data }: any) => {
  const [listTagState, setListTagState] = useState<{ name: string }[]>([]);
  const { control, getValues, setValue } = useForm({
    defaultValues: {
      test: '',
    },
  });
  useEffect(() => {
    console.log('listTagState:::', listTagState);
  }, [listTagState]);
  return (
    <div>
      <AreaTag
        name='test'
        control={control}
        listTagState={listTagState}
        setListTagState={setListTagState}
        setValue={setValue}
        getValues={getValues}
      />
    </div>
  );
};

export default HomeView;
