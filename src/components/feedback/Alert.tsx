'use client';

import React, { useEffect, useState } from "react";
import Icon from "../built-in/Icon";
import { IconButton } from "../inputs/Button";

export const enum AlertSeverity {
    'error',
    'warning',
    'info',
    'success',
} 

interface IAlertProps {
    children?: React.ReactNode,
    severity?: AlertSeverity,
    onClickOff?: () => void,
    last?: number
}

export default function Alert({
    severity = AlertSeverity.info,
    children,
    onClickOff,
    last,
}: IAlertProps) {
    let baseClass = "pl-4 p-2 flex items-center gap-2 rounded-md border-2 shadow-md animate-back-in-right";
    const [isShow, setIsShow] = useState(true);

    useEffect(() => {
        let id: NodeJS.Timeout;

        if (last) {
            id = setTimeout(() => {
                onClickOff?.();
                setIsShow(false);
            }, last * 1000);
        }

        return () => {
            clearTimeout(id)
        };
    }, []);
     
    return (
        <>
            {
                isShow ?
                    <div className={baseClass + bgColor.get(severity)}>
                        {icon.get(severity)}
                        {children}
                        <IconButton
                            icon="xmark"
                            size="sm"
                            onClick={onClickOff}
                        />
                    </div >
                    : null
            }
        </>
    );
}

const bgColor = new Map([
    [AlertSeverity.info, " bg-blue-50 border-blue-200"],
    [AlertSeverity.success, " bg-green-50 border-green-200"],
    [AlertSeverity.warning, " bg-orange-50 border-orange-200"],
    [AlertSeverity.error, " bg-red-50 border-red-200"],
]);

const icon = new Map([
    [AlertSeverity.info, <span className="w-6 text-center text-blue-500"><Icon name="info" size="lg" /></span>],
    [AlertSeverity.success, <span className="w-6 text-center text-green-500"><Icon name="check" size="lg" /></span>],
    [AlertSeverity.warning, <span className="w-6 text-center text-orange-500"><Icon name="triangle-exclamation" size="lg" /></span>],
    [AlertSeverity.error, <span className="w-6 text-center text-red-500"><Icon name="circle-exclamation" size="lg" /></span>],
]);
 