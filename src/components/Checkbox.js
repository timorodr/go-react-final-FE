import * as React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { useState, useEffect } from 'react';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ColorCheckboxes() {

    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        const storedValue = localStorage.getItem('isChecked');
        const today = new Date().toLocaleDateString();
    
        if (!storedValue || localStorage.getItem('checkedDate') !== today) {
          setIsChecked(false);
          localStorage.setItem('isChecked', isChecked);
          localStorage.setItem('checkedDate', today);
        } else {
          setIsChecked(JSON.parse(storedValue)); // Parse stored value back to boolean
        }
      }, []);

      const handleChange = (event) => {
        setIsChecked(event.target.checked);
        localStorage.setItem('isChecked', event.target.checked);
      };


  return (
    <div>
        <b>Taken today?</b>
      <Checkbox {...label} defaultChecked color="success" type="checkbox" checked={isChecked} onChange={handleChange}/>
    </div>
  );
}