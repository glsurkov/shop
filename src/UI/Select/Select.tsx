import React from 'react';
// @ts-ignore
import styles from './Select.module.scss'

interface SelectProps {
    options: string[],
    onChange: (str: string) => void
}


const Select: React.FC<SelectProps> = ({options, onChange}) => {

    console.log(options)

    return (
        <select className={styles.select} onChange={(e) => {
            onChange(e.target.value)
        }}>
            <option>All</option>
            {
                options.map((el, index) => {
                    return (
                        <option key={index}>{el}</option>
                    )
                })
            }
        </select>
    );
};

export default Select;