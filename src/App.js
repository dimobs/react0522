import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Header from './components/Header';
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import Register from "./components/Register";


import Togglecomponent from './components/1-useToggle/ToggleComponent';
import TimeoutComponent from './components/2-useTimeout/TimeoutComponent';
import DebounceComponent from './components/3-useDebounce/DebounceComponent';

import UpdateEffectComponent from "./components/4-useUpdateEffect/UpdateEffectComponent"
import ArrayComponent from "./components/5-useArray/ArrayComponent"
import PreviousComponent from "./components/6-usePrevious/PreviousComponent"
import StateWithHistoryComponent from "./components/7-useStateWithHistory/StateWithHistoryComponent"
import StorageComponent from "./components/8-useStorage/StorageComponent"
import AsyncComponent from "./components/9-useAsync/AsyncComponent"
import FetchComponent from "./components/10-useFetch/FetchComponent"
import ScriptComponent from "./components/11-useScript/ScriptComponent"
import DeepCompareEffectComponent from "./components/12-useDeepCompareEffect/DeepCompareEffectComponent"
import EventListenerComponent from "./components/13-useEventListener/EventListenerComponent"
import OnScreenComponentComponent from "./components/14-useOnScreen/OnScreenComponent"
import WindowSizeComponent from "./components/15-useWindowSize/WindowSizeComponent"
import MediaQueryComponent from "./components/16-useMediaQuery/MediaQueryComponent"
import GeolocationComponent from "./components/17-useGeolocation/GeolocationComponent"
import StateWithValidationComponent from "./components/18-useStateWithValidation/StateWithValidationComponent"
// import SizeComponent from "./components/19-useSize/SizeComponent"
import EffectOnceComponent from "./components/20-useEffectOnce/EffectOnceComponent"
import ClickOutsideComponent from "./components/21-useClickOutside/ClickOutsideComponent"
import DarkModeComponent from "./components/22-useDarkMode/DarkModeComponent"
// import CopyToClipboardComponent from "./components/23-useCopyToClipboard/CopyToClipboardComponent"
// import CookieComponent from "./components/24-useCookie/CookieComponent"
import TranslationComponent from "./components/25-useTranslation/TranslationComponent"
import OnlineStatusComponent from "./components/26-useOnlineStatus/OnlineStatusComponent"
import RenderCountComponent from "./components/27-useRenderCount/RenderCountComponent"
import DebugInformationComponent from "./components/28-useDebugInformation/DebugInformationComponent"
import HoverComponent from "./components/29-useHover/HoverComponent"
import LongPressComponent from "./components/30-useLongPress.js/LongPressComponent"


function App() {
  return (
<div id="box">
      <Header />
    <main id="main-content">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toggle" element={<Togglecomponent />} />
        <Route path="/timeout" element={<TimeoutComponent />} />
        <Route path="/debounce" element={<DebounceComponent />} />
        <Route path="/useUpdateEffect" element={<useUpdateEffect />} />
        <Route path="/UpdateEffectComponent" element={<UpdateEffectComponent />} />
        <Route path="/ArrayComponent" element={<ArrayComponent />} />
        <Route path="/PreviousComponent" element={<PreviousComponent />} />
        <Route path="/StateWithHistoryComponent" element={<StateWithHistoryComponent />} />
        <Route path="/StorageComponent" element={<StorageComponent />} />
        <Route path="/AsyncComponent" element={<AsyncComponent />} />
        <Route path="/FetchComponent" element={<FetchComponent />} />
        <Route path="/ScriptComponent" element={<ScriptComponent />} />
        <Route path="/DeepCompareEffectComponent" element={<DeepCompareEffectComponent />} />
        <Route path="/EventListenerComponent" element={<EventListenerComponent />} />
        <Route path="/OnScreenComponentComponent" element={<OnScreenComponentComponent />} />
        <Route path="/WindowSizeComponent" element={<WindowSizeComponent />} />
        <Route path="/MediaQueryComponent" element={<MediaQueryComponent />} />
        <Route path="/GeolocationComponent" element={<GeolocationComponent />} />
        <Route path="/StateWithValidationComponent" element={<StateWithValidationComponent />} />
        {/* <Route path="/SizeComponent" element={<SizeComponent />} /> */}
        <Route path="/EffectOnceComponent" element={<EffectOnceComponent />} />
        <Route path="/ClickOutsideComponent" element={<ClickOutsideComponent />} />
        <Route path="/DarkModeComponent" element={<DarkModeComponent />} />
        {/* <Route path="/CopyToClipboardComponent" element={<CopyToClipboardComponent />} /> */}
        {/* <Route path="/CookieComponent" element={<CookieComponent />} /> */}
        <Route path="/TranslationComponent" element={<TranslationComponent />} />
        <Route path="/RenderCountComponent" element={<RenderCountComponent />} />
        <Route path="/OnlineStatusComponent" element={<OnlineStatusComponent />} />
        <Route path="/DebugInformationComponent" element={<DebugInformationComponent />} />
        <Route path="/HoverComponent" element={<HoverComponent />} />
        <Route path="/LongPressComponent" element={<LongPressComponent />} />
       
      </Routes>
    </main>
</div>
 );



// return (
// <main id="main-content">
// <Routes>
// <ToggleComponent />  
// </main>
// )


}

export default App;
