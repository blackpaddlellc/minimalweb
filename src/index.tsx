import React from 'react';
import Logo from './logo.svg';

import { createRoot } from 'react-dom/client';

// This is non-standard, but given this App is our root, it's convenient.
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);

// Begin our App-specific code. I've copied some of the layout of the
// create-react-app but using Tailwind CSS as an example of its use.
type Props = {};

function App({}: Props) {
    return (
        <main className="grid place-items-center h-screen bg-[#282c34] m-0 p-0">
            <div>
                <img
                    src={Logo}
                    className="m-0 p-0 animate-spin-slow w-full"
                    alt="logo"
                />
                <div className="m-0 p-0 text-center text-white text-2xl">
                    <p>
                        Edit <code>src/index.tsx</code> and save to reload.
                    </p>
                    <a
                        className="text-blue-700 underline text-2xl text-center"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </div>
            </div>
        </main>
    );
}

export default App;
