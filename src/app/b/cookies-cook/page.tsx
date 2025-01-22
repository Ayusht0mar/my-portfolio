import { Home } from "lucide-react";

const BlogPage = () => {
    return ( 
        <div className="w-[92vw] mx-auto max-w-2xl  my-[4vh] lg:my-[8vh]">
            <div className="flex text-xl items-center gap-2 pl-2">
                <a href="/"><Home size={20}/></a>/ <p className="text-base">How Cookies cook?</p>
            </div>
            <div className="mt-8">
                <p>
                    Cookies are small text files stored on your device by websites to remember your preferences, track activity, or manage sessions. They make browsing faster and more personalized.
                </p>

                <h2 className="mt-8 text-zinc-200 mb-2">
                    How They Work
                </h2>
                <p>
                    When you visit a website, it sends a cookie to your browser, which stores it on your device. The next time you visit, the cookie helps the site recognize you, like remembering your login or preferences.
                </p>

                <h2 className="mt-8 text-zinc-200 mb-2">
                    Types of Cookies
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                    <li>
                        <span className="text-blue-400">Session Cookies </span>: Temporary, deleted when you close your browser.
                    </li>
                    <li>
                        <span className="text-blue-400">Persistent Cookies </span>: Stay on your device until they expire or you delete them.
                    </li>
                    <li>
                        <span className="text-blue-400">First-Party Cookies </span>: Created by the site you visit.
                    </li>
                    <li>
                        <span className="text-blue-400">Third-Party Cookies </span>: Created by other domains, often for ads.
                    </li>
                    <li>
                        <span className="text-blue-400">Secure Cookies </span> : Work only over HTTPS for added security.
                    </li>
                    <li>
                        <span className="text-blue-400">HTTP-Only Cookies </span>: Can’t be accessed via JavaScript, improving security.
                    </li>
                </ul>

                <h2 className="mt-8 text-zinc-200 mb-2">Uses</h2>
                <p className="mb-2">Cookies are used for:</p>
                <ul className="list-disc space-y-1 pl-5">
                    <li>
                        <span className="text-blue-400">Login Sessions </span>: Keeping you logged in.
                    </li>
                    <li>
                        <span className="text-blue-400">Personalization </span>: Remembering preferences like language or theme.
                    </li>
                    <li>
                        <span className="text-blue-400">Analytics </span>: Helping site owners improve by tracking visits.
                    </li>
                    <li>
                        <span className="text-blue-400">Shopping Carts </span>: Saving your items for later.
                    </li>
                </ul>

                <h2 className="mt-8 text-zinc-200 mb-2">Pros and Cons</h2>
                <div className="space-y-4">
                    <div>
                        <p className="text-green-400">Pros:</p>
                        <ul className="list-disc space-y-1 pl-5">
                            <li>Makes browsing faster and easier.</li>
                            <li>Saves settings for a smoother experience.</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-red-400">Cons:</p>
                        <ul className="list-disc space-y-1 pl-5">
                            <li>Can track you across sites, raising privacy concerns.</li>
                            <li>If mishandled, can expose sensitive data.</li>
                        </ul>
                    </div>
                </div>


                <h2 className="mt-8 text-zinc-200 mb-2">Taking Control</h2>
                <p>You can manage cookies in your browser settings:</p>
                <ul className="list-disc space-y-1 mt-3 pl-5">
                    <li>Block third-party cookies to reduce tracking.</li>
                    <li>Clear cookies to reset saved data.</li>
                    <li>Use incognito mode to browse without storing cookies.</li>
                </ul>
            </div>
        </div>
     );
}
 
export default BlogPage;