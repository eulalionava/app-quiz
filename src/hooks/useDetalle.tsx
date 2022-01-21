import React, { useState } from 'react'

export const useDetalle = ()=> {
    const [isActive, setIsActive] = useState(false);
    const [numActivos,setNumActivos] = useState(0);
    const [numDesactivos,setNumDesactivos] = useState(0);

    const activar =()=>{
        setIsActive(false);
        setNumActivos(numActivos+1);
    }

    const desactivar =()=>{
        setIsActive(true);
        setNumDesactivos(numDesactivos+1);
    }

    return {
        isActive,
        activar,
        desactivar,
        numActivos,
        numDesactivos
    }
}
