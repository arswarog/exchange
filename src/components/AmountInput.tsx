import classNames from 'classnames';

interface IProps {
    amount: number;
    loading?: boolean;
    onChange?(value: number): void;
}

export function AmountInput({ amount, loading, onChange }: IProps): JSX.Element {
    const changeHandler = (e: any) => onChange?.(+e.target.value);

    return (
        <input
            className={classNames({ loading: loading })}
            onChange={changeHandler}
            value={amount}
            type="number"
        />
    );
}
