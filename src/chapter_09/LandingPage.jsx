import React, { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
    const [isLoggedIn, setIsLoggedIN] = useState(false);
    
    const onClickLogin = () => {
        setIsLoggedIN(true);
    };

    const onClickLogout= () => {
        setIsLoggedIN(false);
    };

    return (
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
                />
                <div style={{ padding: 16}}>HI TEST</div>
        </div>
    );
}

export default LandingPage;