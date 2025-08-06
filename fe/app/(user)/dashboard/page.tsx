"use client"

import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/lib/hook"
import DashBoardNavigation from "@/app/ui/dashboard/DashBoardNavigation";

export default function page() {
    const dispatch = useAppDispatch();
    const userData = useAppSelector((state) => state.users)
    useEffect(() => {
        console.log('dashboard data', userData);
    }, [])


    return (
        <div className="dashboard-container">
            <div className="navigation">
                <DashBoardNavigation />
            </div>
        </div>
    )
}