import {Link} from 'react-router-dom'

function Nav(){
    return(
        <nav className="navbar bg-warning">
            <Link to="/" className='navbar-brand mx-3'>CRUD Operations</Link>
            <div className='nav'>
                <Link to="/create-student" className='nav-link'>Create Student</Link>
                <Link to="/student-list" className='nav-link'>Student List</Link>
            </div>
        </nav>
    )
}

export default Nav;