import { SettingsInputAntennaTwoTone } from "@material-ui/icons";
import { useState } from "react";
function useToggle(initialVal = false) {
    //call useState, "reserve piece of state"
    const [state, setState] = useState(initialVal);
    const toggle = () => {
        setState(!state);
    }
    //return piece of state and function to toggle
    return [state, toggle];
}
export default useToggle;