import './styles/global.css';
import './styles/navBar.css';
import './styles/section-head.css'
import './styles/section-about.css'
import './styles/section-reviews.css'
import './styles/section-contact.css'
import './styles/footer.css'
import './styles/app/app.css'

import {displayDateData, displayTimeData} from './services/index';;

const init = ():void => {
    setInterval(displayTimeData, 1000);
    setInterval(displayDateData, 1000); //1 day
    


}

init();