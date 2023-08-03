
'use client'

import { Environment } from "@react-three/drei"


const Sa3DHouse = ({anime}: {anime:{start:number,end:number,prog:number}}) => {



    return (
        <>
            <Environment preset="sunset" background blur={0.0}/>
        </>
    )

}

export default Sa3DHouse

