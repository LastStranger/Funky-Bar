import React, {useLayoutEffect, useRef} from 'react';
import './index.css';

const FancyBar:React.FC =() => {
    const idRef:any = useRef();
    useLayoutEffect(() => {
        let progress = document.getElementsByClassName('scrollbar')[0] as HTMLElement;
        console.log(progress, 'progress');
        window.onscroll = function() {
            cancelAnimationFrame(idRef.current);
            // @ts-ignore
            let documentHeight = document.body.scrollHeight - window.innerHeight;
            // @ts-ignore
            let progressHeight = (window.scrollY / documentHeight) *100;
            // @ts-ignore
            idRef.current = requestAnimationFrame(() =>{
                if(progress){
                    // @ts-ignore
                    progress?.style.height = progressHeight + '%';
                }
            })
        };
        return () => {
            window.onscroll = null;
        }
    }, []);

    return (
        <>
            <div className="scrollbar"/>
            <div className="scrollPath" />
        </>
    );
};

export default FancyBar;
