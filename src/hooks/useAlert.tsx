'use client';

import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import Alert, { AlertSeverity } from "../components/feedback/Alert";

const AlertContext = createContext<[Dispatch<SetStateAction<boolean>>, Dispatch<SetStateAction<JSX.Element>>]>([() => {}, () => {}]);

export default function useAlert() : [Dispatch<SetStateAction<boolean>>, (params: {severity?: AlertSeverity, message?: string}) => void] {
    const [setIsShow, setAlertModel] = useContext(AlertContext);

    function setAlert({
        severity,
        message = ""
    }: {
        severity?: AlertSeverity,
        message?: string,
    }) {
        setAlertModel(<Alert key={new Date().toLocaleTimeString()} severity={severity} onClickOff={() => setIsShow(false)} last={5}>{message}</Alert>);
    }

    return [setIsShow, setAlert];
}

export function AlertContainer({
    children
}: {
    children: React.ReactNode
}) {
    const [isShow, setIsShow] = useState(false);
    const [alert, setAlert] = useState(<></>);

    return (
        <AlertContext.Provider value={[setIsShow, setAlert]}>
            {children}
            {isShow && 
                <section
                    className="fixed flex flex-col gap-3 right-5 top-5 z-50"
                >
                    {alert}
                </section>
            }
        </AlertContext.Provider>
    )
}