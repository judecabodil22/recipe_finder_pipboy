import react from 'react';

export default function Footer() {
    return (<>
        <div
            className="terminal-status-footer"
            style={{
                position: 'relative',
                marginTop: '40px',
                marginBottom: '10px',
                width: '100%',
                fontSize: '0.8em',
                textAlign: 'center',
                color: 'var(--fallout-shadow)'
            }}
        >
            {'> STATUS: ONLINE | VERSION 1.0 | DATA MOCKING ACTIVE <'}
        </div>

    </>

    );

}
