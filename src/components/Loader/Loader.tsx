import React from "react";
import LoadingOverlay from "react-loading-overlay";
import styled from "styled-components";

const DarkBackground = styled.div`
    position: fixed; /* Stay in place */
    z-index: 999; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

const Loader: React.FC<{ active: boolean }> = ({ active }) => (
    <>
        {active && (
            <DarkBackground>
                <LoadingOverlay active spinner text="Loading your content..." />
            </DarkBackground>
        )}
    </>
);

export default Loader;
