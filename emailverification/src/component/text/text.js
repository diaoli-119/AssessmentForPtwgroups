import {Form} from 'react-bootstrap'

const Text = (props) => {
    return (
        <div>
            <Form.Text>{props.title}</Form.Text>
        </div>
    ) 
}

export default Text;