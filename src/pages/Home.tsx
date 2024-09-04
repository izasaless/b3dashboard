import '../index.css';
import Sidebar from '../components/Navbar';
import Topbar from '../components/Topbar';
import Container from '../components/Container';

export const Home = () => {
    return (
        <>
            <Topbar />
            <Sidebar />
            <Container />
        </>
        
    );
};
