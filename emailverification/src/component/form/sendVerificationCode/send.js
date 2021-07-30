import {useForm} from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import TextFields from '../../textField/textField';
import Button from '../../button/buttonCmpnt';

const Submit = () => {
    const {handleSubmit} = useForm();
    const [email, setEmail] = useState('');
    const submit = async () => {
        if(email === '' || email ===  null){
          alert("Email is required!");
          return;
        }
        
        await axios.post('/api/Infoprocess', {
          email
        })
    }

    return (
      <form onSubmit={handleSubmit(submit)}>
          <TextFields msg='Email' name='email' type='email' getInputValue={(email) => setEmail(email)}/>
        <Button buttonName='Send Verification Code'/>
      </form>
    )
}

export default Submit;