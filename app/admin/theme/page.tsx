"use client";
import { createClient } from "@/utils/supabase/client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

function PageComponent() {
    const router = useRouter();
    const supabase = createClient();

    const [primary, setPrimary] = useState('#201240');
    const [primaryLight, setPrimaryLight] = useState('#403260');
    const [primaryDark, setPrimaryDark] = useState('#100120');
    const [secondary, setSecondary] = useState('#4F3D70');
    const [secondaryLight, setSecondaryLight] = useState('#6F5D90');
    const [secondaryDark, setSecondaryDark] = useState('#2F1D50');
    const [error, setError] = useState('#862117');
    const [errorLight, setErrorLight] = useState('#C44C4C');
    const [errorDark, setErrorDark] = useState('#5C0D0D');
    const [changed, setChanged] = useState(false);
    const [success, setSuccess] = useState('#00C9A6');
    const [successLight, setSuccessLight] = useState('#20E9C6');
    const [successDark, setSuccessDark] = useState('#00A986');
    const [warning, setWarning] = useState('#E17558');
    const [warningLight, setWarningLight] = useState('#E39578');
    const [warningDark, setWarningDark] = useState('#C15538');
    const [info, setInfo] = useState('#222140');
    const [infoLight, setInfoLight] = useState('#424260');
    const [infoDark, setInfoDark] = useState('#020120');
    const [saving, setSaving] = useState(false);

    const getData = async () => {
        var primaryConfig = await getColorConfig('primary');
        setPrimary(primaryConfig.value);
        var primaryLightConfig = await getColorConfig('primary-light');
        setPrimaryLight(primaryLightConfig.value);
        var primaryDarkConfig = await getColorConfig('primary-dark');
        setPrimaryDark(primaryDarkConfig.value);
        var secondaryConfig = await getColorConfig('secondary');
        setSecondary(secondaryConfig.value);
        var secondaryLightConfig = await getColorConfig('secondary-light');
        setSecondaryLight(secondaryLightConfig.value);
        var secondaryDarkConfig = await getColorConfig('secondary-dark');
        setSecondaryDark(secondaryDarkConfig.value);
        var errorConfig = await getColorConfig('error');
        setError(errorConfig.value);
        var errorLightConfig = await getColorConfig('error-light');
        setErrorLight(errorLightConfig.value);
        var errorDarkConfig = await getColorConfig('error-dark');
        setErrorDark(errorDarkConfig.value);
        var successConfig = await getColorConfig('success');
        setSuccess(successConfig.value);
        var successLightConfig = await getColorConfig('success-light');
        setSuccessLight(successLightConfig.value);
        var successDarkConfig = await getColorConfig('success-dark');
        setSuccessDark(successDarkConfig.value);
        var warningConfig = await getColorConfig('warning');
        setWarning(warningConfig.value);
        var warningLightConfig = await getColorConfig('warning-light');
        setWarningLight(warningLightConfig.value);
        var warningDarkConfig = await getColorConfig('warning-dark');
        setWarningDark(warningDarkConfig.value);
        var infoConfig = await getColorConfig('info');
        setInfo(infoConfig.value);
        var infoLightConfig = await getColorConfig('info-light');
        setInfoLight(infoLightConfig.value);
        var infoDarkConfig = await getColorConfig('info-dark');
        setInfoDark(infoDarkConfig.value);
    }

    const getColorConfig = async (name: string) => {
        try {
            const response = await fetch(`/api/admin/interface-configs?name=${name}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to call GET request');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw new Error('Failed to call GET request');
        }
    }

    const setColorConfig = async (name: string, value:string) => {
        try {
            const response = await fetch(`/api/admin/interface-configs`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, value }),
            });

            if (!response.ok) {
                throw new Error('Failed to call GET request');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw new Error('Failed to call GET request');
        }
    }


    const save = async () => {
        setSaving(true);
        await Promise.all([
            setColorConfig('primary', primary),
            setColorConfig('primary-light', primaryLight),
            setColorConfig('primary-dark', primaryDark),
            setColorConfig('secondary', secondary),
            setColorConfig('secondary-light', secondaryLight),
            setColorConfig('secondary-dark', secondaryDark),
            setColorConfig('error', error),
            setColorConfig('error-light', errorLight),
            setColorConfig('error-dark', errorDark),
            setColorConfig('success', success),
            setColorConfig('success-light', successLight),
            setColorConfig('success-dark', successDark),
            setColorConfig('warning', warning),
            setColorConfig('warning-light', warningLight),
            setColorConfig('warning-dark', warningDark),
            setColorConfig('info', info),
            setColorConfig('info-light', infoLight),
            setColorConfig('info-dark', infoDark)
        ]);
        window.location.reload();
    }


    useEffect(() => {
        getData();
    }, []);

    const colorChange = async ()=>{
        setChanged(true)
        document.documentElement.style.setProperty(`--color-primary`, primary);
        document.documentElement.style.setProperty(`--color-primary-light`, primaryLight);
        document.documentElement.style.setProperty(`--color-primary-dark`, primaryDark);
        document.documentElement.style.setProperty(`--color-secondary`, secondary);
        document.documentElement.style.setProperty(`--color-secondary-light`, secondaryLight);
        document.documentElement.style.setProperty(`--color-secondary-dark`, secondaryDark);
        document.documentElement.style.setProperty(`--color-error`, error);
        document.documentElement.style.setProperty(`--color-error-light`, errorLight);
        document.documentElement.style.setProperty(`--color-error-dark`, errorDark);
        document.documentElement.style.setProperty(`--color-success`, success);
        document.documentElement.style.setProperty(`--color-success-light`, successLight);
        document.documentElement.style.setProperty(`--color-success-dark`, successDark);
        document.documentElement.style.setProperty(`--color-warning`, warning);
        document.documentElement.style.setProperty(`--color-warning-light`, warningLight);
        document.documentElement.style.setProperty(`--color-warning-dark`, warningDark);
        document.documentElement.style.setProperty(`--color-info`, info);
        document.documentElement.style.setProperty(`--color-info-light`, infoLight);
        document.documentElement.style.setProperty(`--color-info-dark`, infoDark);
    }

    return (
        <div className="w-5/6 h-1/2 text-white lg:flex justify-center items-center animate-in overflow-y-hidden">
            <div className=" w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 rounded-md bg-primary opacity-90 p-12 m-1 mt-24 shadow-lg backdrop-blur">
                <div className="w-full relative">
                    <span className="text-2xl pb-4">Color Settings</span>
                    <button onClick={()=>{router.push("/admin")}} className={`float-right bg-error hover:bg-error-light ml-2 rounded p-2`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                        className="md:hidden size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                        </svg>
                        <span className="hidden md:block">Back</span>
                    </button>
                    <button onClick={save} disabled={!changed} 
                    className={`float-right ${changed ? "bg-success hover:bg-success-light" : "bg-success-dark"} rounded p-2`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                        className="md:hidden size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className="hidden md:block">{saving?"Saving...":"Save"}</span>
                    </button>
                </div>
                <div className="w-full relative">
                    <label htmlFor="primaryInput">Primary Color</label>
                    <div className="flex">
                        <input
                            value={primary}
                            required
                            type="text"
                            className="w-full rounded-md rounded-r-none bg-info-bright p-2 text-black shadow-lg"
                            onChange={(e) => { setPrimary(e.target.value); colorChange(); }}
                            placeholder="Choose the primary color"
                        />
                        <input
                            value={primary}
                            onChange={(e) => { setPrimary(e.target.value); colorChange(); }}
                            required
                            
                            type="color"
                            className="w-10 h-10 rounded-r p-1"
                        />
                    </div>
                </div>
                <div className="w-full relative">
                    <label htmlFor="primaryInput">Primary Light Color</label>
                    <div className="flex">
                        <input
                            value={primaryLight}
                            required
                            type="text"
                            className="w-full rounded-md rounded-r-none bg-info-bright p-2 text-black shadow-lg"
                            onChange={(e) => { setPrimaryLight(e.target.value); colorChange(); }}
                            placeholder="Choose the primary color"
                        />
                        <input
                            value={primaryLight}
                            onChange={(e) => { setPrimaryLight(e.target.value); colorChange(); }}
                            required
                            
                            type="color"
                            className="w-10 h-10 rounded-r p-1"
                        />
                    </div>
                </div>
                <div className="w-full relative">
                    <label htmlFor="primaryInput">Primary Dark Color</label>
                    <div className="flex">
                        <input
                            value={primaryDark}
                            required
                            type="text"
                            className="w-full rounded-md rounded-r-none bg-info-bright p-2 text-black shadow-lg"
                            onChange={(e) => { setPrimaryDark(e.target.value); colorChange(); }}
                            placeholder="Choose the primary color"
                        />
                        <input
                            value={primaryDark}
                            onChange={(e) => { setPrimaryDark(e.target.value); colorChange(); }}
                            required
                            
                            type="color"
                            className="w-10 h-10 rounded-r p-1"
                        />
                    </div>
                </div>









                <div className="w-full relative">
                    <label htmlFor="primaryInput">Secondary Color</label>
                    <div className="flex">
                        <input
                            value={secondary}
                            required
                            type="text"
                            className="w-full rounded-md rounded-r-none bg-info-bright p-2 text-black shadow-lg"
                            onChange={(e) => { setSecondary(e.target.value); colorChange(); }}
                            placeholder="Choose the primary color"
                        />
                        <input
                            value={secondary}
                            onChange={(e) => { setSecondary(e.target.value); colorChange(); }}
                            required
                            
                            type="color"
                            className="w-10 h-10 rounded-r p-1"
                        />
                    </div>
                </div>
                <div className="w-full relative">
                    <label htmlFor="primaryInput">Secondary Dark Color</label>
                    <div className="flex">
                        <input
                            value={secondaryDark}
                            required
                            type="text"
                            className="w-full rounded-md rounded-r-none bg-info-bright p-2 text-black shadow-lg"
                            onChange={(e) => { setSecondaryDark(e.target.value); colorChange(); }}
                            placeholder="Choose the primary color"
                        />
                        <input
                            value={secondaryDark}
                            onChange={(e) => { setSecondaryDark(e.target.value); colorChange(); }}
                            required
                            
                            type="color"
                            className="w-10 h-10 rounded-r p-1"
                        />
                    </div>
                </div>
                <div className="w-full relative">
                    <label htmlFor="primaryInput">Secondary Light Color</label>
                    <div className="flex">
                        <input
                            value={secondaryLight}
                            required
                            type="text"
                            className="w-full rounded-md rounded-r-none bg-info-bright p-2 text-black shadow-lg"
                            onChange={(e) => { setSecondaryLight(e.target.value); colorChange(); }}
                            placeholder="Choose the primary color"
                        />
                        <input
                            value={secondaryLight}
                            onChange={(e) => { setSecondaryLight(e.target.value); colorChange(); }}
                            required
                            
                            type="color"
                            className="w-10 h-10 rounded-r p-1"
                        />
                    </div>
                </div>









                <div className="w-full relative">
                    <label htmlFor="primaryInput">Error Color</label>
                    <div className="flex">
                        <input
                            value={error}
                            required
                            type="text"
                            className="w-full rounded-md rounded-r-none bg-info-bright p-2 text-black shadow-lg"
                            onChange={(e) => { setError(e.target.value); colorChange(); }}
                            placeholder="Choose the primary color"
                        />
                        <input
                            value={error}
                            onChange={(e) => { setError(e.target.value); colorChange(); }}
                            required
                            
                            type="color"
                            className="w-10 h-10 rounded-r p-1"
                        />
                    </div>
                </div>
                <div className="w-full relative">
                    <label htmlFor="primaryInput">Error Dark Color</label>
                    <div className="flex">
                        <input
                            value={errorDark}
                            required
                            type="text"
                            className="w-full rounded-md rounded-r-none bg-info-bright p-2 text-black shadow-lg"
                            onChange={(e) => { setErrorDark(e.target.value); colorChange(); }}
                            placeholder="Choose the primary color"
                        />
                        <input
                            value={errorDark}
                            onChange={(e) => { setErrorDark(e.target.value); colorChange(); }}
                            required
                            
                            type="color"
                            className="w-10 h-10 rounded-r p-1"
                        />
                    </div>
                </div>
                <div className="w-full relative">
                    <label htmlFor="primaryInput">Error Light Color</label>
                    <div className="flex">
                        <input
                            value={errorLight}
                            required
                            type="text"
                            className="w-full rounded-md rounded-r-none bg-info-bright p-2 text-black shadow-lg"
                            onChange={(e) => { setErrorLight(e.target.value); colorChange(); }}
                            placeholder="Choose the primary color"
                        />
                        <input
                            value={errorLight}
                            onChange={(e) => { setErrorLight(e.target.value); colorChange(); }}
                            required
                            
                            type="color"
                            className="w-10 h-10 rounded-r p-1"
                        />
                    </div>
                </div>









                <div className="w-full relative">
                    <label htmlFor="primaryInput">Success Color</label>
                    <div className="flex">
                        <input
                            value={success}
                            required
                            type="text"
                            className="w-full rounded-md rounded-r-none bg-info-bright p-2 text-black shadow-lg"
                            onChange={(e) => { setSuccess(e.target.value); colorChange(); }}
                            placeholder="Choose the primary color"
                        />
                        <input
                            value={success}
                            onChange={(e) => { setSuccess(e.target.value); colorChange(); }}
                            required
                            
                            type="color"
                            className="w-10 h-10 rounded-r p-1"
                        />
                    </div>
                </div>
                <div className="w-full relative">
                    <label htmlFor="primaryInput">Success Dark Color</label>
                    <div className="flex">
                        <input
                            value={successDark}
                            required
                            type="text"
                            className="w-full rounded-md rounded-r-none bg-info-bright p-2 text-black shadow-lg"
                            onChange={(e) => { setSuccessDark(e.target.value); colorChange(); }}
                            placeholder="Choose the primary color"
                        />
                        <input
                            value={successDark}
                            onChange={(e) => { setSuccessDark(e.target.value); colorChange(); }}
                            required
                            
                            type="color"
                            className="w-10 h-10 rounded-r p-1"
                        />
                    </div>
                </div>
                <div className="w-full relative">
                    <label htmlFor="primaryInput">Success Light Color</label>
                    <div className="flex">
                        <input
                            value={successLight}
                            required
                            type="text"
                            className="w-full rounded-md rounded-r-none bg-info-bright p-2 text-black shadow-lg"
                            onChange={(e) => { setSuccessLight(e.target.value); colorChange(); }}
                            placeholder="Choose the primary color"
                        />
                        <input
                            value={successLight}
                            onChange={(e) => { setSuccessLight(e.target.value); colorChange(); }}
                            required
                            
                            type="color"
                            className="w-10 h-10 rounded-r p-1"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageComponent;



