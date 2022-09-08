import Link from 'next/link'

function Navbar() {
    return (
     
     <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <img className="navbar-brand" src="/img/logo-nobg.png"></img>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <Link href="/" className="nav-item">
                <a className="nav-link active" aria-current="page">Home</a>
                </Link>
                <Link href="/about-fostering" className="nav-item">
                <a className="nav-link active" aria-current="page">About Fostering</a>
                </Link>
                <Link href="/become-a-foster-parent" className="nav-item">
                <a className="nav-link active" aria-current="page">Become a Foster Parent</a>
                </Link>
              
            </ul>
            </div>
        </div>
    </nav>
    
    );
}

export default Navbar;