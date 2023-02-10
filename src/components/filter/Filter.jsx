import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/phonebookSlice';
import { InputField, Lable } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const inputData = e => {
    const typedData = e.target.value;
    dispatch(filterContacts(typedData));
  };

  return (
    <Lable>
      Find contacts by name
      <InputField type="text" name="filter" onChange={inputData} />
    </Lable>
  );
};
