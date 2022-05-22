import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'

interface LoginProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>, email: string) => void
}
const Login: React.FC<LoginProps> = ({handleSubmit}) => {
    const [email, setEmail] = useState<string>('')
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    return (
        <div id="sign-up">
            <h2>Sign Up to Play</h2>
            <Form onSubmit={(e) => handleSubmit(e, email)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        onChange={handleInput} 
                        type="email" 
                        placeholder="Enter email" 
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button disabled={!email} 
                    variant="primary" 
                    type="submit"
                >
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Login