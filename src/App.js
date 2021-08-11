import logo from './logo.svg';
import './App.css';
import KeysComponent from './components/keys'
import UnidirectionalDataFlow from './components/unidirectional-data-flow'
import PropsVsState from './components/props-vs-state'
import LiftStateUp from './components/lift-state-up'
import ControlledVsUncontrolled from './components/controlled-vs-uncontrolled'
import RefComponent from './components/ref'
import KeysComponentTwo from './components/keys2';
import {addNewBehaviour, AppHigherOrderComponet} from './components/hoc-function';
import {AppRender} from './components/render';
import {AppCustomHook} from './components/custom-hook';
import {AppUseEffect} from './components/useEffect';
import {AppUseSpecificValue} from './components/useEffectSpecificValue';
import {AppMemo} from './components/memo';
import {AppUseCallback} from './components/useCallback';
import {AppUseMemo} from './components/useMemo';
import ContextComponent from './components/context';

function App() {
  // const HigherOrderComponet = addNewBehaviour(AppHigherOrderComponet);
  return (
    <div className="App">
      {/* <KeysComponent/> */}
      {/* <UnidirectionalDataFlow/> */}
      {/* <PropsVsState /> */}
      {/* <LiftStateUp /> */}
      {/* <ControlledVsUncontrolled/> */}
      {/* <RefComponent/> */}
      {/* <KeysComponentTwo/> */}
      {/* <HigherOrderComponet/> */}
      {/* <AppRender/> */}
      {/* <AppCustomHook /> */}
      {/* <AppMemo/> */}
      {/* <AppUseCallback/> */}
      {/* <AppUseMemo/> */}
      <ContextComponent/>
    </div>
  );
}

export default App;
