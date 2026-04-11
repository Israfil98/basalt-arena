import { Outlet } from 'react-router';

function AppLayout() {
	return (
		<div>
			<header>Navbar here</header>
			<main>
				<Outlet />
			</main>
			<footer>Footer here</footer>
		</div>
	);
}

export default AppLayout;
