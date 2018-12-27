import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/logo.svg';
import infoGraphic from '../../img/info_graphic.svg';

export default function LeftBlock() {
  return (
    <div className="col-lg-6 content-left">
				<div className="content-left-wrapper">
					<Link to="/" id="logo">
            <img src={logo} alt="" width="49" height="35" />
            <h1 className="title title-light">More Just Store</h1>
          </Link>
					<div id="social">
						<ul>
							<li><a href="https://github.com/morejust/store" target="blank"><i className="fab fa-github"></i></a></li>
						</ul>
					</div>
					<div>
						<figure><img src={infoGraphic} alt="" className="img-fluid" /></figure>
						<h2>Store Files Simple.<br/>Free. Forever</h2>
						<p>We use public GitHub repositories to store your files for free. You can create your own free unlimited cloud storage even on private repos. </p>
						<Link to="https://github.com/morejust/store/blob/master/README.md" className="btn_1 rounded">Start Now!</Link>
						<Link to="https://github.com/morejust/store/blob/master/README.md" className="btn_1 rounded mobile_btn">Start Now!</Link>
					</div>
					<div className="copy">© 2018 More Just Store</div>
				</div>
			</div>
  );
}
