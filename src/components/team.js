import React, {Component} from "react";
import Card from './card';
import './static/team.css'
import {team} from './team_data';


class Team extends Component {
    render() {
        return (
            <section className="cards">
                 {/* <div className="tim"> */}
                    <Card  member={team[0]}/>
                    <Card member={team[1]}/>
                    <Card member={team[2]}/>
                    {/* </div> */}
                    {/* <div className="tim"> */}
                    <Card member={team[3]}/>
                    <Card member={team[4]}/>
                    <Card member={team[5]}/>
                    {/* </div> */}
                    {/* <div className="tim"> */}
                    <Card member={team[6]}/>
                    <Card member={team[7]}/>
                    <Card member={team[8]}/>
                        
                    
            </section>
        );

    }
}

export default Team;
