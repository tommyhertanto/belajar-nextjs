import Link from "next/link"

export default function Header() {
    return <div className="text-sm text-blue-500">
    <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/users">Users</Link></li>
        <li><Link href="/profile">Profile</Link></li>
        <li><Link href="/notes">Notes</Link></li>
    </ul>
    </div>
    }

    