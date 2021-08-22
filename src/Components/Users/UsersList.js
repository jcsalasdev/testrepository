import React from "react";

import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
	return (
		<Card className={classes.users}>
			{props.users.map((user) => (
				<ul key={user.id}>
					<li>
						<section>
							<h3>{user.name}</h3>
							<p>#{user.id}</p>
						</section>
						<section>
							<h4>{user.email}</h4>
						</section>
						<section>
							<div>
								<h3>Balance</h3>
								<p>
									{Number(user.balance).toLocaleString("en-US", {
										style: "currency",
										currency: "USD",
									})}
								</p>
							</div>
						</section>
					</li>
				</ul>
			))}
		</Card>
	);
};

export default UsersList;
