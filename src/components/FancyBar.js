import React, { useLayoutEffect, memo } from 'react';
import css from './fancyBar.css';

let id = null;
const FancyBar = memo(() => {
    useLayoutEffect(() => {
        let progress = document.getElementById(css.scrollbar);
        window.onscroll = function() {
            console.log('haha')
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
            <div id={css.scrollbar}/>
            <div id={css.scrollPath} />
        </>
    );
}, () => true);

export default FancyBar;
