import Tablesprite from '@/components/tableComp';
import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <div className="bg-amber-150 h-full p-5">
                    <h1 className="p-3 font-sans text-4xl dark:bg-primary">Primary</h1>
                    <h1 className="primary-foreground p-3 font-sans text-4xl">foreground</h1>
                    <h1 className="screen p-3 font-sans text-4xl">screen</h1>
                    <h1 className="foreground p-3 font-sans text-4xl">foreground</h1>
                    <h1 className="bg-midground p-3 font-sans text-4xl">midground</h1>
                    <h1 className="bg-background p-3 font-sans text-4xl">Background</h1>
                    <h1 className="stars p-3 font-sans text-4xl">Stars</h1>
                    <Tablesprite />
                </div>
            </div>
        </>
    );
}
