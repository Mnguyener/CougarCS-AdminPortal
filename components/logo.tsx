import React from "react";
import styles from "../styles/Logo.module.css";
import { AspectRatio, Image } from '@mantine/core';


function Logo() {
    return (
        <div className={styles.divide}>
            <AspectRatio ratio={720/1084}  mx="lg">
                <Image width={70} src= "favicon.ico" alt="red cougar logo" ></Image>
            </AspectRatio>
        </div>
    );
}

export default Logo;