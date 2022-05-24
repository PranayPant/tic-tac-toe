import React from "react";
import { Alert } from "react-bootstrap";

interface BannerProps {
    variant: string;
    text: string;
    onClose: () => void;
}

const Banner: React.FC<BannerProps> = ({ variant, text, onClose }) => (
    <Alert variant={variant} onClose={onClose} dismissible>
        <p>{text}</p>
    </Alert>
);

export default Banner;
