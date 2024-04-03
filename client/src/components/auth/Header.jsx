import React, { Suspense, lazy, useState } from 'react';
import { Box, Tooltip, IconButton as MuiIconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import NoticicaionsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';
import { BiMessage } from 'react-icons/bi';
const Search = lazy(() => import("../specific/Search"))
const Noticicaion = lazy(() => import("../specific/Notification"))
const NewGroup = lazy(() => import("../specific/NewGroup"))

const Header = () => {

    const [isMobile, setIsMobile] = useState(false)
    const [isSearch, setIsSearch] = useState(false)
    const [isNewGroup, setIsNewGroup] = useState(false)
    const [isNotification, setIsNotification] = useState(false)
    const naviagte = useNavigate()

    const handleMobile = () => {
        setIsMobile((prev) => !prev)
    }

    const openSearchDialog = () => {
        setIsSearch(((prev) => !prev))
    }

    const openNewGroup = () => {
        setIsNewGroup(((prev) => !prev))
    }

    const openNotification = () => {
        setIsNotification(((prev) => !prev))
    }

    const navigateToGroup = () => {
        naviagte("/groups")
    }

    const handleLogout = () => {

    }

    const CustomIconButton = ({ title, icon, onClick }) => {
        return (
            <Tooltip title={title}>
                <MuiIconButton size='large' onClick={onClick}>
                    {icon}
                </MuiIconButton>
            </Tooltip>
        )
    }

    return (
        <>
            <div className='flex justify-between items-center px-5 border-b'>
                <div><h4 className='text-[#FFA429] font-bold'>Chat App</h4></div>
                <Box>
                    <CustomIconButton title={"Search"} icon={<SearchIcon />} onClick={openSearchDialog} />
                    <CustomIconButton title={"New Group"} icon={<AddIcon />} onClick={openNewGroup} />
                    <CustomIconButton title={"Manage Groups"} icon={<GroupIcon />} onClick={navigateToGroup} />
                    <CustomIconButton title={"Noticicaions"} icon={<NoticicaionsIcon />} onClick={openNotification} />
                    <CustomIconButton title={"Logout"} icon={<LogoutIcon />} onClick={handleLogout} />
                </Box>
            </div>

            {isSearch && <Suspense fallback={<div>Loading...</div>}>
                <Search />
            </Suspense>}

            {isNewGroup && <Suspense fallback={<div>Loading...</div>}>
                <NewGroup />
            </Suspense>}

            {isNotification && <Suspense fallback={<div>Loading...</div>}>
                <Noticicaion />
            </Suspense>}
        </>
    )
}

export default Header;
