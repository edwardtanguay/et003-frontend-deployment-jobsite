import jobSources from '../data/jobSources.json';

export const PageJobs = () => {
	return (
		<div className="page pageJobs">
			<h2>Job Sources</h2>
			<div className="jobSources">
				{jobSources.map((jobSource) => {
					return (
						<div className="jobSource" key={jobSource.id}>
							<img
								src={`images/jobSources/${jobSource.idCode}.png`}
							/>
							<div className="info">
								<div className="title">{jobSource.title}</div>
								<div className="url"><a target="_blank" href={jobSource.url}>{jobSource.url}</a></div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
