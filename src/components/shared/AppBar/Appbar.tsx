// Library Imports
import React, { FC, useState } from 'react'
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import {
    AppBar,
    Box,
    Button,
    Grid,
    Toolbar,
    IconButton,
    Drawer,
    Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

// Local Imports
import styles from "@/styles/appbar.module.css";
import { data } from '@/utils/data'

const Appbar: FC = (props: any) => {
    const navItem = data.header;
    let { window } = props;
    const [openDrawer, setOpenDrawer] = useState(false);
    const container =
        window !== undefined ? () => window().document.body : undefined;
    const handleToggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };
    const [open, setOpen] = useState(false);

    const handleModal = () => {
        setOpen(!open);
    };

    const drawer = (
        <Box className={styles.mobileNav}>
            <Box
                className={styles.mobileLogo}
                sx={{ padding: { xs: "0 16px", sm: "0 24px" } }}
            >
                <Link href='/'>
                    {/* <Image
                src={assets.logoblack}
                alt='Logo'
                width={100}
                className={styles.logo}
              /> */}
                    Logo
                </Link>
                <IconButton aria-label='open drawer' onClick={handleToggleDrawer}>
                    <CloseRoundedIcon />
                </IconButton>
            </Box>
            <Box className={styles.mobilenavLinks}>
                {navItem.map((item, index) => {
                    return (
                        <Link
                            href={item.path}
                            key={index}
                            style={{ textDecoration: "none" }}>
                            <Button color='primary' variant='text'>
                                {item.name}
                            </Button>
                        </Link>
                    );
                })}
            </Box>
            <Box className={styles.navButtons}>
                <Button variant='contained' onClick={handleModal}>
                    Get a Demo
                </Button>
            </Box>
        </Box>
    );


    return (
        <React.Fragment>
            <Grid >
                <AppBar color='transparent' elevation={0} >
                    <Container maxWidth='lg' sx={{ padding: { xs: "0px", sm: "0px" } }}>
                        <Toolbar className={styles.toolbar}>
                            <Box>
                                <Link href='/' style={{ textDecoration: "none" }}>
                                    {/* <Image src={assets.logoblack} alt='Logo' width={110} /> */}
                                    Logo
                                </Link>
                            </Box>
                            <Box
                                sx={{
                                    display: { xs: "flex", sm: "block", md: "none" },
                                    textAlign: "center",
                                }}
                            >
                                <IconButton aria-label='open drawer' onClick={handleToggleDrawer}>
                                    <MenuRoundedIcon />
                                </IconButton>
                            </Box>
                            <Box
                                className={styles.navLinks}
                                sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
                            >
                                {navItem.map((item, index) => {
                                    return (
                                        <Link
                                            href={item.path}
                                            key={index}
                                            style={{ textDecoration: "none" }}
                                        >
                                            <Button color='primary' variant='text' sx={{ textTransform: 'none' }} >
                                                {item.name}
                                            </Button>
                                        </Link>
                                    );
                                })}
                            </Box>
                            <Box
                                className={styles.actions}
                                sx={{ display: { xs: "none", sm: "none", md: "flex" } }}

                            >
                                <Button variant='contained' onClick={handleModal}>
                                    Get a Demo
                                </Button>
                            </Box>
                        </Toolbar>
                        {/* Drawer */}
                        <Box component='nav'>
                            <Drawer
                                container={container}
                                variant='temporary'
                                anchor='top'
                                open={openDrawer}
                                onClose={handleToggleDrawer}
                                ModalProps={{
                                    keepMounted: false, // Better open performance on mobile.
                                }}
                                transitionDuration={700}
                                sx={{
                                    display: { xs: "block", sm: "block", md: "none" },
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </Box>
                    </Container>
                </AppBar>
            </Grid>

        </React.Fragment>
    )
}


export default Appbar