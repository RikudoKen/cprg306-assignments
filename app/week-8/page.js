"use client"

import { useUserAuth } from "./_utils/auth-context"
import Link from 'next/link'

export default function LoginPage() {
    
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main>
            <header>
                <h1 className="text-3xl">Login Page</h1>
            </header>
            <section>
                { user ? (
                    <div>
                        <p> Welcome {user.displayName} </p>
                        <p> Your User ID is {user.uid} </p>
                        <img className="w-8 h-8" img src={user.photoURL} />
                        <Link href="/week-8/shopping-list" className="text-lg m-2 hover:underline"> Shopping List</Link>
                        <button onClick={handleSignOut} className="text-lg m-2 hover:underline">Sign Out</button>
                    </div>
                ) : (
                    <div>
                        <button onClick={handleSignIn} className="text-lg m-2 hover:underline">Sign In with GitHub</button>
                    </div>
                )}
            </section>
        </main>
    )
}
