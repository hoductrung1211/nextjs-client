'use client';
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

const ModelContext = createContext<[Dispatch<SetStateAction<boolean>>, Dispatch<SetStateAction<JSX.Element>>]>([() => {}, () => {}]);

export default function useModel() {
    const setShowModel = useContext(ModelContext);
 

    return setShowModel;
}

export function ModelContainer({
    children
}: {
    children: React.ReactNode
}) {
    const [showModel, setShowModel] = useState(false);   
    const [dialog, setDialog] = useState(<></>);

    function onClick() {
        setShowModel(false);
    }

    return (
        <ModelContext.Provider value={[setShowModel, setDialog]}>
            <div className={showModel ? " h-screen overflow-y-hidden" : ""}>{children}</div>
            {showModel && 
                <section
                    // className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 animate-fade-in"
                    className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center overscroll-contain overflow-y-scroll"
                    // onClick={onClick}
                >
                    <div
                        className="animate-zoom-in z-20"
                        onClick={e => e.stopPropagation()}>
                        {dialog}
                    </div>
                    <section
                        className="absolute top-0 left-0 w-full h-full backdrop-blur-xs bg-black/50"
                        onClick={onClick}
                        onScroll={e => e.preventDefault()}
                    ></section>
                </section>
            }
        </ModelContext.Provider>
    )
}