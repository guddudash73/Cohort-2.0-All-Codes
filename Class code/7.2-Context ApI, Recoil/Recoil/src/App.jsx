//tried this code to get rid of unnecessary re-Render for the buttons

import { useContext } from "react";
import { CountContext } from "./context";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count></Count>
      </RecoilRoot>
    </div>
  ); //RecoilRoot is just like the <nameofcontextAPI.Provider> we have to wrap the components that uses the state logic inside <RecoilRoot> it's mandatory.
}

function Count() {
  // console.log("hii");
  return (
    <div>
      {/* <RecoilRoot> */}
      <CountRender></CountRender>
      ----------
      <Buttons></Buttons>
      ----------
      <CheckEven></CheckEven>
      {/* </RecoilRoot> */}
    </div>
  ); //We can use RecoilRoot here and the code will run because the Count component doesn't uses any state logic but the CounerRender and the Buttons Component does.
}

//useRecoilValue
function CountRender() {
  const count = useRecoilValue(countAtom); //This just give us the value from the countAtom

  return <div>{count}</div>;
}

//useSetRecoilState
function Buttons() {
  const setCount = useSetRecoilState(countAtom); //This just give us the function like setCount we use before to update the value of state variable
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

//useRecoilState
/*function Buttons() {
  const [count, setCount] = useRecoilState(countAtom); //This give us both the value and function for how to update the value like useState used to give us
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}*/

//Normal solution
/*function CheckEven() {
  const count = useRecoilValue(countAtom);
  const isEven = useMemo(() => {
    return count % 2 == 0
  }, [count])
  return (
    isEven ? <div>Number is even</div> : <div></div>
  )
}*/

//selector
function CheckEven() {
  const isEven = useRecoilValue(evenSelector);
  return <div>{isEven ? "It's Even" : null}</div>;
}

export default App;
