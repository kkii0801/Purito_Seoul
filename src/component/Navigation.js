import data from '../data'

function Navigation(){
	let {navigation}=data;

	return(
		<div className="hd-menu">
			<nav className="gnb-wrap">
				<ul className="gnb">
					{/*
					<li className="no-depth">
						<a href="">Intro</a>
					</li>
					<li className="no-depth">
						<a href="">About</a>
					</li>
					<li>
						<a href="">Skill</a>
						<div className="depth">
							<ul>
								<li><a href="">Web</a></li>
								<li><a href="">Front End</a></li>
								<li><a href="">Back End</a></li>
							</ul>
						</div>
					</li>
					<li>
						<a href="">Portfolio</a>
						<div className="depth">
							<ul>
								<li><a href="">Oksuro</a></li>
								<li><a href="">Purito Seoul</a></li>
								<li><a href="">Lifeplus</a></li>
								<li><a href="">Men Noblesse</a></li>
								<li><a href="">b.state design</a></li>
							</ul>
						</div>
					</li>
					*/}
					{
						navigation.map((a, x) => {
							return(
								a.depth2 ?
								<li key={x+1}><a href="">{a.depth1}</a>
								<div className="depth">
									<ul>
										{
									a.depth2.map((b, y) => {
										return(
											<li key={y+1}>
												<a href="">{b}</a>
											</li>
										)
									})
								}
									</ul>
								</div>								
								</li>
								:
								<li key={x+1}><a href="">{a.depth1}</a></li>
						)})
					}
				</ul>
			</nav>
			<span className="hd-mark"></span>
		</div>
	);
}

export default Navigation;