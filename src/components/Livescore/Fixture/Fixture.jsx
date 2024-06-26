
import '../LiveScore.css'

const Fixture = ({
    matchData,
    homeTeam,
    awayTeam
}) => {
    

    const gameDate = fixtures => {
        const now = new Date();
        
        return fixtures.find(fixture => {
            const fixtureDate = new Date(fixture.start_at);
            return fixtureDate.getTime() === now.getTime();
        });
    };
    

    return(

        <div className="live-container">
            {
                matchData &&

                <div className="match-container">
                    
                    <div className="league">
                        <img
                         src={matchData.logo}
                          alt=""
                           className="league-logo"
                            />
                           
                        <h5 className="league-name">{matchData.league}</h5>
                    </div>


                    <div className="league">
                           
                        <h5 className="league-name">{matchData.roundInfo}</h5>
                    </div>

                    <div className="league">
                           
                        <h5 className="league-name">{matchData.start}</h5>
                    </div>
                    

                
                    <div className="teams-container">
                        <div className="team-box">
                            <img
                             src={homeTeam.logo}
                              alt=""
                               className="team-logo"
                                />
                               
                            <h5 className="team-name">{homeTeam.name}</h5>
                        </div>

                        <p className={matchData.status !== "notstarted"? "result" : null }>
                        {
                            matchData.status === "notstarted"
                            ?
                            "VS"
                            :
                            matchData.status === "postponed"
                            ?
                            "postp."
                            :
                            matchData.result
                        }

                        </p>

                        <div className="team-box">
                            <img
                             src={awayTeam.logo}
                              alt=""
                               className="team-logo"
                                />
                               
                            <h5 className="team-name">{awayTeam.name}</h5>
                        </div>
                    </div>
                </div>
            }


        </div>

        
    );

}


export default Fixture;