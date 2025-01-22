const WritingSection = () => {
    return ( 
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-white">Writings</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li className="hover:text-white"><a href="/b/oauth/">OAuth Explained</a></li>
                <li className="hover:text-white"><a href="/b/rest-api-design-principles/">Must known design principles for REST API</a></li>
                <li className="hover:text-white"><a href="/b/request-journey/">The Journey of a Request: From Click to Response</a></li>
                <li className="hover:text-white"><a href="/b/cookies-cook/">How Cookies cook?</a></li>
            </ul>
        </div>
     );
}
 
export default WritingSection;