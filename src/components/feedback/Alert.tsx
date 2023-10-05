'use client';

import React from "react";
import Icon from "../built-in/Icon";
import { IconButton } from "../inputs/Button";

interface IAlertProps {
    children?: React.ReactNode,
    severity?: 'error' | 'warning' | 'info' | 'success'
}

export default function Alert({
    severity = 'info',
    children
}: IAlertProps) {
    let baseClass = "pl-4 p-2 flex items-center gap-2 rounded-md border-2";

    return (
        <div className={baseClass + bgColor[severity]}>
            {icon[severity]}
            {children}
            <IconButton
                icon="xmark"
                size="sm"
                onClick={() => {

                }}
            />
        </div>
    )
}

const bgColor = {
    info: ' bg-blue-50 border-blue-200',
    success: ' bg-green-50 border-green-200',
    warning: ' bg-orange-50 border-orange-200',
    error: ' bg-red-50 border-red-200'
}

const icon = {
    info: <span className="w-6 text-center text-blue-500"><Icon name="info" size="lg" /></span>,
    success: <span className="w-6 text-center text-green-500"><Icon name="check" size="lg" /></span>,
    warning: <span className="w-6 text-center text-orange-500"><Icon name="triangle-exclamation" size="lg" /></span>,
    error: <span className="w-6 text-center text-red-500"><Icon name="circle-exclamation" size="lg" /></span>
}