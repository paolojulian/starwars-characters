import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';

export type TextInputProps = {
  // no props
} & HtmlHTMLAttributes<HTMLInputElement>;

const TextInput: FunctionComponent<TextInputProps> = (props) => {
  return (
    <input
      {...props}
      className={[
        'bg-transparent px-4 py-1 border-b border-slate-600',
        'transition focus:outline-none focus:ring-0 focus:border-slate-100',
        'placeholder-slate-400',
      ].join(' ')}
    />
  );
};

export default TextInput;
