import {useForm} from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import Text from '../../text/text';
import CodeInput from '../../verificationCode/codeInput';
import TextFields from '../../textField/textField';
import Button from '../../button/buttonCmpnt'

const Send = () => {
    const {handleSubmit} = useForm();
    const [verificationCode, setCode] = useState('');
    const [fullname, setFullname] = useState('');
    const [phoneNo, setPhoneNo] = useState('');

    const submit = async () => {        
        if(fullname === '' || fullname ===  null){
            alert("Fullname is required!");
            return;
        }
        else if(phoneNo === '' || phoneNo ===  null){
            alert("phoneNo is required!");
            return;
        }
        else if(verificationCode === '' || verificationCode ===  null){
            alert("VerificationCode is required!");
            return;
        }

        await axios.post(`/api/Infoprocess/${phoneNo}`, {
            fullname,
            phoneNo,
            verificationCode
        })
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <TextFields msg='Fullname' name='fullname' typs='text' getInputValue={(fullname) => setFullname(fullname)}/>
            <TextFields msg='Phone No' name='phoneNum' type='text' getInputValue={(phoneNo) => setPhoneNo(phoneNo)}/>
            <Text title='Email Verification Code'/>
            <CodeInput getVerificationCode={(verificationCode) => setCode(verificationCode)}/>
            <Button buttonName='Submit'/>
        </form>
    )
}

export default Send;