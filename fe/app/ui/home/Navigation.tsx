"use client"

import './Navigation.scss'
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { IconButton } from '@mui/material';
import ReorderIcon from '@mui/icons-material/Reorder';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Image from 'next/image';
export default function Navigation() {

    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    const NavIcons = styled('div')(({ theme }) => ({
        [theme.breakpoints.down("sm")]: {
            display: 'none'
        },
    }));

    const NavIconsMobile = styled('div')(({ theme }) => ({
        [theme.breakpoints.up("sm")]: {
            display: 'none'
        },
    }));

    return (
        <>
            <div className="nav-container">


                <div className='content-left'>
                    <img className='logo' src="/logo.png"></img>
                </div>

                <NavIcons>
                    <div className='content-right'>
                        <span>How to Study Together</span>
                        <span>Design a Study Universe</span>
                        <span>Community Event</span>
                        <span>About</span>
                        <button>Focusly</button>
                    </div>
                </NavIcons>

                <NavIconsMobile>
                    <div className='content-right'>
                        <IconButton className='mobile-btn' onClick={() => setIsOpenDrawer(!isOpenDrawer)}>
                            <ReorderIcon />
                        </IconButton>
                    </div>
                </NavIconsMobile>

                <Drawer open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
                    <div className='drawer-content'>
                        <button >How to study together</button>
                        <button >Design a Study Universe</button>
                        <button >Community Event</button>
                        <button >About</button>
                        <button>Focusly</button>
                    </div>
                </Drawer>

            </div>

        </>
    )
}