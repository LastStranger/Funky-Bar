import React, {useLayoutEffect, memo, useRef, ReactComponentElement} from 'react';
import css from './fancyBar.css';

const FancyBar:React.FC =() => {
    const idRef:any = useRef();
    useLayoutEffect(() => {
        let progress = document.getElementsByClassName(css.scrollbar)[0] as HTMLElement;
        window.onscroll = function() {
            cancelAnimationFrame(idRef.current);
            let documentHeight = document.body.scrollHeight - window.innerHeight;
            let progressHeight = (window.scrollY / documentHeight) *100;
            idRef.current = requestAnimationFrame(() =>{
                progress.style.height = progressHeight + '%';
            })
        };
        return () => {
            window.onscroll = null;
        }
    }, []);

    return (
        <>
            <div className={css.scrollbar}/>
            <div className={css.scrollPath} />
        </>
    );
};

export default memo(FancyBar, () => true);

