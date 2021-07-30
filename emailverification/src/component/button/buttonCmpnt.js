import {Button} from 'react-bootstrap'
import './styles.css'

const ButtonIns = (props) => {
    return(
        <div className='buttonLayout'>
            <Button type='submit'>{props.buttonName}</Button>
        </div>
    )
}

export default ButtonIns;