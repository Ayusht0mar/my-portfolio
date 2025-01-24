import { Home } from "lucide-react";
import Link from "next/link";

const BlogPage = () => {
    return ( 
        <div className="w-[92vw] mx-auto max-w-2xl my-[8vh]">
            <div className="flex text-xl items-center gap-2 pl-2">
                <Link href="/"><Home size={20}/></Link>/ <p className="text-base">Must known design principles for REST API</p>
            </div>
            <div>
                <h2 className="mt-8 text-zinc-200 mb-2">
                    Use HTTP methods correctly             
                </h2>
                <ul className="list-disc space-y-1">
                    <li>
                        <span className="text-blue-400">GET</span> : Retrieve data from the server.
                    </li>
                    <li>
                        <span className="text-blue-400">POST</span> : Send data to the server.
                    </li>
                    <li>
                        <span className="text-blue-400">PUT</span> : Update data to the server.
                    </li>
                    <li>
                        <span className="text-blue-400">PATCH</span> : Partially update data to the server.
                    </li>
                    <li>
                        <span className="text-blue-400">DELETE</span> : Delete data from the server.
                    </li>
                </ul>

                <h2 className="mt-8 text-zinc-200 mb-2">
                    Use Nouns for resources
                </h2>
                <p>
                    Use plural nouns for resources and avoid verbs in the URL/URI.
                    <br />
                    <span className="text-green-400">Good practice </span>: /customers
                    <br />
                    <span className="text-red-400">Bad practice </span>: /getCustomers
                </p>

                <h2 className="mt-8 text-zinc-200 mb-2">
                    Use appropriate status codes
                </h2>
                <ul className="list-disc space-y-1">
                    <li>
                        <span className="text-blue-400"> 200 OK </span>: Success.
                    </li>
                    <li>
                        <span className="text-blue-400"> 201 Created </span>: Resources created.
                    </li>
                    <li>
                        <span className="text-blue-400">204 No Content </span>: Success but no content to return.
                    </li>
                    <li>
                        <span className="text-blue-400">400 Bad Request </span> : Invalid client input.
                    </li>
                    <li>
                        <span className="text-blue-400">401 Unauthorized </span>: Authentication required.
                    </li>
                    <li>
                        <span className="text-blue-400"> 403 Forbidden </span>: Client is authenticated but doesn&apos;t have permission. 
                    </li>
                    <li>
                        <span className="text-blue-400">404 Not Found </span>: Resource not found.
                    </li>
                    <li>
                        <span className="text-blue-400">500 Internal Server Error </span>: Server-side error.
                    </li>
                    <li>
                        <span className="text-blue-400">503 Service Unavailable </span>: Server is down or unavailable. 
                    </li>
                </ul>

                <h2 className="mt-8 text-zinc-200 mb-2">
                    Versioning API 
                </h2>
                <ul className="list-disc space-y-1">
                    <li>
                        <span className="text-blue-400">URI Versioning </span>: /api/v1/customers 
                        <br />
                        Use them directly in the URL path.
                    </li>
                    <li>
                        <span className="text-blue-400">Custom Header Versioning </span>: Accept-Version : v1
                        <br />
                        Use custom headers to specify the version.
                    </li>
                </ul>

                <h2 className="mt-8 text-zinc-200 mb-2">
                    Use query parameters
                </h2>
                <p>
                    Use query parameters for filtering, sorting, searching and pagination.
                </p>

                <h2 className="mt-8 text-zinc-200 mb-2">
                    Security 
                </h2>
                <p>
                    Use HTTPS to secure the data.                    
                </p>
            </div>
        </div>
     );
}
 
export default BlogPage;