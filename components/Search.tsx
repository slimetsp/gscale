import React from "react";

interface SearchProps {
    content: string;
    setContent: any;
    onConfirm: any;
}

export const Search: React.FC<SearchProps> = ({ content, setContent, onConfirm }) => {
    return (
        <form
            action="#"
            onSubmit={(e) => {
                onConfirm();
                e.preventDefault();
            }}
            className="flex items-center mb-6 overflow-hidden rounded-md shadow-md focus-within:ring ring-gscale-blue-base md:mx-auto bg-gscale-dark-background-primary text-gscale-dark-text-secondary"
            style={{ alignItems: "stretch" }}
        >
            <input
                type="text"
                placeholder={"Search..."}
                autoCorrect="false"
                spellCheck="false"
                autoCapitalize="false"
                className="flex-1 pl-4 py-2.5 focus:outline-none bg-gscale-dark-background-primary placeholder-gscale-dark-text-ternary"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                // onFocus={(e) => {
                //     const searchBar = e.target as HTMLInputElement;
                //     searchBar.select();
                // }}
            />
            <button
                type="submit"
                aria-label="Search"
                className="flex items-center px-4 hover:bg-opacity-30 text-gscale-dark-text-ternary focus:outline-none focus:bg-gscale-dark-background-secondary focus:text-gscale-dark-text-secondary hover:bg-gscale-dark-background-secondary hover:text-gscale-dark-text-secondary"
            >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
                    ></path>
                </svg>
            </button>
        </form>
    );
};