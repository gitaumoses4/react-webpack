import React from 'react';

const Form = (
    {
        messages = [],
        status = '',
        fields,
        onSubmit,
    },
) => (
    <form className={`mg form ${status}`} onSubmit={onSubmit}>
        {status ? (
            <div className="status">
                <div className={`mg segment ${status}`}>
                    <ul>
                        {
                            messages.map(message => (
                                <li>{message}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        ) : ('')
        }
        {fields}
    </form>
);

export default Form;
