/*
 * @Author: your name
 * @Date: 2021-07-21 09:55:01
 * @LastEditTime: 2021-07-22 15:22:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \assessment\emailverification\src\component\textField.js
 */
import './styles.css';
import {Form} from 'react-bootstrap';

const TextFields = (props) => {
    const {msg, getInputValue, type} = props;
    const filterChange = updatedItem => {
        getInputValue(updatedItem)
    };

    return (
        <Form>
            <Form.Group
                className="mb-3 position" 
                controlId="formBasicEmail"
                onChange={(e) => {
                          filterChange(e.target.value);
                    }
                }
            >
                <Form.Control type={type} placeholder={msg} />
            </Form.Group>
        </Form>
    )
}

export default TextFields;