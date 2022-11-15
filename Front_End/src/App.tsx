import {Redirect, Route} from 'react-router-dom';
import {IonApp, IonRouterOutlet, setupIonicReact} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/Login'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Signup from "./pages/Signup";

setupIonicReact();

const App: React.FC = () => (
    // <div style={{ backgroundColor: "lightgrey", textAlign: "center" }}>
    // <IonApp>
    //   <IonReactRouter>
    //     <IonRouterOutlet>
    //       <HashRouter basename="/home">
    //         <Home/>
    //       </HashRouter>
    //       <HashRouter basename="/login">
    //         <Login/>
    //       </HashRouter>
    //       <HashRouter basename="/signup">
    //         <Signup/>
    //       </HashRouter>
    //     </IonRouterOutlet>
    //   </IonReactRouter>
    // </IonApp >
    <IonApp>
        <IonReactRouter>
            <IonRouterOutlet>
                <Route path="/home" component={Home}/>
                <Redirect exact from="/" to="/home"/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
            </IonRouterOutlet>
        </IonReactRouter>
    </IonApp>
    // </div>
);

export default App;
