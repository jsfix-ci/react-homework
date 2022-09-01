import React from 'react';

export const Input = React.forwardRef(({ label, error, ...props }, ref) => {
    return (
        <div>
            <label>
                {label}
                <input ref={ref} {...props} />
                {error && <span style={{ color: 'red' }}>{error}</span>}
            </label>
        </div>
    );
});
