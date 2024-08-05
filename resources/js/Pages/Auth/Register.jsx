import React, { useState, useEffect } from "react";
import { useForm, usePage } from "@inertiajs/react";
import Stage from "../../Components/Auth/Register/Stage";
import MainInput from "../../Components/Inputs/MainInput";
import FlashMessage from "../../Components/FlashMessage";
import { registerStages as stages } from "../../Data/registerStages";

export default function Register() {
    const [currentStage, setCurrentStage] = useState(1);
    const [flashMessage, setFlashMessage] = useState({ message: '', type: '' });
    const [stageAttempted, setStageAttempted] = useState({});
    const { errors: serverErrors } = usePage().props;

    const { data, setData, errors, post, processing } = useForm({
        forename: "", surname: "", email: "", phoneNumber: "", password: "",
        password_confirmation: "", addressLine1: "", addressLine2: "", city: "",
        state: "", postalCode: "", country: "",
    });

    const currentStageData = stages[currentStage - 1];

    const validateStage = () => {
        const currentStageFields = currentStageData.fields;
        return currentStageFields.every(field => 
            !field.required || data[field.name]?.trim()
        ) && (currentStage !== 2 || data.password === data.password_confirmation);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStageAttempted(prev => ({ ...prev, [currentStage]: true }));
        
        if (validateStage()) {
            if (currentStage < stages.length) {
                setCurrentStage(prev => prev + 1);
            } else {
                post("/auth/register");
            }
        } else {
            setFlashMessage({
                message: currentStage === 2 && data.password !== data.password_confirmation
                    ? "Passwords do not match. Please try again."
                    : "Please fill in all required fields before proceeding.",
                type: "error"
            });
        }
    };

    useEffect(() => {
        if (stageAttempted[currentStage]) {
            // Any additional checks or actions can be performed here
        }
    }, [data, errors, serverErrors, currentStage, stageAttempted]);

    return (
        <>
            <FlashMessage
                {...flashMessage}
                onClose={() => setFlashMessage({ message: '', type: '' })}
            />
            <div className="flex items-center justify-center min-h-screen container mx-auto">
                <div className="w-fit md:min-w-[890px]">
                    <img className="mx-auto" height="80" width="80" src="/images/default/branding/logo.webp" alt="Logo" />

                    <form onSubmit={handleSubmit} className="mt-10">
                        <div className="bg-surface rounded-3xl p-8">
                            <h1 className="text-lg font-medium">{currentStageData.title}</h1>
                            <h5 className="text-15 font-medium text-text-medium mt-3.5">{currentStageData.description}</h5>
                           
                            <div className="mt-10 grid md:grid-cols-2 gap-8">
                                {currentStageData.fields.map((field) => (
                                    <MainInput
                                        key={field.name}
                                        {...field}
                                        value={data[field.name]}
                                        onChange={(e) => setData(field.name, e.target.value)}
                                        error={stageAttempted[currentStage] ? (errors[field.name] || serverErrors[field.name]) : null}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-10">
                            <Stage stages={stages.length.toString()} stage={currentStage} />

                            <div className="flex gap-4">
                                <button
                                    type="button"
                                    className="bg-surface hover:bg-border transition py-2.5 px-10 rounded-lg font-medium text-15"
                                    onClick={() => setCurrentStage(prev => Math.max(1, prev - 1))}
                                    disabled={currentStage === 1}
                                >
                                    Back
                                </button>
                                <button
                                    type="submit"
                                    className="bg-accent text-background hover:bg-accent-light transition py-2.5 px-10 rounded-lg font-medium text-15"
                                    disabled={processing}
                                >
                                    {currentStage === stages.length ? "Register" : "Next"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
