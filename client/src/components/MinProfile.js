import React, { useState, useContext, useRef } from "react";
import Settings from "components/settings/Settings";
import { UserContext } from "shared/context/User";
import Avatar from "./Avatar";
import { useOnClickOutside } from "shared/util/common";

function MinProfile() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const userContext = useContext(UserContext);
    const { user } = userContext.state
    const ref = useRef();

    useOnClickOutside(ref, () => setIsProfileOpen(false));

    return (
        <div className="relative flex items-center " ref={ref}>
            <div className="relative">
                <Avatar onClick={() => setIsProfileOpen(!isProfileOpen)}
                    avatar={user.avatar} name={user.name}
                />
                {isProfileOpen && <Settings isHome={Boolean(user)} />}
            </div>
        </div>
    )
}

export default MinProfile
