import { Home } from "lucide-react";

const BlogPage = () => {
    return ( 
        <div className="w-[92vw] mx-auto max-w-2xl my-[8vh]">
            <div className="flex text-xl items-center gap-2 pl-2">
                <a href="/"><Home size={20}/></a>/ <p className="text-base">The Journey of a Request: From Click to Response</p>
            </div>
            <div className="mt-8">
                <p>
                    Every click on a website triggers a chain of events that happen in milliseconds. Here’s a simplified breakdown of how a request travels:
                </p>
                <h2 className="mt-8 text-zinc-200 mb-2">
                    1. The Click
                </h2>
                <p>
                    When you click, your browser creates an HTTP request with details like the URL, method (e.g., GET, POST), and any extra data.
                </p>
                <h2 className="mt-8 text-zinc-200 mb-2">
                    2. DNS Lookup
                </h2>
                <p>
                    The browser finds the server's IP address by checking its cache or querying a DNS server.
                </p>
                <h2 className="mt-8 text-zinc-200 mb-2">
                    3. Connection Setup
                </h2>
                <p>
                    The browser and server set up a secure connection using TCP and TLS (for HTTPS).
                </p>
                <h2 className="mt-8 text-zinc-200 mb-2">
                    4. Server Handling
                </h2>
                <p>
                    The request reaches the server, possibly passing through load balancers or firewalls. The server processes it, runs business logic, and interacts with the database if needed.
                </p>
                <h2 className="mt-8 text-zinc-200 mb-2">
                    5. Response Generation
                </h2>
                <p>
                    The server creates a response with a status code (like 200 OK) and the data or HTML needed.
                </p>
                <h2 className="mt-8 text-zinc-200 mb-2">
                    6. Back to Browser
                </h2>
                <p>
                    The response travels back to the browser, which renders the page and runs any JavaScript for dynamic features.
                </p>
                <p className="mt-8">
                This quick journey happens for every action you take online, ensuring seamless interactions. Behind the scenes, it’s a blend of speed, efficiency, and teamwork between technologies.
                </p>

            </div>
        </div>
     );
}
 
export default BlogPage;