import React, { Suspense, lazy, useState } from 'react';
import { Box, Tooltip, IconButton as MuiIconButton, Backdrop } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';

// Importing components lazily
const Search = lazy(() => import("../specific/Search"));
const Notification = lazy(() => import("../specific/Notification"));
const NewGroup = lazy(() => import("../specific/NewGroup"));

const Header = () => {
    const [isSearch, setIsSearch] = useState(false);
    const [isNewGroup, setIsNewGroup] = useState(false);
    const [isNotification, setIsNotification] = useState(false);
    const navigate = useNavigate();

    const openSearchDialog = () => {
        setIsSearch(prev => !prev);
    };

    const openNewGroup = () => {
        setIsNewGroup(prev => !prev);
    };

    const openNotification = () => {
        setIsNotification(prev => !prev);
    };

    const navigateToGroup = () => {
        navigate("/groups");
    };

    const handleLogout = () => {
        // Handle logout functionality
    };

    const CustomIconButton = ({ title, icon, onClick }) => {
        return (
            <Tooltip title={title}>
                <MuiIconButton size='large' onClick={onClick}>
                    {icon}
                </MuiIconButton>
            </Tooltip>
        );
    };

    return (
        <>
            <div className='flex justify-between items-center px-5 border-b'>
                <div><h4 className='text-[#FFA429] font-bold'>Chat App</h4></div>
                <Box>
                    <CustomIconButton title={"Search"} icon={<SearchIcon />} onClick={openSearchDialog} />
                    <CustomIconButton title={"New Group"} icon={<AddIcon />} onClick={openNewGroup} />
                    <CustomIconButton title={"Manage Groups"} icon={<GroupIcon />} onClick={navigateToGroup} />
                    <CustomIconButton title={"Notifications"} icon={<NotificationsIcon />} onClick={openNotification} />
                    <CustomIconButton title={"Logout"} icon={<LogoutIcon />} onClick={handleLogout} />
                </Box>
            </div>

            <Suspense fallback={null}>
                {isSearch && <Search />}
                {isNewGroup && <NewGroup />}
                {isNotification && <Notification />}
            </Suspense>

            {isSearch || isNewGroup || isNotification ? <Backdrop open /> : null}
        </>
    );
};

export default Header;
