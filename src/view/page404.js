import { Link } from "@reach/router";

export default function PageNotFound() {
    <>
    <h1>Page not found </h1>
    <Link to ="/">
        <p>Go back to Home</p>
    </Link>
    </>
}