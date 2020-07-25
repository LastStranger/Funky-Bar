// export {default as FancyBar} from './components/FancyBar.js';

import FancyBar from './components/FancyBar.js';
import React from "react";
import Temp from "./components/Temp";


const FunkyBar = () => <div><Temp name="Tom"/><FancyBar /></div>;

export default FunkyBar;
