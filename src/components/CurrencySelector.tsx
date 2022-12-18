import { CurrencySymbol } from '../types';

interface IProps {
    list: CurrencySymbol[];
    currency: CurrencySymbol;
    onChange?(value: CurrencySymbol): void;
}

export function CurrencySelector({ list, currency, onChange }: IProps): JSX.Element {
    const changeHandler = (e: any) => onChange?.(e.target.value as CurrencySymbol);

    return (
        <select
            value={currency}
            onChange={changeHandler}
        >
            {list.map((item) => (
                <option
                    key={item}
                    value={item}
                >
                    {item}
                </option>
            ))}
        </select>
    );
}
