import Link from "next/link";
import StudentInfo from "./student-info";


export default function Page() {
    return(
        <main>
            <h1>Name and Repository</h1>
            <p>
            <StudentInfo />
            </p>
        </main>

    );
}