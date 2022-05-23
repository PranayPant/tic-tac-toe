import React, { useState } from "react";
import { Alert } from "react-bootstrap";

interface BannerProps {
    variant: string;
    text: string;
}

const Banner: React.FC<BannerProps> = ({ variant, text }) => {
    const [show, setShow] = useState(true);
    return (
        <>
            {show && (
                <Alert
                    variant={variant}
                    onClose={() => setShow(false)}
                    dismissible
                >
                    <p>{text}</p>
                </Alert>
            )}
        </>
    );
};

export default Banner;
