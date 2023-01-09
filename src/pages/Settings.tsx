import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentTheme, getPortfolioBackground, getTextTheme, setCurrentTheme, Theme, themes } from "../store/Theme.store";
import { CloseIcon } from "./Navbar/Icons";

interface SettingsModalProps {
    close: () => void
}

const SettingsModal: React.FC<SettingsModalProps> = ({ close }) => {
    const dispatch = useDispatch();
    const currentTheme: Theme = useSelector(getCurrentTheme);
    const [ selectedTheme, selectTheme ] = useState<Theme>(currentTheme);

    const save = () => {
        dispatch(setCurrentTheme(selectedTheme));
        close();
    };

    return (
        <div className={`fill column-centered relative ${currentTheme.baseColor} ${currentTheme.textClass}`}>
            <p className={`text-center text-header my-3 border-bottom border-${currentTheme.textClass.split('text-')[1]} p-3`}>settings</p>
            <div className="pointer absolute-top-left" onClick={close}>
                <CloseIcon color={`bg-${currentTheme.textClass.split('text-')[1]}`} />
            </div>
            <div className="row mx-bw-5">
                <p className="text-title my-1">Theme:</p>
                <select value={selectedTheme.name} onChange={e => selectTheme(themes.find(t => t.name === e.target.value) || themes[0])}>
                    { themes.map(theme => (
                        <option key={theme.name} value={theme.name}>{theme.name}</option>
                    ))}
                </select>
            </div>
            <p className="pointer text-title" onClick={save}>Save</p>
        </div>
    );
}

export default SettingsModal;
