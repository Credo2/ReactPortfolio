import Tablesprite from '@/port/tableComp';
import Window from '@/port/window';
// import { type SharedData } from '@/types';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    // const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            {/*     //// Color Pallete
                --color-baks: hsl(0, 47%, 54%);
                --color-background: var(--background);
                --color-bgprime: var(--bg-primary);
                --color-foreground: var(--foreground-primary);
                --color-midground: var(--midground-primary);
                --color-background: var(--background-primary);
                --color-lights: var(--lights);
             */}

            <div className="bg-baks flex min-h-screen flex-col">
                <div className="h-window bg-background p-5">
                    {/* 
                            <h1 className="transform-(translate(50px, -40%)) absolute bg-bgprime p-3 font-sans text-4xl">Primary</h1>
                            <h1 className="bg-foreground p-3 font-sans text-4xl">foreground</h1>
                            <h1 className="bg-white p-3 font-serif text-4xl">screen</h1>
                            <h1 className="bg-foreground p-3 font-sans text-4xl">foreground</h1>
                            <h1 className="bg-midground p-3 font-sans text-4xl">midground</h1>
                            <h1 className="bg-background p-3 font-sans text-4xl">Background</h1>
                            <h1 className="bg-lights p-3 font-sans text-4xl">Stars</h1> 
                    */}
                    <Window />
                </div>
                <Tablesprite />
            </div>
        </>
    );
}
