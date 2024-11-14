import "./profile.scss"

export default function Profile() {
    return (
        <>
            <section>
                <div id="status">
                    <a>Level: 20</a>
                    <a>Job: XXXX</a>
                    <a>Energy: 100/100</a>
                    <a>Rank: E</a>
                    <a>Class: Sourcerer</a>
                    <a>Gold: 3700</a>
                </div>

                <div id="profile">
                    <h1>Luan Henrique</h1>
                    <img src="./images/Player1.jpeg" alt="Player Image" />
                </div>

                <div id="perks">
                    <a>Partially Charismatic</a>
                    <a>Political Eye</a>
                    <a>Lawful Evil</a>
                </div>
            </section>

            <div id="skills">
                <h2>Skills</h2>
                <ul>
                    <li>Physique: 50 Lvl</li>
                    <li>Programing: 50 Lvl</li>
                    <li>Box: 50 Lvl</li>
                    <li>Cooking: 50 Lvl</li>
                    <li>Swimming: 50 Lvl</li>
                    <li>Japanese: 50 Lvl</li>
                </ul>
            </div>
        </>
    )
}