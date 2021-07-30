import ReactCodeInput from 'react-code-input';
import './styles.css'

const CodeInput = (props) => {
    const {getVerificationCode} = props;

    return (
        <div className='codeInputLayout'>
            <ReactCodeInput
                type='text'
                fields = {6}
                onChange={(value) => getVerificationCode(value)}
            />
        </div>
    )
}

export default CodeInput;