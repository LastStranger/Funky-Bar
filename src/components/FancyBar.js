import React, { useLayoutEffect, memo } from 'react';
import css from './fancyBar.css';

let id = null;
const FancyBar = memo(() => {
    useLayoutEffect(() => {
        let progress = document.getElementsByClassName(css.scrollbar)[0];
        window.onscroll = function() {
            cancelAnimationFrame(id);
            let documentHeight = document.body.scrollHeight - window.innerHeight;
            let progressHeight = (window.scrollY / documentHeight) *100;
            id = requestAnimationFrame(() =>{
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
}, () => true);

export default FancyBar;
