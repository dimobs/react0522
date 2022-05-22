import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h1><NavLink className="home" to="/">Home</NavLink></h1>
            <nav>
                {/* <NavLink activeClassName="active-navigation-link" to="/games">All games</NavLink> */}
            <h1><NavLink activeClassName="active-navigation-link" to="/toggle">1 Toggle</NavLink></h1>
            <h1><NavLink activeClassName="active-navigation-link" to="/timeout">2Timeout</NavLink></h1>
            <h1><NavLink activeClassName="active-navigation-link" to="/debounce">3 Debounce</NavLink></h1>
            <h1><NavLink activeClassName="active-navigation-link" to="/UpdateEffectComponent">4 UpdateEffectComponent</NavLink></h1>
            <h1><NavLink activeClassName="active-navigation-link" to="/ArrayComponent">5 ArrayComponent</NavLink></h1>
            <h1><NavLink activeClassName="active-navigation-link" to="/PreviousComponent">6 PreviousComponent</NavLink></h1>
            <h1><NavLink activeClassName="active-navigation-link" to="/StateWithHistoryComponent">7-StateWithHistoryComponent</NavLink></h1>
            <h1><NavLink activeClassName="active-navigation-link" to="/StorageComponent">8 StorageComponent</NavLink></h1>
            <h1><NavLink activeClassName="active-navigation-link" to="/AsyncComponent">9 AsyncComponent</NavLink></h1>
            <h1><NavLink activeClassName="active-navigation-link" to="/FetchComponent">10 FetchComponent</NavLink></h1>
            <h1><NavLink activeClassName="active-navigation-link" to="/ScriptComponent">11 ScriptComponent</NavLink></h1>
            <h1><NavLink activeClassName="active-navigation-link" to="/DeepCompareEffectComponent">12 DeepCompareEffectComponent</NavLink></h1>
            <h1><NavLink activeClassName="active-navigation-link" to="/EventListenerComponent">13 EventListenerComponent</NavLink></h1>
            <h1><NavLink activeClassName="active-navigation-link" to="/OnScreenComponentComponent">14 OnScreenComponentComponent</NavLink></h1>
            <h1><NavLink activeClassName="active-navigation-link" to="/WindowSizeComponent">15 WindowSizeComponent</NavLink></h1>
            <h1><NavLink activeClassName="active-navigation-link" to="/MediaQueryComponent">16 MediaQueryComponent</NavLink></h1>
            <h1><NavLink activeClassName="active-navigation-link" to="/GeolocationComponent">17 GeolocationComponent</NavLink></h1>
            <h1><NavLink activeClassName="active-navigation-link" to="/StateWithValidationComponent">18 StateWithValidationComponent</NavLink></h1>
            <h1><NavLink activeClassName="active-navigation-link" to="/SizeComponent">19 SizeComponent</NavLink></h1>
            <h1><NavLink activeClassName="active-navigation-link" to="/EffectOnceComponent">20 EffectOnceComponent</NavLink></h1>
            <h1><NavLink activeClassName="active-navigation-link" to="/ClickOutsideComponent">21 ClickOutsideComponent</NavLink></h1>
            <h1><NavLink activeClassName="active-navigation-link" to="/DarkModeComponent">22 DarkModeComponent</NavLink></h1>
            {/* <h1><NavLink activeClassName="active-navigation-link" to="/CopyToClipboardComponent">23 CopyToClipboardComponent</NavLink></h1> */}
            <h1><NavLink activeClassName="active-navigation-link" to="/TranslationComponent">TranslationComponent</NavLink></h1>
            <h1><NavLink activeClassName="active-navigation-link" to="/OnlineStatusComponent">OnlineStatusComponent</NavLink></h1>
            <h1><NavLink activeClassName="active-navigation-link" to="/RenderCountComponent">RenderCountComponent</NavLink></h1>
            <h1><NavLink activeClassName="active-navigation-link" to="/OnlineStatusComponent">OnlineStatusComponent</NavLink></h1>
            <h1><NavLink activeClassName="active-navigation-link" to="/DebugInformationComponent">DebugInformationComponent</NavLink></h1>
            <h1><NavLink activeClassName="active-navigation-link" to="/HoverComponent">HoverComponent</NavLink></h1>
            <h1><NavLink activeClassName="active-navigation-link" to="/LongPressComponent">LongPressComponent</NavLink></h1>

            </nav>SizeComponent
        </header>
    );
};

export default Header;