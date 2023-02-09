import { VSCodeButton } from '@vscode/webview-ui-toolkit/react';
import { VSCodeAPI } from '../vsCodeApi';
import { config } from "../../types"

interface ParseButtonProps {
  setConfigInit: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ParseButton({ setConfigInit }: ParseButtonProps) {

  const testHandler = () => {
    VSCodeAPI.postMessage({ action: "parse" });
  }

  const resetHandler = () => {
    setConfigInit(false);
    VSCodeAPI.postMessage({action: "reset"});
  }

  const runTestHandler = () => {
    VSCodeAPI.postMessage({ action: "test-routes" });
  }

  return (
    <>
      <VSCodeButton appearance="primary" onClick={testHandler}>Parse</VSCodeButton>
      <VSCodeButton appearance="primary" onClick={resetHandler}>Reset</VSCodeButton>
      <VSCodeButton appearance="primary" onClick={runTestHandler}>Test Routes</VSCodeButton>
    </>
  )
}