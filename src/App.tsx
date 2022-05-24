import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import Board from "components/Board";
import Banner from "components/Banner";
import Loader from "components/Loader/Loader";

import { authenticateUser } from "./api";

interface AppState {
    email: string;
    token: string | null;
    error: boolean;
    loading: boolean;
}

function TicTacToe() {
    const [state, setState] = useState<AppState>({
        email: "",
        token: window.sessionStorage.getItem("access_token"),
        error: false,
        loading: false
    });
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState((prev) => ({ ...prev, email: e.target.value }));
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setState((prev) => ({ ...prev, loading: true }));
        authenticateUser({ email: state.email })
            .then((res) => {
                if (res.success) {
                    window.sessionStorage.setItem("access-token", res.token);
                    setState((prev) => ({
                        ...prev,
                        token: res.token,
                        loading: false
                    }));
                } else {
                    setState((prev) => ({
                        ...prev,
                        loading: false,
                        error: true
                    }));
                }
            })
            .catch(() => {
                setState((prev) => ({ ...prev, error: true, loading: false }));
            });
    };
    return (
        <div id="app" className="centered">
            <Loader active={state.loading} />
            {state.error && (
                <Banner
                    variant="danger"
                    text="Oops! We couldn't log you in. Please try again."
                    onClose={() =>
                        setState((prev) => ({ ...prev, error: false }))
                    }
                />
            )}
            <h1>Tic-Tac-Toe</h1>
            {state.token && <Board />}
            {!state.token && (
                <div id="sign-up">
                    <h2>Sign Up to Play</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                onChange={handleEmail}
                                type="email"
                                placeholder="Enter email"
                            />
                            <Form.Text className="text-muted">
                                We&apos;ll never share your email with anyone
                                else.
                            </Form.Text>
                        </Form.Group>
                        <Button
                            disabled={!state.email}
                            variant="primary"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Form>
                </div>
            )}
        </div>
    );
}

export default TicTacToe;
