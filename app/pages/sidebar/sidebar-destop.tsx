"use client"

import { useState } from "react";
import LinksSidebar from "./link-sidebar";
import { ChevronLeft } from "lucide-react";

const Sidebar = () => {
    const [width, setWidth] = useState("70px");
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleWidth = () => {
        if (width === "70px") {
            setWidth("300px");
            setIsCollapsed(false);
        } else {
            setWidth("70px");
            setIsCollapsed(true);
        }
    };

    return (
        <div>
            <nav className="bg-white top-0 h-full overflow-y" style={{ width }}>
                <div>
                    <div>
                        <div>
                            <LinksSidebar />
                        </div>
                        <div className="flex ml-5 pt-4">
                            <button 
                                className="flex items-center text-md font-semibold transition-transform duration-300" 
                                onClick={toggleWidth} 
                                type="button"
                            >
                                <ChevronLeft 
                                    className={`mr-5 w-8 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} 
                                />
                                <span className={`hidden ${isCollapsed ? ' ' : 'lg:flex'}`}>Recolher</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Sidebar;
