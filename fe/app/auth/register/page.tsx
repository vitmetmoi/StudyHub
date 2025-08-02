'use client'
import { useGetUserByIdMutation, useRegisterMutation } from "@/app/services/userAPI";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { updateUserData } from "@/lib/features/userSlice";
import Link from 'next/link'
import { GoogleLogin } from '@react-oauth/google';
import { useAuthByGoogleOAuthMutation } from "@/app/services/userAPI";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
export default function page() {

    type formStateType = {
        email: string,
        userName: string,
        password: string,
        confirmPassword: string
    }

    const initState = {
        email: '',
        userName: '',
        password: '',
        confirmPassword: '',
    }

    const [registerService, { data, isLoading }] = useRegisterMutation()
    const [authByGoogleService, { data: oauthData, isLoading: oauthIsLoading }] = useAuthByGoogleOAuthMutation()
    const [formState, setFormState] = useState<formStateType>(initState);
    const dispath = useAppDispatch();
    const userData = useAppSelector((state) => (state.users))
    const router = useRouter();


    console.log('userData: ', userData)
    useEffect(() => {

    }, [])

    useEffect(() => {
        if (data) {
            console.log(data);
            dispath(updateUserData(data));
        }
    }, [isLoading])

    useEffect(() => {
        console.log(oauthData);
        if (oauthData && oauthData.EC === 0) {
            dispath(updateUserData(oauthData.DT.data));
            router.push('/')
            toast('register completed!')

        }
    }, [oauthIsLoading])

    const handleOnClickSubmit = async () => {
        if (formState.password === formState.confirmPassword) {
            console.log('true');
            await registerService(formState);
        }

        else {

        }

    }

    const handleRegisterByOAuth = async (credentialResponse: object) => {
        // console.log('credential', credentialResponse)

        if (credentialResponse) {
            console.log('fired')
            await authByGoogleService(credentialResponse);
        }

        else {
            console.log('error')
        }

    }
    console.log(process.env.GOOGLE_CLIENT_ID)
    return (
        <>

            <div className="flex m-auto mt-[50] w-fit min-h-full flex-col justify-center px-6 py-12 lg:px-8 shadow-lg">
                <div className="flex flex-col justify-center">
                    <Link href={'/'}>
                        <img
                            src='/logo.png'
                            className="mx-auto h-10 w-auto"
                        ></img>
                    </Link>

                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Register to our services</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={e => { e.preventDefault(); }} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formState.email}
                                    onChange={(event) => { setFormState({ ...formState, email: event.target.value }) }}
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="userName" className="block text-sm/6 font-medium text-gray-900">
                                User Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="userName"
                                    name="userName"
                                    type="text"
                                    value={formState.userName}
                                    onChange={(event) => { setFormState({ ...formState, userName: event.target.value }) }}
                                    required
                                    autoComplete="userName"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={formState.password}
                                    onChange={(event) => { setFormState({ ...formState, password: event.target.value }) }}
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Confirm password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={formState.confirmPassword}
                                    onChange={(event) => { setFormState({ ...formState, confirmPassword: event.target.value }) }}
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                onClick={() => handleOnClickSubmit()}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>

                            <p className="mt-10 text-center text-sm/6 text-gray-500">
                                Or
                            </p>

                            <div className="flex justify-center align-center gap-3 mt-3">
                                <GoogleLogin
                                    onSuccess={handleRegisterByOAuth}
                                    onError={() => console.log('Login Failed')}
                                />
                                {/* <button onClick={() => { }}><img className="size-[50] object-center" src='https://i.pinimg.com/1200x/60/41/99/604199df880fb029291ddd7c382e828b.jpg'></img></button> */}
                            </div>

                            <p className="mt-10 text-center text-sm/6 text-gray-500">
                                Already have an account?{' '}

                                <Link className="font-semibold text-indigo-600 hover:text-indigo-500" href={'/auth/login'}>Sign in now to Focusly</Link>

                            </p>
                        </div>
                    </form>
                </div>

                <div>

                </div>
            </div>
        </>
    );
}
