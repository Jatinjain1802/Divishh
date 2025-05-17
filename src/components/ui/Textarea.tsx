import React, { forwardRef } from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  className?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="mb-4">
        <label 
          htmlFor={props.id} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {props.required && <span className="text-error-500 ml-1">*</span>}
        </label>
        <textarea
          ref={ref}
          className={`
            w-full px-3 py-2 border rounded-md shadow-sm
            ${error ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : 
              'border-gray-300 focus:ring-primary-500 focus:border-primary-500'}
            ${className}
          `}
          rows={4}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-error-500">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;