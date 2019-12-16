import React, {Component} from "react";
import Card from './card';

const team=[
    {
        name: "Avani Chaskar",
        description: "A data science enthusiast and a leisurely competitive coder, who often motivates and mentors newbies.",
        links: {
            linkedIn: "https://in.linkedin.com/in/avani-chaskar",
            github: "https://github.com/alwaysavani",
            portfolio: "https://in.linkedin.com/in/avani-chaskar",
        }
    },
];

class Team extends Component {
    render() {
        return (
            <div className="margin">
                <div>
                    <Card  member={team[0]}/>
                </div>
               
            </div>
        );

    }
}

export default Team;
