import  employment from '../assets/employment.jpg';

export const PageDashboard = () => {
	return (
		<div className="page pageDashboard">
			<p>This is the Dashboard page.</p>

			<img className="employment" src={employment}/>
		</div>
	);
};