import { Home } from "lucide-react";
import Link from "next/link";

const BlogPage = () => {
    return ( 
        <div className="w-[92vw] mx-auto max-w-2xl my-[4vh] lg:my-[8vh]">
            <div className="flex text-xl items-center gap-2 pl-2 mb-4">
                <Link href="/"><Home size={20}/></Link>/ <p className="text-base">OAuth Explained</p>
            </div>
            <div className="mt-8">
                <p>
                    OAuth is a protocol that allows secure, delegated access to resources without sharing user credentials. You’ve probably used it when signing into apps with Google, Facebook, or GitHub accounts. It’s designed to make interactions safer and more seamless, both for users and developers.
                </p>
                <h2 className="mt-8 text-zinc-200 mb-2">How OAuth Works</h2>
                <p>OAuth involves:</p>
                <ul className="list-decimal space-y-1 mt-3 pl-5">
                    <li>
                        <span className="text-blue-400">User (Resource Owner) </span>: Grants access to their data.
                    </li>
                    <li>
                        <span className="text-blue-400">App (Client) </span>: Requests access on behalf of the user.
                    </li>
                    <li>
                        <span className="text-blue-400">Resource Server </span>: Hosts the data being accessed.
                    </li>
                    <li>
                        <span className="text-blue-400">Authorization Server </span>: Authenticates the user and issues access tokens.
                    </li>
                </ul>

                <h2 className="mt-8 text-zinc-200 mb-2">Here’s the flow:</h2>
                <ul className="list-decimal space-y-1 pl-5">
                    <li>
                        The app requests authorization, usually redirecting the user to the service’s consent page.
                    </li>
                    <li>
                        The user approves access, granting the app specific permissions (defined as scopes).
                    </li>
                    <li>
                        The app receives an authorization code, which it exchanges for an access token from the authorization server.
                    </li>
                    <li>
                        The app uses the access token to access the user’s data from the resource server.
                    </li>
                </ul>

                <h2 className="mt-8 text-zinc-200 mb-2">Key Terms in OAuth</h2>
                <ul className="list-disc space-y-1 pl-5">
                    <li>
                        <span className="text-blue-400">Access Token </span>: A temporary token allowing access to specified resources. It’s short-lived and must be kept secure.
                    </li>
                    <li>
                        <span className="text-blue-400">Refresh Token </span>: A token used to obtain new access tokens without requiring user interaction again.
                    </li>
                    <li>
                        <span className="text-blue-400">Scopes </span>: Define the specific actions or data the app can access—for instance, &quot;read email&quot; or &quot;post updates.&quot;
                    </li>
                </ul>

                <h2 className="mt-8 text-zinc-200 mb-2"> Why Use OAuth?</h2>
                <p>OAuth provides several advantages:</p>
                <ul className="list-disc space-y-1 mt-3 pl-5">
                    <li>
                        <span className="text-blue-400">Enhanced Security </span>: Passwords stay private; tokens are used instead.
                    </li>
                    <li>
                        <span className="text-blue-400"> User-Friendly </span>: Users can log in to multiple services without creating new accounts.
                    </li>
                    <li>
                        <span className="text-blue-400">Granular Permissions </span>: Apps only get access to what’s necessary.
                    </li>
                    <li>
                        <span className="text-blue-400">Revocability </span>: Users can revoke access anytime via the service’s settings.
                    </li>
                </ul>
                <h2 className="mt-8 text-zinc-200 mb-2">Practical Applications of OAuth</h2>
                <ul className="list-disc space-y-1 pl-5">
                    <li>
                        <span className="text-blue-400">Social Login </span>: Signing into websites using Google, Facebook, or GitHub accounts.
                    </li>
                    <li>
                        <span className="text-blue-400">API Integration </span>: Allowing third-party apps to access services like Google Drive or Twitter without exposing sensitive credentials.
                    </li>
                    <li>
                        <span className="text-blue-400">Single Sign-On (SSO)</span>: Enterprises use OAuth to let employees log in once and access multiple tools seamlessly.
                    </li>
                </ul>
                <h2 className="mt-8 text-zinc-200 mb-2">Common Pitfalls and Best Practices</h2>
                <p>While OAuth is powerful, improper implementation can lead to vulnerabilities. Here’s how to avoid them:</p>
                <ul className="list-disc space-y-1 mt-3 pl-5">
                    <li>
                        Always use HTTPS to protect token exchanges.
                    </li>
                    <li>
                        Implement token expiration and refresh mechanisms to minimize risk if tokens are stolen.
                    </li>
                    <li>
                        Validate access tokens and check scopes before granting access to resources.
                    </li>
                    <li>
                        Keep sensitive information like client secrets and refresh tokens secure.
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default BlogPage;