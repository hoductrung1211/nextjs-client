'use client';
import Icon from "@/src/components/built-in/Icon";
import { SectionText } from "@/src/components/built-in/Typography";
import TextFieldGroup from "@/src/components/inputs/TextFieldGroup";
import Image from "next/image";
import { ChangeEvent, HTMLInputTypeAttribute, useState } from "react";

export default function Page() {
    return (
        <main className=" mx-auto w-[1200px] flex flex-col gap-5 ">
            <header className="h-20 px-5 flex items-end ">
                <SectionText>Edit Profile</SectionText>
            </header>
            <main className="h-full flex items-start gap-4">
                <AvatarSection />
                <PersonalInfoSection />
            </main>
        </main>
    )
}

function AvatarSection() {
    const [value, setValue] = useState<File>();

    return (
        <section className="w-1/3 py-20 rounded-lg bg-white">
            <div className="mx-auto w-56 h-56 p-3 border shadow-sm rounded-full">
                <label
                    htmlFor="file-upload"
                    className="relative w-full h-full flex rounded-full  text-dark-light cursor-pointer overflow-hidden group">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full group-hover:opacity-80 hover:bg-gray-200 opacity-0 flex flex-col justify-center items-center gap-5 z-20 transition">
                        <span className="text-xl"><Icon name="camera" size="2xl" /></span>
                        <p className="text-sm">Upload photo</p>
                    </div>
                    <div className="relative w-full flex items-center justify-center">
                        <Image 
                            className="object-cover"
                            src={value ? URL.createObjectURL(value) : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/934px-Logo_of_Twitter.svg.png"}
                            // src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/934px-Logo_of_Twitter.svg.png"
                            alt=""
                            fill
                        />
                    </div>
                    <input
                        className="hidden"
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        onChange={e => {
                            const file = e.target.files?.[0];

                            if (file && file?.type.includes("image"))
                                setValue(e.target.files?.[0]);
                        }}
                    />
                </label>
            </div>
        </section>
    )
}

interface ITextField {
    [key: string]: {
        placeholder: string,
        type?: HTMLInputTypeAttribute
        value: string
    }
}

function PersonalInfoSection() {
    const [textFields, setTextFields] = useState<ITextField>({
        "firstName": { placeholder: "First Name", value: "" },
        "lastName": { placeholder: "Last Name", value: "" },
        "email": { placeholder: "Email", type: "email", value: "" },
        "date": { placeholder: "Date", type: "date", value: "" },
    });

    return (
        <section className="w-2/3 p-5 grid grid-cols-2 gap-5 rounded-lg bg-white">
            {
                Object.keys(textFields).map((key: string) => 
                    <TextFieldGroup
                        key={key}
                        name={key}
                        type={textFields[key].type ?? "text"}
                        placeholder={textFields[key].placeholder}
                        value={textFields[key].value}
                        onChange={(value) => {
                            setTextFields({
                                ...textFields,
                                [key]: {
                                    ...textFields[key],
                                    value
                                }
                            })
                        }}
                    />
                )
            }
        </section>
    )
}