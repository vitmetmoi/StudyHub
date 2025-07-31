'use client'
import { useGetUserByIdMutation } from "@/app/services/userAPI";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { updateUserData } from "@/lib/features/userSlice";
import Link from "next/link";
export default function page() {

    const [getUserService, { data, isLoading }] = useGetUserByIdMutation()
    const dispath = useAppDispatch();
    const userData = useAppSelector((state) => (state.users))

    console.log('userData: ', userData)
    useEffect(() => {
        handleGetUser();
    }, [])

    useEffect(() => {
        if (data) {
            console.log(data);
            dispath(updateUserData(data));
        }
    }, [isLoading])


    const handleGetUser = async () => {
        await getUserService('68889f1b3247375c9f0524d5');
    }

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
            <div className="flex w-fit m-auto mt-[50] shadow-lg min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Link href={'/'}>
                        <img
                            alt="Your Company"
                            src="/logo.png"
                            className="mx-auto h-10 w-auto"
                        />
                    </Link>
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Do not have an account?{' '}

                        <Link className="font-semibold text-indigo-600 hover:text-indigo-500" prefetch={false} href="/auth/register">Sign up now to Focusly</Link>

                    </p>
                </div>
            </div>
        </>
    );
}
