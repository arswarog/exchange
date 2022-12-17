interface IProps {
    amount: number;
    onChange?(value: number): void;
}

export function AmountInput({ amount, onChange }: IProps): JSX.Element {
    const changeHandler = (e: any) => onChange?.(+e.target.value);

    return (
        <input
            onChange={changeHandler}
            value={amount}
            type="number"
        />
    );
}
