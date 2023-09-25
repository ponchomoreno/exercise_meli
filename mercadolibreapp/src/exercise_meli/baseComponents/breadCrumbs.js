import React, { Children } from "react";

import Breadcrumbs from '@mui/material/Breadcrumbs';

export const BreadCrumbsMeli = ({children}) => {
    return (
        <Breadcrumbs separator='›' aria-label="breadcrumb">
        {children}
        </Breadcrumbs>
    )
}