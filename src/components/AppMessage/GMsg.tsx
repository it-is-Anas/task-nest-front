import { useEffect, useState } from "react";

interface Props {
    msg?: string;
    time?: number;
}

export default function GMsg({ msg = '', time = 2000 }: Props) {
    const [cls, setCls] = useState<string>('');

    useEffect(() => {
        if (!msg) return;

        setCls('open'); // show message immediately

        const timer = setTimeout(() => {
            setCls(''); // hide after time
        }, time);

        return () => clearTimeout(timer); // cleanup on new msg
    }, [msg, time]);

    return (
        <p className={"g-msg " + cls}>{msg}</p>
    );
}
