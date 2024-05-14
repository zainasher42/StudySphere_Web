import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function SimpleAlert(props) {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{
            display: open ? 'block' : 'none',
            position: 'fixed',
            top: '20px', // Adjust top position as needed
            right: '20px', // Adjust right position as needed
            zIndex: '1000', // Adjust z-index as needed
        }}>
            <Alert
                icon={<CheckIcon fontSize="inherit" />}
                severity={props.type}
                variant="filled"
                onClose={handleClose}
            >
                {props.message}
            </Alert>
        </div>
    );
}
